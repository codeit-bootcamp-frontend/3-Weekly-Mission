import Header from "components/header/";
import Main from "components/main/";

const FolderPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
}as React.CSSProperties;

export default function FolderPage() {
  return (
    <div className="FolderPage" style={FolderPageStyle}>
      <Header searchIsLoading={true} />
      <Main />
    </div>
  );
}
