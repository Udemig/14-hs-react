import { useParams } from "react-router-dom";
import { useGetPlace } from "../../services/hooks";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Container from "./container";
import Images from "./images";
import Info from "./info";
import DeleteButton from "./delete-button";

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, error, data, refetch } = useGetPlace(id);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error.message} refetch={refetch} />
      </Container>
    );

  if (!data) return null;

  return (
    <Container>
      <Images image={data.image_url} />

      <Info place={data} />

      <DeleteButton id={data.id} />
    </Container>
  );
};

export default Detail;
