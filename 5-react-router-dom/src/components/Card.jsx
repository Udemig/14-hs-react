import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="position-relative">
        <img src={book.image} height={250} className="card-img-top object-fit-cover" />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate fw-bold">{book.title}</h5>
        <p className="card-text- text-muted mb-3">{book.author}</p>
        <div className="mt-auto">
          <Link to={`/detay/${book.id}`} className="btn btn-primary w-100">
            Detay'a Git
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
