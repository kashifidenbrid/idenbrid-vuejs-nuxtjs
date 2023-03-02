<template>
    <div>
      <Nav />
      <PageHeader title="About Company" />
      <ceo-message-section/>
      <Footer />
    </div>
  </template>
  <script>
    import Nav from "../components/Nav";
    import PageHeader from "../components/PageHeader";
    import Footer from "../components/Footer";
    import CompanySection from "../components/CompanySection";
import CeoMessageSection from '../components/CeoMessageSection.vue';
    export default {
      components: {
       CompanySection,
        Footer,
        PageHeader,
        Nav,
        CeoMessageSection,
      },
      head(){
        return {
          title: "Idenbrid | Blog Sidebar"
        }
      }
    }
  </script>
  