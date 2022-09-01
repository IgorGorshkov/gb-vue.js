<template>
  <div>
      <table class="table">
        <tbody>
        <tr>
          <td class="td-heading">#</td>
          <td class="td-heading">Date</td>
          <td class="td-heading">Cathegory</td>
          <td class="td-heading">Value</td>
        </tr>
        <tr v-for="(payment, idx) in paymentsList" :key="idx">
          <td>{{ idx + 1 }}</td>
          <td>{{ payment.date }}</td>
          <td>{{ payment.category }}</td>
          <td>{{ payment.value }}</td>
        </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    paymentsList: {
      type: Array,
      default: () => ([]),
      required: true
    }
  },
}
</script>

<style scoped>
.table {
  width: 60%;
  margin-bottom: 20px;
  border-collapse: collapse;
}
.table th {
  font-weight: bold;
  padding: 5px;
}
.table td {
  border-bottom: 1px solid #dddddd;
  padding: 5px;
}
.td-heading{
  font-weight: bold;
}
</style>