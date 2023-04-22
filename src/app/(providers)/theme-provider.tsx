"use client";

import { ThemeProvider as NextThemes } from "next-themes";

function ThemeProvider({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return <NextThemes attribute="class">{children}</NextThemes>;
}

export default ThemeProvider;
