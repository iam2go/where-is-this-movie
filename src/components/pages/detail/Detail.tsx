import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "@blocks/Header";
import NotFound from "../NotFound";
import Content from "./Content";
import { useLocation } from "react-router-dom";

const Backdrop = React.lazy(() => import("./Backdrop"));
function Detail() {
  const { state } = useLocation();
  return (
    <>
      <ErrorBoundary FallbackComponent={() => <NotFound />}>
        <Header />
        <Suspense fallback={<></>}>
          <Backdrop url={state.backdrop} />
        </Suspense>
        <Content />
      </ErrorBoundary>
    </>
  );
}

export default Detail;
