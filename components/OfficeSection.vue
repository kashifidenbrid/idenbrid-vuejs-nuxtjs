<template>
    <section class="office-section">
     <div class="auto-container">
        <div class="mv_textarea my-5">
            <h2 class="text-center">
                <p class="en entxt">OFFICE & ACCESS </p>
                <p class="jptxt">Introducing our headquarters in Lahore, Pakistan</p>
            </h2>
        </div>
        <main>
            <div class="lead_area">
                <div class="lead_inner">
                    <h3 class="lead_ttl fade_y on">
                        <h3 class="content-title">OFFICE ENVIRONMENT</h3>
                        The important thing is<br>Building an environment where the team wants to work
                    </h3>
                    <p class="lead_txt fade_y on">
                        Office where you spend much of your day。<br
                            class="pc">Since Corona, we have been working more and more in a remote environment, but we still value the presence of the office in our company. The power of a team gathered in one place and focused is amazing.
  Creating a space that makes people want to work at this company is a direction we will continue to aim for in the future to support our creativity.。</p>
                </div>
            </div>
           <div class="slider-title">
                <div class="swiper-pagination office-swiper-pagination"></div>
                <div class="swiper-button-next office-button-next"></div>
                <div class="swiper-button-prev office-button-prev"></div>
                <div class="swiper mySwiper-main">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="https://source.unsplash.com/random/600x600?sig=1" alt="Office access image">
                            <p>Entrance / Approach</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://source.unsplash.com/random/600x600?sig=7" alt="Office access image">
                            <p>Entrance / Approach</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://source.unsplash.com/random/600x600?sig=2" alt="Office access image">
                            <p>Entrance / Approach</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://source.unsplash.com/random/600x600?sig=3" alt="Office access image">
                            <p>Entrance / Approach</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://source.unsplash.com/random/600x600?sig=4" alt="Office access image">
                            <p>Entrance / Approach</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://source.unsplash.com/random/600x600?sig=5" alt="Office access image">
                            <p>Entrance / Approach</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://source.unsplash.com/random/600x600?sig=6" alt="Office access image">
                            <p>Entrance / Approach</p>
                        </div>

                    </div>
                </div>
            </div> 
            <div class="access--index highlight_blk">
                <div class="logo">
                    <h1>ACCEESS to Us</h1>
                </div>
                <div class="box flx aic jfc_sb">
                    <div class="map">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5116.628349312717!2d74.37810117146583!3d31.47108330229046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907530d966bf3%3A0x99ab6b175fc81d7d!2zSURFTkJSSUQgSU5DLiAvIOOCouOCpOODh-ODs-ODluODquODg-ODieekvg!5e0!3m2!1sen!2s!4v1668775614632!5m2!1sen!2s"
                            style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="text_area">
                        <p class="place">Pakistan Head Office<br>〒54000<br>Basement 1st floor, 176 Y-Block, DHA Phase3, Lahore,
                            Pakistan</p>
                        <p class="number">
                            TEL : <a href="tel:+923064041221" class="tel_link no_link">+92306-404-1221</a><br>
                            MAIL : <a href="mailto:contactusjp@idenbrid.com">contactusjp@idenbrid.com</a>
                        </p>
                        <p class="station">
                            Lahore Airportよ<br class="sp">15 minutes by car<br>
                            Gulberg center<br class="sp">20 minutes by car
                        </p>
                        <a href="https://www.google.com/maps/search/176+Y-Block,+DHA+Phase3,+Lahore,+Pakistan/@31.4722224,74.3767664,21z"
                            class="more_txt fade_y on" target="_blank">
                            <span class="underline">Google Map</span></a>
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>
</template>
 <script>
 
    export default {
        mounted() {
            var swiper = new Swiper(".mySwiper-main", {
                slidesPerView: 2.5,
                spaceBetween: 50,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    360: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2.3,
                        spaceBetween: 50,
                    },
                },
            });
        }
    };
