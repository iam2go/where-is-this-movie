import Background from "@atoms/background";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "@hooks/quires/useMovieDetail";

type Props = {
  url: string;
};

type Params = {
  id: string;
};

function Backdrop({ url }: Props) {
  const { id } = useParams() as Params;
  const { data } = useMovieDetail(id);
  return (
    <>
      {url ? (
        <Background url={url} />
      ) : (
        data?.backdrop_path && <Background url={data?.backdrop_path} />
      )}
    </>
  );
}

export default Backdrop;
