import ContactForm from "../components/ContactForm";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import CountryLinks from "../components/CountryLinks";
import JoinWLT from "../components/JoinWLT";

export default function Home() {
  return (
    <>
      <SeoHead />
      <Layout>
        <JoinWLT />
        <Hero />
        <CountryLinks />
        <ContactForm />
        {/* <Pricing /> */}
      </Layout>
    </>
  );
}
