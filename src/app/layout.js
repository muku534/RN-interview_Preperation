import './globals.css';

export const metadata = {
  title: 'React Native Architecture Deep Dive',
  description: 'An interactive guide to mastering React Native internals, from the Bridge to JSI and Fabric.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#09090b" />
        <meta name="darkreader-lock" />
      </head>
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
