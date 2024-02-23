import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import QuizPage from "../pages/QuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quiz/:id",
    element: <QuizPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
