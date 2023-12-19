<template>
  <h1>Цвета</h1>
  <table>
    <thead>
      <tr>
        <th>Название</th>
        <th>Цвет</th>
        <th>HEX</th>
        <th>RGB</th>
        <th>RGBA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>primary-main</td>
        <td style="background-color: var(--primary-main);"></td>
        <td>rgb(0, 163, 84)</td>
        <td>0, 163, 84</td>
        <td>0, 163, 84, 1</td>
      </tr>
      <tr>
        <td>primary-middle</td>
        <td style="background-color: var(--primary-middle);"></td>
        <td>hsl(165, 100%, 24%)</td>
        <td>165, 100%, 24%</td>
        <td>165, 100%, 24%, 1</td>
      </tr>
      <tr>
        <td>primary-light</td>
        <td style="background-color: var(--primary-light);"></td>
        <td>hsl(151, 47%, 84%)</td>
        <td>151, 47%, 84%</td>
        <td>151, 47%, 84%, 1</td>
      </tr>
      <tr>
        <td>secondary-orange</td>
        <td style="background-color: var(--secondary-orange);"></td>
        <td>hsl(24, 90%, 54%)</td>
        <td>24, 90%, 54%</td>
        <td>24, 90%, 54%, 1</td>
      </tr>
      <tr>
        <td>secondary-darkred</td>
        <td style="background-color: var(--secondary-darkred);"></td>
        <td>hsl(0, 100%, 32%)</td>
        <td>0, 100%, 32%</td>
        <td>0, 100%, 32%, 1</td>
      </tr>
      <tr>
        <td>secondary-red</td>
        <td style="background-color: var(--secondary-red);
        "></td>
        <td>hsl(0, 100%, 50%)</td>
        <td>0, 100%, 50%</td>
        <td>0, 100%, 50%, 1</td>
        </tr>
        <tr>
        <td>secondary-lightred</td>
        <td style="background-color: var(--secondary-lightred);"></td>
        <td>hsl(0, 100%, 80%)</td>
        <td>0, 100%, 80%</td>
        <td>0, 100%, 80%, 1</td>
        </tr>
        <tr>
        <td>secondary-yellow</td>
        <td style="background-color: var(--secondary-yellow);"></td>
        <td>hsl(60, 100%, 50%)</td>
        <td>60, 100%, 50%</td>
        <td>60, 100%, 50%, 1</td>
        </tr>
      </tbody>
  </table>
</template>

<script setup lang="ts">

</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>




