import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata = {
  title: 'Scary Aisle - Find Your Next Horrifying Experience',
  description: 'Welcome to the Scary Aisle. The perfect place to find original scary stories to read at night. Get ready to face the world of the unknown and experience the unsettling fear of the stories',
  keywords: 'scary, stories, night, read, online, horror, creepy, original',
  alternates: {
    canonical: 'https://www.scaryaisle.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}