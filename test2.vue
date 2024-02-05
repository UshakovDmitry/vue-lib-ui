<template>
  <div class="registration">
    <div class="registration__animation">
      <animation></animation>
    </div>
    <div class="registration__form">
      <registration-form
        :bank_list="model.bank_list"
        :is_privacy_policy="model.privacy_policy"
        @checkBIN="viewModel.checkBIN($event)"
        @setCompanyData="viewModel.setCompanyData($event)"
        @setUserData="viewModel.setUserData($event)"
        @registration="viewModel.registration()"
        @showRequiredFieldsError="showRequiredFieldsError($event)"
      ></registration-form>
      <div class="privacy-policy">
        <AlserCheckbox
          :isChecked="model.privacy_policy"
          @onChange="(bool:boolean) => viewModel.setPrivacyPolicy(bool)"
          :style="'font-family: Rubik; font-size: 16px;font-style: normal; font-weight: 400; line-height: 24px; letter-spacing: 0.4px; color: #141E12;'"
        >
        </AlserCheckbox>
        <p class="privacy-policy__text">
          Настоящим подтверждаю, что я ознакомлен и согласен с условиями
          <a
            class="privacy-policy__text_link"
            href="https://cdn.alser.kz/img/consent_to_processing.docx?_gl=1*tvb3un*_ga*NzI2ODA4OTc4LjE2ODExMjYzNTE.*_ga_6PLXYRW5Z2*MTY4NTAwMzQxNC41Mi4xLjE2ODUwMDcyMjAuNjAuMC4w"
            download=""
            >оферты</a
          >
          и
          <a
            class="privacy-policy__text_link"
            href="https://cdn.alser.kz/img/privacy-policy.docx?_gl=1*13gpppv*_ga*MTY1Nzk0MDQ4OS4xNjgyMDU0NjI5*_ga_6PLXYRW5Z2*MTY4NTAwNzQyOC4xMzQuMS4xNjg1MDA3NDMzLjU1LjAuMA.."
            download
            >политики конфиденциальности</a
          >.
        </p>
      </div>
      <p class="privacy-policy__reqiured">{{ requiredText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegistrationForm from "./components/registration-form/registration-form.vue";
import animation from "../../components/animation/animation.vue";
//@ts-ignore
import { AlserCheckbox } from "alser.vue.library";
import { ref } from "vue";
import { SignUpModel } from "./sign-up.model";
import { SignUpViewModel } from "./sign-up.viewModel";

const model = ref(new SignUpModel());
const viewModel = ref(new SignUpViewModel(model));

const requiredText = ref("");

const showRequiredFieldsError = (text: string) => {
  requiredText.value = text;
};
</script>

<style scoped>
.registration {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 117px;
  /* border: 1px solid red; */
  min-height: 100vh;
}
@media screen and (max-width: 768px) {
  .registration {
    flex-direction: column;
    padding: 0;
  }
}

.registration__animation {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.registration__form {
  /* FIXME: ТЕСТИТЬ ШИРИНУ */
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #5e4caf; */
}

.registration__title {
  color: var(--Primary-LightMode-Main, #00a153);
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
}

.form {
  margin: 0 auto;
  width: 250px;
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.btn {
  background-color: #5e4caf;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.privacy-policy {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  gap: 8px;
  margin-top: 16px;
}

.privacy-policy__text {
  color: var(--text-secondary-alt, #c3c8c2);
  font-family: Rubik;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.4px;
}

.privacy-policy__text_link {
  color: var(--text-link-primary, #0091ff);
  text-decoration: none;
}

.privacy-policy__reqiured {
  color: #e54d2e;
  text-align: center;
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  letter-spacing: 0.4px;
  transition: all 0.3s ease-in-out;
}
</style>

я хрчу чтобы текст в privacy-policy__reqiured появлялся и исчезал плавно 
реализуй через css
