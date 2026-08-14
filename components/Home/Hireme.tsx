import { CustomIcon } from "../icon";
import Link from "next/link";

export default function HireMe() {
  return (
    <div className="flex items-center justify-center">
      {/*
        The parent (LeftSection) uses scale-[0.6] on mobile and scale-100 on desktop,
        so this component's intrinsic size stays constant — scaling happens outside.
        w-40 h-40 slightly reduced from w-48 h-48 so even at scale-100 it's compact.
      */}
      <div className="w-40 h-40 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <CustomIcon
            className="w-auto h-full animate-spin-very-slow font-bold"
            style={{
              transformOrigin: "center center",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
          <Link
            href="mailto:mahirejone@gmail.com"
            className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 bg-black text-light shadow-md border-solid border-dark w-20 h-20 rounded-full text-base font-medium hover:bg-dark"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
}