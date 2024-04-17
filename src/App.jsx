import {
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "./Component/HomePage";
import { NotFound } from "./Component/NotFound";
import { SpeechPage } from "./Component/SpeechPage";
import { TextPage } from "./Component/TextPage";
import { Login } from "./Component/Login";
import { Signup } from "./Component/Signup";
import { LandingPage } from "./Component/LandingPage";

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/speech" element={<SpeechPage />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;