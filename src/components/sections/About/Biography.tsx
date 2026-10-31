import { about, siteConfig } from "@/config";
import { cn } from "@/lib/cn";

/** "{name}" in a paragraph is replaced by the site name, in bold. */
function BioParagraph({ text }: { text: string }) {
  const [before, after] = text.split("{name}");
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <strong className="font-bold text-dark">{siteConfig.name}</strong>
      {after}
    </>
  );
}

export default function Biography() {
  return (
    <div className="col-span-1 flex flex-col items-start justify-start md:col-span-1 lg:col-span-3">
      <h3 className="mb-4 font-primary text-lg font-bold text-dark/75 uppercase sm:text-2xl lg:text-4xl">
        Biography
      </h3>
      {about.bio.map((paragraph, i) => (
        <p
          key={paragraph}
          className={cn(
            "text-sm leading-relaxed font-medium text-black sm:text-base",
            i === 1 && "my-4",
          )}
        >
          <BioParagraph text={paragraph} />
        </p>
      ))}
    </div>
  );
}
