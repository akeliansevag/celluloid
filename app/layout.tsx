import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const instrumentsans = Instrument_Sans({
    variable: "--instrument-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Celluloid",
        template: "%s | Celluloid",
    },
    description: "Quanto - Creative Agency Template",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${instrumentsans.variable}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
