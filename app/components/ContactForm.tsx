import React from "react";

const ContactForm = () => {
  return (
    <form id="ContactForm" className="flex flex-col gap-3 items-center">
      <h2 className="text-2xl font-bold mb-8 text-white">Contact Me</h2>
      <div className="text-black font-bold bg-white rounded-lg p-5">
        <p className="gap-2">Email: sivaramkumarsivaramkumar51@gmail.com</p>
        <p className="gap-2">Phone: +91 93458 79744</p>
        <p className="gap-2">Location: Coimbatore, India</p>
      </div>
      <div className="text-black font-bold bg-white rounded-lg p-4">
        <p>Follow me on :</p>
          <div className="flex flex-col">
          <a className="hover:text-blue-700" href="https://www.instagram.com/sivaram_kumar?igsh=MTZzdmx1ZW1henQxaw==">INSTAGRAM</a>
        <a className="hover:text-blue-700" href="https://www.instagram.com/sivaram_kumar?igsh=MTZzdmx1ZW1henQxaw==">LINKEDIN</a>
        <a className="hover:text-blue-700" href="https://www.instagram.com/sivaram_kumar?igsh=MTZzdmx1ZW1henQxaw==">FACEBOOK</a>
          </div>
      </div>
    </form>
  );
};

export default ContactForm;
