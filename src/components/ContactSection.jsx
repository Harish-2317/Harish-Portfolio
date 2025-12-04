import { Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        {/* Contact information block */}
        <div className="space-y-10">
          {/* Email & Location */}
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Email
                </p>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=harishchandrasekar321@gmail.com"
                    target="_blank"
                    className="font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    harishchandrasekar321@gmail.com
                  </a>

              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Location
                </p>
                <p className="text-lg">Chennai, Tamilnadu, India</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Connect With Me
            </p>
            <div className="flex items-center justify-center gap-6 text-2xl">
              <a
                href="https://www.linkedin.com/in/harish-chandrasekar-943591315/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-transform duration-200 hover:-translate-y-1"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/harish_1026"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-transform duration-200 hover:-translate-y-1"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/_.harish._.007._?igsh=cmNpZ2Jib2s5OGFo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-transform duration-200 hover:-translate-y-1"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
