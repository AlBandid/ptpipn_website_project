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
      <p>Neonursing 2025</p>
    </div>
    <div class="flex flex-col md:flex-row-reverse gap-5 md:gap-15 place-items-stretch">
      <div class="w-60 h-60 mx-auto md:w-auto md:h-auto md:flex-1/3 bg-[url(/img/neonursing_2025.png)] bg-contain bg-no-repeat"/>
      <div class="md:flex-2/3">
        <p>
          Zapraszamy na coroczną Ogólnopolską Konferencję środowiska położnych i pielęgniarek
          neonatologicznych "NEONURSING 2025", która odbędzie się <b>20 września 2025r.</b> w hotelu Ambasador
          Premium w Łodzi, ul. Jana Kilińskiego 145. Wzorem roku ubiegłego Konferencja odbędzie się
          w formule stacjonarnej co pozwoli nam na lepszą wymianę doświadczeń nie tylko podczas obrad
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
      </div>
    </div>
    <a v-if="rejestracja_otwarta" href="https://salonnaukowy.pl/rejestracja/" target="_blank" rel="noopener noreferrer">
      <button type="button" class="app-button mt-5">REJESTRACJA</button>
    </a>
    <div v-else>
      <p class="text-red-800 font-bold mt-5">Ze względu na wyczerpanie się miejsc na Konferencję NEONURSING 2025 rejestracja została zamknięta i utworzona jest lista rezerwowa.</p>
      <p>
        Osoby zainteresowane udziałem proszone są o kontakt z organizatorem Centrum Doradczo-Szkoleniowe PROVENA poprzez wysłanie na adres mailowy <a href="mailto:biuro@provena.com.pl">biuro@provena.com.pl</a> informacji o <b>chęci udziału w Konferencji z podaniem swojego imienia i nazwiska, adresu e-mail, numeru telefonu komórkowego oraz miejsca pracy</b>.
      </p>
      <p>
        15 lipca upływa ostateczny termin opłacenia udziału w Konferencji dla osób już zarejestrowanych.<br>
        Po tym terminie organizator będzie się indywidualnie kontaktował z osobami z listy rezerwowej informując o możliwości udziału w Konferencji NEONURSING 2025.
      </p>
    </div>
  </section>
  <section id="interprofesjonalna-opieka-nad-kobieta-i-noworodkiem" class="app-section-block place-items-center text-justify">
    <div class="app-section-title self-start">
      <p>Interprofesjonalna opieka nad kobietą i noworodkiem – wyzwania i dobre praktyki</p>
    </div>
    <div class="w-100 h-57 md:w-200 md:h-113 place-self-center bg-[url(/img/Konferencja_Poloznictwo_Lublin_2025_baner_www_600x338_px.jpg)] bg-contain bg-no-repeat"/>
    <div class="text-justify">
      <p>
        Szanowni Państwo,
      </p>
      <p>
        w dniach <b>17–18 października 2025 roku</b> w Lublinie odbędzie się Konferencja pt.
        <i>„Interprofesjonalna opieka nad kobietą i noworodkiem – wyzwania i dobre praktyki”</i>.
      </p>
      <p>
        To wyjątkowe wydarzenie będzie przestrzenią do bezpośredniej wymiany doświadczeń,
        prezentacji wyników najnowszych badań naukowych oraz dyskusji na temat współczesnych
        wyzwań w opiece nad kobietą i dzieckiem, z uwzględnieniem interprofesjonalnego podejścia
        i ścisłej współpracy między zawodami medycznymi.
      </p>
      <p>
        Celem Konferencji jest stworzenie forum dialogu i refleksji nad zagadnieniami związanymi z
        opieką nad kobietą i noworodkiem – zarówno z perspektywy klinicznej, jak i
        psychospołecznej.
      </p>
      <p>
        Uczestnicy będą mieli okazję zapoznać się z najnowszymi doniesieniami naukowymi,
        aktualnymi standardami postępowania, nowoczesnymi metodami diagnostycznymi i
        terapeutycznymi, a także z przykładami sprawdzonych praktyk klinicznych. Nie zabraknie
        również tematów poświęconych współpracy interprofesjonalnej, wsparciu
        psychospołecznemu, roli edukacji oraz potrzebie ciągłego rozwoju zawodowego – zwłaszcza
        w kontekście dynamicznych zmian zachodzących w systemie ochrony zdrowia.
      </p>
      <p>
        Jestem przekonana, że bogaty program merytoryczny, obecność uznanych ekspertów oraz
        możliwość bezpośrednich spotkań sprawią, iż udział w konferencji będzie nie tylko źródłem
        aktualnej wiedzy, lecz także inspiracją do dalszej współpracy, refleksji i rozwoju
        zawodowego.
      </p>
      <p>
        Z wyrazami szacunku,<br>Dr hab. Agnieszka Bień, prof. uczelni
      </p>
      <a class="app-link" href="https://pielegniarkilublin2025.agora-konferencje.pl" target="_blank" rel="noopener noreferrer">
        www.pielegniarkilublin2025.agora-konferencje.pl
      </a>
    </div>
  </section>
  <section id="slaska-szkola-neonatologii" class="app-section-block">
    <div class="app-section-title self-start">
      <p>Śląska Szkoła Neonatologii</p>
    </div>
    <div class="text-justify">
      <p>
        Szanowni Państwo,
      </p>
      <p>
        W imieniu Polskiego Towarzystwa Neonatologicznego oraz Komitetu Naukowego zapraszamy Państwa do udziału
        w Ogólnopolskiej Konferencji
      </p>
      <p class="font-bold capitalize text-red-800">
        ŚLĄSKA SZKOŁA NEONATOLOGII
      </p>
      <p class="font-bold capitalize text-red-800">
        20 września 2025 r., Katowice <br> Hotel Vienna House Easy by Wyndham ****
      </p>
      <p class="font-bold capitalize">
        Patronat Naukowy: <br> Prof. Iwona Maruniak – Chudek
      </p>
      <p>
        Klinika Neonatologii i Intensywnej Terapii Noworodków GSCZD w Katowicach <br> Polskie Towarzystwo Neonatologiczne
      </p>
      <p>
        Strona Śląskiej Szkoły Neonatologii
      </p>
      <a class="app-link" href="https://slaskaszkolaneonatologii2025.agora-konferencje.pl" target="_blank" rel="noopener noreferrer">
        www.slaskaszkolaneonatologii2025.agora-konferencje.pl
      </a>
      <p class="font-bold">W ramach opłaty konferencyjnej 100 zł (brutto) zapewniamy</p>
      <ol class="list-decimal ms-8">
        <li>udział w sesjach konferencyjnych</li>
        <li>teczkę konferencyjną</li>
        <li>wstęp na wystawę medyczną</li>
        <li>przerwy kawowe</li>
        <li>punktowany certyfikat uczestnictwa</li>
        <li>udział w warsztatach z punktowanym certyfikatem uczestnictwa</li>
      </ol>
      <p class="font-bold">
        Zapraszamy do Katowic!
      </p>
    </div>
  </section>
</div>
</template>

