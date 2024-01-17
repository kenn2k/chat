import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Login from "./components/Login/Login.jsx";
import Protected from "./components/Login/Protected.tsx";
import UserPage from "./components/Input/Users/UserPage.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/login" index element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/" element={<Protected />}>
          <Route path="/" index element={<Home />} />
        </Route>
      </Route>
    )
  );
  const root = ReactDOM.createRoot(rootElement);

  root.render(<RouterProvider router={router} />);
}
