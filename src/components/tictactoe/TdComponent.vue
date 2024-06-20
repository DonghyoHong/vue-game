<template>
  <td @click="onClickTd">{{ celData }}</td>
</template>

<script>
export default {
// setup(){
  props: {
    celData: String
    , rowIndex: Number
    , celIndex: Number
  },
  components: {}
  , data() {
    return {}
  }
  , computed: {}
  , methods: {
    commonData() {
      const rootData = this.$root.$data;
      rootData.turn = 'O';
      rootData.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']];
    }
    , onClickTd() {
      if (this.cellIndex) {
        return;
      }
      const rootData = this.$root.$data;
      console.log(rootData);
      rootData.tableData[this.rowIndex][this.celIndex] = rootData.turn;
      let win = false;
      if (rootData.tableData[this.rowIndex][0] === rootData.turn
          && rootData.tableData[this.rowIndex][1] === rootData.turn
          && rootData.tableData[this.rowIndex][2] === rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][this.celIndex] === rootData.turn
          && rootData.tableData[1][this.celIndex] === rootData.turn
          && rootData.tableData[2][this.celIndex] === rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][0] === rootData.turn
          && rootData.tableData[1][1] === rootData.turn
          && rootData.tableData[2][2] === rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][2] === rootData.turn
          && rootData.tableData[1][1] === rootData.turn
          && rootData.tableData[2][0] === rootData.turn) {
        win = true;
      }

      if (win) {
        rootData.winner = rootData.turn;
        this.commonData();
      } else { //무승부
        let all = true;
        rootData.tableData.forEach((row) => {
          row.forEach((cell, index) => {
            if (!cell) {
              all = false;
            }
          })
        });

        if (all) {
          rootData.winner = '';
          this.commonData();
        } else {
          rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
        }
      }
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>