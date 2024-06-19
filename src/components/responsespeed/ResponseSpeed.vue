<template>
  <div>
    <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
    <div>
      <div>평균 시간 : {{ average }}ms</div>
      <button @click="onReset">리셋</button>
    </div>
  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeOut = null;
export default {
// setup(){
  data() {
    return {
      state: 'waiting'
      , message: '클릭해서 시작하세요.'
      , result: []
    }
  }
  , computed: { //computed는 캐싱이 된다.
    average() {
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
    }
  }
  , methods: {
    onReset() {
      this.result = [];
    }
    , onClickScreen() {
      if (this.state === 'waiting') {
        this.state = 'ready';
        this.message = '초록색이 되면 클릭하세요.';
        timeOut = setTimeout(() => {
          this.state = 'now';
          this.message = '지금 클릭!';
          startTime = new Date(); //화면이랑 관련이 없는 애는 data에 없어도 됨
        }, Math.floor(Math.random() * 1000) + 2000);
      } else if (this.state === 'ready') {
        clearTimeout(timeOut);
        this.state = 'now';
        this.message = '성급하시네요. 초록색이 된 후에 클릭하세요.';
        startTime = 0;
        console.log(this.state);
      } else if (this.state === 'now') {
        endTime = new Date();
        if (startTime === 0) {
          endTime = 0;
        } else {
          this.result.push(endTime - startTime);
          console.log(this.result);
        }
        this.state = 'waiting';
        this.message = '클릭해서 시작하세요.';
      }
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}

#screen.waiting {
  background-color: aqua;
  color: #222222;
}

#screen.ready {
  background-color: red;
  color: white;
}

#screen.now {
  background-color: greenyellow;
  color: #222222;
}
</style>