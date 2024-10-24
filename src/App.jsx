import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import StoneDetails from "./Pages/StoneDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/stone/:id" element={<StoneDetails />} />
    </Route>
  ),
);

const App = () => <RouterProvider router={router} />;
 
export default App;
