import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { SiQuora } from "react-icons/si";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID from env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID from env
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key from env
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-violet-500 focus:bg-violet-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-violet-500 focus:bg-violet-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-violet-500 focus:bg-violet-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/janardan04" target="_blank" rel="noopener noreferrer" className="text-white hover:text--500 transition">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/janardan-borase-25a546232" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition">
              <FaLinkedin size={30} />
            </a>
            <a href="https://instagram.com/janardhan_borse" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E1306C] transition">
            <FaInstagram size={30} />
            </a>
            <a href="https://leetcode.com/Janardhan_04" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition">
              <SiLeetcode size={30} />
            </a>
            <a href="https://www.hackerrank.com/janardhanborse21" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition">
              <SiHackerrank size={30} />
            </a>
            <a href="https://www.quora.com/profile/Janardan-Borase" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition">
              <SiQuora size={30} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
