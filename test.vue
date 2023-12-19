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

У меня есть вот такая разметка таблицы цветов для моей союственной библиотеки
в ней моковые данные 
я хочу заменить на реальные 
вот они 
     COLORS
  --primary-main: rgb(0, 163, 84);
  --primary-middle: hsl(165, 100%, 24%);
  --primary-light: hsl(151, 47%, 84%);
  --secondary-orange: hsl(24, 90%, 54%);
  --secondary-darkred: hsl(0, 100%, 32%);
  --secondary-red: hsl(14, 100%, 57%);
  --secondary-yellow: hsl(45, 100%, 51%);
  --secondary-grey: hsl(220, 13%, 95%);
  --tertiary: hsl(152, 21%, 17%);
  --error-main: hsl(0, 94%, 34%);
  --error-middle: hsl(349, 100%, 34%);
  --error-light: hsl(0, 100%, 94%);
  --warning-main: hsl(30, 100%, 48%);
  --warning-middle: hsl(36, 100%, 50%);
  --warning-light: hsla(45, 100%, 51%, 0.141);
  --info-main: hsl(210, 79%, 46%);
  --info-middle: hsl(207, 90%, 54%);
  --info-light: hsl(207, 89%, 68%);
  --success-main: hsl(123, 43%, 39%);
  --success-middle: hsl(122, 39%, 49%);
  --success-light: hsl(123, 38%, 64%);
  --dark-100: hsla(0, 0%, 13%, 0.922);
  --dark-60: hsla(152, 21%, 17%, 0.6);
  --dark-30: hsla(152, 21%, 17%, 0.302);
  --light-100: hsl(0, 0%, 100%);
  --light-60: hsla(0, 0%, 100%, 0.6);
  --light-30: hsla(0, 0%, 100%, 0.38);
  --border-12: hsla(152, 21%, 17%, 0.122);
  --border-8: hsla(152, 21%, 17%, 0.078);
  --surface-1: hsl(0, 0%, 98%);
  --surface-2: hsl(0, 0%, 100%);
  --disabled-element: hsl(150, 5%, 74%);
  --disabled-content: hsl(150, 5%, 57%);
  --secondary-light: rgba(35, 54, 45, 0.12);
  --overlay-states-light: rgba(35, 54, 45, 0.08);

  DEFAULT COLORS 
   gray 
  --gray-25: #fcfcfc;
  --gray-50: #f8f8f8;
  --gray-100: #f3f3f3;
  --gray-150: #ededed;
  --gray-200: #e8e8e8;
  --gray-250: #e2e2e2;
  --gray-300: #dbdbdb;
  --gray-400: #c7c7c7;
  --gray-500: #8f8f8f;
  --gray-600: #858585;
  --gray-700: #6f6f6f;
  --gray-800: #383838;
  --gray-900: #171717;
  /* gray-blue */
  --gray-blue-25: #fbfcfd;
  --gray-blue-50: #f8f9fa;
  --gray-blue-100: #f1f3f5;
  --gray-blue-150: #eceef0;
  --gray-blue-200: #e6e8eb;
  --gray-blue-250: #dfe3e6;
  --gray-blue-300: #d7dbdf;
  --gray-blue-400: #c1c8cd;
  --gray-blue-500: #889096;
  --gray-blue-600: #7e868c;
  --gray-blue-700: #687076;
  --gray-blue-800: #31393e;
  --gray-blue-900: #11181c;
   gray-brand 
  --gray-brand-25: #fcfdfc;
  --gray-brand-50: #f8faf8;
  --gray-brand-100: #f2f4f2;
  --gray-brand-150: #ecefec;
  --gray-brand-200: #e6e9e6;
  --gray-brand-250: #e0e4e0;
  --gray-brand-300: #d8dcd8;
  --gray-brand-400: #c3c8c2;
  --gray-brand-500: #8b918a;
  --gray-brand-600: #818780;
  --gray-brand-700: #6b716a;
  --gray-brand-800: #313c2e;
  --gray-brand-900: #141e12;
   brand 
  --primary-brand-25: #fbfefb;
  --primary-brand-50: #f3fcf3;
  --primary-brand-100: #ebf9eb;
  --primary-brand-150: #dff3df;
  --primary-brand-200: #ceebcf;
  --primary-brand-250: #b7dfba;
  --primary-brand-300: #97cf9c;
  --primary-brand-400: #65ba75;
  --primary-brand-500: #46a758;
  --primary-brand-600: #3d9a50;
  --primary-brand-700: #297c3b;
  --primary-brand-800: #283e2b;
  --primary-brand-900: #1b311e;
   error 
  --error-25: #fffcfc;
  --error-50: #fff8f7;
  --error-100: #fff0ee;
  --error-150: #ffe6e2;
  --error-200: #fdd8d3;
  --error-250: #fac7be;
  --error-300: #f3b0a2;
  --error-400: #ea9280;
  --error-500: #e25134;
  --error-600: #dd3f1e;
  --error-700: #c7371c;
  --error-800: #5e1f13;
  --error-900: #400a02;
   warning 
  --warning-25: #fdfdf9;
  --warning-50: #fffce8;
  --warning-100: #fffbd1;
  --warning-150: #fff8bb;
  --warning-200: #fef2a4;
  --warning-250: #f9e68c;
  --warning-300: #efd36c;
  --warning-400: #f5d90a;
  --warning-500: #f7ce00;
  --warning-600: #ebbc00;
  --warning-700: #946800;
  --warning-800: #43361c;
  --warning-900: #35290f;
   success 
  --success-25: #fbfefc;
  --success-50: #f2fcf5;
  --success-100: #e9f9ee;
  --success-150: #ddf3e4;
  --success-200: #ccebd7;
  --success-250: #b4dfc4;
  --success-300: #92ceac;
  --success-400: #5bb98c;
  --success-500: #30a46c;
  --success-600: #299764;
  --success-700: #18794e;
  --success-800: #223f32;
  --success-900: #153226;
   pink 
  --pink-25: #fffcfe;
  --pink-50: #fff7fc;
  --pink-100: #feeef8;
  --pink-150: #fce5f3;
  --pink-200: #f9d8ec;
  --pink-250: #f3c6e2;
  --pink-300: #ecadd4;
  --pink-400: #e38ec3;
  --pink-500: #d6409f;
  --pink-600: #d23197;
  --pink-700: #cd1d8d;
  --pink-800: #562342;
  --pink-900: #3b0a2a;
   purple 
  --purple-25: #fefcfe;
  --purple-50: #fdfaff;
  --purple-100: #f9f1fe;
  --purple-150: #f3e7fc;
  --purple-200: #eddbf9;
  --purple-250: #e3ccf4;
  --purple-300: #d3b4ed;
  --purple-400: #be93e4;
  --purple-500: #8e4ec6;
  --purple-600: #8445bc;
  --purple-700: #793aaf;
  --purple-800: #44285f;
  --purple-900: #2b0e44;
   violet 
  --violet-25: #fdfcfe;
  --violet-50: #fbfaff;
  --violet-100: #f5f2ff;
  --violet-150: #ede9fe;
  --violet-200: #e4defc;
  --violet-250: #d7cff9;
  --violet-300: #c4b8f3;
  --violet-400: #aa99ec;
  --violet-500: #6e56cf;
  --violet-600: #644fc1;
  --violet-700: #5746af;
  --violet-800: #362d67;
  --violet-900: #20134b;
   indigo 
  --indigo-25: #fdfdfe;
  --indigo-50: #f8faff;
  --indigo-100: #f0f4ff;
  --indigo-150: #e6edfe;
  --indigo-200: #d9e2fc;
  --indigo-250: #c6d4f9;
  --indigo-300: #aec0f5;
  --indigo-400: #8da4ef;
  --indigo-500: #3e63dd;
  --indigo-600: #3a5ccc;
  --indigo-700: #3451b2;
  --indigo-800: #263561;
  --indigo-900: #101d46;
   blue 
  --blue-25: #fbfdff;
  --blue-50: #f5faff;
  --blue-100: #edf6ff;
  --blue-150: #e1f0ff;
  --blue-200: #cee7fe;
  --blue-250: #b7d9f8;
  --blue-300: #96c7f2;
  --blue-400: #5eb0ef;
  --blue-500: #0091ff;
  --blue-600: #0081f1;
  --blue-700: #006adc;
  --blue-800: #143962;
  --blue-900: #00254d;
  cyan 
  --cyan-25: #fafdfe;
  --cyan-50: #f2fcfd;
  --cyan-100: #e7f9fb;
  --cyan-150: #d8f3f6;
  --cyan-200: #c4eaef;
  --cyan-250: #aadee6;
  --cyan-300: #84cdda;
  --cyan-400: #3db9cf;
  --cyan-500: #05a2c2;
  --cyan-600: #0894b3;
  --cyan-700: #0c7792;
  --cyan-800: #143e49;
  --cyan-900: #04313c;
   orange 
  --secondary-brand-25: #fefcfb;
  --secondary-brand-50: #fef8f4;
  --secondary-brand-100: #fff1e7;
  --secondary-brand-150: #ffe8d7;
  --secondary-brand-200: #ffdcc3;
  --secondary-brand-250: #ffcca7;
  --secondary-brand-300: #ffb381;
  --secondary-brand-400: #fa934e;
  --secondary-brand-500: #f76808;
  --secondary-brand-600: #ed5f00;
  --secondary-brand-700: #bd4b00;
  --secondary-brand-800: #542b1e;
  --secondary-brand-900: #451e11;
   mint 
  --mint-25: #f9fefd;
  --mint-50: #effefa;
  --mint-100: #e1fbf4;
  --mint-150: #d2f7ed;
  --mint-200: #c0efe3;
  --mint-250: #a5e4d4;
  --mint-300: #7dd4c0;
  --mint-400: #40c4aa;
  --mint-500: #70e1c8;
  --mint-600: #69d9c1;
  --mint-700: #147d6f;
  --mint-800: #17403a;
  --mint-900: #09342e;
  amber 
  --amber-25: #fefdfb;
  --amber-50: #fff9ed;
  --amber-100: #fff4d5;
  --amber-150: #ffecbc;
  --amber-200: #ffe3a2;
  --amber-250: #ffd386;
  --amber-300: #f3ba63;
  --amber-400: #ee9d2b;
  --amber-500: #ffb224;
  --amber-600: #ffa01c;
  --amber-700: #ad5700;
  --amber-800: #65351f;
  --amber-900: #4e2009;



