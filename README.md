# Intro to React Router

This repo shows how you can convert an application with no router system to an application with a working router. The router that is being used is the [React Router](https://reactrouter.com/en/main).

To showcase the differences, take a look at the two files that will be directly affected by this conversion.

**main.tsx without router**

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**App.tsx without router**

```tsx
import { AboutPage, HomePage, JoinUsPage } from "../pages";
import { Footer } from "./Footer";

export function App() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <JoinUsPage />
      <Footer />
    </>
  );
}
```

A regular main file that just renders an App component. Inside the App component it renders three different pages and one footer, and in the browser everything is rendered at the same time.

Now let's see the router version of these files.

**main.tsx with router**

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

**App.tsx with router**

```tsx
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
```

We can see some obvious changes. In `main.tsx`, an App component is not rendered anymore, instead a `<RouterProvider router={router}>` is renderd instead. This is the router. This component is built-in in React router and it's provided for you. But it needs a router object that defines and handles the router logic.

**router.tsx**

```tsx
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { AboutPage, HomePage, JoinUsPage } from "./pages";
import { App } from "./components";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="join-us" element={<JoinUsPage />} />
    </Route>
  )
);
```

In this file we can see the different components that are rendered depending on the current route _( url )_. `App.tsx` still plays an important part as it's still the root component. Inside this component we have a `<Outlet>` component in which the matched component _( React compares the path attribute of the route to the current url and renders the matching component )_ is actually rendered.
