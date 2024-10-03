import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
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
import HomePage from "./pages/homePage";
import "./App.css";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="cabinet" element={<CabinetLayout />}></Route>
    </Route>
  )
);
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={route} />
      </div>
    </AuthProvider>
  );
}

export default App;
