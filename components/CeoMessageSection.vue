<template>
    <div class="message--index highlight_blk">
        <div class="message_inner">
            <div class="message_box">
                <div class="box">
                    <div class="text_area">
                        <div class="ttl">
                            <h3>Become the world's most needed IT <br class="pc"> company from Pakistan founded by a Japanese
                            </h3>
                        </div>
                        <p class="lead">
                            In January 2020, IDENBRID was born in Pakistan by Japanese people。
                        </p>
                        <p class="lead">
                            Since then, we have been working hard to achieve our goal of becoming the world's most needed IT company in Pakistan。
                        </p>
                        <p class="lead">
                            What drives us every day is our clients, who rely on us, and our team and colleagues who share our vision of "solving user pains with IT"。
                        </p>
                        <p class="lead">
                            We believe that we can achieve our goal of becoming the world's most needed IT group only when the entire company is focused not only on sales, but also on putting the customer first。
                        </p>
                        <p class="lead">
                            To this end, we have introduced OLP and are focusing on developing leaders. As one of the Japanese entrepreneurs overseas, I will simply keep going forward toward my goal without stopping。</p>
                        <p class="lead">Thank you for your continued support and encouragement!。</p>
                        <p class="lead name">March 2023<br>IDENBRID INC.<br
                            >Soga Nakamura, Founder and CEO</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .message--index {
        padding: 140px 10%;
        background-color: #fff;
    }
    .message--index .message_inner {
        transform: translateY(2%);
        transition: .6s;
    }
    .message--index .message_inner .message_box {
        position: relative;
    }
    .message--index .message_inner .message_box::after {
        content: "";
        background: url(/images/ceo.jpeg) no-repeat center;
        background-size: cover;
        width: 42%;
        height: 100%;
        max-height: 680px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .message--index .message_inner .message_box .box .text_area {
        width: 52%;
    }
    .message--index .message_inner .message_box .box .text_area .ttl span {
        font-size: 14px;
        font-family: DIN-Regular;
        font-weight: 500;
        color: #000;
    }
    .message--index .message_inner .message_box .box .text_area .ttl h3 {
        font-size: 28.8px;
        line-height: 1.9;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 600;
        margin-bottom: 25px;
    }
    .message--index .message_inner .message_box .box .text_area .lead {
        margin-bottom: 15px;
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 2.2;
        letter-spacing: 0.04em;
        color: #000;
    }
    .message--index .message_inner .message_box .box .text_area .more_txt {
        color: gray;
        font-size: 12px;
        font-family: "DIN";
        letter-spacing: 0.06em;
        text-transform: uppercase;
        position: relative;
        padding-right: 20px;
        font-weight: 500;
    }
    .message--index .message_inner .message_box .box .text_area .more_txt .underline {
        font-size: 12px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
        position: relative;
    }
    .message--index .message_inner .message_box .box .text_area .more_txt .underline::after {
        content: "";
        background: gray;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top;
    }
    .message--index .message_inner .message_box .box .text_area .more_txt:hover .underline::after {
        transform-origin: left top;
        transform: scale(1, 1);
    }
    .message--index .message_inner .message_box .box .text_area .lead.name {
        margin-top: 35px;
        margin-bottom: 0;
    }
    .message--index .message_inner .message_box .box .text_area .more_txt::after {
        width: 6px;
        transform: rotate(45deg) translateY(-3px);
    }
    .message--index .message_inner .message_box .box .text_area .more_txt:hover::after,
    .message--index .message_inner .message_box .box .text_area .more_txt:hover::before {
        right: -5%;
    }
    .message--index .message_inner .message_box .box .text_area .more_txt::after,
    .message--index .message_inner .message_box .box .text_area .more_txt::before {
        content: "";
        height: 1px;
        background-color: gray;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 0.3s;
    }
    .message--index .message_inner .message_box .box .text_area .more_txt::before {
        width: 10px;
    }
    @media screen and (max-width: 767px) {
        .message--index {
            padding: 80px 5%;
        }
        .message--index .message_inner {
            padding-top: 0;
        }
        .message--index .message_inner .message_box::after {
            width: 100%;
            height: 400px;
            max-height: none;
            position: relative;
            right: auto;
            top: auto;
            transform: translateY(0);
            display: block;
            margin-top: 40px;
        }
        .message--index .message_inner .message_box .box .text_area {
            width: 100%;
        }
        .message--index .message_inner .message_box .box .text_area .ttl h3 {
            font-size: 20px;
            margin-top: 10px;
            margin-bottom: 30px;
        }
        .message--index .message_inner .message_box .box .text_area .more_txt {
            border-bottom: 1px solid #000;
            padding-right: 0;
            padding-bottom: 0px;
        }
        .message--index .message_inner .message_box .box .text_area .more_txt .underline {
            line-height: 2;
        }
    }
</style>