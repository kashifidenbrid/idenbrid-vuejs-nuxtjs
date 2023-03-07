<template>
  <section class="agency-section">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Left Column-->
        <div class="left-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="inner">
            <div class="sec-title">
              <h2>Best design Agency <br>solutions <span class="dot">.</span></h2>
            </div>

            <!--Default Tabs-->
            <div class="default-tabs tabs-box">

              <div class="agency-tabs">

                <!--Tab-->
                <input type="radio" name="tabs" id="tab-one" checked="checked">
                <label for="tab-one" class="tab-btn">Our Mission</label>
                <div class="tab">
                  <div class="active-tab">
                    <div class="content">
                      <div class="text">At our software company, our mission is to empower businesses and individuals
                        with cutting-edge technology solutions that transform the way they work, communicate, and
                        innovate.

                        We strive to deliver software products and services that are intuitive, efficient, and reliable,
                        enabling our clients to achieve their goals with ease and confidence.

                        Our team of highly skilled and passionate professionals is dedicated to providing exceptional
                        customer service, technical expertise, and collaborative partnerships that foster growth,
                        innovation, and success for our clients.

                        We are committed to staying at the forefront of technological advancements, continuously
                        improving our offerings, and embracing change to meet the evolving needs of our clients and the
                        marketplace.

                        Our ultimate goal is to be recognized as a trusted partner and thought leader in the software
                        industry, delivering innovative solutions that drive business results and exceed customer
                        expectations.</div>
                    </div>
                  </div>
                </div>

                <!--Tab-->
                <input type="radio" name="tabs" id="tab-two" checked="checked">
                <label for="tab-two" class="tab-btn">Our Vision</label>
                <div class="tab">
                  <div class="active-tab">
                    <div class="content">
                      <div class="text">Our software company's vision is to be a global leader in the digital
                        transformation of businesses and individuals, enabling them to thrive in the digital age.

                        We envision a future where our software products and services empower organizations to automate,
                        optimize, and innovate their operations, achieve greater efficiency and productivity, and unlock
                        new opportunities for growth and success.

                        We strive to be at the forefront of technological advancements, continuously exploring new
                        possibilities, and pushing the boundaries of what is possible.

                        Our team of experts is dedicated to delivering world-class software solutions that are not only
                        powerful and reliable but also user-friendly and accessible to all.

                        We aspire to be a company that inspires and motivates our clients, employees, and partners to
                        reach their full potential, creating a culture of innovation, collaboration, and excellence.

                        Ultimately, we aim to make a positive impact on the world, by enabling businesses and
                        individuals to make the most of the opportunities offered by technology, and contribute to a
                        better, more connected, and more prosperous future for all.</div>
                    </div>
                  </div>
                </div>

                <!--Tab-->
                <input type="radio" name="tabs" id="tab-three" checked="checked">
                <label for="tab-three" class="tab-btn">Our History</label>
                <div class="tab">
                  <div class="active-tab">
                    <div class="content">
                      <div class="text" >
                        <p >
                        Our software company was founded in [2020] with a vision to provide innovative
                        technology solutions to businesses and individuals. From our humble beginnings as a small
                        startup, we have grown to become a leading software company with a global presence and a
                        reputation for excellence.

                        Over the years, we have continuously evolved and adapted to the changing needs of the
                        marketplace, always staying ahead of the curve in terms of technology trends and innovations. We
                        have expanded our offerings to include a wide range of software products and services, covering
                        everything from custom software development to cloud solutions, AI and machine learning,
                        cybersecurity, and more. </p>
                          <span onclick="openFunction()" id="click-down">Read more</span>
                       <p id="onclick-close-prgh"> Through our dedication to delivering high-quality products and exceptional customer service, we
                        have built a loyal customer base of businesses across industries and geographies. We have also
                        forged strong partnerships with leading technology vendors, enabling us to offer our clients the
                        best solutions and expertise available.  <span onclick="closeFunction()" id="click-down">Read more</span>
                        </p>

                       </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <!--Right Column-->
        <div class="right-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="inner">
            <div class="text">There are many variations of passages of available but the majority have
              suffered alteration in some form, by injected humou or randomised words which don't look
              even slightly believable.</div>
            <div class="featured-block-two clearfix">
              <div class="image"><img src="/images/resource/update.png" alt=""></div>
              <div class="text">
                <ul>
                  <li>Nsectetur cing elit.</li>
                  <li>Suspe ndisse suscipit sagittis leo.</li>
                  <li>Entum estibulum dignissim posuere.</li>
                  <li>If you are going to use a passage.</li>
                  <li>Lorem Ipsum on the tend to repeat.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style>
  .agency-tabs {
    display: flex;
    flex-wrap: wrap;
  }

  .agency-tabs label {
    order: 1;
    display: block;
    padding: 4px 31px;
    margin-right: 0.2rem;
    cursor: pointer;
    background: #FFAA17;
    background: var(--thm-base);
    font-weight: 500;
    transition: background ease 0.2s;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
  }

  .agency-tabs .tab {
    order: 99;
    flex-grow: 1;
    width: 100%;
    display: none;
    padding: 1rem;
    background: #F4F5F8;
  }

  .default-tabs .agency-tabs .text {
    position: relative;
    font-size: 20px;
    font-weight: 300;
    color: var(--thm-text);
    line-height: 1.7em;
    letter-spacing: 2px;
  }

  .agency-tabs input[type="radio"] {
    display: none;
  }

  .agency-tabs input[type="radio"]:checked+label {
    background: #F4F5F8;
    color:#333;
  }

  .agency-tabs input[type="radio"]:checked+label+.tab {
    display: block;
  }

  @media (max-width: 45em) {

    .agency-tabs .tab,
    .agency-tabs label {
      order: initial;
    }

    .agency-tabs label {
      width: 100%;
      margin-right: 0;
      margin-top: 0.2rem;
    }
  }

</style>
