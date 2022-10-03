import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../../hooks/quires/useMovieDetail";
import Background from "../../atoms/background";

type Params = {
  id: string;
};
function Backdrop() {
  const { id } = useParams() as Params;
  const { data } = useMovieDetail(id);
  return <>{data?.backdrop_path && <Background url={data?.backdrop_path} />}</>;
}

export default Backdrop;
