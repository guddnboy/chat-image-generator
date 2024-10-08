import type { Metadata } from "next";
import "../styles/reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "채팅 이미지 생성기",
  description: "채팅방 미리보기 이미지를 생성하는 프로젝트입니다. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-[990px] mx-auto">{children}</body>
    </html>
  );
}
