<template>
  <div>
    <section class="banner-section banner-one">
      <div class="left-based-text">
        <div class="base-inner">
          <div class="hours">
            <ul class="clearfix">
              <li><span>mon - fri</span></li>
              <li><span>9am - 6pm</span></li>
            </ul>
          </div>
          <div class="social-links">
            <ul class="clearfix">
              <li><a href="https://twitter.com/idenbridinc" target="_blank"><span>Twitter</span></a></li>
              <li><a href="#"><span>Facebook</span></a></li>
              <li><a href="https://www.youtube.com/channel/UC5ENsxgAQIqVfBIMy-Fp-0w" target="_blank"><span>Youtube</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="banner-carousel">

        <no-ssr> <!-- important to add no-ssr-->
          <carousel :items="1">
        <!-- Slide Item -->
              <!-- Slide Item -->
        <div class="slide-item">
          <div class="image-layer" style="background-image: url(/images/main-slider/banner4.jpg);"></div>
          <div class="left-top-line"></div>
          <div class="right-bottom-curve"></div>
          <div class="right-top-curve"></div>
          <div class="auto-container">
            <div class="content-box">
              <div class="content">
                <div class="inner">
                  <div class="sub-title">welcome to Idenbrid Company</div>
                  <h1>Smart Web <br>Development Company</h1>
                  <div class="link-box">
                  <div class="sub-title">Resolve your user pane.</div>
                    <nuxt-link class="theme-btn btn-style-one" to="/about">
                      <i class="btn-curve"></i>
                      <span class="btn-title">Discover More</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- <div class="slide-item">
          <div class="image-layer" style="background-image: url(/images/main-slider/banner4.jpg);">
          </div>
          <div class="left-top-line"></div>
          <div class="right-bottom-curve"></div>
          <div class="right-top-curve"></div>
          <div class="auto-container">
            <div class="content-box">
              <div class="content">
                <div class="inner">
                  <div class="sub-title">Creative ideas and</div>
                  <h1>ONE TEAM",By abundant EXPERIENCE, <br>By TECHNOLOGY,By passionate PASSION <br>Design Agency</h1>
                  <div class="sub-title">Resolve your user pane.</div>
                  <div class="link-box">
                    <nuxt-link class="theme-btn btn-style-one" to="/about">
                      <i class="btn-curve"></i>
                      <span class="btn-title">Discover More</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Slide Item -->
        <div class="slide-item">
          <div class="image-layer" style="background-image: url(/images/main-slider/banner2.jpg);"></div>
          <div class="left-top-line"></div>
          <div class="right-bottom-curve"></div>
          <div class="right-top-curve"></div>
          <div class="auto-container">
            <div class="content-box">
              <div class="content">
                <div class="inner">
                  <div class="sub-title">welcome to Idenbrid Comapny</div>
                  <h1>Smart Web <br>Development Company</h1>
                  <div class="link-box">
                    <nuxt-link class="theme-btn btn-style-one" to="/about">
                      <i class="btn-curve"></i>
                      <span class="btn-title">Discover More</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          </carousel>
        </no-ssr>

      </div>
    </section>

  </div>

</template>

<script>

  export default {
    name: "Banner",
  }
</script>

<style scoped>

</style>
