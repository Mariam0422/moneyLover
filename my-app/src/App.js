import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register";
import "./App.css";
import Login from "./pages/login";
import Header from "./components/global/header";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header/>}>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
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
