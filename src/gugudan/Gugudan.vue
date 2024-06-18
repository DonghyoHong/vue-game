<template>
  <div>{{ first }} 곱하기 {{ second }} 는 ??</div>
  <form @submit="submitForm">
    <input type="number" v-model="value" ref="answer"/>
    <button>입력</button>
  </form>
  <div id="result">{{ result }}</div>
</template>

<script>
export default {
  data() {
    return {
      first: Math.ceil(Math.random() * 9)
      , second: Math.ceil(Math.random() * 9)
      , value: ''
      , result: ''
    }
  }
  , methods: {
    submitForm(e) {
      e.preventDefault();
      if (this.first * this.second === this.value) {
        this.result = "정답";
        this.first = Math.ceil(Math.random() * 9);
        this.second = Math.ceil(Math.random() * 9);
        this.value = '';
        this.$refs.answer.focus();
      } else {
        this.result = "땡";
        this.value = '';
        this.$refs.answer.focus();
      }
    }
  }
}
</script>

<style scoped>
</style>
