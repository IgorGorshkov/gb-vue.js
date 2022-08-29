<template>
<div class="calc">
  <input type="number" v-model.number="operand1"/>
  <input  type="number" v-model.number="operand2"/>
 = {{ result }}
  <br/>
  {{ error }}
  <br/>
  <button v-for="operation in operations" @click="calculate(operation)" :key="operation">{{ operation }}</button>
  <div class="keyboard">
    <input type="checkbox" v-model="visible"> Отобразить экранную клавиатуру
    <div v-if="visible">
      <button v-for="keyboardKey in keysArray" @click="toOperand('add', keyboardKey)" :key="keyboardKey">
        {{ keyboardKey }}
      </button>
      <button @click="toOperand('remove')">&larr;</button>
      <br/>
      <input type="radio" value="operand1" v-model="picked">
      <label for="operand1">Операнд 1</label>
      <input type="radio" value="operand2"  v-model="picked">
      <label for="operand2">Операнд 2</label>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcComponent",

  data: () => ({
    result: 0,
    operand1: 0,
    operand2: 0,
    error: '',
    operations: ['+', '-', '/', '*', 'n', 'rem'],
    keysArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    visible: false,
    picked: ''

  }),
  methods: {
    calculate (operation) {
      this.error = "";
      switch (operation) {
        case "+": this.sum();
        break;
        case "-": this.sub();
        break;
        case "/": this.div();
        break;
        case "*": this.mul();
        break;
        case "n": this.deg();
        break;
        case "rem": this.remains();
        break;
      }
    },
    sum() {
      const {operand1, operand2} = this
      this.result = operand1 + operand2
    },
    div() {
      const {operand1, operand2} = this
      if(operand2 === 0) {
        return this.error = `На ${operand2} делить нельзя`
      }
      this.result = operand1 / operand2
    },
    mul() {
      const {operand1, operand2} = this
      this.result = operand1 * operand2
    },
    sub() {
      const {operand1, operand2} = this
      this.result = operand1 - operand2
    },
    deg() {
      const { operand1, operand2 } = this
      this.result = Math.pow(operand1, operand2)
    },
    remains() {
      const { operand1, operand2 } = this
      this.result = Math.trunc(operand1 / operand2)
    },

    toOperand(action, key) {
      let numberArray = this.numberToArr(this[this.picked]);
      switch (action) {
        case "add":
          numberArray.push(key);
          break;
        default:
          numberArray.pop();
      }
      this[this.picked] = this.arrToNumber(numberArray);
    },
    numberToArr(number) {
      return String(number).split("");
    },

    arrToNumber(array) {
      return Number(array.join(""));
    },
  }

}
</script>

<style scoped>

</style>