import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "@blocks/Header";
import NotFound from "../NotFound";
import Content from "./Content";

const Backdrop = React.lazy(() => import("./Backdrop"));
function Detail() {
  return (
    <>
      <ErrorBoundary FallbackComponent={() => <NotFound />}>
        <Header />
        <Suspense fallback={<></>}>
          <Backdrop />
        </Suspense>
        <Content />
      </ErrorBoundary>
    </>
  );
}

export default Detail;
