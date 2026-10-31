type ContactMethodCardProps = {
  label: string;
  value: string;
  href?: string;
};

export default function ContactMethodCard({ label, value, href }: ContactMethodCardProps) {
  return (
    <li className="flex flex-col items-center gap-1 rounded-2xl border-2 border-dark/10 bg-light p-6 text-center">
      <span className="text-xs font-semibold tracking-[0.2em] text-dark/75 uppercase">{label}</span>
      {href ? (
        <a
          href={href}
          className="text-base font-bold break-all text-dark hover:underline sm:text-lg"
        >
          {value}
        </a>
      ) : (
        <span className="text-base font-bold text-dark sm:text-lg">{value}</span>
      )}
    </li>
  );
}
