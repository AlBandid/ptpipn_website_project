<script>
export default {
  name: 'NeonursingView',
  setup() {
    let rejestracja_otwarta = false;

    const programKonferencji = [
      {
        godzina: '9:00-9:15',
        tytul: 'Otwarcie Konferencji',
        prowadzacy: '',
        special_class: ''
      },
      {
        godzina: '9:15-10:50',
        tytul: 'SESJA I',
        prowadzacy: '',
        special_class: 'bg-fuchsia-100'
      },
      {
        godzina: '9:15-9:35',
        tytul: 'Interpretacja badań podstawowych u noworodków',
        prowadzacy: 'mgr Aleksandra Matczak',
        special_class: ''
      },
      {
        godzina: '9:35-9:40',
        tytul: 'Ostropest plamisty - skuteczne wsparcie laktacji w innowacyjnej cząsteczce Silitidil',
        prowadzacy: 'Julia Koseda Humana Polska',
        special_class: ''
      },
      {
        godzina: '9:40-10:00',
        tytul: 'Ocena umiejętności ssania - gotowość do doustnego przyjmowania pokarmu',
        prowadzacy: 'mgr Agnieszka Piątkowska',
        special_class: ''
      },
      {
        godzina: '10:00-10:05',
        tytul: 'Efektywne odciąganie mleka przy użyciu sprzętu wspomagającego laktację',
        prowadzacy: 'Joanna Uchlik, firma Neno',
        special_class: ''
      },
      {
        godzina: '10:05-10:20',
        tytul: 'Analiza efektywności Programu Wczesnej Stymulacji Laktacji prowadzonego w Klinice Neonatologii i Intensywnej Terapii Noworodka Uniwersytetu Medycznego w Białymstoku',
        prowadzacy: 'mgr Agata Ostasz',
        special_class: ''
      },
      {
        godzina: '10:20-10:30',
        tytul: 'Bebilon – siła biotyków',
        prowadzacy: 'firma Nutricia',
        special_class: ''
      },
      {
        godzina: '10:30-10:50',
        tytul: 'Dyskusja',
        prowadzacy: '',
        special_class: ''
      },
      {
        godzina: '10:50-11:20',
        tytul: 'Przerwa',
        prowadzacy: '',
        special_class: 'bg-white'
      },
      {
        godzina: '11:20-12:35',
        tytul: 'SESJA II',
        prowadzacy: '',
        special_class: 'bg-fuchsia-100'
      },
      {
        godzina: '11:20-11:40',
        tytul: 'Bezpieczna infuzja u noworodka',
        prowadzacy: 'mgr Katarzyna Leńska',
        special_class: ''
      },
      {
        godzina: '11:40-12:00',
        tytul: 'Resuscytacja noworodka zgodnie z aktualnymi wytycznymi Europejskiej Rady Resuscytacji',
        prowadzacy: 'mgr Magdalena Tomaszewska',
        special_class: ''
      },
      {
        godzina: '12.00-12.20',
        tytul: 'Drgawki u noworodka czy zawsze potrafimy je rozpoznać',
        prowadzacy: 'mgr Elżbieta Iłendo',
        special_class: ''
      },
      {
        godzina: '12:20-12:40',
        tytul: 'Sepsa u noworodka z zaspołem zaburzeń odporności - studium przypadku',
        prowadzacy: 'mgr Dominika Niedziałek',
        special_class: ''
      },
      {
        godzina: '12:40-12:50',
        tytul: 'Prezentacja firmy Dräger Polska',
        prowadzacy: '',
        special_class: ''
      },
      {
        godzina: '12:50-13:15',
        tytul: 'Dyskusja',
        prowadzacy: '',
        special_class: ''
      },
      {
        godzina: '13:15-14:10',
        tytul: 'Lunch',
        prowadzacy: '',
        special_class: 'bg-white'
      },
    ]

    return {
      rejestracja_otwarta,
      programKonferencji
    }
  }
}
</script>

<template>
<div class="flex flex-col gap-10 text-md sm:text-2xl mt-20 mx-10 sm:mx-50 place-items-center text-justify">
  <div class="w-100 h-100 bg-[url(/img/neonursing_2024.jpg)] bg-contain bg-no-repeat"/>
  <p>
    Zapraszamy na coroczną Ogólnopolską Konferencję środowiska położnych i pielęgniarek
    neonatologicznych "NEONURSING 2024", która odbędzie się 21 września 2024r. w hotelu Ambasador
    Premium w Łodzi, ul. Jana Kilińskiego 145. Wzorem roku ubiegłego Konferencja odbędzie się
    w formule stacjonarnej co pozwoli nam na lepszą wymianęy doświadczeń nie tylko podczas obrad
    na sali wykładowej ale także w kuluarach. Mamy nadzieję, że program Konferencji przygotowany
    w oparciu o wypełnioną przez Państwa ankietę pokonferencyjną, spełni pokładane w nim oczekiwania.
    Jeśli chcieliby Państwo wziąć czynny udział w Konferencji i zaprezentować własne doświadczenia
    lub badania, prosimy o kontakt ( info@ptpipn.pl , tel. 531 406 069) – jesteśmy otwarte na Państwa propozycje.
  </p>
  <p>
    W kwestiach organizacyjnych dotyczących Konferencji prosimy o kontakt z Centrum Doradczo-szkoleniowym
    PROVENA Monika Rutkowska-Drozd, telefon: 695 271 227, e-mail: biuro@provena.com.pl <br>
    W kwestiach merytorycznych prosimy o kontakt z Zarządem PTPiPN, telefon: info@ptpipn.pl
  </p>
  <section id="program" class="flex flex-col gap-5 mt-10 place-items-center">
    <button type="button" v-if="rejestracja_otwarta" class="p-2 bg-stone-50 border-2 border-stone-100 drop-shadow-lg drop-shadow-stone-200">REJESTRACJA</button>
    <p v-else class="text-fuchsia-900">WSZYSTKIE MIEJSCA NA KONFERENCJĘ ZOSTAŁY WYPEŁNIONE</p>
    <p class="text-3xl">PROGRAM KONFERENCJI</p>
    <div>
      <div
        class="flex flex-row w-full gap-x-10 bg-fuchsia-50 p-5 border-b-2 border-white"
        v-for="(wpis, index) in programKonferencji"
        :key="index"
        :class="wpis.special_class"
      >
        <div class="w-2/12 text-center"><p>{{wpis.godzina}}</p></div>
        <div class="w-full px-10"><p>{{wpis.tytul}}</p></div>
        <div class="w-4/12 text-left"><p>{{wpis.prowadzacy}}</p></div>
      </div>
    </div>
  </section>
</div>
</template>

