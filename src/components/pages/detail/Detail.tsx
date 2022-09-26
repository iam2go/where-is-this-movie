import React, { Suspense } from "react";
import Content from "./Content";

const Backdrop = React.lazy(() => import("./Backdrop"));
function Detail() {
  // const { data: provider } = useMovieProvider(id);
  return (
    <>
      <Suspense fallback={<></>}>
        <Backdrop />
      </Suspense>
      <Content />
    </>
  );
}

export default Detail;
