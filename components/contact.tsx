"use client";

import Layout from "@/components/Container";
import AnimatedText from "@/components/Home/animatedtext";
import { TweeterIcon, InstagramIcon, FacebookIcon } from "@/components/icon";

const EMAIL = "hello@tamzid.com"; // TODO: replace with the real contact email
const CONTACT_METHODS = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    label: "Location",
    value: "Available worldwide (remote)",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section className="flex w-full flex-col items-center justify-center background-light text-dark min-h-[70vh]">
      <Layout>
        <AnimatedText
          text="Let's Create Something Together"
          className="text-2xl! sm:text-5xl! lg:text-6xl! text-center! mb-8"
          highlightWords={["Create", "Something", "Together"]}
        />

        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base text-black/80 leading-relaxed font-medium mb-12">
          Have a project in mind — a wedding to capture, a brand film to cut, or
          a reel that needs to convert? Tell me a bit about it and I&apos;ll get
          back to you as soon as I can.
        </p>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {CONTACT_METHODS.map((method) => (
            <div
              key={method.label}
              className="rounded-2xl border-2 border-dark/10 bg-light p-6 flex flex-col items-center text-center gap-1"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-dark/50 font-semibold">
                {method.label}
              </span>
              {method.href ? (
                <a
                  href={method.href}
                  className="text-base sm:text-lg font-bold text-dark hover:underline break-all"
                >
                  {method.value}
                </a>
              ) : (
                <span className="text-base sm:text-lg font-bold text-dark">
                  {method.value}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-8 pb-8">
          <a href={`mailto:${EMAIL}`}>
            <button className="relative overflow-hidden px-6 py-3 border border-dark rounded-3xl text-sm font-semibold group bg-blue">
              <span className="absolute inset-0 bg-green w-0 group-hover:w-full transition-all duration-300 origin-left z-0" />
              <span className="relative z-10 text-white group-hover:text-dark transition-colors duration-300">
                Send an Email
              </span>
            </button>
          </a>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a href="/" target="_blank" aria-label="Twitter">
              <TweeterIcon className="w-6 h-6" />
            </a>
            <a href="/" target="_blank" aria-label="Instagram">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="/" target="_blank" aria-label="Facebook">
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Layout>
    </section>
  );
}
