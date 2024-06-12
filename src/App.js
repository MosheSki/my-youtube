import "./App.css";
import Header from "./components/shared/Header";
import Body from "./components/shared/Body";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/shared/MainContainer";
import WatchPage from "./components/pages/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/results",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
