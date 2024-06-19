<template>
  <div>
    <div id="computer"
         :style="computedStyleObject">
    </div>
    <div>
      <button @click="onClickButton('s')">가위</button>
      <button @click="onClickButton('r')">바위</button>
      <button @click="onClickButton('p')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 : {{ score }}점</div>
  </div>
</template>

<script>
const rspCoords = {
  s: '-142px'
  , r: '0px'
  , p: '-284px'
}

const scores = {
  s: 1
  , r: 0
  , p: -1
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    console.log(v);
    return v[1] === imgCoord;
  })[0];
}

let interval = null;
export default {
// setup(){
  data() {
    return {
      imgCoord: rspCoords.r
      , result: ''
      , score: 0
    }
  }
  , methods: {
    changeHand() {
      interval = setInterval(() => {
        if (this.imgCoord === rspCoords.r) {
          this.imgCoord = rspCoords.s;
        } else if (this.imgCoord === rspCoords.s) {
          this.imgCoord = rspCoords.p;
        } else if (this.imgCoord === rspCoords.p) {
          this.imgCoord = rspCoords.r;
        }
      }, 100);
    }
    , onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(this.imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = '비겼습니다.';
      } else if ([-1, 2].includes(diff)) {
        this.result = '이겼습니다.';
        this.score += 1;
      } else {
        this.result = '졌습니다..';
        this.score -= 1;
      }
      setTimeout(() => {
        this.changeHand();
      }, 1000);

    }
  }
  , computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`
      }
    }
  }
  , mounted() {
    this.changeHand();
  }
  , beforeDestroy() {
    clearInterval(interval);
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>