import { useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import "./App.css";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { CssBaseline, Box } from "@mui/material";
import { ThemeContextProvider } from "./ThemeContext";
import { useState } from "react";
function App() {
  let router = useRoutes(routes);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleTopbarMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <CssBaseline />
      <Topbar showMenu={handleTopbarMenu} />
      <div className="container">
        <Sidebar showMenu={showMobileMenu} />
        {router}
      </div>
    </>
  );
}

export default App;
