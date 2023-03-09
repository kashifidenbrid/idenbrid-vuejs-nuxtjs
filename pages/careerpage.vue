<template>
    <div>
      <Nav />
      <PageHeader title="Career" />
      <Career />
      <Footer />
    </div>
  </template>
  <script>
    import Nav from "../components/Nav";
    import PageHeader from "../components/PageHeader";
    import Footer from "../components/Footer";
    import Career from "../components/Career";
    export default {
      components: {
        Career,
        Footer,
        PageHeader,
        Nav
      },
      head(){
        return {
          title: "Idenbrid | Career"
        }
      }
    }
  </script>
  