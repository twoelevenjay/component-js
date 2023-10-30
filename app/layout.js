import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { getFaviconInfo } from "@/utils";
import dbLess from "@/dbLess";
dynamic(() => import(`@/themes/${dbLess.settings.themeName}/globals.css`));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ComponentJS",
  description: "Component based development with NextJS",
};

export default async function RootLayout({ children }) {
    const faviconInfo = await getFaviconInfo(dbLess.settings.themeName);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/api/favicon" type={faviconInfo.path} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
