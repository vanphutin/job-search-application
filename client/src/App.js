import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import routers from "./routers";

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
