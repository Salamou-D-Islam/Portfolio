import React from "react";

function ContactInfo({ children, icon, dot }) {
  return (
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-4">{icon}</span>
      <span className="text-lg">{children}</span>
    </div>
  );
}

export default ContactInfo;
