<script setup>
import WideoItem from '@/components/WideoItem.vue'

const wideoList = [
  {
    id: "sesja1",
    title: "SESJA I",
    link: "DouAntscfIU",
    program: [
      {
        title: "APN czyli Pielęgniarka Zaawansowanej Praktyki w neonatologii",
        name: "mgr Elżbieta Kozioł, dr n. o zdr. Agnieszka Bałanda-Bałdyga"
      },
      {
        title: "Zdarzenia niepożądane – kodeks etyki postępowania",
        name: "dr n. o zdr. Agnieszka Bałanda-Bałdyga"
      },
      {
        title: "Co nowego w badaniach przesiewowych u noworodków?",
        name: "dr n. med. Katarzyna Kanadys, prof. uczelni dr hab. Anna Pilewska-Kozak, prof. uczelni"
      },
      {
        title: "Choroby skóry u noworodka jak je pielęgnować",
        name: "mgr Karolina Landos, mgr Angelika Doroszewska"
      },
      {
        title: "Bepanthen - bliżej skóry",
        name: "dr n. biol. Agnieszka Kotusz, firma Bayer"
      }
    ]
  },
  {
    id: "sesja2",
    title: "SESJA II",
    link: "eEflXzuPBPY",
    program: [
      {
        title: "Nawilżanie oddechowe i jego wpływ na układ oddechowy noworodka",
        name: "Paulina Nowak firma Fisher&amp;Pykel"
      },
      {
        title: "Rdzawa siara",
        name: "mgr Agnieszka Piątkowska"
      },
      {
        title: "Ulewanie oraz kolka. Rola personelu pielęgniarskiego, edukacja i wsparcie rodziców",
        name: "mgr Agnieszka Pietrzyk"
      },
      {
        title: "Problemy żywieniowe u noworodka z refluksem żołądkowo-przełykowym – opis przypadku",
        name: "mgr Ewelina Sikora"
      },
      {
        title: "Udział pielęgniarki w żywieniu pozajelitowym",
        name: "mgr Aleksandra Matczak, mgr Paulina Szydłowska-Pawlak"
      }
    ]
  },
  {
    id: "sesja3",
    title: "SESJA III",
    link: "2wY38u4uilk",
    program: [
      {
        title: "Ból u noworodka – co możemy zrobić",
        name: "mgr Elżbieta Iłendo"
      },
      {
        title: "Opieka psychologiczna w oddziale naonatologicznym i OION-ach nad rodzicem w kryzysie",
        name: "dr n. med. Tatiana Baran"
      },
    ]
  },
  {
    id: "sesja4",
    title: "SESJA IV",
    link: "ohJMJFxcOjE",
    program: [
      {
        title: "Farmakoterapia w neonatologii co musimy wiedzieć",
        name: "mgr Maciej Milczarek"
      },
      {
        title: "Opieka nad noworodkiem poddanym hipotermii",
        name: "mgr Wioletta Cedrowska-Adamus"
      },
      {
        title: "Resuscytacja – odrębności w sytuacjach szczególnych",
        name: "mgr Barbara Piskuła"
      }
    ]
  },
]
</script>

<template>
  <div class="flex flex-col" v-for="wideo in wideoList" :key="wideo.id">
    <wideo-item :wid_id="wideo.id" :title="wideo.title" :link="wideo.link" :program="wideo.program"></wideo-item>
  </div>
</template>

<style scoped></style>
