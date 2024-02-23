import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h2>Oops...</h2>
      <p>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "Unexpected error"}
      </p>
    </>
  );
};

export default ErrorPage;
