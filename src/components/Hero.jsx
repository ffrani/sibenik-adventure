import "../components/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Šibenik adventure!</h1>
        <h2 style={{ fontSize: "35px" }}>Sea Kayaking Šibenik</h2>
        <p style={{ fontSize: "20px" }}>
          Let&apos;s explore together with kayaks, <br /> the beauty of the
          Šibenik canal <br /> and the city of Šibenik.
        </p>
        <button>Rezervation</button>
      </div>
    </section>
  );
};

export default Hero;
