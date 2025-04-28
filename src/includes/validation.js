import { configure, defineRule, ErrorMessage, Field as VeeField, Form as VeeForm } from 'vee-validate'
import { required, min, max, alpha_num } from '@vee-validate/rules'

export default {
  install(app){
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alphaNum', alpha_num)
    defineRule('isEmailOrNumber', (value)=>{
      if(!/.*[@]+/.test(value) && !/^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})$/.test(value.trim())){
        return 'Niepoprawny email lub numer telefonu'
      }
      return true
    })
    defineRule('atLeast3Letters', (value)=>{
      if(!/[a-zA-Z]{3,}/.test(value.trim())){
        return 'Podany tekst nie zawiera słów'
      }
      return true
    })

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: 'Pole wymagane',
          min: `Min. ${ctx.rule.params} znaków`,
          max: `Maks. ${ctx.rule.params} znaków`,
          alphaNum: 'Użyto niedozwolonych znaków'
        }
        return messages[ctx.rule.name] ? messages[ctx.rule.name] : 'Wprowadzono niepoprawne dane'
      },
      validateOnBlur: false,
      validateOnChange: false,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
