<template>
  <div>
    <div v-if="currentGame === 'minesweeper'">
      <Minesweeper_App></Minesweeper_App>
    </div>
    <div v-else-if="currentGame === 'tictactoeVuexSlot'">
      <TicTacToe_Slot></TicTacToe_Slot>
    </div>
    <div v-else>일치하는 게임이 없습니다.</div>
  </div>
</template>

<script>
import Minesweeper_App from "Components/minesweeper/Minesweeper_App.vue";
import TicTacToeVuex from "Components/tictactoeVuex/TicTacToeVuex.vue";
import TicTacToe_Slot from "Components/tictactoeVuexSlot/TicTacToe_Slot.vue";

export default {
  components: {TicTacToe_Slot, TicTacToeVuex, Minesweeper_App},
// setup(){
  data() {
    return {}
  }
  , mounted() {
    console.log(this.$router);
    console.log(this.$route);
  }
  , computed: {
    currentGame() {
      console.log(this.$route.params.name);
      return this.$route.params.name;
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>