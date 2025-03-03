import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Generic Medicine Store",
                description:
                  "Developed a web application that allows users to search, compare, and purchase affordable medicines with detailed information on composition, alternatives, and pricing. Integrated secure authentication, inventory management, and an intuitive UI for seamless user experience.",
                techStack: ["PHP", "MySQL", "HTML", "CSS"],
              },
              {
                title: "Online Auction System",
                description:
                  "Built an auction platform enabling real-time bidding for products. Features include user authentication, seller verification, auction time constraints, and dynamic bid increments. Implemented using Java technologies with MySQL backend.",
                techStack: ["JSP", "Java", "Servlet", "MySQL", "HTML", "CSS"],
              },
              {
                title: "Farmer Assistant",
                description:
                  "An AI-powered platform that helps farmers choose the right crops based on soil, weather, and other environmental conditions. Also provides a full crop plan including fertilizer recommendations, water requirements, and government schemes.",
                techStack: ["Python", "Flask", "ML", "HTML", "CSS"],
              },
              {
                title: "SQL Query Checker",
                description:
                  "Designed a tool to analyze and validate SQL queries, checking for syntax errors and optimization suggestions. Built using Flask with an interactive front-end for instant query validation.",
                techStack: ["Python", "Flask", "HTML", "CSS"],
              },
              {
                title: "BFS & DFS Visual Representation",
                description:
                  "Developed an interactive web-based visualization of Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms for better understanding of graph traversal techniques.",
                techStack: ["JavaScript", "HTML", "CSS"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-violet-400 hover:text-violet-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
