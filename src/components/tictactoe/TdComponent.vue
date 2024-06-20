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
    onClickTd() {
      if (this.cellIndex) {
        return;
      }
      this.emitter.emit('clickTd', {rowIndex: this.rowIndex, celIndex: this.celIndex});
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>