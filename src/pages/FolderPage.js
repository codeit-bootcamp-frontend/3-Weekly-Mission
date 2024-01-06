import Profile from "../component/Header/Profile"
import CardSection from "../component/CardSection/CardSection"
import Footer from "../component/Footer/Footer"
import LinkAdd from "../component/LinkAdd"
export default function FolderPage() {
  return (
  <>
  <Profile/>
  <LinkAdd/>
  <CardSection/>
  <Footer/>
  </>
  )
}
///api/users/1
///api/users/1/folders
///api/users/1/links?folderId={해당 폴더 ID}
//https://bootcamp-api.codeit.kr