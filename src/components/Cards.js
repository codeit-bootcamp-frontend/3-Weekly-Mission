import "./Cards.css";
import Card from "./Card";
import { getFolder } from "../api";
import useGetFolderAsync from "../hooks/useGetFolderAsync";

export default function Cards() {
  const data = useGetFolderAsync(getFolder);
  return (
    <div className="card-container">
      {data?.links?.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}
