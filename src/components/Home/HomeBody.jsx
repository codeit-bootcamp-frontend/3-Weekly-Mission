import { Link } from 'react-router-dom';

export default function HomeBody() {
  return (
    <>
      <div>
        <Link to="/shared">Shared page</Link>
      </div>
      <div>
        <Link to="/folder">Folder page</Link>
      </div>
    </>
  );
}
