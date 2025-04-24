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
    console.log(values)

    const res = await fetch("https://us-central1-ptpipn-strona-test.cloudfunctions.net/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "aleksandrakoziol77@gmail.com",
        subject: `[ZAPYTANIE] ${values.title}`,
        message: `Witaj,\nOtrzymałeś nowe zapytanie ze strony PTPiPN:\n\n${values.message}\n\nKontakt zwrotny: ${values.contact}`,
      }),
    });

    await res.json();

  } catch (e) {
    console.log(e)
    form_in_submission.value = false
    form_alert_variant.value = 'bg-red-500'
    form_alert_msg.value = `Wystąpił błąd przy przesyłaniu zapytania. \n Spróbuj ponownie lub skontaktuj się z działem technicznym \n Błąd: ${e.message}`
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
  <div class="app-section-block">
    <div class="app-section-title">
      <p>Napisz do nas</p>
    </div>
    <div class="text-lg lg:text-xl text-justify">
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
          <vee-field type="text" name="title" class="app-form-field" placeholder="Podaj temat zapytania"/>
          <error-message class="text-red-500" name="title"/>
        </div>
<!--        Contact -->
        <div class="mb-3">
          <label class="inline-block mb-2">Kontakt zwrotny:</label>
          <vee-field type="text" name="contact" class="app-form-field" placeholder="Email lub telefon"/>
          <error-message class="text-red-500" name="contact"/>
        </div>
<!--        Message -->
        <div class="mb-3">
          <label class="inline-block mb-2">Twoja wiadomość:</label>
          <vee-field as="textarea" name="message" class="app-form-field" placeholder=""/>
          <error-message class="text-red-500" name="message"/>
        </div>
        <button type="submit" class="app-button mx-auto w-1/3" :disabled="form_in_submission">
          Wyślij
        </button>
      </vee-form>
    </div>
  </div>
</template>
