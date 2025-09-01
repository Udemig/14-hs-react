import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [book, setBook] = useState(null);

  // useParams: react-router-dom hook'u url'deki parametrele erişmeye yarar
  const { bookId } = useParams();

  // component'In ekrana basılma anında:
  useEffect(() => {
    axios
      .get(`http://localhost:4040/books/${bookId}`)
      .then((res) => setBook(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  console.log(book);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <Link to="/ürünler">Geri</Link>
      <h2>{bookId} id'li kitap için</h2>
      <h1>Detay Sayfası</h1>

      <div>
        <img src={book.image} style={{ maxHeight: "400px" }} className="img-fluid rounded shadow-sm" />

        <h1>{book.title}</h1>

        <p>Fiyat: {book.price}</p>
        <p>Yazar: {book.author}</p>
        <p>Yıl: {book.year}</p>
      </div>
    </div>
  );
};

export default Detail;
