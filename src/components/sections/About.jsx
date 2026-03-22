import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "React",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "Flutter"
  ];

  const backendSkills = ["Java", "Python", "MongoDB", "MySQL", "PostgreSQL", "C"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-500 dark:to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-6 md:p-8 border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-transparent hover:-translate-y-1 transition-all">
            <p className="text-gray-700 dark:text-gray-100 mb-6 text-sm md:text-base">
              Passionate full-stack developer with expertise in building scalable web applications and crafting innovative solutions.
              I thrive on solving complex problems and optimizing performance to deliver seamless user experiences.
            </p>

            <div 
              className="mt-8 overflow-hidden w-full relative"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
              }}
            >
              <div className="flex animate-marquee whitespace-nowrap min-w-full hover:[animation-play-state:paused]">
                {[...frontendSkills, ...backendSkills, ...frontendSkills, ...backendSkills].map((tech, key) => (
                  <span
                    key={key}
                    className="mx-2 md:mx-4 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 py-1 px-4 md:py-2 md:px-6 rounded-full font-medium inline-block hover:-translate-y-1 hover:shadow-md transition-all cursor-default text-sm md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education, Achievements, Experience */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            {/* Education */}
            <div className="p-4 md:p-6 rounded-xl bg-white/50 dark:bg-transparent border border-gray-200 dark:border-white/10 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-none transition-all">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-white"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-100 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Pursuing MSc in Computer Science</strong> - Fergusson College (2024-2026)
                </li>
                <li>
                  <strong>BSc in Computer Science</strong> - SPPU University (2021-2024)
                </li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="p-4 md:p-6 rounded-xl bg-white/50 dark:bg-transparent border border-gray-200 dark:border-white/10 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-none transition-all">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-white"> 🎖️ Achievements </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-100 space-y-2 text-sm md:text-base">
                <li>Completed BluePineapple Campus Connect Training Program (2025)</li>
                <li>Participated in AI - Gati Hackathon 2025</li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-4 md:p-6 rounded-xl bg-white/50 dark:bg-transparent border border-gray-200 dark:border-white/10 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-none transition-all">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-white"> 💼 Experience </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-100 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Product Engineer</strong> - Kylas CRM (Present)
                </li>
                <li>
                  Working on scalable CRM solutions and improving system performance
                </li>
              </ul>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};