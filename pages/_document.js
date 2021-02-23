/* eslint-disable jsx-quotes */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' rel='stylesheet' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@tolulawson' />
          <meta name='twitter:creator' content='@tolulawson' />
          <meta property='og:url' content='https://gtbant.lol/' />
          <meta property='og:title' content="GTBant — Wouldn't you rather bant with us?" />
          <meta property='og:description' content="Rant, vent and dunk on the Useless Bank -- because you can! This bank no longer cares about its customers and deserves all the condemnation it's getting" />
          <meta property='og:image' content='https://i.ibb.co/GH15jt7/preview.jpg' />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://gtbant.lol/' />
          <meta property='og:title' content="GTBant — Wouldn't you rather bant with us?" />
          <meta property='og:description' content="Rant, vent and dunk on the Useless Bank -- because you can! This bank no longer cares about its customers and deserves all the condemnation it's getting" />
          <meta property='og:image' content='https://i.ibb.co/GH15jt7/preview.jpg' />

          <meta name='title' content="GTBant — Wouldn't you rather bant with us?" />
          <meta name='description' content="Rant, vent and dunk on the Useless Bank -- because you can! This bank no longer cares about its customers and deserves all the condemnation it's getting" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
