import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

export default function FolderPage() {
  const router = useRouter();
  const folderId = useParams()?.folderId;
  if (folderId) {
    router.push("/folder", `/folder/${folderId}`);
  }

  return null;
}
