import { Route, Routes } from "react-router-dom";
import Detail from "./components/pages/detail";
import Main from "./components/pages/main";
import NotFound from "./components/pages/NotFound";
import Search from "./components/pages/search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<Search />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
