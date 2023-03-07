<template>
    <div class="auto-container">
        <main>
            <div class="profile--index highlight_blk">
               <div class="row">
                <div class="col-md-7">
                <div class="prof_tbl">
                    <dl>
                        <dt>Name of company</dt>
                        <dd>IDENBRID INC</dd>
                    </dl>
                    <dl>
                        <dt>Establishment</dt>
                        <dd>January 2020</dd>
                    </dl>
                    <dl>
                        <dt>Capital stock</dt>
                        <dd>USD 150,000 (September 2022 point in time)</dd>
                    </dl>
                    <dl>
                        <dt>Representative</dt>
                        <dd>CEO SOUGA NAKAMURA</dd>
                    </dl>
                    <dl>
                        <dt>Number of Employees</dt>
                        <dd>Members: 20 / Promote first BP: 8 / Promote human resources BP: 15</dd>
                    </dl>

                    <dl>
                        <dt>Number of Employees</dt>
                        <dd>
                            <div class="box">
                                <span class="bld">Pakistan headquarters</span><br>B1F 176 Y block DHA Phase 3, Lahore Pakistan
                                <br><a href="tel:+92-306-404-1221" class="tel_link no_link">TEL. +92-306-404-1221</a>
                                <br>
                                <a href="mailto:contactusen@idenbrid.com" class="more_txt">MAIL :
                                    contactusen@idenbrid.com</a>
                            </div>
                            <!-- <div class="box mt">

                                <router-link to="/office/" class="more_txt" target="_blank"><span
                                        class="underline">ACCESS</span></router-link>
                            </div> -->
                        </dd>
                    </dl>
                    <dl>
                        <dt>IT Development<br>Business</dt>
                        <dd>・Japan Market SDH: Studio Development Hub (contracted and lab-based development)<br>
                            ・SES Engineer Recruitment Sales Support<br>
                            ・Global Market SDH: Studio Development Hub (contracted and lab-based development)<br>
                            ・Development and operation of in-house applications in the Pakistani market<br>
                            </dd>
                    </dl>
                </div>
            </div>
            <div class="col-md-5">
                <video width="100%" autoplay="autoplay" loop="loop" muted="muted">
                    <source  src="../static/videos/company-intro.mp4" type="video/mp4">
                </video>
            </div>
            </div>
            </div>
        </main>
    </div>
