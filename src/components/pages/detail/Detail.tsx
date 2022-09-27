import React, { Suspense } from "react";
import Header from "../../blocks/Header";
import Content from "./Content";

const Backdrop = React.lazy(() => import("./Backdrop"));
function Detail() {
  // const { data: provider } = useMovieProvider(id);
  return (
    <>
      <Header />
      <Suspense fallback={<></>}>
        <Backdrop />
      </Suspense>
      <Content />
    </>
  );
}

export default Detail;
