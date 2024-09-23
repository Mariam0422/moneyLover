import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Header from "./components/global/header";
import CabinetLayout from "./components/layout/CabinetLayout";
import CabinetBoard from "./pages/cabinetBoard";
import "./App.css";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="cabinet" element={<CabinetLayout />}></Route>
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
