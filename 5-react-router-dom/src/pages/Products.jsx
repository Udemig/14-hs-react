import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4040/books")
      .then((res) => setBooks(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <div className="books-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
