import AuthLayouts from "../components/Layout/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="login">
      <FormLogin />
      <p className="text-sm mt-2">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>{" "}
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
