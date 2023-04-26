import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainWebLayout from "./pages/main-web-layout";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainWebLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
