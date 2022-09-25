import { Suspense } from "react";
import Content from "./Content";
import DetailLoader from "./DetailLoader";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

function Detail() {
  // const { data: provider } = useMovieProvider(id);
  return (
    <Suspense fallback={<DetailLoader />}>
      {/* <Background url={IMAGE_URL + data.backdrop_path} /> */}
      <Content />
    </Suspense>
  );
}

export default Detail;
