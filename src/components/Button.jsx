function Button() {
  return (
    <div className="button-container m-8 p-4">
      <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 md:px-20 md:text-2xl">
        Register
      </button>
      <button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 md:px-20 md:text-2xl">
        Login
      </button>
    </div>
  );
}

export default Button;
