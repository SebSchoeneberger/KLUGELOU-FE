import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import StoneDetails from "./Pages/StoneDetails";
import AdminLogin from "./Pages/AdminLogin";
import AuthProvider from "./context/AuthProvider";
import ProtectedLayout from "./Layouts/ProtectedLayout";
import Admin from "./Pages/Admin";
import AdminUpdate from "./Pages/AdminUpdate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/stone/:id" element={<StoneDetails />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/update/:id" element={<AdminUpdate />} />
      </Route>
    </Route>
  ),
);

const App = () => (
<AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>
);
 
export default App;
