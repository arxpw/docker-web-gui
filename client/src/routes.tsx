import ContainerPage from "./pages/container.page";

import { BrowserRouter, Route } from "react-router";
import NavBar from "./components/NavBar";

// import ImagePage from "./pages/image.page";
// import CleanupPage from "./pages/cleanup.page";

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/">
        <ContainerPage />
      </Route>
    </BrowserRouter>
  );
}

export default Routes;
