<template>
  <div>
    <div>{{ turn }} 님의 순서 입니다.</div>
    <TableComponent :tableData="tableData"></TableComponent>
    <div v-if="winner">{{ winner }} 님의 승리!</div>
  </div>
</template>

<script>
import TableComponent from "Components/tictactoe/TableComponent.vue"

export default {
// setup(){
  components: {TableComponent}
  , data() {
    return {
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
      , turn: 'O'
      , winner: ''
    }
  }
  , computed: {}
  , methods: {
    onChangeData() {
      this.$set(this.tableData[1], 0, 'X'); //Vue.set과 동일함
    }
    , commonData() {
      this.turn = 'O';
      this.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']];
    }
    , onClickTd({rowIndex, celIndex}) {
      console.log(rowIndex, celIndex);
      const data = this.tableData;
      data[rowIndex][celIndex] = this.turn;
      let win = false;
      if (data[rowIndex][0] === this.turn
          && data[rowIndex][1] === this.turn
          && data[rowIndex][2] === this.turn) {
        win = true;
      }
      if (data[0][celIndex] === this.turn
          && data[1][celIndex] === this.turn
          && data[2][celIndex] === this.turn) {
        win = true;
      }
      if (data[0][0] === this.turn
          && data[1][1] === this.turn
          && data[2][2] === this.turn) {
        win = true;
      }
      if (data[0][2] === this.turn
          && data[1][1] === this.turn
          && data[2][0] === this.turn) {
        win = true;
      }

      if (win) {
        this.winner = this.turn;
        this.commonData();
      } else { //무승부
        let all = true;
        data.forEach((row) => {
          row.forEach((cell, index) => {
            if (!cell) {
              all = false;
            }
          })
        });

        if (all) {
          this.winner = '';
          this.commonData();
        } else {
          this.turn = this.turn === 'O' ? 'X' : 'O';
        }
      }
    }
  }
  , mounted() {
    this.emitter.on('clickTd', this.onClickTd);
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