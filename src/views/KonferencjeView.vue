<script>
import { setupCollection } from '@/includes/firebase.js'
import { onBeforeMount, ref } from 'vue'
import { query, getDocs, limit } from 'firebase/firestore'

export default {
  name: 'NeonursingView',
  setup() {
    let rejestracja_otwarta = ref(false);

    onBeforeMount(async ()=>{
      const setupRef = await getDocs(query(setupCollection, limit(1)))
      let setupData = {}
      setupRef.forEach((doc) => {
        setupData = Object.assign(setupData, { ...doc.data(), docID: doc.id })
      })
      rejestracja_otwarta.value = setupData.isRejestracjaOpen
    })

    return {
      rejestracja_otwarta,
    }
  }
}
</script>

<template>
<div>
  <section id="neonursing" class="app-section-block place-items-center text-justify">
    <div class="app-section-title self-start">
      <p>Neonursing 2026</p>
    </div>
    <div class="flex flex-col md:flex-row-reverse gap-5 md:gap-15 place-items-stretch">
      <a v-if="rejestracja_otwarta"
         class="w-60 h-60 mx-auto md:w-auto md:h-auto md:flex-1/3 bg-[url(/img/Neonursing_2026.jpg)] bg-contain bg-no-repeat"
         href="https://www.salonnaukowy.pl/rejestracja/" target="_blank" rel="noopener noreferrer"/>
      <div v-else class="w-60 h-60 mx-auto md:w-auto md:h-auto md:flex-1/3 bg-[url(/img/Neonursing_2026.jpg)] bg-contain bg-no-repeat"/>
      <div class="md:flex-2/3">
        <p>
          Zapraszamy do udziału w X Ogólnopolskiej Konferencji Polskiego Towarzystwa Pielęgniarek
          i Położnych NEONURSING 2026. Konferencja odbywać się będzie <b>3 października 2026 (sobota)
          w Hotelu Ambasador Premium ul. Kilińskiego 145 w Łodzi. Ramowe godziny trwania Konferencji
          9:00 – 17:15</b>
        </p>
        <p>
          Skierowana jest ona  do pielęgniarek i położnych pracujących na oddziałach neonatologicznych,
          oddziałach intensywnej terapii a także innych osób sprawujących opiekę nad noworodkami,
          które są zainteresowane przedstawianymi tematami. Konferencja ma charakter stacjonarny. <br>
          Program Konferencji oraz formularz rejestracji znajduje się na stronie Konferencji
          <a class="app-link" href="https://www.salonnaukowy.pl/" target="_blank" rel="noopener noreferrer">
            www.salonnaukowy.pl
          </a>
        </p>
        <p>
          <b>Koszt udziału w Konferencji 335 zł.</b> <br>
          Opłata obejmuje udział w obradach, materiały konferencyjne, certyfikat, przerwy kawowe,
          lunch, wejście na wystawę firm medycznych. <br>
          <b>Ilość miejsc na Konferencji ograniczona. Miejsce gwarantuje dokonanie opłaty.</b> <br>
          Dane do wpłaty: PROVENA <br>
          Nr konta: Alior Bank 25 2490 0005 0000 4500 4288 5665
        </p>
        <p>
          <b>Ostateczny termin dokonania wpłaty upływa 15 września 2026.</b> <br>
          Organizator zastrzega możliwość wcześniejszego wstrzymania rejestracji na Konferencję,
          jeśli wszystkie miejsca zostaną zajęte.
        </p>
        <p>
          W razie dodatkowych pytań można skontaktować się z organizatorem poprzez wysłanie e-maila:
          <a class="app-link" href="mailto:biuro@provena.com.pl">biuro@provena.com.pl</a>, lub telefonicznie - Monika
          Rutkowska-Drozd 695 271 227
        </p>
      </div>
    </div>
    <a v-if="rejestracja_otwarta" href="https://salonnaukowy.pl/rejestracja/" target="_blank" rel="noopener noreferrer">
      <button type="button" class="app-button mt-5">REJESTRACJA</button>
    </a>
    <div v-else>
      <p class="text-red-800 font-bold mt-5">
        Ze względu na wyczerpanie się miejsc na Konferencję NEONURSING 2026 rejestracja została
        zamknięta i utworzona jest lista rezerwowa.
      </p>
