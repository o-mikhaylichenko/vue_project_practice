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

        <input 
          class="form__input"
          type="text" 
          placeholder="Логин"
          v-model="loginValue"
        >

        <span class="form__input__error"> {{ errorLogin }} </span> 

        <input
          class="form__input"
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

        <span class="form__input__error__center"> {{ isErrorUsersInfo }} </span>

        <button @click="clickForm"> {{ buttonName }} </button>
    </form>
  </main>
</template>

<script>
import { ref } from 'vue'
// import { useRouter } from 'vue-router'

export default {
  name: 'AuthPage',
  components: {
  },
  props: {
  },
  setup () {
    // const router = useRouter()

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
            return item.login ===loginValue.value
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
    width: 450px;
    border: 2px solid #D58C51;
    background: #fff;
    gap: 25px;
    padding: 10px 20px 40px 20px;
    font-family: 'Montserrat';

    &__toogle {
      //position: absolute;
      margin-left: auto;
      font-size: 11px;
      font-weight: 300;
      line-height: 13px;
      color: #D58C51;
      text-decoration: underline;
      cursor: pointer;
    }

    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 31px;
      font-weight: 700;
      line-height: 38px;
    }

    &__input {
        width: 430px;
      height: 39px;
      border-radius: 61px;
      border: 1px solid #D58C51;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      //letter-spacing: 0em;
      color: #161516;
      padding: 0px 10px 0px 10px;
    }

    &__checkbox {
      display: flex;
      align-items: center;
      border-radius: 50%;
      vertical-align: middle;
      //border: 1px solid #D58C51;
      //appearance: none;
      //-webkit-appearance: none;
      outline: none;
      cursor: pointer;
      background-color: #fff;
      font-size: 11px;
      font-weight: 300;
      line-height: 13px;
      gap: 3px;
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
      height: 15px;
    }

    &__input__error__center {
      font-size: 10px;
      font-weight: 300;
      color: #FF0B0B;
    //  align-self: self-start;
      margin-left: 20px;
      height: 15px;
      margin-top: -22px;
      margin-bottom: -22px;
      margin-left: 0px;
      align-self: auto;
    }
}
</style>
