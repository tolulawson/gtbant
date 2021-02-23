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

          <meta name="title" content="GTBant — Wouldn't you rather bant with us?" />
          <meta name="description" content="Rant, vent and dunk on the Useless Bank" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gtbant.lol/" />
          <meta property="og:title" content="GTBant — Wouldn't you rather bant with us?" />
          <meta property="og:description" content="Rant, vent and dunk on the Useless Bank" />
          <meta property="og:image" content={`${typeof window !== 'undefined' ? window.location.origin : ''}/preview.jpg`}>

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://gtbant.lol/" />
          <meta property="twitter:title" content="GTBant — Wouldn't you rather bant with us?" />
          <meta property="twitter:description" content="Rant, vent and dunk on the Useless Bank" />
          <meta property="twitter:image" content={`${typeof window !== 'undefined' ? window.location.origin : ''}/preview.jpg`} />
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
