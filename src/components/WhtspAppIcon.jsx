import React from "react";

const WhatsAppIcon = () => {
  const phoneNumber = "+4746555654";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px", // Adjust this value to change the vertical position
        right: "20px", // Adjust this value to change the horizontal position
        zIndex: "9999", // Ensures the icon stays above other content
        cursor: "pointer", // Change cursor to pointer on hover
      }}
      onClick={handleWhatsAppClick}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1191px-WhatsApp.svg.png" // Replace with the WhatsApp icon image URL
        alt="WhatsApp Chat"
        style={{
          width: "50px", // Adjust the width of the icon as needed
          height: "auto", // Maintain aspect ratio
        }}
      />
    </div>
  );
};

export default WhatsAppIcon;
