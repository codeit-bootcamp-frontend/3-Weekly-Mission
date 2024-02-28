import Header from "components/header";
import Main from "components/main";

const SharedPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
} as React.CSSProperties;

export default function SharedPage() {
  return(
    <div className="Shared page" style={SharedPageStyle}>
      <Header searchIsLoading={false}/>
      <Main/>
      
    </div>
  )
}