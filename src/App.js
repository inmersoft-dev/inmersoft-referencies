import { HashRouter, Routes, Route } from "react-router-dom";

// views
import Home from "./views/Home";
import Gallery from "./views/Gallery";
import NotFound from "./views/NotFound";

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/images" element={<Gallery />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
