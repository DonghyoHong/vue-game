<template>
  <div>
    <div>{{ turn }} 님의 순서 입니다.</div>
    <!--    <TableComponent :tableData="tableData"></TableComponent>-->
    <table>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData">{{ cellData }}</td>
      </tr>
    </table>
    <div v-if="winner">{{ winner }} 님의 승리!</div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {CLICK_CELL} from "Components/tictactoeVuex/store";

export default {
  data() {
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
    , onClickTd(rowIndex, cellIndex) {
      if (this.cellIndex) {
        return;
      }

      this.$store.commit(CLICK_CELL, {row: rowIndex, cell: cellIndex});

      let win = false;
      if (this.tableData[rowIndex][0] === this.turn
          && this.tableData[rowIndex][1] === this.turn
          && this.tableData[rowIndex][2] === this.turn) {
        win = true;
      }
      if (this.tableData[0][cellIndex] === this.turn
          && this.tableData[1][cellIndex] === this.turn
          && this.tableData[2][cellIndex] === this.turn) {
        win = true;
      }
      if (this.tableData[0][0] === this.turn
          && this.tableData[1][1] === this.turn
          && this.tableData[2][2] === this.turn) {
        win = true;
      }
      if (this.tableData[0][2] === this.turn
          && this.tableData[1][1] === this.turn
          && this.tableData[2][0] === this.turn) {
        win = true;
      }

      if (win) {
        this.setWinner(this.turn);
        this.resetGame();
      } else { //무승부
        let all = true;
        this.tableData.forEach((row) => {
          row.forEach((cell, index) => {
            if (!cell) {
              all = false;
            }
          })
        });

        if (all) {
          this.noWinner();
          this.resetGame();
        } else {
          this.changeTurn();
        }
      }
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