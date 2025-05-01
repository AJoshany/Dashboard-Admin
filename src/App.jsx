import { useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import "./App.css";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { CssBaseline, Box } from '@mui/material';
import { ThemeContextProvider } from './ThemeContext';
function App() {
  let router = useRoutes(routes);

  return (
    <>
      <ThemeContextProvider>
      <CssBaseline />
        <Topbar />
        <div className="container">
          <Sidebar />
          {router}
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
