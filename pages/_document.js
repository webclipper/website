import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="/static/plugins/bootstrap-4.3.1/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/plugins/slick-1.8.1/slick.css" />
          <link rel="stylesheet" href="/static/plugins/meanmenu/meanmenu.css" />
          <link rel="stylesheet" href="/static/fonts/ep-icon-fonts/css/ep-font.css" />
          <link rel="stylesheet" href="/static/fonts/fontawesome-5/css/all.min.css" />
          <link rel="stylesheet" href="/static/css/settings.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="//at.alicdn.com/t/font_1373112_esel0k5fpvj.js"></script>
          <script src="/static/plugins/jquery/jquery.min.js"></script>
          <script src="/static/plugins/jquery/jquery-migrate.min.js"></script>
          <script src="/static/plugins/bootstrap-4.3.1/js/bootstrap.bundle.js"></script>
          <script src="/static/plugins/slick-1.8.1/slick.min.js"></script>
          <script src="/static/plugins/meanmenu/jquery.meanmenu.js"></script>
          <script src="/static/js/active.js"></script>
        </body>
      </html>
    );
  }
}