</template>
<style>
    .profile--index {
        padding: 80px 10%;
        background-color: #fff;
    }
    .profile--index .prof_tbl {
        padding: 0 0 60px;
    }
    .profile.loaded .profile--index .prof_tbl dl {
        transform: translateY(0);
        /* opacity: 1; */
    }
    .profile--index .prof_tbl dl {
        transition: .6s;
        /* opacity: 0; */
        display: flex;
        align-items: baseline;
        margin: 0;
    }
    .profile--index .prof_tbl dl dt {
        width: 230px;
        padding: 20px 0;
        font-size: 18px;
        letter-spacing: 0.15em;
        line-height: 1.875;
        font-weight: bold;
        letter-spacing: 0px;
    }
    .highlight_blk *::selection {
        background: #000;
        color: #dadada;
    }
    .profile--index .prof_tbl dl dd {
        width: calc(100% - 5em);
        padding: 20px 50px;
        font-size: 14px;
        letter-spacing: 0.04em;
        line-height: 1.7;
        position: relative;
        margin: 0;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
    }
    .profile--index .prof_tbl dl dd::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: #d9d9d9;
        width: 1px;
        height: 120%;
    }
    *:before,
    *:after {
        box-sizing: inherit;
    }
    .profile.loaded .profile--index .prof_tbl dl {
        transform: translateY(0);
        opacity: 1;
    }
    .profile--index .prof_tbl dl {
        transition: .6s;
        opacity: 1;
        display: flex;
        align-items: baseline;
    }
    @media screen and (max-width: 896px) {
        .profile--index {
            padding: 80px 5%;
        }
        .profile--index {
            padding: 80px 40px;
        }
        .profile--index .prof_tbl {
            padding: 0;
        }
        .profile--index .prof_tbl dl {
            display: block;
        }
        .profile--index .prof_tbl dl dt {
            font-size: 14px;
            width: 100%;
            padding: 0 0 15px 10px;
            line-height: 1;
            position: relative;
        }
        .profile--index .prof_tbl dl dt::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #d9d9d9;
            width: 100%;
            height: 1px;
        }
        .profile--index .prof_tbl dl dd {
            width: 100%;
            padding: 10px 0 0 10px;
        }
        .profile--index .prof_tbl dl:not(:first-child) {
            margin-top: 45px;
        }
        .profile--index .prof_tbl dl dd::before {
            height: 0%;
        }
    }
    .access--index {
        padding: 100px 10%;
        background-color: #fff;
    }
    .logo h1 {
        font-size: 40px;
        font-family: DIN-Bold;
        font-weight: bold;
        color: #000;
    }
    .access--index .box {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        padding-top: 50px;
    }
    .access--index .box .map {
        transform: translateY(3%);
        transition: .6s;
        width: 50%;
        height: 20vw;
    }
    .access.loaded .access--index .map {
        transform: translateY(0);
        opacity: 1;
    }
    .access--index .box .map iframe {
        width: 100%;
        height: 100%;
    }
    .access--index .box .text_area {
        width: 45%;
        padding: 0 60px 0 0;
    }
    .access--index .box .text_area p {
        font-size: 14px;
        line-height: 1.85;
        font-family: 'Noto Sans JP', sans-serif;
        letter-spacing: 0.04em;
        color: #000;
        font-weight: 500;
        transform: translateY(10%);
        transition: .6s;
    }
    .access.loaded .access--index .text_area p {
        transform: translateY(0);
        opacity: 1;
    }
    .access--index .box .text_area p.place {
        margin-top: 34px;
    }
    .sp {
        display: none;
    }
    .access--index .box .text_area p.number {
        margin-top: 15px;
    }
    .tel_link {
        color: #000;
    }
    .tel_link.no_link {
        pointer-events: none;
    }
    .access--index .box .text_area p.station {
        margin-top: 20px;
        margin-bottom: 40px;
    }
    .access--index .box .text_area .more_txt {
        color: #000;
        font-size: 16px;
        font-family: "DIN";
        letter-spacing: 0.06em;
        text-transform: uppercase;
        position: relative;
        padding-right: 20px;
    }
    .access--index .box .text_area .more_txt::after,
    .access--index .box .text_area .more_txt::before {
        content: "";
        height: 1px;
        background-color: #000;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 0.3s;
    }
    .access--index .box .text_area .more_txt::before {
        width: 10px;
    }
    .access--index .box .text_area .more_txt:hover::after,
    .access--index .box .text_area .more_txt:hover::before {
        right: -5%;
    }
    .access--index .box .text_area .more_txt .underline {
        position: relative;
    }
    .access--index .box .text_area .more_txt::after {
        width: 6px;
        transform: rotate(45deg) translateY(-3px);
    }
    .access--index .box .text_area .more_txt .underline::after {
        content: "";
        background: #000;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top;
    }
    .access--index .box .text_area .more_txt:hover .underline::after {
        transform-origin: left top;
        transform: scale(1, 1);
    }
    @media screen and (max-width: 896px) {
        .menu-list {
            background-color: rgb(216, 222, 228);
            padding: 100px 2%;
        }
        .access--index {
            padding: 0px 5% 0;
            display: block;
        }
        .access--index .box {
            display: block;
        }
        .access--index .box .map {
            width: 100%;
            height: 250px;
        }
        .access--index .box .text_area {
            width: 100%;
            margin-top: 30px;
            padding-bottom: 50px;
        }
        .access--index .box .text_area p.place {
            margin-top: 18px;
        }
        .sp {
            display: block;
        }
        .tel_link {
            text-decoration: underline;
        }
        .access--index .box .text_area p.station {
            margin-top: 15px;
        }
    }
</style>