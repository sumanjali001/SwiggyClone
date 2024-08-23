import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Body from "./components/Body";

import Help from "./components/Help";

import AppLayout from "./pages/AppLayout";
import Cart from "./components/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ResCard from "./components/ResCard";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./components/Login";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/help",
        element: <Help />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resid",
        element: <ResCard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