Верни новую разметку страницы с таблицами









<template>
  <h1>Цвета</h1>
  <h2>Основные цвета</h2>
  <table>
    <thead>
      <tr>
        <th>CSS-переменная</th>
        <th>Цвет</th>
        <th>Ячейка с цветом</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>--primary-main</td>
        <td>rgb(0, 163, 84)</td>
        <td style="background-color: rgb(0, 163, 84);"></td>
      </tr>
      <tr>
        <td>--primary-middle</td>
        <td>hsl(165, 100%, 24%)</td>
        <td style="background-color: hsl(165, 100%, 24%);"></td>
      </tr>
      <tr>
        <td>--primary-light</td>
        <td>hsl(151, 47%, 84%)</td>
        <td style="background-color: hsl(151, 47%, 84%);"></td>
      </tr>
      <tr>
        <td>--secondary-orange</td>
        <td>hsl(24, 90%, 54%)</td>
        <td style="background-color: hsl(24, 90%, 54%);"></td>
      </tr>
      <tr>
        <td>--secondary-darkred</td>
        <td>hsl(0, 100%, 32%)</td>
        <td style="background-color: hsl(0, 100%, 32%);"></td>
      </tr>
      <tr>
        <td>--secondary-red</td>
        <td>hsl(14, 100%, 57%)</td>
        <td style="background-color: hsl(14, 100%, 57%);"></td>
      </tr>
      <tr>
        <td>--secondary-yellow</td>
        <td>hsl(45, 100%, 51%)</td>
        <td style="background-color: hsl(45, 100%, 51%);"></td>
      </tr>
      <tr>
        <td>--secondary-grey</td>
        <td>hsl(220, 13%, 95%)</td>
        <td style="background-color: hsl(220, 13%, 95%);"></td>
      </tr>
      <tr>
        <td>--tertiary</td>
        <td>hsl(152, 21%, 17%)</td>
        <td style="background-color: hsl(152, 21%, 17%);"></td>
      </tr>
      <!-- Добавьте остальные строки согласно вашим переменным -->
    </tbody>
  </table>

  <h2>Дефолтные цвета</h2>
  <table>
    <thead>
      <tr>
        <th>CSS-переменная</th>
        <th>HEX</th>
        <th>Ячейка с цветом</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>--gray-25</td>
        <td>#fcfcfc</td>
        <td style="background-color: #fcfcfc;"></td>
      </tr>
      <!-- Добавьте остальные строки согласно вашим переменным -->
    </tbody>
  </table>
</template>

<script setup lang="ts">
  // Ваш JavaScript код, если он требуется
</script>

<style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }

  td:nth-child(3) {
    width: 50px;
  }
</style>


