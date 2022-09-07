<template>
<div>
  <div class="form">
    <input class="form-input" type="text" placeholder="Payment date" v-model="date">
    <select class="form-input" v-model="category">
      <option
          v-for="category of categoryList"
          :key="category"
          :value="category"
      > {{ category }}</option>
    </select>
    <input class="form-input" type="text" placeholder="Payment value" v-model="value">
    <button class="form-btn" @click="addPayment">Add</button>
  </div>
</div>
</template>

<script>

export default {
  name: "AddPaymentForm",
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    category: '',
    date:'',
    value:'',
    id:''
  }),
  methods: {
    addPayment () {
      const { id, value, category, date } = this
      const data = {
        id,
        value,
        category,
        date: date ? date : this.currenDate
      }

      this.$emit('add-payment', data)
    }
  },
  computed: {
    currenDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
    }
  }
}

</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 360px;
}
.form-input {
  padding: 16px;
  margin-bottom: 8px;
}
.form-btn {
  align-self: end;
  width: 50%;
  height: 30px;
  background-color: #3bba9f;
  border: 1px solid #3f95cd;
  border-radius: 3px;
  color: white;
}

</style>