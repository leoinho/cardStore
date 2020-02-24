<template>
  <div id="app">
    <Topo msg="Card Fácil" />
    <Banner />
    <div id="cards">
      <CardsContainer msg />
      <CardsContainer msg />
      <CardsContainer msg />
    </div>
    <div id="cards">
      <CardsContainer msg />
      <CardsContainer msg />
      <CardsContainer msg />
    </div>
    <div id="cards">
      <CardsContainer msg />
      <CardsContainer msg />
      <CardsContainer msg />
    </div>
    <Footer/>
    <div id="particles">
      <vue-particles style="height: 100%"
        color="#dedede"
        :particleOpacity="0.4"
        :particlesNumber="170"
        shapeType="triangle"
        :particleSize="7"
        linesColor="#000000"
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

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Topo from "./components/topo/Topo.vue";
import Banner from "./components/banner/Banner.vue";
import CardsContainer from "./components/cardsContainer/CardsContainer.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    Topo,
    CardsContainer,
    Banner,
    Footer
  },
  methods: {
    particlesJS: () => {}
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  position: relative;
}
#particles {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
#cards{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  @media screen and (max-width: 600px) {
        flex-direction: column;
    }

}
</style>
