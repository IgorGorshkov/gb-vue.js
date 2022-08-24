<template>
  <div class="main">
    <input type="number" v-model.number="operand1">
    <input type="number" v-model.number="operand2">
    = {{ result }}
    <div class="keyboard">
      <button @click="sum">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="multy">*</button>
      <button @click="deg">n</button>
      <button @click="perc">%2</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcComponent',
  data: () => ({
    result: 0,
    operand1: 0,
    operand2: 0,
  }),
  methods: {
    sum() {
      this.result = this.operand1 + this.operand2
    },
    div() {
      this.result = this.operand1 / this.operand2
    },
    sub() {
      this.result = this.operand1 - this.operand2
    },
    multy() {
      this.result = this.operand1 * this.operand2
    },
    deg() {
      this.result = this.operand1 ** this.operand2
    },
    perc() {
      this.result = this.operand1 % this.operand2
    }

  }

}
</script>