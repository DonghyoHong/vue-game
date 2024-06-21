<template>
  <div>
    <div>{{ turn }} 님의 순서 입니다.</div>
    <TableComponent></TableComponent>
    <div v-if="winner">{{ winner }} 님의 승리!</div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import TableComponent from "Components/tictactoe/TableComponent.vue"
import store from "Components/tictactoeVuex/store";

export default {
// setup(){
  store
  , components: {TableComponent}
  , data() {
    return {}
  }
  , computed: {
    ...mapState(["winner", "turn"])
    /*
    winner() {
      return this.$store.state.winner;
    }
    , turn() {
      return this.$store.state.turn;
    }*/
  }
  , methods: {
    onChangeData() {
      this.$set(this.tableData[1], 0, 'X'); //Vue.set과 동일함
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style>
table {
  border-collapse: collapse;
  border: 1px solid white;
}

td {
  border: 1px solid white;
  width: 40px;
  height: 40px;
  text-align: center;
  text-color: white;
}
</style>