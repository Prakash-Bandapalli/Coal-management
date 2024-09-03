import Header from "./Header";
import Button from "./Button";
function Home() {
  return (
    <section>
      <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
        <div className="flex items-center justify-center">
          <p className="text-2xl font-semibold md:text-4xl">Welcome to</p>
          <Header />
        </div>
        <h1 className="max-w-3xl font-semibold text-center text-xl md:text-3xl">
          Coal remains a cornerstone of energy security, driving the engines of
          progress
        </h1>
        <span className="mt-8">image</span>
        <Button />
      </div>
    </section>
  );
}

export default Home;
