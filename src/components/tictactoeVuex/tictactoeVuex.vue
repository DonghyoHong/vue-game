<template>
  <div>
    <div>{{ turn }} 님의 순서 입니다.</div>
    <TableComponent :tableData="tableData"></TableComponent>
    <div v-if="winner">{{ winner }} 님의 승리!</div>
  </div>
</template>

<script>
import TableComponent from "Components/tictactoeVuex/TableComponent.vue"
import {mapState} from "vuex";

export default {
  /*setup() {
    const store = useStore();
    const tableData = () => store.state.tableData;
    const turn = () => store.state.turn;
    const winner = () => store.state.winner;

    return {tableData, turn, winner}
  }*/
  components: {TableComponent}
  , data() {
    return {}
  }
  , computed: {
    ...mapState({
      tableData: state => state.tableData
      , turn: state => state.turn
      , winner: state => state.winner
    })
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