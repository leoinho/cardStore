<template>
  <div class="container">
   <h1>Sucesso</h1>
   <div id="particles">
      <vue-particles style="height: 100%"
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="70"
        shapeType="circle"
        :particleSize="9"
        linesColor="#000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.1"
        :linesDistance="130"
        :moveSpeed="7"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>
    </div>
  </div>
</template>

<script src="./Sucesso.js"/>
 <style scoped lang="scss">
@import "./Sucesso.scss";
</style>
