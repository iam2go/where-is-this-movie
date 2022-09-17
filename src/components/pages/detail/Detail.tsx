import { Suspense } from "react";
import Background from "../../atoms/background";
import Content from "./Content";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

function Detail() {
  // const { data: provider } = useMovieProvider(id);
  return (
    <Suspense fallback={<>loading...</>}>
      {/* <Background url={IMAGE_URL + data.backdrop_path} /> */}
      <Content />
    </Suspense>
  );
}

export default Detail;
