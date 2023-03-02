<template>
  <section class="live-section">
    <div class="auto-container">
      <div class="sec-title centered">
        <h2>「Update the future in style」<span class="dot">.</span></h2>
        <p >With the company's mission of "updating the future with cool technology," IdenBrid takes a customer-oriented approach, making creative proposals on how IT development can contribute to business, and providing IT solutions in line with these proposals。</p>
      </div>
      <div class="main-image-box">
        <div class="image-layer" style="background-image: url(/images/resource/recruite.webp);"></div>
        <div class="inner clearfix">
          <div class="round-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="round-inner">
              <div class="vid-link">
                <a href="https://www.youtube.com/watch?v=Tz_SH7bD-Zg&ab_channel=IDENBRID%E3%83%BB%E3%82%A2%E3%82%A4%E3%83%87%E3%83%B3%E3%83%96%E3%83%AA%E3%83%83%E3%83%89Ch." class="glightbox2">
                  <div class="icon">
                    <span class="flaticon-play-button-1"></span>
                    <i class="ripple"></i></div>
                </a>
              </div>
              <div class="title">
                <h3>agency that gets <br>excited about</h3>
              </div>
              <div class="more-link"><nuxt-link to="/about">Read More</nuxt-link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "LiveSection",
      mounted() {
        new GLightbox({
          selector: '.glightbox2',
          touchNavigation: true,
          loop: true,
          autoplayVideos: true
        });
      }

    }
</script>

<style scoped>

</style>
