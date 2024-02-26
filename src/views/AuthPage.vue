<template>
  <main class="main">
    <form @submit.prevent class="form" action="">
        <span 
        class="form__toogle"
        @click="toogleForm"
        > 
            {{ toogleName }} 
        </span>

        <h2 class="form__title"> {{ title }} </h2>

        <div class="form__input">
          <input 
            class="form__input__field"
            type="text" 
            placeholder="Логин"
            v-model="loginValue"
          >

          <span class="form__input__error"> {{ errorLogin }} </span> 

          <input
            class="form__input__field"
            type="password"
            placeholder="Пароль"
            v-model="passwordValue"
          >

          <span class="form__input__error"> {{ errorPassword }} </span>
        
          <div class="form__checkbox" v-if="!isAuthToogle">
            <input type="checkbox" id="checkbox"
            v-model="checkValue">
            <label for="checkbox"> 
              Я согласен получать обновления на почту
            </label>
          </div>
        </div>

        <span class="form__input__error__center"> {{ isErrorUsersInfo }} </span>
        <ButtonAuth 
          :title="buttonName"
          buttonAddInBasket 
          @click.stop="clickForm"
         />
    </form>
  </main>
</template>

<script>
import ButtonAuth from '@/components/ui/ButtonExitUi.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AuthPage',
  components: {
    ButtonAuth
  },
  props: {
  },
  setup () {
     const router = useRouter()

    const title = ref('ВХОД')
    const toogleName = ref('Зарегистрироваться')
    const buttonName = ref('Войти')
    const isErrorUsersInfo = ref('')
    const isAuthToogle = ref(true)
    const errorLogin = ref('')
    const errorPassword = ref('')
    const loginValue = ref('')
    const passwordValue = ref('')
    const checkValue = ref(false)


    const toogleForm = () => {
       errorLogin.value = ''
       errorPassword.value = ''
       isErrorUsersInfo.value = ''

        if (isAuthToogle.value) {
            title.value = 'РЕГИСТРАЦИЯ'
            toogleName.value = 'Авторизоваться'
            buttonName.value = 'Зарегистрироваться'
        } else {
            title.value = 'ВХОД'
            toogleName.value = 'Зарегистрироваться'
            buttonName.value = 'Войти'
        }

        isAuthToogle.value = !isAuthToogle.value
    }

    const clickForm = () => {
        isAuthToogle.value ? authorization() : registration()
    }

    const authorization = () => {
       errorLogin.value = ''
       errorPassword.value = '' 

       if (loginValue.value.trim().length === 0) {
         errorLogin.value = 'Поле не должно быть пустым'
       }

       if (passwordValue.value.trim().length === 0) {
         errorPassword.value = 'Поле не должно быть пустым'
       }

       if (errorLogin.value.trim().length === 0 && errorPassword.value.trim().length === 0) {
         const users = JSON.parse(localStorage.getItem('users'))

         const user = users.find(item => {
           return item.login === loginValue.value
         })

         if (!user) {
           isErrorUsersInfo.value = 'Логин или пароль неверен'
         } else {
           if (user?.password === passwordValue.value) {
             localStorage.setItem('isAuth', JSON.stringify(true))
             // localStorage.isAuth = JSON.stringify(true)
             router.push('/') 
           } else {
            isErrorUsersInfo.value = 'Логин или пароль неверен'
           }
         }
       }
    }

    const registration = () => {
       errorLogin.value = ''
       errorPassword.value = '' 
       isErrorUsersInfo.value = ''

       if (loginValue.value.trim().length === 0) {
         errorLogin.value = 'Поле не должно быть пустым'
       } else if (loginValue.value.trim().length < 4) {
        errorLogin.value = 'Логин должен содержать не менее 4-х символов'
       }
       
       if (passwordValue.value.trim().length === 0) {
         errorPassword.value = 'Поле не должно быть пустым'
       } else if (passwordValue.value.trim().length < 4) {
         errorPassword.value = 'Пароль должен содержать не менее 4-х символов'
       }

       if (errorLogin.value.trim().length === 0 && errorPassword.value.trim().length === 0) {
         const users = JSON.parse(localStorage.getItem('users'))

         const isCheckAuth = users.some(item => {
          return item.login === loginValue.value
        })

         if (!isCheckAuth) {
           users.push({
             login: loginValue.value,
             password: passwordValue.value
           })

           isErrorUsersInfo.value = ''

           localStorage.users = JSON.stringify(users)
         } else {
            isErrorUsersInfo.value = 'Логин уже занят'
         }
       }
    }

    return {
        title,
        toogleName,
        buttonName,
        loginValue,
        passwordValue,
        isAuthToogle,
        checkValue,
        isErrorUsersInfo,
        errorLogin,
        errorPassword,
        toogleForm,
        clickForm
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
    height: 100vh;
    background-image: url('@/assets/images/bgAutorization.png');
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
}

.form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    border: 2px solid #D58C51;
    background: #fff;
    gap: 25px;
    padding: 10px 20px 40px 20px;
    font-family: 'Montserrat';

    &__toogle {
      margin-left: auto;
      font-size: 11px;
      font-weight: 300;
      line-height: 13px;
      color: #D58C51;
      text-decoration: underline;
      cursor: pointer;
    }

    &__title {
      text-align: center;
      font-size: 31px;
      font-weight: 700;
      line-height: 38px;
    }

    &__input {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      &__field {
        width: 420px;
        height: 39px;
        border-radius: 61px;
        border: 1px solid #D58C51;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: #161516;
        padding: 0px 10px 0px 10px;
      }
    }

    &__checkbox {
      display: flex;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      background-color: #fff;
      font-size: 11px;
      font-weight: 300;
      line-height: 13px;
      gap: 3px;
      position: absolute;
      bottom: 125px;
      &:checked {
          appearance: auto;
          clip-path: circle(50% at 50% 50%);
      }
    }

    &__input__error {
      font-size: 10px;
      font-weight: 300;
      color: #FF0B0B;
      align-self: self-start;
      margin-left: 20px;
      margin-top: 5px;
      height: 15px;
    }

    &__input__error__center {
      font-size: 10px;
      font-weight: 300;
      color: #FF0B0B;
      height: 15px;
     // margin-bottom: -55px;
      text-align: center;
    }

    :deep(.buttonAdd) {
    display: block;
    margin: 0 auto;
    }
}
</style>
  