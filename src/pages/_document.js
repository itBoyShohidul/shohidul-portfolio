// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Your global head elements */}
          <meta
            name="description"
            content="Unlock Your Digital Potential with Our Expert Web Development and SEO Services! We are a team of skilled professionals specializing in MERN stack web development and cutting-edge SEO strategies. Offering seamless user experiences, our web development solutions leverage MongoDB, Express.js, React.js, and Node.js. Elevate your online presence with our SEO services, including keyword research, on-page optimization, and link building. With a focus on driving organic traffic and boosting search engine visibility, we deliver measurable results that align with your business goals. Partner with us for innovative web solutions and top-notch SEO expertise to stand out in the competitive digital landscape."
          />
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
