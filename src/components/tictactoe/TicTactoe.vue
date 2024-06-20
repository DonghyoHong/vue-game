<template>
  <div>
    <div>{{ turn }} 님의 순서 입니다.</div>
    <TableComponent :table-data="tableData"></TableComponent>
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
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>
table {
  width: 150px;
  height: 150px;
  border: 1px solid white;
}

tr {
  border: 1px solid white;
}

td {
  border: 1px solid white;
  width: 45px;
  height: 45px;
  text-align: center;
  text-color: white;
}
</style>