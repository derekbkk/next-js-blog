import ContactForm from '../components/contact/contact-form';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="Contact Derek - send me your messages and let me know how I can help you."
        />
      </Head>
      <ContactForm />
    </>
  );
}
