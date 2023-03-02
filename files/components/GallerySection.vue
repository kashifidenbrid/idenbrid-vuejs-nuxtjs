<template>
  <section class="gallery-section">
    <div class="auto-container">
      <!--MixitUp Galery-->
      <div class="mixitup-gallery">
        <div class="upper-row clearfix">
          <div class="sec-title">
            <h2>work showcase <span class="dot">.</span></h2>
          </div>
          <!--Filter-->
          <div class="filters clearfix">
            <ul class="filter-tabs filter-btns clearfix">
              <li class="filter mixitup-control-active" data-role="button" data-filter="all">All<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".branding">Branding<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".illustration">illustration<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".photography">Photography<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".web-design">Web Design<sup></sup></li>
            </ul>
          </div>
        </div>
        <div class="filter-list row">
          <!-- Gallery Item -->
          <div class="gallery-item mix all web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_01.png" alt=""></figure>
              <a href="/images/gallery/works_01.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Web Design</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all photography web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_02.png" alt=""></figure>
              <a href="/images/gallery/works_02.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Web Design</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all branding web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_03.png" alt=""></figure>
              <a href="/images/gallery/works_03.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Web Design</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all branding illustration col-lg-4 col-md-6 col-sm-12">
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
          <div class="gallery-item mix all branding illustration photography web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/works_05.png" alt=""></figure>
              <a href="/images/gallery/works_05.png" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>Web Design</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all illustration photography col-lg-4 col-md-6 col-sm-12">
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
    name: "GallerySection",
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
.image img{
height: 400px !important;
object-fit: cover;
}
</style>
