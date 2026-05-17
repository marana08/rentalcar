import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import Header from "@/components/Header/Header";
import { Toaster } from 'react-hot-toast';


const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: 'RentalCar',
    description: 'Find your perfect rental car for any journey.',
    icons: {
        icon: '/favicon.png',
    },
    openGraph: {
        title: 'RentalCar',
        description: 'Find your perfect rental car for any journey.',
        url: '/',
        siteName: 'RentalCar',
        images: [
            {
                url: '/hero-home.jpgs',
                width: 1200,
                height: 630,
                alt: 'RentalCar hero image',
            },
        ],
        type: 'website',
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
                    <Toaster position="top-right" />
                </QueryProvider></body>
        </html>
    );
}
