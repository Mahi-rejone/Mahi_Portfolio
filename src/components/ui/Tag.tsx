import type { ReactNode } from "react";

/** Small outlined pill, for use on dark surfaces. Render inside a <ul>. */
export default function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-neutral-200">
      {children}
    </li>
  );
}
