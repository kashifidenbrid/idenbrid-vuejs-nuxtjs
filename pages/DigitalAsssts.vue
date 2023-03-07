<template>
  <div>
    <Nav />
    <PageHeader title="Digital Assets" />
    <DigitalAssetsPage />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import DigitalAssetsPage from "../components/DigitalAssetsPage";
  export default {
    components: {
      DigitalAssetsPage,
      Footer,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Idenbrid | Digital Assets"
      }
    }
  }
</script>
