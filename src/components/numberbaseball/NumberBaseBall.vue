<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onsubmitForm ">
      <input ref="answer" maxlength="4" minlength="4" v-model="value"/>
      <button type="submit">입력</button>
    </form>
    <div>시도 : {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script type="module">
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(chosen);
  }
  console.log(arr);
  return arr;
}

export default {
// setup(){
  data() {
    return {
      answers: getNumbers()
      , tries: []
      , value: ''
      , result: ''
    }
  }
  , methods: {
    onsubmitForm(e) {
      if (this.value === this.answers.join('')) {
        this.tries.push({
          try: this.value
          , result: '홈런'
        });
        this.result = '홈런';
        alert("Game Restart");
        this.value = '';
        this.tries = [];
        this.$refs.answer.focus();
      } else {
        if (this.tries.length >= 10) {
          this.result = `10번 넘게 시도 하였습니다. ${this.answers.join(',')} 였습니다.`;
          alert("Game Restart");
          this.value = '';
          this.answers = getNumbers()
          this.tries = [];
          this.$refs.answer.focus();
        }
        let strike = 0;
        let ball = 0;
        const answerArr = this.value.split('').map(value => parseInt(value));
        for (let i = 0; i < 4; i++) {
          if (answerArr[i] === this.answers[i]) {
            strike++;
          } else if (this.answers.includes(answerArr[i])) {
            ball++;
          }
        }

        this.tries.push({
          try: this.value
          , result: `${strike} 스트라이크 / ${ball} 볼 입니다.`
        });
      }
      console.log(this.tries);
      this.value = '';
      this.$refs.answer.focus();
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style>

</style>