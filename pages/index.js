import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import CountryLinks from "../components/CountryLinks";
import JoinWLT from "../components/JoinWLT";
import Experiences from "../components/Experiences";
import EmptyComponent from "../components/EmptyComponent";
import ERQuizHomepageCTA from "../components/ERQuizHomepageCTA";

export default function Home() {
  return (
    <>
      <SeoHead />
      <Layout>
        <JoinWLT />
        <Hero />
        <EmptyComponent />
        <ERQuizHomepageCTA />
        <CountryLinks />
        <Experiences />
        <ContactForm />
      </Layout>
    </>
  );
}
