<template>
    <div>
      <Nav />
      <PageHeader title="About Company" />
      <CompanySection/>
      <Footer />
    </div>
  </template>
  <script>
    import Nav from "../components/Nav";
    import PageHeader from "../components/PageHeader";
    import Footer from "../components/Footer";
    import CompanySection from "../components/CompanySection";
    export default {
      components: {
       CompanySection,
        Footer,
        PageHeader,
        Nav
      },
      head(){
        return {
          title: "Idenbrid | Blog Sidebar"
        }
      }
    }
  </script>
  