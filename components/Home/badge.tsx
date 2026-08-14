// components/TrustBadge.tsx
import { ShieldCheck } from 'lucide-react';

interface TrustBadgeProps {
  text: string;
  className?: string;
}

export default function TrustBadge({ text, className = '' }: TrustBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-light py-2 ${className}`}>
      <ShieldCheck className="h-5 w-5 text-emerald-600" />
      <span className="text-sm font-medium text-dark">{text}</span>
    </div>
  );
}