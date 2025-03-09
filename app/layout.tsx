import type {Metadata} from "next";
import {ReactNode} from "react";
import siteConfig from "@/contants/siteConfig";
import "@picocss/pico";
import "./globals.css";

export const metadata: Metadata = {
    title: siteConfig.TITLE,
    description: siteConfig.DESCRIPTION,
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" data-theme="light">
        <body>{children}</body>
        </html>
    );
}
