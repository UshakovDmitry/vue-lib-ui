<template>
  <h1>Типография</h1>

  <table>
    <thead>
      <tr>
        <th>css-класс</th>
        <th>Текст</th>
        <th>font-size</th>
        <th>Межбуквенное расстояние</th>
        <th>Текст</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th>display-md</th>
        <th class="display-md">Пример текста</th>
        <th>45px</th>
        <th>48px</th>
        <th>-0.5px</th>
      </tr>
      <tr>
       <td>display-sm</td>
        <td class="display-sm">Пример текста</td>
        <td>36px</td>
        <td>40px</td>
        <td>-0.5px</td>
        </tr>
        <tr>
        <td>headline-lg</td>
        <td class="headline-lg">Пример текста</td>
        <td>32px</td>
        <td>40px</td>
        <td>0px</td>
        </tr>
        <tr>
        <td>headline-md</td>
        <td class="headline-md">Пример текста</td>
        <td>28px</td>
        <td>36px</td>
        <td>0px</td>
        </tr>
        <tr>
        <td>headline-sm</td>
        <td class="headline-sm">Пример текста</td>
        <td>24px</td>
        <td>32px</td>
        <td>0px</td>
        </tr>
        <tr>
        <td>title-lg</td>
        <td class="title-lg">Пример текста</td>
        <td>22px</td>
        <td>28px</td>
        <td>0px</td>
        </tr>
        <tr>
        <td>title-md</td>
        <td class="title-md">Пример текста</td>
        <td>16px</td>
        <td>24px</td>
        <td>0.15px</td>
        </tr>
        <tr>
        <td>title-sm</td>
        <td class="title-sm">Пример текста</td>
        <td>14px</td>
        <td>20px</td>
        <td>0.25px</td>
        </tr>
        <tr>
        <td>label-lg</td>
        <td class="label-lg">Пример текста</td>
        <td>14px</td>
        <td>20px</td>
        <td>0.1px</td>
        </tr>
        <tr>
        <td>label-md</td>
        <td class="label-md">Пример текста</td>
        <td>12px</td>
        <td>16px</td>
        <td>0.5px</td>
        </tr>
        <tr>
        <td>label-sm</td>
        <td class="label-sm">Пример текста</td>
        <td>11px</td>
        <td>16px</td>
        <td>0.5px</td>
        </tr>
        <tr>
        <td>body-lg</td>
        <td class="body-lg">Пример текста</td>
        <td>16px</td>
        <td>24px</td>
        <td>0.15px</td>
        </tr>
        <tr>
        <td>body-md</td>
        <td class="body-md">Пример текста</td>
        <td>14px</td>
        <td>20px</td>
        <td>0.25px</td>
        </tr>
        <tr>
        <td>body-sm</td>
        <td class="body-sm">Пример текста</td>
        <td>12px</td>
        <td>16px</td>
        <td>0.4px</td>
        </tr>
        <!-- <tr>
        <td>regular</td>
        <td class="regular">Пример текста</td>
        <td>400</td>
        <td>400</td>
        <td>400</td>
        </tr>
        <tr>
        <td>medium</td>
        <td class="medium">Пример текста</td>
        <td>500</td>
        <td>500</td>
        <td>500</td>
        </tr>
        <tr>
        <td>bold</td>
        <td class="bold">Пример текста</td>
        <td>700</td>
        <td>700</td>
        <td>700</td>
        </tr> -->

    </tbody>
  </table>
</template>

<script setup lang="ts">

</script>

<style >
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .display-md {
  font-size: 45px;
  line-height: 48px;
  letter-spacing: -0.5px;
}
.display-sm {
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.5px;
}
.headline-lg {
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0px;
}
.headline-md {
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0px;
}
.headline-sm {
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
}
.title-lg {
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0px;
}
.title-md {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
}
.title-sm {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
}
.label-lg {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}
.label-md {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
}
.label-sm {
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.5px;
}
.body-lg {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
}
.body-md {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
}
.body-sm {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
}

</style>

