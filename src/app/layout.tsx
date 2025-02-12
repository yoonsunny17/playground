import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/common/CustomCursor";

export const metadata: Metadata = {
  title: "Playground | Portfolio",
  description: "yoonsunny17의 포트폴리오입니다.",
  keywords: [
    "yoonsunny17",
    "이력서",
    "포트폴리오",
    "웹 개발",
    "개발자",
    "프론트엔드",
  ],
  icons: {
    icon: "/images/mynaui_heart.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
