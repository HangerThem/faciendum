import type { Metadata } from "next";
import { TodoProvider } from "@/contexts/todoAppContext";
import { ThemeProvider } from "@/contexts/themeAppContext";
import GlobalStyle from "@/styles/globalStyles";
import "@/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" {...htmlProps}>
      <body {...bodyProps}>
        <ThemeProvider {...themeProps}>
          <GlobalStyle />
          <TodoProvider>{children}</TodoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

const metadata: Metadata = {
  title: "Faciendum",
  description: "A todo app built with Next.js, React, and TypeScript.",
};

const htmlProps: React.HTMLAttributes<HTMLHtmlElement> = {};
const bodyProps: React.HTMLAttributes<HTMLBodyElement> = {};
const themeProps: React.HTMLAttributes<HTMLElement> = {};

export { metadata };
export default RootLayout;
