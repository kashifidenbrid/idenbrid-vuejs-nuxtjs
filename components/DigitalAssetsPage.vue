<template>
  <section class="gallery-section">
    <div class="auto-container">
      <div class="container-slim">
      </div>
      <div class="section mediakit">
        <div class="container-slim">
          <div class="mb-50">
            <h5>Logo / ロゴ</h5>
            <div class="kit kit-slim"><a href="/images/idenbrid-logo.png" download="image" target="_blank"
                rel="noopener"><img src="/images/idenbrid-logo.png" alt=""></a></div>
            <div class="kit kit-slim"><a href="/images/1.png"><img src="/images/1.png" alt=""></a></div>
          </div>
          <div>
          <h5>Key Visual </h5>
          <p> It will be an asset that represents our brand and services.</p>
          <div class="kit"><a href="/images/image-(1).png" download="image" rel="noopener"><img
                src="/images/image-(1).png" alt="Digital assets Banner image"></a></div>
          <div class="kit"><a href="/assets/img/image-(2).png" download="image" rel="noopener"><img
                src="/images/image-(2).png" alt="Digital assets key visual image"></a></div>
          <div class="kit"><a href="/images/image-(3).png" download="image" rel="noopener"><img
                src="/images/image-(3).png" alt="Digital assets key visual image"></a></div>
          <div class="kit"><a href="/images/image-(4).png" download="image" rel="noopener"><img
                src="/images/image-(4).png" alt="Digital assets key visual image"></a></div>
          <div class="kit"><a href="/images/image-(5).png" download="image" rel="noopener"><img
                src="/images/image-(5).png" alt="Digital assets key visual image"></a></div>
          <div class="kit"><a href="/images/image-(6).png" download="image" rel="noopener"><img
                src="/images/image-(6).png" alt="Digital assets key visual image"></a></div>
          <div class="kit"><a href="/images/image-(7).png" download="image" rel="noopener"><img
                src="/images/image-(7).png" alt="Digital assets key visual image"></a></div>
        </div>
          <div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "DigitalAssetsPage",
    data() {

    },
    mounted() {

    },
  }
</script>

<style scoped>
  .mediakit .kit.kit-slim {
    max-width: 300px;

  }

  .mediakit .kit a {
    display: inline-block;
    border: 5px solid #eee
  }

  .mediakit .kit a img {
    max-width: 100%;
    width: 100%
  }

  .mediakit .kit {
    margin-bottom: 30px;
    max-width: 580px;
    position: relative; 
  }

  .mediakit .kit::before {
    content: '';
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background-color: rgba(50, 50, 50, .6);
    background-image: url('/images/icon-dl.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 17px 17px;
    z-index: 99
  }

  .Intro_idenbrid_h2 span,
  .mediakit h2 span {
    display: block !important;
    margin-bottom: 10px;
    font-size: 13px;
    letter-spacing: 2px
  }

  .mediakit h5 {
    display: inline-block;
    padding: 5px 15px;
    font-weight: 700;
    font-size: 16px;
    background: #eee;
    border-radius: 30px;
    margin-bottom: 30px
  }

  .btn-black {
    background: linear-gradient(120deg, #383a40, #141517);
    display: block;
    width: 300px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    margin: auto
  }

  .digital-subcontents__text {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    width: calc((100% - 415px)/ 1);
    text-align: center;
    margin: auto
  }
</style>