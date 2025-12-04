import { useState } from "react";
import { cn } from "@/lib/utils";

import { FaHtml5, FaJs, FaReact, FaGitAlt, FaCode } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    category: "frontend",
    icon: <FaHtml5 className="h-6 w-6 text-orange-600" />,
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: <FaJs className="h-6 w-6 text-yellow-400" />,
  },
  {
    name: "React",
    category: "frontend",
    icon: <FaReact className="h-6 w-6 text-sky-400" />,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: <SiTailwindcss className="h-6 w-6 text-cyan-400" />,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: <SiNodedotjs className="h-6 w-6 text-green-600" />,
  },
  {
    name: "Express",
    category: "backend",
    icon: <SiExpress className="h-6 w-6 text-gray-300" />,
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: <SiMongodb className="h-6 w-6 text-green-500" />,
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: <SiPostgresql className="h-6 w-6 text-blue-600" />,
  },

  // Tools
  {
    name: "Git/GitHub",
    category: "tools",
    icon: <FaGitAlt className="h-6 w-6 text-red-600" />,
  },
  {
    name: "Figma",
    category: "tools",
    icon: <SiFigma className="h-6 w-6 text-pink-500" />,
  },

];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Capsule style skills with 3D + ripple */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredSkills.map((skill, key) => (
            <button
              key={key}
              type="button"
              className="skill-pill flex items-center gap-3 px-5 py-3 
                         bg-background/40 border border-primary/30 
                         backdrop-blur-md text-left"
            >
              {skill.icon}
              <h3 className="font-medium">{skill.name}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
