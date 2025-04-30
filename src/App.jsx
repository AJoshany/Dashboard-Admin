import { useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import "./App.css";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  );
}

export default App;
