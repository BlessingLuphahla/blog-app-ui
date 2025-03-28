import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Details from "./pages/details/Details";
import Create from "./pages/create/Create";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "./context/Context";
import Edit from "./pages/edit/Edit";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import Error from "./components/error/Error";
import Blog from "./pages/blog/Blog";
import WhatsApp from "./components/whatsapp/Whatsapp";
import Gallery from "./pages/gallery/Gallery";
import Services from "./pages/services/services";
import ToTop from "./components/toTop/ToTop";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <WhatsApp />
      <TopBar />
      <ToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Details />} />
        <Route path="/create" element={user ? <Create /> : <Home />} />
        <Route path="/edit/:postId" element={user ? <Edit /> : <Home />} />
        <Route path="/settings" element={user ? <Settings /> : <Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