</script>
<style>
    .btns-group {
        padding-bottom: 120px;
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .lead_area {
        padding: 15px 10% 250px;
    }
    .lead_area .lead_inner {
        display: flex;
        justify-content: flex-start;
    }
    .lead_area .lead_inner .lead_ttl {
        width: 50%;
        font-size: 26px;
        letter-spacing: 0.16px;
        line-height: 1.4;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
    }
    .lead_area .lead_inner .lead_ttl span {
        font-size: 13px;
        letter-spacing: 0.08em;
        display: inline-block;
        font-weight: bold;
        margin-bottom: 10px;
        font-family: DIN-Bold;
    }
    .lead_area .lead_inner .lead_txt {
        width: 50%;
        color: #000;
        font-size: 16px;
        letter-spacing: 0.06em;
        line-height: 32.2px;
    }
    .mySwiper-main {
        margin: 20px auto;
        height: 100%;
    }
    .swiper-slide p {
        margin-top: 15px;
        display: block;
        color: black;
        font-size: 14px;
        text-align: left;
        margin-left: 30px;
        font-family: DIN-Bold;
        font-weight: bold;
    }
    .mySwiper-main .swiper-wrapper .swiper-slide {
        display: block;
    }
    .slider-title {
        position: relative;
        height: 500px;
        margin-bottom: 70px;
    }
    .office-button-prev:after {
        font-size: 15px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
    }
    .office-button-next:after {
        font-size: 15px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
    }
    .office-button-next,
    .swiper-rtl .office-button-prev {
        top: -15%;
        right: 29%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #929191;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        color: #fff;
    }
    .access--index {
    background-color: #fff;
    padding: 100px 10%;
}
    .access--index .box {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-top: 50px;
    }
    .access--index .box .map {
    height: 20vw;
    transform: translateY(3%);
    transition: .6s;
    width: 50%;
}
.access--index .box .map iframe {
    height: 100%;
    width: 100%;
}
.access--index .box .text_area {
    padding: 0 60px 0 0;
    width: 45%;
}
.access--index .box .text_area p.place {
    margin-top: 34px;
}
.access--index .box .text_area p {
    color: #000;
    font-family: Noto Sans JP,sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .04em;
    line-height: 1.85;
    transform: translateY(10%);
    transition: .6s;
}
.access--index .box .text_area p.number {
    margin-top: 15px;
}
.access--index .box .text_area p.station {
    margin-bottom: 40px;
    margin-top: 20px;
}
.access--index .box .text_area .more_txt {
    color: #000;
    font-family: DIN;
    font-size: 16px;
    letter-spacing: .06em;
    padding-right: 20px;
    position: relative;
    text-transform: uppercase;
}
.mv_textarea .entxt {
    display: block;
    font-size: 70px;
    letter-spacing: .1em;
    text-transform: uppercase;
}
.jptxt{
    display: block;
    font-size: 40px;
    text-transform: uppercase;
}
.content-title{
    display: block;
    font-size: 32px;
    text-transform: uppercase;
}
.logo h1 {
    font-size: 40px;
    text-align: center;

}
    .office-button-prev,
    .swiper-rtl .office-button-next {
        left: auto;
        right: 34%;
        top: -15%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #868686;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        color: #fff;
    }
    .office-swiper-pagination {
        left: 9%;
        width: 100%;
        top: -15%;
        font-size: 20px;
        font-weight: 600;
        font-family: DIN-Bold;
    }
    
    @media screen and (max-width: 896px) {
        .lead_area {
            padding: 80px 5%;
        }
        .lead_area .lead_inner {
            display: block;
            padding: 0;
        }
        .lead_area .lead_inner .lead_ttl {
            font-size: 18px;
            width: 100%;
        }
        .lead_area .lead_inner .lead_txt {
            margin-top: 30px;
            width: 100%;
            font-size: 14px;
        }
        .sp {
            display: block;
        }
        .lead_area .lead_inner .lead_ttl span {
            font-size: 14px;
        }
        .office-button-next,
        .swiper-rtl .office-button-prev {
            top: 90%;
            height: 50px;
            width: 50px;
            right: 40%;
        }
        .office-button-prev,
        .swiper-rtl .office-button-next {
            top: 90%;
            height: 50px;
            right: 30%;
            width: 50px;
        }
        .mySwiper-main img {
            height: 50%;
            object-fit: cover;
        }
        .office-swiper-pagination {
            top: 75%;
            left: 0%;
        }
    }
</style>
