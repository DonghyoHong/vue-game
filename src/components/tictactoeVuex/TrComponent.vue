<template>
  <tr>
    <TdComponent v-for="(celData, index) in rowData"
                 :celIndex="index"
                 :rowIndex="rowIndex"
                 :key="index">
    </TdComponent>
  </tr>
</template>

<script>
import TdComponent from "Components/tictactoeVuex/TdComponent.vue";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    const tableData = (rowIndex) => store.state.tableData[rowIndex];
    return {tableData}
  }
  , props: {
    rowIndex: Number
  },
  components: {
    TdComponent
  }
  , data() {
    return {
      parent: "Td 부모"
    }
  }
  , computed: {
    rowData() {
      return this.tableData(this.rowIndex);
    }
  }
  , methods: {}
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>