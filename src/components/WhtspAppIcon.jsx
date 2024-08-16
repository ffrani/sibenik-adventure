// import React from "react";

const WhatsAppIcon = () => {
  const phoneNumber = "+385994183868";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "9999",
        cursor: "pointer",
      }}
      onClick={handleWhatsAppClick}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1191px-WhatsApp.svg.png"
        alt="WhatsApp Chat"
        style={{
          width: "50px",
          height: "auto",
        }}
      />
    </div>
  );
};

export default WhatsAppIcon;
