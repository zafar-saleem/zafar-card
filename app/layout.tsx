import type { Metadata } from "next";
import { GlobalStyles } from "@/theme/globals";
import Providers from "./styled-providers";

export const metadata: Metadata = {
  title: "Zafar Saleem | JavaScript | React | React Hooks | Redux | Node | Express | MongoDB",
  description: "This is Zafar Saleem personal site where you can find his technical/software engineering skills and links to his Medium blogs, Github profile, Gitlab profile, Linkedin profile, Instagram profile, link to his CV/Resume in .pdf format.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  )
}
