<template>
    <div>
      <Nav />
      <PageHeader title="Contact" />
      <OfficeSection />
      <Footer />
    </div>
  </template>
  <script>
    import Nav from "../components/Nav";
    import PageHeader from "../components/PageHeader";
    import Footer from "../components/Footer";
    import OfficeSection from "../components/OfFiceSection";
    export default {
      components: {
        OfficeSection,
        Footer,
        PageHeader,
        Nav,
      },
      head(){
        return {
          title: "Idenbrid | Office Enviornment"
        }
      }
    }
  </script>
  