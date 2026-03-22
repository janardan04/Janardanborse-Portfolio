import { title } from "framer-motion/client";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-500 dark:to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "BidSphere Online Auction System",
                description:
                  "Built an auction platform enabling real-time bidding for products. Features include user authentication, seller verification, auction time constraints, and dynamic bid increments. Implemented using Java technologies with MySQL backend.",
                techStack: ["React js", "Firebase", "Css"],
                link: "https://janardan04.github.io/BidSphere-Auction/",
              },
              {
                title: "EcoCityPulse Smart Complaint Portal",

                description: "A web-based application that allows citizens to report civic issues like potholes, waste management, and water supply problems. It supports location detection and image uploads, while admins can manage, track, and resolve complaints efficiently.",
                techStack: ["React js", "Firebase", "Vercel", "GeoApify"],
                link: "https://smart-city-complaint-portal-etd6.vercel.app/",
              },
              {
                title: "Airline Reservation System",

                description: "A web-based application for booking and managing flight tickets. Users can search flights, reserve seats, and view bookings, while admins can manage schedules, flights, and passenger records efficiently.",

                techStack: ["Spring Boot", "MySQL", "Thymeleaf"]
              },
              {
                title: "BFS & DFS Visual Representation",
                description:
                  "Developed an interactive web-based visualization of Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms for better understanding of graph traversal techniques.",
                techStack: ["JavaScript", "HTML", "CSS"],
              },
              {
                title: "Hill Climbing Algorithm Visualization",

                description: "A project demonstrating the Hill Climbing algorithm using a simple example. It visualizes how the algorithm iteratively moves towards an optimal solution by selecting better neighboring states, helping users understand local search concepts.",

                techStack: ["React", "CSS"],
                link: "https://hill-climbing-algorithm.vercel.app/",
              },
              {
                title: "Generic Medicine Store",
                description:
                  "Developed a web application that allows users to search, compare, and purchase affordable medicines with detailed information on composition, alternatives, and pricing. Integrated secure authentication, inventory management, and an intuitive UI for seamless user experience.",
                techStack: ["PHP", "MySQL", "HTML", "CSS"],
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
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-transparent hover:-translate-y-1 hover:border-violet-500/30 dark:hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-violet-50 hover:bg-violet-100 dark:bg-violet-500/10 dark:hover:bg-violet-500/20 text-violet-600 dark:text-violet-500 py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link || "#"}
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    className="text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors my-4"
                    onClick={(e) => !project.link && e.preventDefault()}
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
