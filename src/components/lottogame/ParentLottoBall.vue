<template>
  <div>
    <div>당첨 숫자</div>
    <div id="result">
      <LottoBall v-for="ball in winBalls" :key="ball" :number="ball"></LottoBall>
    </div>
    <div>보너스 숫자</div>
    <div>
      <LottoBall v-if="redo" :number="bonus"></LottoBall>
      <button v-if="redo" @click="onClickRedo">한번 더!</button>
    </div>
  </div>
</template>

<script>
import LottoBall from "Components/lottogame/LottoBall.vue";

function getWinNumbers() {
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const timeOuts = [];
export default {

  components: {LottoBall},
// setup(){
  data() {
    return {
      winNumbers: getWinNumbers()
      , winBalls: []
      , bonus: null
      , redo: false
    }
  }, methods: {
    onClickRedo() {
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      this.showBalls();
    }
    , showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeOuts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
      timeOuts[this.winNumbers.length] = setTimeout(() => {
        this.bonus = this.winNumbers[this.winNumbers.length - 1];
        this.redo = true;
      }, (this.winNumbers.length) * 1000);
    }
  }, computed: {} //새로운 값을 리턴한다.
  , mounted() {
    this.showBalls();
  }
  , beforeDestroy() {
    timeOuts.forEach((timeOut) => {
      clearTimeout(timeOut);
    })
  }
  , watch: { //특정 동작을 수행한다. 주의 : 사용을 최대한 하지 않는다!!
    winBalls(value, oldValue) {
      if (value.length === 0) {
        this.showBalls();
      }
    }
    , bonus(value, oldValue) {
      console.log(value, oldValue);
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>

</style>