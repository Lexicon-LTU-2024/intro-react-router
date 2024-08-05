import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { AboutPage, HomePage, JoinUsPage } from "./pages";

// A router built with objects.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "join-us", element: <JoinUsPage /> },
    ],
  },
]);

// A router built with JSX.
export const routerWithJsx = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="join-us" element={<JoinUsPage />} />
    </Route>
  )
);

// Each object in this router is its own route that have several attributes it can use. It can also have children routes.

// "/" is always the start url of an application

// The router will concatenate the parent path with the child paht to loog for matches with the current url in the browser.
