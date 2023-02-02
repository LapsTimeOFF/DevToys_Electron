import "./App.scss";
import { Router } from "@/utils/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const getRoutes = () => {
    const routes: any = [];

    Router.map((Page) => {
      routes.push({
        path: Page.path,
        element: Page.component,
      });
    });

    return routes;
  };

  return (
    <RouterProvider
      router={createBrowserRouter(getRoutes())}
    />
  );
};

export default App;
