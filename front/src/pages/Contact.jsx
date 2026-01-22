import React, { useState } from "react";
import FormText from "../components/Form.jsx";
import { FormTextrea, ButtonForm } from "../components/Form.jsx";
import ContactLink from "../components/ContactLink.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    title: "",
    description: "",
  });
  const [box, setBox] = useState(false);

  const SentMail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://islam-backend.fly.dev/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi");

      const result = await res.json();
      setForm({
        nom: "",
        email: "",
        title: "",
        description: "",
      });
      setBox(!box);
      alert(result.message);
    } catch (err) {
      console.error(err);
      alert("Une erreur est survenue !");
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev, // on garde les anciennes valeurs
      [name]: value, // on met à jour seulement celle changée
    }));
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "islamderrouiche@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      value: "+33 7 62 46 70 65",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin size={24} />,
      title: "Localisation",
      value: "Lyon (69), France",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="flex flex-col p-5 text-center mt-20 mb-20"
      >
        <div>
          <h1>Contactez moi</h1>
          <hr className="w-35 max-lg:w-25 h-1 hr border-0 mx-auto mb-3 mt-1" />
          <p className="max-w-250 p-3 mx-auto">
            Des idées, un projet ou une opportunité de recrutement ?
            Contactez-moi dès maintenant !{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:flex lg:flex-row justify-center gap-8 mt-10 mb-10">
          {contactInfo.map((contact) => (
            <div className="flex items-center gap-4 p-4 bg-primary rounded-xl hover:shadow-lg transition-shadow">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white`}
              >
                {contact.icon}
              </div>
              <div className="text-left">
                <p>{contact.title}</p>
                <p>{contact.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex mx-auto">
          <form onSubmit={SentMail} className="bg-primary rounded-2xl p-8">
            <div className="mb-4">
              <FormText
                htmlFor="name"
                type="text"
                id="name"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
              >
                Nom:
              </FormText>

              <FormText
                htmlFor="Email"
                type="Email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              >
                Email:
              </FormText>

              <FormText
                htmlFor="title"
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              >
                L'objet du mail:
              </FormText>

              <FormTextrea
                htmlFor="descriptionContact"
                name="description"
                value={form.description}
                onChange={handleChange}
                id="descriptionContact"
                required
              >
                Description
              </FormTextrea>

              <div className="mt-5 mb-5">
                <input
                  type="checkbox"
                  name="form-name"
                  value="contact"
                  onChange={handleChange}
                  onClick={() => setBox(!box)}
                  required
                  checked={box}
                />

                <label htmlFor="form-name" className="ml-2" required>
                  Les informations recueillies sont nécessaires pour traiter
                  votre message et ne seront pas utilisées à d'autres fins.
                </label>
              </div>

              <button type="submit" className="btn-primary">
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
