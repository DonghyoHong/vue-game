<template>
  <td @click="onClickTd">{{ celData }}</td>
</template>

<script>
import EventBus from "Components/tictactoe/EventBus";

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
    onClickTd() {
      if (this.cellIndex) {
        return;
      }
      EventBus.$emit('clickTd', this.rowIndex, this.celIndex);
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>