/* eslint-disable react/prop-types */
function Btn({ text }) {
  return (
    <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 md:px-20 md:text-2xl">
      {text}
    </button>
  );
}

export default Btn;
