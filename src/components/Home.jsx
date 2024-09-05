// import Header from "./Header";
// import Button from "./Button";
import Navbar from "./Navbar";
function Home() {
  return (
    <section>
      <Navbar />
      <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
        <div className="flex items-center justify-center">
          {/* <p className="text-2xl font-semibold md:text-4xl">Welcome to</p>
          <Header /> */}
        </div>
        <h1 className="max-w-3xl text-center font-semibold text-xl md:text-3xl px-2">
          Efficient Shift Handover and Safety Management, Anytime, Anywhere
        </h1>
        <div className="w-full mt-12 p-2">
          <img src="home.png" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Home;
