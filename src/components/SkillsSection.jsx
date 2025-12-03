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
    level: 95,
    category: "frontend",
    icon: <FaHtml5 className="h-8 w-8 text-orange-600" />,
  },
  {
    name: "JavaScript",
    level: 85,
    category: "frontend",
    icon: <FaJs className="h-8 w-8 text-yellow-400" />,
  },
  {
    name: "React",
    level: 80,
    category: "frontend",
    icon: <FaReact className="h-8 w-8 text-sky-400" />,
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "frontend",
    icon: <SiTailwindcss className="h-8 w-8 text-cyan-400" />,
  },

  // Backend
  {
    name: "Node.js",
    level: 80,
    category: "backend",
    icon: <SiNodedotjs className="h-8 w-8 text-green-600" />,
  },
  {
    name: "Express",
    level: 75,
    category: "backend",
    icon: <SiExpress className="h-8 w-8 text-gray-300" />,
  },
  {
    name: "MongoDB",
    level: 70,
    category: "backend",
    icon: <SiMongodb className="h-8 w-8 text-green-500" />,
  },
  {
    name: "PostgreSQL",
    level: 65,
    category: "backend",
    icon: <SiPostgresql className="h-8 w-8 text-blue-600" />,
  },

  // Tools
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: <FaGitAlt className="h-8 w-8 text-red-600" />,
  },
  {
    name: "Figma",
    level: 85,
    category: "tools",
    icon: <SiFigma className="h-8 w-8 text-pink-500" />,
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: <FaCode className="h-8 w-8 text-blue-500" />,
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
