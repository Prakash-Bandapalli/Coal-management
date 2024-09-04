// import Navbar from "./Navbar";
function About() {
  return (
    <section className="mb-8">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-darkGrayishBlue md:text-4xl my-4">
          Our Mission
        </h3>
        <p className="max-w-3xl text-grayishBlue text-center text-lg md:text-2xl mb-4">
          At MineShift Pro, our mission is to revolutionize coal mining
          operations by providing smart, digital solutions. We aim to replace
          outdated manual processes with innovative tools that enhance
          efficiency, safety, and communication across all shifts.
        </p>
        <img src="aboutUS.png" />
        <h3 className="text-3xl font-semibold text-darkGrayishBlue md:text-4xl mb-4">
          What We Do
        </h3>
        <p className="max-w-3xl text-grayishBlue text-center text-lg md:text-2xl mb-4">
          We offer a comprehensive digital platform tailored for the coal mining
          industry. MineShift Pro facilitates seamless shift handovers, ensures
          strict adherence to safety protocols, and provides real-time
          communication. Our solutions help minimize downtime, prevent
          accidents, and improve overall productivity.
        </p>
        <img src="aboutUS2.png" />
        <h3 className="text-3xl font-semibold text-darkGrayishBlue md:text-4xl my-4">
          Why Choose Us
        </h3>
        <p className="max-w-3xl text-grayishBlue text-center text-lg md:text-2xl">
          Choosing MineShift Pro means choosing a safer, more efficient way to
          manage mining operations. Our user-friendly platform is designed to
          meet the unique challenges of the mining industry, ensuring that
          critical information is always available and that every shift starts
          with the knowledge it needs to succeed. Join us in making coal mining
          smarter and safer.
        </p>
      </div>
    </section>
  );
}

export default About;
