<template>
  <table>
    <tbody>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
      <td v-for="(celLData, cellIndex) in rowData" :key="cellIndex"
          :style="cellDataStyle(rowIndex, cellIndex)"
          @click="onClickTd(rowIndex, cellIndex)"
          @contextmenu.prevent="onRightClickTd(rowIndex, cellIndex)">
        {{ cellDataText(rowIndex, cellIndex) }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {mapState} from "vuex";
import {CLICK_MINE, CODE, FLAG_CELL, NORMALIZE_CELL, OPEN_CELL, QUESTION_CELL} from "Components/minesweeper/store";

export default {
  /*setup() {
    const store = useStore();
    const tableData = () => store.state.tableData;
    const halted = () => store.state.halted;

    return {tableData, halted}
  }
  , */props: {}
  , components: {}
  , data() {
    return {}
  }
  , computed: {
    ...mapState([
      'tableData'
      , 'halted'])
    , cellDataStyle: (state) => {
      return (rowIndex, cellIndex) => {
        switch (state.tableData[rowIndex][cellIndex]) {
          case CODE.NORMAL:
          case CODE.MINE:
            return {
              background: '#444'
            };
          case CODE.CLICKED_MINE:
          case CODE.OPENED:
            return {
              background: 'white'
              , color: 'black'
            };
          case CODE.FLAG:
          case CODE.FLAG_MINE:
            return {
              background: 'red'
              , color: 'black'
            };
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return {
              background: 'yellow'
              , color: 'black'
            };
          default:
            return;
        }
      }
    }
    , cellDataText: (state) => {
      return (rowIndex, cellIndex) => {
        switch (state.tableData[rowIndex][cellIndex]) {
          case CODE.MINE:
            return 'X';
          case CODE.NORMAL:
            return '';
          case CODE.FLAG_MINE:
          case CODE.FLAG:
            return '!';
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return '?';
          case CODE.CLICKED_MINE:
            return '펑';
          default:
            return state.tableData[rowIndex][cellIndex] || '';
        }
      }

    }
  }
  , methods: {
    onClickTd(rowIndex, cellIndex) {
      if (this.halted) {
        return;
      }

      switch (this.tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
          return this.$store.commit(OPEN_CELL, {row: rowIndex, cell: cellIndex});
        case CODE.MINE:
          return this.$store.commit(CLICK_MINE, {row: rowIndex, cell: cellIndex});
        default:
          return;
      }
    }
    , onRightClickTd(rowIndex, cellIndex) {
      if (this.halted) {
        return;
      }
      switch (this.tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          this.$store.commit(FLAG_CELL, {row: rowIndex, cell: cellIndex});
          return;
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          this.$store.commit(QUESTION_CELL, {row: rowIndex, cell: cellIndex});
          return;
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          this.$store.commit(NORMALIZE_CELL, {row: rowIndex, cell: cellIndex});
          return;
      }
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style>

</style>