import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAuth from "./Utilities/LayoutAuth";
import LayoutAdmin from "./Utilities/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Error404 from "./pages/Error404";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<LayoutAuth />}>
            <Route index element={<Login />} />
            <Route path="registro" element={<Register />} />
            <Route path="olvide-password" element={<ForgetPassword />} />
          </Route>
          <Route path="/" element={<LayoutAdmin />}>
            <Route index element={<Home />} />
            <Route path="perfil" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

