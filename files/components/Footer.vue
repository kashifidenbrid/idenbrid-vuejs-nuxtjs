<template>
  <div>
  <footer class="main-footer">
    <div class="auto-container">
      <!--Widgets Section-->
      <div class="widgets-section">
        <div class="row clearfix">

          <!--Column-->
          <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="footer-widget logo-widget">
              <div class="widget-content">
                <div class="logo">
                  <nuxt-link to="/"><img id="fLogo" src="/images/idenbrid-logo.png" alt="" /></nuxt-link>
                </div>
                <div class="text">Welcome to our web development company. </div>
                <ul class="social-links clearfix">
                  <li><a href="https://www.facebook.com/idenbrid/"><span class="fab fa-facebook-square"></span></a></li>
                  <li><a href="https://twitter.com/idenbridinc"><span class="fab fa-twitter"></span></a></li>
                  <li><a href="https://www.youtube.com/channel/UC5ENsxgAQIqVfBIMy-Fp-0w"><span class="fab fa-play"></span></a></li>
                  <!-- <li><a href="#"><span class="fab fa-instagram"></span></a></li> -->
                  <!-- <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li> -->
                </ul>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="footer-widget links-widget">
              <div class="widget-content">
                <h6>Explore</h6>
                <div class="row clearfix">
                  <div class="col-md-6 col-sm-12">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Our Portfolio</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                  <!-- <div class="col-md-6 col-sm-12">
                    <ul>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Help</a></li>
                    </ul>
                  </div> -->
                </div>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="footer-widget info-widget">
              <div class="widget-content">
                <h6>Contact</h6>
                <ul class="contact-info">
                  <li class="address"><span class="icon flaticon-pin-1"></span> Basement 1 Floor 176, DHA Y-block <br>Lahore, Pakistan</li>
                  <li><span class="icon flaticon-call"></span><a href="tel:0306 4041221">0306 4041221</a></li>
                  <li><span class="icon flaticon-email-2"></span><a
                    href="mailto:contactusen@idenbrid.com">contactusen@idenbrid.com</a></li>
                </ul>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="footer-widget newsletter-widget">
              <div class="widget-content">
                <h6>Newsletter</h6>
                <div class="newsletter-form">
                  <form method="post" action="#">
                    <div class="form-group clearfix">
                      <input type="email" name="email" value="" placeholder="Email Address"
                             required="">
                      <button type="submit" class="theme-btn"><span
                        class="fa fa-envelope"></span></button>
                    </div>
                  </form>
                </div>
                <div class="text">Sign up for our latest news & articles. We won’t give you spam
                  mails.</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="inner clearfix">
          <div class="copyright">&copy; copyright 2020 by Idenbrid.com</div>
        </div>
      </div>
    </div>

  </footer>

    <a @click="scrollTop" class="scroll-to-target scroll-to-top" :style="`display: ${scrollBtn ? 'inline' : 'none'}`" href="#"><i class="fa fa-angle-up"></i></a>

  </div>

</template>

<script>
  export default {
    name: "Footer",
    data(){
      return {
        scrollBtn: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    methods: {

      handleScroll () {

        if (window.scrollY > 70) {
          this.scrollBtn = true
        }
        else if (window.scrollY < 70) {
          this.scrollBtn = false
        }
      },

      scrollTop () {
        window.scrollTo(0, 0);
      }


    }
  }
</script>

<style scoped>

</style>
