<script setup>
import {reactive, ref} from "vue";
import {ErrorMessage} from "vee-validate";

const schema = reactive({
  title: 'required|min:5|max:50',
  contact: 'required|min:5|max:50|isEmailOrNumber',
  message: 'required|min:10|max:250'
})

let form_in_submission = ref(false)
let form_show_alert = ref(false)
let form_alert_variant = ref('bg-blue-500')
let form_alert_msg = ref('Proszę czekać, przesyłamy Twoje zapytanie')

async function sendForm(values) {
  form_in_submission.value = true
  form_show_alert.value = true
  form_alert_variant.value = 'bg-blue-500'
  form_alert_msg.value = 'Proszę czekać, przesyłamy Twoje zapytanie'

  try{
    //tu wysylamy formularz
    console.log(values)
  } catch (e) {
    console.log(e)
    form_in_submission.value = false
    form_alert_variant.value = 'bg-red-500'
    form_alert_msg.value = `Wystąpił błąd przy przesyłaniu zapytania.<br>Spróbuj ponownie lub skontaktuj się z działem technicznym<br>Błąd: ${e.message}`
    return
  }

  form_alert_variant.value = 'bg-green-500'
  form_alert_msg.value = 'Twoje zapytanie zostało wysłane'

  setTimeout(()=>{
    window.location.reload()
  }, 3000)

}

</script>

<template>
  <div>
    <div class="app-section-title">
      <p>Napisz do nas</p>
    </div>
    <div class="text-lg lg:text-xl text-justify mt-10">
      <div
        class="text-white text-center font-bold p-4 rounded mb-4"
        v-if="form_show_alert"
        :class="form_alert_variant"
      >
        {{ form_alert_msg }}
      </div>
      <vee-form :validation-schema="schema" @submit="sendForm">
<!--        Title -->
        <div class="mb-3">
          <label class="inline-block mb-2">Temat:</label>
          <vee-field
            type="text"
            name="title"
            class="block w-full py-1.5 px-3 text-gray-800 border-gray-300 border-2 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Podaj temat zapytania"
          />
          <error-message class="text-red-500" name="title"/>
        </div>
<!--        Contact -->
        <div class="mb-3">
          <label class="inline-block mb-2">Kontakt zwrotny:</label>
          <vee-field
            type="text"
            name="contact"
            class="block w-full py-1.5 px-3 text-gray-800 border-gray-300 border-2 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Email lub telefon"
          />
          <error-message class="text-red-500" name="contact"/>
        </div>
<!--        Message -->
        <div class="mb-3">
          <label class="inline-block mb-2">Twoja wiadomość:</label>
          <vee-field
            as="textarea"
            name="message"
            class="block w-full py-1.5 px-3 text-gray-800 border-gray-300 border-2 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder=""
          />
          <error-message class="text-red-500" name="message"/>
        </div>
        <button
          type="submit"
          class="block mx-auto w-1/3 py-1.5 bg-fuchsia-900 text-white rounded transition duration-500 hover:bg-fuchsia-700 cursor-pointer"
          :disabled="form_in_submission"
        >
          Wyślij
        </button>
      </vee-form>
    </div>
  </div>
</template>
