<template>
  <div class="container VueCarousel-slide slide VueCarousel-slide-active VueCarousel-slide-center">
    <carousel :scrollPerPage="true" :perPageCustom="[[480, 1], [768, 2]]">
      <slide class="slide">
        <img src="@/assets/banner1.png" alt />
      </slide>
      <slide class="slide">
        <img src="@/assets/banner2.png" alt />
      </slide>
      <slide class="slide">
        <img src="@/assets/banner3.png" alt />
      </slide>
      <slide class="slide">
        <img src="@/assets/banner4.png" alt />
      </slide>
    </carousel>
  </div>
</template>

<script src="./Banner.js"/>
 <style scoped lang="scss">
@import "./Banner.scss";
</style>
