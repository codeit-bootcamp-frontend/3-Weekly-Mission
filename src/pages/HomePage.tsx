import Header from "components/header/index" ;
import { Link } from "react-router-dom";

const HomePageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
} as React.CSSProperties;

export default function HomePage() {
  return(
    <div className="HomePage" style={HomePageStyle}>
      <Header searchIsLoading={true}/>
      <Link to="shared">MV SHARED</Link><br/>
      <Link to="folder">MV FOLDER</Link>
    </div>
  )
}