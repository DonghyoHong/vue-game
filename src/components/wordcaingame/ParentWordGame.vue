<template>
  <div>
    <WordChainGame :startWord=word1></WordChainGame>
    <WordChainGame :startWord=word2></WordChainGame>
  </div>
</template>

<script type="module">
import WordChainGame from "Components/wordcaingame/WordChainGame.vue";

export default {
// setup(){
  data() {
    return {
      word1: "초밥"
      , word2: "강의"
    }
  }
  , components: {
    WordChainGame
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style>

</style>