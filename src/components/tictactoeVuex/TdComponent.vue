<template>
  <td @click="onClickTd">{{ celData }}</td>
</template>

<script>
import {CHANGE_TURN, CLICK_CELL, NO_WINNER, RESET_GAME, SET_WINNER} from "Components/tictactoeVuex/store";
import {mapState, useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    const clickCell = (rowIndex, celIndex) => store.commit(CLICK_CELL, {row: rowIndex, cell: celIndex});
    const setWinner = (turn) => store.commit(SET_WINNER, turn);
    const resetGame = () => store.commit(RESET_GAME);
    const noWinner = () => store.commit(NO_WINNER);
    const changeTurn = () => store.commit(CHANGE_TURN);

    return {clickCell, setWinner, resetGame, noWinner, changeTurn};
  }
  , props: {
    rowIndex: Number
    , celIndex: Number
  },
  components: {}
  , data() {
    return {}
  }
  , computed: {
    ...mapState({
      tableData: state => state.tableData
      , turn: state => state.turn
      , celData(state) {
        return state.tableData[this.rowIndex][this.celIndex]
      }
    }),
    /*, tableData() {
      return this.$store.state.tableData;
    }
    , turn() {
      return this.$store.state.turn;
    }*/
  }
  , methods: {
    onClickTd() {
      if (this.cellIndex) {
        return;
      }

      this.clickCell(this.rowIndex, this.celIndex);

      let win = false;
      if (this.tableData[this.rowIndex][0] === this.turn
          && this.tableData[this.rowIndex][1] === this.turn
          && this.tableData[this.rowIndex][2] === this.turn) {
        win = true;
      }
      if (this.tableData[0][this.celIndex] === this.turn
          && this.tableData[1][this.celIndex] === this.turn
          && this.tableData[2][this.celIndex] === this.turn) {
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
<style scoped>

</style>