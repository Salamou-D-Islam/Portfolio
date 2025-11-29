import React from "react";
import FormContact from "../components/Form.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import ContactLink from "../components/ContactLink.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <>
      <section className="text-white w-full h-150 max-md:h-500 flex flex-row max-md:flex-wrap items-center justify-center  mb-20 mt-20  ">
        <div className="bg-transparent hover:bg-blue-900 opacity-50 hover:opacity-100 contcatHoverDiv w-230 h-150 p-6 outlineApply ">
          <form action="POST">
            <h1 className="text-3xl font-bold mb-4">
              Contactez moi par ce formulaire
            </h1>
            <div className="mb-4">
              <FormContact
                htmlFor="name"
                type="text"
                id="name"
                name="name"
                required
              >
                Nom:
              </FormContact>

              <FormContact
                htmlFor="Email"
                type="Email"
                id="Email"
                name="Email"
                required
              >
                Email:
              </FormContact>

              <FormContact
                htmlFor="title"
                type="text"
                id="title"
                name="title"
                required
              >
                Tire du message:
              </FormContact>

              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

              <div>
                <input type="checkbox" name="form-name" value="contact" />

                <label htmlFor="form-name" className="text-sm ml-2" required>
                  Les informations recueillies sont nécessaires pour traiter
                  votre message et ne seront pas utilisées à d'autres fins.
                </label>
              </div>

              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-700/90 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>

        <div className="container bg-transparent hover:bg-indigo-800 opacity-50 hover:opacity-100 contcatHoverDiv w-230 h-150 p-6 outlineApply ml-2">
          <h1 className="text-3xl font-bold mb-4">Contactez moi par:</h1>

          <div className="container flex flex-wrap mt-4 gap-6 p-4 rounded-lg justify-center ">
            <ContactLink
              href="mailto:islamderrouiche@gmail.com"
              target="_blank"
              title="Mon email"
            >
              <AlternateEmailIcon sx={{ fontSize: 90 }} />
            </ContactLink>

            <ContactLink
              href="https://wa.me/0762467065?text=Bonjour%2C%20je%20viens%20de%20votre%20portfolio%20!"
              target="_blank"
              title="Mon WhatsApp"
            >
              <WhatsAppIcon sx={{ fontSize: 90 }} />
            </ContactLink>

            <ContactLink
              href="https://www.instagram.com/"
              target="_blank"
              title="Mon Instagram"
            >
              <InstagramIcon sx={{ fontSize: 90 }} />
            </ContactLink>

            <ContactLink
              href="https://www.linkedin.com/in/islam-derrouiche-7a69a8368/"
              target="_blank"
              title="Mon LinkedIn"
            >
              <LinkedInIcon sx={{ fontSize: 90 }} />
            </ContactLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
