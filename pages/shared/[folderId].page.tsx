import { ParsedUrlQuery } from 'querystring';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { TSampleFolderLink } from '@api/shared-page/getSampleUserFolders';
import { getSharedFolderLinks } from '@api/shared-page/getSharedFolderLinks';
import { getSharedUserFolder, SharedUserFolder } from '@api/shared-page/getSharedUserFolder';
import { getSharedUserProfileData, SharedUserProfile } from '@api/shared-page/getSharedUserProfileData';
import { getStringTypeError } from '@api/util/getStringTypeError';

import Article from './comp/article/Article';
import Banner from './comp/banner/Banner';
import Footer from './comp/footer/Footer';
import Header from './comp/header/Header';

interface SharedPageQuery extends ParsedUrlQuery {
  folderId?: string;
}

interface ProcessedSharedFolderLink extends TSampleFolderLink {
  updated_at: null | string;
  folder_id: number;
}

export interface ProcessedFolderOwnerProfile extends SharedUserProfile {
  folderName: string;
}

interface SharedPageProps {
  folderId?: string;
  sharedFolder: SharedUserFolder;
  folderOwnerProfile: ProcessedFolderOwnerProfile;
  sharedFolderLinks: ProcessedSharedFolderLink[];
}

const SharedPage = ({
  folderOwnerProfile,
  sharedFolderLinks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // TODO: 필드 다른 게 몇 개 있어서 다음 번 미션 때 사용여부 확인하고 지우기
  // const { links, userInfo } = useGetUserFolders();

  return (
    <>
      <Head>
        <title>Linkbrary shared page</title>
      </Head>
      <Header />
      <Banner folderOwnerInfo={folderOwnerProfile} />
      <Article links={sharedFolderLinks} />
      <Footer />
    </>
  );
};

export default SharedPage;

export const getServerSideProps: GetServerSideProps<SharedPageProps> = async (context) => {
  const { folderId } = context.query as SharedPageQuery;

  if (folderId === undefined) {
    console.error('folderId is undefined');

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  try {
    const sharedFolderResponse = (await getSharedUserFolder(folderId)).data[0];
    const { user_id } = sharedFolderResponse;

    const sharedUserProfileResponse = await getSharedUserProfileData(user_id);

    const sharedFolderLinks = (await getSharedFolderLinks({ userId: user_id, folderId })).data;

    const processedSharedFolderLinks: ProcessedSharedFolderLink[] = sharedFolderLinks.map((link) => {
      const { created_at, image_source, ...rest } = link;

      return {
        ...rest,
        createdAt: created_at,
        imageSource: image_source,
      };
    });

    return {
      props: {
        folderId,
        sharedFolder: sharedFolderResponse,
        folderOwnerProfile: { ...sharedUserProfileResponse.data[0], folderName: sharedFolderResponse.name },
        sharedFolderLinks: processedSharedFolderLinks,
      },
    };
  } catch (error) {
    console.error(getStringTypeError(error));

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
