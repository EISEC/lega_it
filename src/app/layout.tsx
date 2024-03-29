import type {Metadata} from "next";
import "./globals.css";
import HeaderTop from "@/components/header/headerTop";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={'bg-black'}>
        <HeaderTop/>
        {children}
        </body>
        </html>
    );
}
