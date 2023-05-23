import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainWebLayout from "./pages/main-web-layout";
import Home from "./pages/home";
import Mongrel from "./pages/collection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainWebLayout />}>
          <Route path="/the-collection" element={<Mongrel />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
