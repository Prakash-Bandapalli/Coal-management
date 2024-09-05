// import { useNavigate } from "react-router-dom";
// import Btn from "./Btn";
import WelcomeNav from "./WelcomeNav";
import { Link } from "react-router-dom";
function Operate() {
  // const navigate = useNavigate();
  return (
    <>
      <WelcomeNav />
      <div className="py-40 max-w-3xl flex flex-col gap-3 items-center justify-center mx-auto">
        {/* <Btn
          text="Initialize Mining Zone"
          onClick={() => navigate("/auth/minedetails")}
        />
        <Link to="/auth/minedetails" />
        <Btn text="Edit intialized zones" /> */}
        <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 md:px-20 md:text-2xl">
          <Link to="/auth/minedetails">Initialize Mining Zone</Link>
        </button>
        <button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 md:px-20 md:text-2xl">
          <Link to="/auth/editdetails">Edit intialized zones</Link>
        </button>
      </div>
    </>
  );
}

export default Operate;
