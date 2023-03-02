<template>
  <section class="gallery-section">
    <div class="auto-container">
      <!--MixitUp Galery-->
      <div class="mixitup-gallery">
          <!--Filter-->
          <div class="filters centered clearfix">
            <ul class="filter-tabs filter-btns clearfix">
              <li class="filter mixitup-control-active" data-role="button" data-filter="all">All<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".webdevelopment">Web Development<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".webdesign">Web Design<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".uiuxdesign">UI/UX Design<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".web-application">Web Application<sup></sup></li>
            </ul>
        </div>
        <div class="filter-list row">
          <!-- Gallery Item -->
          <div class="gallery-item mix all web-application col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_01.png" alt=""></figure>
              <a href="/images/gallery/works_01.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all uiuxdesign web-application col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_02.png" alt=""></figure>
              <a href="/images/gallery/works_02.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all webdevelopment web-application col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_03.png" alt=""></figure>
              <a href="/images/gallery/works_03.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all webdevelopment webdesign col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_04.png" alt=""></figure>
              <a href="/images/gallery/works_04.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div
            class="gallery-item mix all webdevelopment webdesign uiuxdesign web-application col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_05.png" alt=""></figure>
              <a href="/images/gallery/works_05.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all webdesign uiuxdesign col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_06.png" alt=""></figure>
              <a href="/images/gallery/works_06.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Graphic</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "GalleryPage",
    data () {
      return {
        mixer: null
      }
    },
    mounted () {
      const containerEl = document.querySelector('.filter-list')
      this.mixer = new this.mixitup(containerEl, {
      });

      new GLightbox({
        selector: '.lightbox-image',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    },
  }
</script>

<style scoped>

</style>
