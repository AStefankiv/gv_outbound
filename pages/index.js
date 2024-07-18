import ContactForm from "../components/ContactForm";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import CountryLinks from "../components/CountryLinks";

export default function Home() {
  return (
    <>
      <SeoHead title='Work learn travel' />
      <Layout>
        <Hero />
        <CountryLinks />
        {/* <ContactForm /> */}
        {/* <Pricing /> */}
      </Layout>
    </>
  );
}
