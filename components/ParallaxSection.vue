<template>
  <section class="parallax-section">
    <div id="particles-js"></div>
    <div class="image-layer" style="background-image: url(/images/background/team.jpg);"></div>
    <div class="auto-container">
      <div class="content-box">
        <div class="icon-box"><span class="flaticon-app-development"></span></div>
        <h2>Great things in business are never done by one person. <span>They’re done by a team of
                            people.</span></h2>
      </div>
    </div>
  </section>
</template>
<style scoped>
canvas {
  display: block;
  vertical-align: bottom;
}

/* ---- particles.js container ---- */

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-image: url(""); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  top: 0px;
opacity: 0.5;
z-index: 999;
}

/* ---- stats.js ---- */

.count-particles{
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13E8E9;
  font-size: .8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.js-count-particles{
  font-size: 1.1em;
}

#stats,
.count-particles{
  -webkit-user-select: none;
}

#stats{
  border-radius: 3px 3px 0 0;
  overflow: hidden;
}

.count-particles{
  border-radius: 0 0 3px 3px;
}
</style>
