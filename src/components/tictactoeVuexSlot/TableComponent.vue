<template>
  <table>
    <tbody>
    <slot></slot>
    </tbody>
  </table>
</template>

<script>
import TrComponent from "Components/tictactoeVuex/TrComponent.vue";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    const tableData = () => store.state.tableData;
    const turnMessage = () => store.getters.turnMessage;

    return {tableData, turnMessage}
  }
  , props: {}
  , components: {TrComponent}
  , data() {
    return {}
  }
  , computed: {
    tableData() {
      return this.tableData();
    }
    , turnMessage() {
      return this.turnMessage();
    }
  }
  , methods: {}
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>