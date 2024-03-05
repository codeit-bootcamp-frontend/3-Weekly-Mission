import Spinner from "@/components/Spinner/Spinner";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export default function FolderPage() {
  const router = useRouter();
  const folderId = useParams()?.folderId;
  if (folderId) {
    router.push("/folder", `/folder/${folderId}`);
  }

  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}
const SpinnerContainer = styled.div`
  text-align: center;
  margin: 100px 0 200px;
`;
