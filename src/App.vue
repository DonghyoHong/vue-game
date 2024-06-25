<template>
  <div>
    <div>
      <router-link to="/game">Game Matcher</router-link>
      <router-link to="/game/minesweeper">minesweeper</router-link>
      <router-link to="/game/tictactoeVuexSlot">tictactoeVuexSlot</router-link>
      <router-link to="/game/lottoGame">Lotto</router-link>
    </div>
    <RouterView></RouterView>

  </div>
</template>

<script>
// '#' 해시라우터를 쓰면 새로고침을 해도 정상으로 동작하게 됨 (검색엔진에서는 ㄴㄴ 그래서 historyRouter를 사용)

export default {
// setup(){
  data() {

    return {}
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>