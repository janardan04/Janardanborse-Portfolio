import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Scalable Web Apps", "Mobile Applications", "Innovative Solutions"];

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const handleTyping = () => {
    const i = loopNum % words.length;
    const fullText = words[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 75 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative w-full overflow-hidden"
    >
      <RevealOnScroll>
        <div className="w-full text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-500 dark:to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Janardan Borse
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            I build <span className="text-violet-500 border-r-2 border-violet-500 pr-1 animate-blink">{text}</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a full-stack developer passionate about building efficient and scalable applications. 
          I enjoy solving complex problems, optimizing performance, and creating seamless user experiences. 
          Whether it's backend logic or frontend design, 
          I strive to deliver robust and impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-violet-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] group"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[loading_1s_ease-in-out]"></div>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto border border-violet-600 dark:border-violet-500 text-violet-600 dark:text-violet-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:bg-violet-50 dark:hover:bg-violet-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};