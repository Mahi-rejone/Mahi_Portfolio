import { hero, siteConfig } from "@/config";

const KEY = "text-sky-300";
const STR = "text-emerald-300";
const KW = "text-violet-300";

/** A small code-editor style card. Everything it shows comes from the config. */
export default function CodeCard() {
  const { name, roleLine } = siteConfig;
  const { openTo } = hero;

  return (
    <section
      aria-label="About me as code"
      className="w-full bg-dark px-6 py-12 md:px-12 lg:px-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span aria-hidden className="h-3 w-3 rounded-full bg-white/20" />
          <span aria-hidden className="h-3 w-3 rounded-full bg-white/20" />
          <span aria-hidden className="h-3 w-3 rounded-full bg-white/20" />
          <span className="ml-3 text-xs font-medium text-neutral-400">{name.toLowerCase()}.ts</span>
        </div>

        <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-neutral-200 sm:p-6 sm:text-sm">
          <code className="font-mono">
            <span className={KW}>const</span> developer = {"{"}
            {"\n  "}
            <span className={KEY}>name</span>: <span className={STR}>&quot;{name}&quot;</span>,
            {"\n  "}
            <span className={KEY}>role</span>: <span className={STR}>&quot;{roleLine}&quot;</span>,
            {"\n  "}
            <span className={KEY}>openTo</span>: [
            {openTo.map((item, i) => (
              <span key={item}>
                {"\n    "}
                <span className={STR}>&quot;{item}&quot;</span>
                {i < openTo.length - 1 ? "," : ""}
              </span>
            ))}
            {"\n  "}],
            {"\n"}
            {"}"};
          </code>
        </pre>
      </div>
    </section>
  );
}
