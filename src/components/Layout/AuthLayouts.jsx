const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex bg-white min-h-screen justify-center items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-600">
          Welcome, please enter your details
        </p>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayouts;
