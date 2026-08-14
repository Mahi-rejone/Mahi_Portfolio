import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div
      className={`${className ?? ""} w-full z-0 px-4 py-6 sm:px-8 sm:py-8 lg:px-16 lg:py-8 xl:p-25 xl:pt-5 xl:pb-25`}
    >
      {children}
    </div>
  );
}