import Container from "@/components/layout/Container";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import { contact, cv, siteConfig } from "@/config";
import ContactMethodCard from "./ContactMethodCard";

export default function Contact() {
  const { email, location } = siteConfig;

  const methods = [
    { label: "Email", value: email, href: `mailto:${email}` },
    { label: "Location", value: location, href: undefined },
  ];

  return (
    <section
      id="contact"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-light text-dark"
    >
      <Container>
        <AnimatedText
          text={contact.heading}
          className="mb-8 text-center text-2xl sm:text-5xl lg:text-6xl"
          highlightWords={contact.highlightWords}
        />

        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed font-medium text-black/80 sm:text-base">
          {contact.intro}
        </p>

        <ul className="mx-auto mb-16 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {methods.map((method) => (
            <ContactMethodCard key={method.label} {...method} />
          ))}
        </ul>

        <div className="flex flex-col items-center gap-8 pb-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button href={`mailto:${email}`} className="px-6 py-3">
              {contact.emailCta}
            </Button>
            {cv.href.trim() !== "" && (
              <Button href={cv.href} download className="px-6 py-3">
                {cv.label}
              </Button>
            )}
          </div>
          <SocialLinks />
        </div>
      </Container>
    </section>
  );
}
