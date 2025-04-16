import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Enter your name"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <InputForm
        label="Cinfirm Password"
        type="password"
        placeholder="*****"
        name="confirmpassword"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
