import Document, { Head, Main, NextScript } from 'next/document';
import { iconFontUrl } from '../common';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src={iconFontUrl}></script>
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=UA-118974506-3'
          ></script>
          <script src='/static/js/ga.js'></script>
        </body>
      </html>
    );
  }
}
