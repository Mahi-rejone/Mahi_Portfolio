import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Standard horizontal and vertical page padding for a section's content. */
export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "z-0 w-full px-4 py-6 sm:px-8 sm:py-8 lg:px-16 lg:py-8 xl:p-25 xl:pt-5 xl:pb-25",
        className,
      )}
    >
      {children}
    </div>
  );
}
