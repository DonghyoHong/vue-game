<template>
  <tr>
    <TdComponent v-for="(celData, index) in rowData"
                 :celData="celData"
                 :celIndex="index"
                 :rowIndex="rowIndex"
                 :key="index">
    </TdComponent>
  </tr>
</template>

<script>
import TdComponent from "Components/tictactoe/TdComponent.vue";

export default {
// setup(){
  props: {
    rowData: Array
    , rowIndex: Number
  },
  components: {
    TdComponent
  }
  , data() {
    return {
      parent: "Td 부모"
    }
  }
  , computed: {}
  , methods: {}
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>