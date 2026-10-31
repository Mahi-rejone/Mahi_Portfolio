import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  text: string;
  className?: string;
};

export default function Badge({ text, className }: BadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full bg-light py-2", className)}>
      <ShieldCheck aria-hidden className="h-5 w-5 text-emerald-600" />
      <span className="text-sm font-medium text-dark">{text}</span>
    </div>
  );
}
