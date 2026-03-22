import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { SiQuora } from "react-icons/si";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = {
      ...formData,
      access_key: "875b73a7-0d20-47ae-b881-f698f6b49a6d", // Replace this with your Web3Forms access key
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-full max-w-md md:max-w-xl mx-auto px-4 py-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-500 dark:to-cyan-300 bg-clip-text text-transparent text-center">
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
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white transition focus:outline-none focus:border-violet-500 focus:bg-violet-50 dark:focus:bg-violet-500/5 placeholder:text-gray-400 dark:placeholder:text-gray-500"
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
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white transition focus:outline-none focus:border-violet-500 focus:bg-violet-50 dark:focus:bg-violet-500/5 placeholder:text-gray-400 dark:placeholder:text-gray-500"
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
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white transition focus:outline-none focus:border-violet-500 focus:bg-violet-50 dark:focus:bg-violet-500/5 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 dark:bg-violet-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/janardan04" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/janardan-borase-25a546232" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition">
              <FaLinkedin size={30} />
            </a>
            <a href="https://instagram.com/janardhan_borse" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#E1306C] transition">
              <FaInstagram size={30} />
            </a>
            <a href="https://leetcode.com/Janardhan_04" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition">
              <SiLeetcode size={30} />
            </a>
            <a href="https://www.hackerrank.com/janardhanborse21" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition">
              <SiHackerrank size={30} />
            </a>
            <a href="https://www.quora.com/profile/Janardan-Borase" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition">
              <SiQuora size={30} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
