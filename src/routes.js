import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Alert from "./components/alert";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default AppRoutes;
