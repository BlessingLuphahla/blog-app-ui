import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Details from "./pages/details/Details";
import Create from "./pages/create/Create";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Edit from "./pages/edit/Edit";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <TopBar />

      <Routes>
        {/* user ? <Home /> : <Login /> */}
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Details />} />
        <Route path="/create" element={user ? <Create /> : <Home />} />
        <Route path="/edit/:postId" element={user ? <Edit /> : <Home />} />
        <Route path="/settings" element={user ? <Settings /> : <Home />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