<!--      <p>-->
<!--        Osoby zainteresowane udziałem proszone są o kontakt z organizatorem Centrum Doradczo-Szkoleniowe-->
<!--        PROVENA poprzez wysłanie na adres mailowy <a class="app-link" href="mailto:biuro@provena.com.pl">-->
<!--        biuro@provena.com.pl</a> informacji o <b>chęci udziału w Konferencji z podaniem swojego-->
<!--        imienia i nazwiska, adresu e-mail, numeru telefonu komórkowego oraz miejsca pracy</b>.-->
<!--      </p>-->
<!--      <p>-->
<!--        15 września upływa ostateczny termin opłacenia udziału w Konferencji dla osób już zarejestrowanych.<br>-->
<!--        Po tym terminie organizator będzie się indywidualnie kontaktował z osobami z listy rezerwowej-->
<!--        informując o możliwości udziału w Konferencji NEONURSING 2026.-->
<!--      </p>-->
    </div>
<!--    <div class="mt-2">-->
<!--      <div class="place-items-center">-->
<!--        <RouterLink :to="{name: 'materialyWideo'}" class="app-button mx-auto max-w-50 lg:max-w-100 text-center">MATERIAŁY WIDEO DLA UCZESTNIKÓW</RouterLink>-->
<!--      </div>-->
<!--      <p>-->
<!--        Osoby zainteresowane dostępem do materiałów wideo proszone są o kontakt z organizatorem-->
<!--        Centrum Doradczo-Szkoleniowe PROVENA <a class="app-link" href="mailto:biuro@provena.com.pl">biuro@provena.com.pl</a>-->
<!--      </p>-->
<!--    </div>-->
  </section>

  <section id="interprofesjonalna-opieka-w-zdrowiu-kobiet" class="app-section-block place-items-center text-justify">
    <div class="app-section-title self-start">
      <p>Interprofesjonalna opieka w zdrowiu kobiet – wyzwania i dobre praktyki</p>
    </div>
    <a class="w-100 h-57 md:w-200 md:h-113 place-self-center bg-[url(/img/Konferencja_Polozne_Kazimierz_2026_baner_internet.jpg)] bg-contain bg-no-repeat"
       href="https://konferencjapoloznicza2026.agora-konferencje.pl" target="_blank" rel="noopener noreferrer"/>
    <div class="text-center -mt-5 md:-mt-15"><b>
      II Ogólnopolska Konferencja Naukowa dla Położnych<br>
      oraz Pielęgniarek Neonatologicznych<br>
      Interprofesjonalna opieka w zdrowiu kobiet – wyzwania i dobre praktyki<br>
      16 - 17 października 2026 r.<br>
      Zajazd Piastowski ***, Kazimierz Dolny
    </b></div>
    <div class="text-justify">
      <p>
        Szanowni Państwo,
      </p>
      <p>
        Zapraszamy w dniach 16–17 października 2026 roku do Kazimierza Dolnego.
      </p>
      <a class="app-link" href="https://konferencjapoloznicza2026.agora-konferencje.pl" target="_blank" rel="noopener noreferrer">
        https://konferencjapoloznicza2026.agora-konferencje.pl
      </a>
      <p>
        Tegoroczna edycja Konferencji będzie kontynuacją idei tworzenia przestrzeni do pogłębionej refleksji,
        wymiany doświadczeń oraz prezentacji aktualnych osiągnięć naukowych i praktycznych w obszarze
        opieki nad kobietą, matką i noworodkiem. W centrum rozważań znajdzie się zdrowie kobiet na różnych
        etapach życia, ujmowane nie tylko w wymiarze klinicznym, lecz także psychospołecznym, edukacyjnym,
        etycznym i organizacyjnym.
      </p>
      <p>
        Celem Konferencji jest stworzenie forum dialogu dla specjalistów zaangażowanych w opiekę nad kobietą
        i noworodkiem: położnych, pielęgniarek neonatologicznych, przedstawicieli nauk medycznych i nauk o zdrowiu,
        praktyków klinicznych, nauczycieli akademickich oraz osób odpowiedzialnych za rozwój jakości opieki.
        Szczególne znaczenie nadamy współpracy interprofesjonalnej, która we współczesnym systemie ochrony zdrowia
        staje się warunkiem skutecznej, bezpiecznej i humanistycznej opieki.
      </p>
      <p>
        Program Konferencji obejmie szeroki zakres zagadnień dotyczących zdrowia kobiet, opieki okołoporodowej
        i neonatologicznej, a także współczesnych wyzwań klinicznych, psychospołecznych i organizacyjnych.
        Szczególne miejsce zajmą tematy związane z jakością i humanizacją opieki, bezpieczeństwem pacjentek
        i noworodków, współpracą interprofesjonalną oraz rolą nowych technologii w praktyce zawodowej.
      </p>
      <p>
        Istotnym elementem wydarzenia będą również warsztaty, które umożliwią uczestnikom pogłębienie umiejętności
        praktycznych oraz odniesienie wiedzy naukowej do codziennej pracy klinicznej. Wierzę, że połączenie wykładów
        eksperckich, dyskusji, sesji tematycznych i zajęć warsztatowych będzie sprzyjać nie tylko zdobywaniu
        aktualnej wiedzy, lecz także refleksji nad kierunkami rozwoju współczesnej opieki położniczej,
        ginekologicznej i neonatologicznej.
      </p>
      <p>
        Jestem przekonana, że udział w Konferencji będzie okazją do inspirujących spotkań, wymiany dobrych praktyk
        oraz budowania współpracy pomiędzy środowiskami naukowymi i klinicznymi. Mam nadzieję, że wspólnie
        stworzymy wydarzenie, które przyczyni się do dalszego rozwoju profesjonalnej, empatycznej i opartej
        na dowodach opieki nad kobietą, matką i noworodkiem.
      </p>
      <p>Serdecznie zapraszam do udziału w Konferencji.</p>
      <p>Z wyrazami szacunku,</p>
      <p>
        Dr hab. Agnieszka Bień, prof. uczelni<br>
        Przewodnicząca Komitetu Naukowego
      </p>
    </div>
  </section>

