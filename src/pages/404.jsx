import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
