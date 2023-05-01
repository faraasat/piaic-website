"use client";

import { ThemeProvider as NextThemes } from "next-themes";

const ThemeProvider = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) => {
  return <NextThemes attribute="data-*">{children}</NextThemes>;
};

export default ThemeProvider;
