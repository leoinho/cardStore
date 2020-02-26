<template>
  <div class="container"> 
    <div class="imagem">
        <img src="@/assets/lol.jpg" alt="">
    </div>
    <div class="texto">
        <p>League of Legends (BR) | RP - Riot Points | Riot Games</p>
    </div>
    <div class="botao">
      <a mp-mode="dftl" 
      :href="href"
       name="MP-payButton" class='blue-ar-l-rn-none'>
       Comprar
       </a>
    </div>
    <button v-on:click="greet">teste</button>
  </div>
</template>

<script src="./CardsContainer.js"/>
 <style scoped lang="scss">
   @import "./CardsContainer.scss";
 </style>
