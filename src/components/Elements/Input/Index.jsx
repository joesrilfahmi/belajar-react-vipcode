import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, type = "email", name, placeholder } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
