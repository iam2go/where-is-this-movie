import { Suspense } from "react";
import Main from "./components/pages/main";

function App() {
  return (
    <Suspense fallback={<></>}>
      <Main />
    </Suspense>
  );
}

export default App;
