import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import Header from "@/components/Header/Header";


const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'RentalCar',
    description: 'Rental car application',
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={manrope.variable} data-scroll-behavior="smooth">
            <body>
                <QueryProvider>
                    <Header />
                    {children}
                </QueryProvider></body>
        </html>
    );
}
