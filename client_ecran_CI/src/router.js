import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/adminPage";
import DisplayScore from "./pages/displayScore";
import App from "./pages/App";
import NoPage from "./pages/nopage";
import Login from "./pages/login";
import ChangeDisplay from "./pages/changeDisplay";

const Router = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/display" element={<DisplayScore />} />
        <Route path="/changeDisplay" element={<ChangeDisplay />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;