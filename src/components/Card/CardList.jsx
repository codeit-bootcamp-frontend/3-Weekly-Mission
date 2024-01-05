import Card from './Card';
import './CardList.css';

export default function CardList({ links }) {
  return (
    <div className="card-box">
      {links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}
