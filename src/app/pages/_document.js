import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var savedTheme = localStorage.getItem('theme') || 'dark';
              document.documentElement.classList.toggle('dark', savedTheme === 'dark');
            })();
          `
        }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}