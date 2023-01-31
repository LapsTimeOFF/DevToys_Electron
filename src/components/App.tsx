import SideBar from "./SideBar";
import "./App.scss";
import { Grid } from "@mui/material";
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
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <SideBar />
      </Grid>
      <Grid item xs={6} md={8}>
        <RouterProvider router={createBrowserRouter(getRoutes())} />
      </Grid>
    </Grid>
  );
};

export default App;
