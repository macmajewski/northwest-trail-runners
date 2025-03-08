import type {Metadata} from 'next';
import '@picocss/pico'
import "./globals.css";

export const metadata: Metadata = {
    title: 'Northwest Trail Runners',
    description: 'Trail running community based in Portland, OR. Come join us!',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-theme="light">
            <body>{children}</body>
        </html>
    );
}