<!--  <section id="slaska-szkola-neonatologii" class="app-section-block">-->
<!--    <div class="app-section-title self-start">-->
<!--      <p>Śląska Szkoła Neonatologii</p>-->
<!--    </div>-->
<!--    <div class="text-justify">-->
<!--      <p>-->
<!--        Szanowni Państwo,-->
<!--      </p>-->
<!--      <p>-->
<!--        W imieniu Polskiego Towarzystwa Neonatologicznego oraz Komitetu Naukowego zapraszamy Państwa do udziału-->
<!--        w Ogólnopolskiej Konferencji-->
<!--      </p>-->
<!--      <p class="font-bold capitalize text-red-800">-->
<!--        ŚLĄSKA SZKOŁA NEONATOLOGII-->
<!--      </p>-->
<!--      <p class="font-bold capitalize text-red-800">-->
<!--        20 września 2025 r., Katowice <br> Hotel Vienna House Easy by Wyndham ****-->
<!--      </p>-->
<!--      <p class="font-bold capitalize">-->
<!--        Patronat Naukowy: <br> Prof. Iwona Maruniak – Chudek-->
<!--      </p>-->
<!--      <p>-->
<!--        Klinika Neonatologii i Intensywnej Terapii Noworodków GSCZD w Katowicach <br> Polskie Towarzystwo Neonatologiczne-->
<!--      </p>-->
<!--      <p>-->
<!--        Strona Śląskiej Szkoły Neonatologii-->
<!--      </p>-->
<!--      <a class="app-link" href="https://slaskaszkolaneonatologii2025.agora-konferencje.pl" target="_blank" rel="noopener noreferrer">-->
<!--        www.slaskaszkolaneonatologii2025.agora-konferencje.pl-->
<!--      </a>-->
<!--      <p class="font-bold">W ramach opłaty konferencyjnej 100 zł (brutto) zapewniamy</p>-->
<!--      <ol class="list-decimal ms-8">-->
<!--        <li>udział w sesjach konferencyjnych</li>-->
<!--        <li>teczkę konferencyjną</li>-->
<!--        <li>wstęp na wystawę medyczną</li>-->
<!--        <li>przerwy kawowe</li>-->
<!--        <li>punktowany certyfikat uczestnictwa</li>-->
<!--        <li>udział w warsztatach z punktowanym certyfikatem uczestnictwa</li>-->
<!--      </ol>-->
<!--      <p class="font-bold">-->
<!--        Zapraszamy do Katowic!-->
<!--      </p>-->
<!--    </div>-->
<!--  </section>-->
</div>
</template>

