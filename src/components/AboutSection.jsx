import { Briefcase, Code, GraduationCap, Laptop, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Dedicated Web Developer & Aspiring Full-Stack Engineer
            </h3>

            <p className="text-muted-foreground">
              I’m a Enthusiastic web developer with hands-on experience in building responsive and user-friendly websites. 
              I’m currently expanding my skills to become a full-stack developer and constantly learning new technologies. 
              I thrive on solving problems and collaborating with like-minded professionals to bring ideas to life.
            </p>

            <p className="text-muted-foreground">
              I'm Excited about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="HarishC.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Academic Excellence</h4>
                  <p className="text-muted-foreground">
                    CGPA: 7.80 in BCA from St. Thomas College of Arts & Science.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">NSS volunteer </h4>
                  <p className="text-muted-foreground">
                    NSS volunteer with hands-on experience in community outreach and service activities. 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Internship Experience</h4>
                  <p className="text-muted-foreground">
                    Enhanced skillset in Web Development at SkillForge and MERN Stack development at Codex Technologies Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
