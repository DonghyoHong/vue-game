<template>
  <table>
    <tbody>
    <TrComponent v-for="(rowData, index) in tableData" :key="index" :rowData="rowData"
                 :rowIndex="index"></TrComponent>
    </tbody>
  </table>
</template>

<script>
import TrComponent from "Components/tictactoe/TrComponent.vue";

export default {
// setup(){
  props: {
    tableData: Array,
  }
  , components: {TrComponent}
  , data() {
    return {}
  }
  , computed: {}
  , methods: {}
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>