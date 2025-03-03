import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Janardan Borse
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a full-stack developer passionate about building efficient and scalable applications. 
          I enjoy solving complex problems, optimizing performance, and creating seamless user experiences. 
          Whether it's backend logic or frontend design, 
          I strive to deliver robust and impactful solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-violet-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-violet-500/100 text-violet-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-violet-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};