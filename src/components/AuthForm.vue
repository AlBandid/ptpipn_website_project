<script setup>
import { ErrorMessage } from 'vee-validate'
import { reactive, ref } from 'vue'
import { setupCollection } from '@/includes/firebase.js'
import { getDocs, limit, query } from 'firebase/firestore'

const props = defineProps({authorize: Function})
const schema = reactive({
  password: 'required',
})

let form_in_submission = ref(false)
let form_show_alert = ref(false)
let form_alert_variant = ref('bg-blue-500')
let form_alert_msg = ref('Proszę czekać, sprawdzamy poprawność hasła')

async function sendForm(values) {
  form_in_submission.value = true
  form_show_alert.value = true
  form_alert_variant.value = 'bg-blue-500'
  form_alert_msg.value = 'Proszę czekać, weryfikujemy hasło'
  let hasloDostepu = ref(null)

  try {
    console.log(values)
    const setupRef = await getDocs(query(setupCollection, limit(1)))
    let setupData = {}
    setupRef.forEach((doc) => {
      setupData = Object.assign(setupData, { ...doc.data(), docID: doc.id })
    })
    hasloDostepu.value = setupData.hasloMaterialyKonferencjaNeonursing
  } catch (e) {
    console.log(e)
    form_in_submission.value = false
    form_alert_variant.value = 'bg-red-500'
    form_alert_msg.value = `Wystąpił błąd przy weryfikacji. \n Spróbuj ponownie lub skontaktuj się z działem technicznym`
    return
  }

  if(hasloDostepu.value === values.password) {
    form_alert_variant.value = 'bg-green-500'
    form_alert_msg.value = 'Hasło poprawne'
    //przekierowanie
    setTimeout(() => {
      props.authorize()
    }, 1500)
  } else {
    form_in_submission.value = false
    form_alert_variant.value = 'bg-red-500'
    form_alert_msg.value = `Błędne hasło`
  }
}
</script>

<template>
  <div class="md:w-1/2 lg:w-1/3 md:mx-auto">
    <div class="text-lg lg:text-xl text-justify">
      <div
        class="text-white text-center font-bold p-4 rounded mb-4"
        v-if="form_show_alert"
        :class="form_alert_variant"
      >
        {{ form_alert_msg }}
      </div>
      <vee-form :validation-schema="schema" @submit="sendForm">
        <div class="mb-3">
          <label class="inline-block mb-2">Hasło dostępu:</label>
          <vee-field type="password" name="password" class="app-form-field" placeholder="" />
          <error-message class="text-red-500" name="password" />
        </div>
        <button type="submit" class="app-button mx-auto w-1/3" :disabled="form_in_submission">
          Zatwierdź
        </button>
      </vee-form>
    </div>
  </div>
</template>

<style scoped></style>
