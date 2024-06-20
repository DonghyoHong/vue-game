<template>
  <div class="lottoBall" :style="styleObject">{{ number }}</div>
</template>

<script>
export default {
// setup(){
  props: {
    number: {
      type: Number
    }
  }
  , computed: {//새로운 값을 리턴한다.
    styleObject() {
      let background;
      if (this.number < 10) {
        background = 'red';
      } else if (this.number < 20) {
        background = 'orange';
      } else if (this.number < 30) {
        background = 'yellow';
      } else {
        background = 'blue';
      }
      return {
        background
      };
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>
.lottoBall {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>