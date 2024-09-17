import "../components/Hero.css";

const Hero = () => {
  const phoneNumber = "+385994183868";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>Šibenik adventure!</h1>
        <h2 style={{ fontSize: "35px" }}>Sea Kayaking Šibenik</h2>
        <p style={{ fontSize: "20px" }}>
          Let&apos;s explore together with kayaks, <br /> the beauty of the
          Šibenik channel <br /> and the city of Šibenik.
        </p>
        <button
          style={{
            fontSize: "1.5rem",
            color: "black",
            backgroundColor: "#FFFF49",
          }}
          onClick={handleWhatsAppClick}
        >
          Reservation
        </button>
      </div>
    </section>
  );
};

export default Hero;
