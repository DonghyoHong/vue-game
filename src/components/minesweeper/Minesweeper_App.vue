<template>
  <div>
    <MineForm></MineForm>
    <div>{{ timer }}</div>
    <TableComponent></TableComponent>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import TableComponent from "Components/minesweeper/TableComponent.vue";
import MineForm from "Components/minesweeper/MineForm.vue";
import {INCREMENT_TIMER} from "Components/minesweeper/store";

let interval;
export default {
  components: {
    TableComponent,
    MineForm
  }
  , data() {
    return {}
  }
  , computed: {
    ...mapState(['timer', 'result', "halted"])
  }
  , watch: {
    halted(value, oldValue) {
      if (value === false) {
        interval = setInterval(() => {
          this.$store.commit(INCREMENT_TIMER);
        }, 1000);
      } else {
        clearTimeout(interval);
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
}
</style>