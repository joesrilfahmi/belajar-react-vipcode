const Label = (props) => {
  const { htmlFor = "email", children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="blcok text-slate-700 text-sm font-bold mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
