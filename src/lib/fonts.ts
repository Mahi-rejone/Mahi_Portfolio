import { Archivo_Black, Birthstone, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const birthstone = Birthstone({
  weight: "400",
  variable: "--font-birthstone",
  subsets: ["latin"],
});

/** Used for the highlighted headline words. */
export const archivo = Archivo_Black({
  weight: "400",
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const fontVariables = `${montserrat.variable} ${birthstone.variable} ${archivo.variable}`;
