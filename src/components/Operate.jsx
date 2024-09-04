import Btn from "./Btn";
import WelcomeNav from "./WelcomeNav";
function Operate() {
  return (
    <>
      <WelcomeNav />
      <div className="py-40 max-w-3xl flex flex-col gap-3 items-center justify-center mx-auto">
        <Btn text="Initialize Mining Zone" />
        <Btn text="Edit intialized zones" />
      </div>
    </>
  );
}

export default Operate;
