<template lang="">
  <div>
      poisk       
  </div>
  <div class="containe">
        <input type="text" placeholder="Name film" v-model='nameFilm' /> 
          <br/> <br/>
            <button type="button" v-on:click="handleClick()" >click</button>
    <div class="container">      
      <div class="movie">
              <div class="movies"v-if ="filmsList" v-for="item in filmsList">
                <div class="movie_cover"> <img class="movie_cover" v-bind:src="item.poster" alt=""> 
                <div class="movie_dark"></div>
                </div>
                <div class="movie_title"> {{ item.name }}</div>
                
    </div>               
  </div>
      </div>
        </div>
</template>


<script>

import {
  KinopoiskDev,
  MovieQueryBuilder,
  SPECIAL_VALUE,
  SORT_TYPE,
} from '@openmoviedb/kinopoiskdev_client';
import { KP_API_KEY } from '@/constants/index.js'

export default {
  data() {
    return {
      nameFilm: null,
      filmsList: null,
    };
  },
  methods: {
    // handleClick() {
    //     const kp = new KinopoiskDev(KP_API_KEY);
    //     const searchMovies = async () => {
    //         const queryBuilder = new MovieQueryBuilder();
    //         // Создаем запрос для поиска фильмов по подходящих под наш запрос
    //         const query = queryBuilder
    //             // Указываем что хотим получить фильм под названием Аватар вышедший в 2022
    //             .query(this.getData())
    //             // Добавляем пагинацию и получаем 1 страницу по с 10 фильмами на странице
    //             .paginate(1, 10)
    //             // Собираем запрос
    //             .build();

    //         const { data, error, message } = await kp.movie.getBySearchQuery(query);

    //         if (data) {
    //             const { docs, page, limit } = data;
    //             console.log(`Страница ${page} из ${limit}`);
    //             console.log(docs);
    //             this.filmsList = docs;
    //             console.log("231434234234234", this.filmsList)
    //         }

    //         // Если будет ошибка, то выведем ее в консоль
    //         if (error) console.log(error, message);


    //     };

    //     searchMovies()

    // },
    // getData() {
    //   return this.nameFilm.toString()
    // }



  },
  async mounted() {
    const tempData = [
      {
        "name": "Мортал Комбат",
        "alternativeName": "Mortal Kombat",
        "enName": "",
        "names": [
          "Мортал Комбат",
          "Mortal Kombat",
          "Смертельна битва",
          "모탈 컴뱃",
          "モータルコンバット",
          "真人快打",
          "मौत का संग्राम",
          "真人快打：毁灭",
          "真人快打",
          "モータルコンバット：2021"
        ],
        "type": "movie",
        "year": 2021,
        "genres": [
          "боевик",
          "фэнтези",
          "фантастика"
        ],
        "countries": [
          "США"
        ],
        "releaseYears": [],
        "id": 8062,
        "description": "Боец смешанных единоборств Коул Янг не раз соглашался проиграть за деньги. Он не знает о своем наследии и почему император Внешнего мира Шан Цзун посылает могущественного криомансера Саб-Зиро на охоту за Коулом. Янг боится за безопасность своей семьи, и майор спецназа Джакс, обладатель такой же отметки в виде дракона, как и у Коула, советует ему отправиться на поиски Сони Блейд. Вскоре Коул, Соня и наёмник Кано оказываются в храме Лорда Рейдена, Старшего Бога и защитника Земного царства, который дает убежище тем, кто носит метку. Здесь прибывшие тренируются с опытными воинами Лю Каном и Кун Лао, готовясь противостоять врагам из Внешнего мира, а для этого им нужно раскрыть в себе аркану — могущественную силу души.",
        "shortDescription": "Команда бойца Коул Янга готовится к схватке за Землю с Внешним миром. Экшен по видеоигре с новым протагонистом",
        "logo": "https://avatars.mds.yandex.net/get-ott/1672343/2a000001791c742cf0f1115a931556bf0f5b/orig",
        "poster": "https://image.openmoviedb.com/kinopoisk-images/4303601/f56710bd-85c3-49b8-9260-2fa8a3d07c01/orig",
        "backdrop": "https://image.openmoviedb.com/tmdb-images/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
        "rating": 6.15,
        "votes": 219437,
        "movieLength": 110,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "r",
        "ageRating": 18,
        "top10": null,
        "top250": null,
        "typeNumber": 1,
        "status": null
      },
      {
        "name": "Легенды «Смертельной битвы»: Месть Скорпиона",
        "alternativeName": "Mortal Kombat Legends: Scorpion's Revenge",
        "enName": "Mortal Kombat Legends: Scorpion's Revenge",
        "names": [
          "Легенды «Смертельной битвы»: Месть Скорпиона",
          "Mortal Kombat Legends: Scorpion's Revenge",
          "Mortal Kombat Leyendas: La venganza de Scorpion",
          "Mortal Kombat Legends: Scorpions Revenge",
          "Mortal Kombat Leyendas: La venganza de Scorpion",
          "Mortal Kombat Leyendas: La venganza de Scorpion",
          "Ölümcül Dövüş Efsanesi: Akrebin İntikamı",
          "Смертельна битва. Легенди. Помста Скорпіона",
          "Легенди Смертельної битви: Помста Скорпіона",
          "Легенди Мортал Комбат: Помста Скорпіона",
          "Mortal Kombat Legends - Scorpion's Revenge (2020)"
        ],
        "type": "cartoon",
        "year": 2020,
        "genres": [
          "мультфильм",
          "фэнтези",
          "боевик",
          "приключения"
        ],
        "countries": [
          "США"
        ],
        "releaseYears": [],
        "id": 1228043,
        "description": "После того как наемник Саб-Зиро хладнокровно прикончил его семью, Ханзо Хасаши был вынужден отправиться в изгнание в Преисподнюю. В обмен на преданность и служение злодей Кван Ци даровал ему шанс отомстить за гибель родных — и вернул его к жизни под именем Скорпиона, заблудшей души в поисках возмездия. Тем временем в Земном царстве владыка Рейден собрал отряд элитных бойцов — монаха из монастыря Шаолинь Лю Канга, солдата сил специального назначения Соню Блейд и звезду голливудских боевиков Джонни Кейджа — и поручил спасение человечества этим героям поневоле. Для этого им придется победить армию гладиаторов Шан Цуна из Внешнего Мира и одержать победу в турнире, известном как Смертельная битва.",
        "shortDescription": "Скорпион точит зуб на Саб-Зиро, а Земное Царство на грани захвата. Мультфильм о вселенной культовой видеоигры",
        "logo": "https://avatars.mds.yandex.net/get-ott/236744/2a00000178aec2c18bc44f159f3db093b832/orig",
        "poster": "https://image.openmoviedb.com/kinopoisk-images/1600647/9e6ae31c-19f5-4508-ac5b-e27da991ced7/orig",
        "backdrop": "https://image.openmoviedb.com/tmdb-images/original/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg",
        "rating": 7.239,
        "votes": 19582,
        "movieLength": 79,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "r",
        "ageRating": 18,
        "top10": null,
        "top250": null,
        "typeNumber": 3,
        "status": null
      },
      {
        "name": "Легенды Мортал комбат: Битва миров",
        "alternativeName": "Mortal Kombat Legends: Battle of the Realms",
        "enName": "",
        "names": [
          "Легенды Мортал комбат: Битва миров",
          "Mortal Kombat Legends: Battle of the Realms",
          "Легенды «Смертельной битвы»: Сражение миров",
          "Легенды «Смертельной битвы»: Битва королевств",
          "真人快打传奇：天下之战",
          "真人快打传奇：王国之战",
          "Mortal Kombat Legends - Battle of the Realms (2021)"
        ],
        "type": "cartoon",
        "year": 2021,
        "genres": [
          "мультфильм",
          "фэнтези",
          "боевик",
          "приключения"
        ],
        "countries": [
          "США"
        ],
        "releaseYears": [],
        "id": 4489270,
        "description": "Райдэн, Лю Кан, Джонни Кейдж, Соня Блейд и Джакс возвращаются на Землю, где обнаруживают армию Внешнего мира. Император Шао Кан ставит бойцам очередной ультиматум — или новая смертельная битва, или его армия захватит планету, уничтожив всё на своем пути.",
        "shortDescription": "Герои Земного Царства отправляются решающую битву с Шао Каном. Мультфильм о последствиях мести Скорпиона",
        "logo": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000017be43c75af125d292e5da9acd1f7/orig",
        "poster": "https://image.openmoviedb.com/kinopoisk-images/4774061/761b7428-0c0d-4674-9f39-f8326d7713b9/orig",
        "backdrop": "https://image.openmoviedb.com/tmdb-images/original/dssCw0mUmD4EriUmkwB3PnsGu4q.jpg",
        "rating": 6.506,
        "votes": 7120,
        "movieLength": 79,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "r",
        "ageRating": 18,
        "top10": null,
        "top250": null,
        "typeNumber": 3,
        "status": null
      },
      {
        "name": "Легенды Мортал Комбат: Снежная слепота",
        "alternativeName": "Mortal Kombat Legends: Snow Blind",
        "enName": "",
        "names": [
          "Легенды Мортал Комбат: Снежная слепота",
          "Mortal Kombat Legends: Snow Blind"
        ],
        "type": "cartoon",
        "year": 2022,
        "genres": [
          "мультфильм",
          "фэнтези",
          "боевик",
          "драма",
          "приключения"
        ],
        "countries": [
          "США"
        ],
        "releaseYears": [],
        "id": 5076516,
        "description": "Пока Кано и Черный Дракон сеют хаос по всему земному шару, молодому воину по имени Кенши придется противостоять надвигающейся угрозе.",
        "shortDescription": "",
        "logo": null,
        "poster": "https://image.openmoviedb.com/kinopoisk-images/4303601/8057ec5e-655c-495c-9b1e-4dfa3b6bb3e4/orig",
        "backdrop": null,
        "rating": 6.734,
        "votes": 2507,
        "movieLength": 82,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "r",
        "ageRating": null,
        "top10": null,
        "top250": null,
        "typeNumber": 3,
        "status": null
      },
      {
        "name": "Легенды Мортал Комбат: Матч Кейджа",
        "alternativeName": "Mortal Kombat Legends: Cage Match",
        "enName": "",
        "names": [
          "Mortal Kombat Legends: Cage Match",
          "Легенды Мортал Комбат: Матч Кейджа",
          "真人快打传奇：牢笼对决",
          "Mortal Kombat Legends: Cage Bom de Briga",
          "Mortal Kombat Legends - Cage Match (2023)"
        ],
        "type": "cartoon",
        "year": 2023,
        "genres": [
          "мультфильм",
          "фэнтези",
          "боевик",
          "приключения"
        ],
        "countries": [
          "США"
        ],
        "releaseYears": [],
        "id": 5143827,
        "description": "Голливуд 1980-х. Восходящая звезда боевиков Джонни Кейдж ищет пропавшую коллегу. Расследуя исчезновение девушки, Джонни ввязывается в смертельную битву с адскими тварями и древними божествами.",
        "shortDescription": "",
        "logo": "https://imagetmdb.com/t/p/original/13O9hWRgIpM3vW3yM3J8OK219Fy.png",
        "poster": "https://image.openmoviedb.com/kinopoisk-images/10893610/381f433a-d845-4749-9a4e-4e462b71f234/orig",
        "backdrop": "https://image.openmoviedb.com/tmdb-images/original/k0VC5O8PrrJRqqDDbHDiDo8qAE0.jpg",
        "rating": 6.288,
        "votes": 1086,
        "movieLength": 76,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "r",
        "ageRating": null,
        "top10": null,
        "top250": null,
        "typeNumber": 3,
        "status": null
      },
      {
        "name": "Воздушный маршал",
        "alternativeName": "Non-Stop",
        "enName": "",
        "names": [
          "Воздушный маршал",
          "Non-Stop",
          "توقف ناپذیر",
          "Sans arrêt",
          "Sem Escalas",
          "논스톱",
          "急速天劫",
          "フライト・ゲーム",
          "Sin escalas",
          "Sin Escalas",
          "Non-Stop (2014)",
          "เที่ยวบินระทึก ยึดเหนือฟ้า"
        ],
        "type": "movie",
        "year": 2014,
        "genres": [
          "детектив",
          "триллер",
          "боевик"
        ],
        "countries": [
          "Великобритания",
          "Франция",
          "США",
          "Канада"
        ],
        "releaseYears": [],
        "id": 606826,
        "description": "Межконтинентальный авиарейс. Билл Маркс, воздушный маршал, который обеспечивает безопасность пассажиров, получает сообщения с угрозами от маньяка-террориста. Преступник просчитал все ходы и подставил под обвинение самого спецагента. Теперь Маркс – цель спецслужб США. Ему остается одно: вычислить и обезвредить преступника, спасти пассажиров и свою любовь, которую он обретает на краю гибели. До взрыва остаются считанные минуты…",
        "shortDescription": "Террорист затеял на борту самолета жестокую игру. Фееричный триллер с Лиамом Нисоном на пике формы",
        "logo": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000017b164546e69572bf91d812ee72bb/orig",
        "poster": "https://image.openmoviedb.com/kinopoisk-images/1900788/56c9bb9e-6530-40c8-993c-61e507280137/orig",
        "backdrop": "https://image.openmoviedb.com/tmdb-images/original/7UOWJEhNbePQeGSaVn9PvcRaujX.jpg",
        "rating": 7.199,
        "votes": 150026,
        "movieLength": 106,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "pg13",
        "ageRating": 12,
        "top10": null,
        "top250": null,
        "typeNumber": 1,
        "status": null
      },
      {
        "name": "Тётя Марта",
        "alternativeName": "",
        "enName": "",
        "names": [
          "Тётя Марта"
        ],
        "type": "tv-series",
        "year": 2022,
        "genres": [
          "комедия"
        ],
        "countries": [
          "Россия"
        ],
        "releaseYears": [],
        "id": 4708000,
        "description": "Марта в свои восемь лет ведёт жизнь, полную недетских забот. Единственный родственник рядом — дедушка — больше внучки нуждается в присмотре. Чтобы не оказаться в детском доме, Марта скрывает правду от учительницы, участковой и гламурной соседки и просит актёра-неудачника притвориться её отцом. На помощь приходит казанская родня в лице авантюриста Марата. Только в планах нагловатого паренька не забота о девочке, а её московские апартаменты.",
        "shortDescription": "Самостоятельная Марта защищает дом от алчной родни. Добродушная комедия с детским взглядом на взрослые заботы",
        "logo": null,
        "poster": "https://image.openmoviedb.com/kinopoisk-images/4303601/08e082a8-a624-4a20-9697-20b3fb297161/orig",
        "backdrop": "https://image.openmoviedb.com/tmdb-images/original/l90J4EU4Cper7rIoCxuOejnbR9m.jpg",
        "rating": 8.242,
        "votes": 138282,
        "movieLength": 0,
        "isSeries": true,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": 24,
        "ratingMpaa": null,
        "ageRating": 18,
        "top10": null,
        "top250": null,
        "typeNumber": 2,
        "status": "completed"
      },
      {
        "name": "Менталист",
        "alternativeName": "The Mentalist",
        "enName": "Mentalist",
        "names": [
          "Менталист",
          "The Mentalist",
          "El mentalista",
          "Менталистът",
          "O Mentalista",
          "超感神探",
          "Mentalist",
          "El mentalista",
          "Mentalist",
          "Mentalist",
          "心计",
          "Mentalist",
          "A mentalista",
          "멘탈리스트",
          "Mentalistas",
          "Mentalista",
          "O Mentalista",
          "În mintea criminalului",
          "Mentalista",
          "Mentalist",
          "Mentalist",
          "El mentalista",
          "Tam Ly Vien"
        ],
        "type": "tv-series",
        "year": 2008,
        "genres": [
          "триллер",
          "детектив",
          "драма",
          "криминал"
        ],
        "countries": [
          "США"
        ],
        "releaseYears": [],
        "id": 412344,
        "description": "Патрик Джейн - детектив и независимый консультант из Калифорнийского Бюро Расследований (КБР), он использует свои отточенные, как лезвие, навыки наблюдения для раскрытия тяжких преступлений. В самом Бюро Джейн известен за частые нарушения протокола, а также за его звездное прошлое: он работал медиумом, однако теперь сам признает, что симулировал паранормальные способности...",
        "shortDescription": "Одинокий гений дедукции и психологии охотится на серийного убийцу. Детектив с харизматичным Саймоном Бейкером",
        "logo": "https://avatars.mds.yandex.net/get-ott/2439731/2a000001703ede9217e363cbb5955904633d/orig",
        "poster": "https://image.openmoviedb.com/kinopoisk-images/4774061/7436d514-5c59-45bf-abe1-b4821ad2056f/orig",
        "backdrop": "https://image.openmoviedb.com/tmdb-images/original/rJFqKcmMSttdNP58l0dVzY2NcTA.jpg",
        "rating": 8.098,
        "votes": 135497,
        "movieLength": 0,
        "isSeries": true,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": 43,
        "ratingMpaa": null,
        "ageRating": 18,
        "top10": null,
        "top250": 215,
        "typeNumber": 2,
        "status": "completed"
      },
      {
        "name": "Ценности семейки Аддамс",
        "alternativeName": "Addams Family Values",
        "enName": "",
        "names": [
          "Ценности семейки Аддамс",
          "Addams Family Values",
          "阿达一族",
          "Сімейка Адамсів 2: Моральні цінності",
          "Семейные ценности Аддамс",
          "Los locos Addams 2",
          "החיים על פי משפחת אדאמס",
          "Familien Addams – og synet på livet",
          "La Famille Addams 2, Les Valeurs de la famille Addams",
          "The Addams Family Values",
          "Die Addams Family in verrückter Tradition"
        ],
        "type": "movie",
        "year": 1993,
        "genres": [
          "фэнтези",
          "комедия",
          "семейный"
        ],
        "countries": [
          "США"
        ],
        "releaseYears": [],
        "id": 2528,
        "description": "У Гомеса и Мортиши Аддамсов рождается сын. Они нанимают для ухода за новорождённым няню Дебби Джелински, которая, соблазнившись богатством дяди Фестера, влюбляет его в себя и начинает плести интриги против остальной семьи. Юная Уэнсди Аддамс обнаруживает коварные замыслы няни и начинает слежку за ней. Но вскоре, за излишнюю любознательность, Уэнсди и Пагсли ссылают в детский лагерь...",
        "shortDescription": "Дядю Фестера коварно охмуряют, а детей отсылают в летний лагерь. Сиквел готической комедии про семью фриков",
        "logo": "https://imagetmdb.com/t/p/original/bbqW4eKS13eqYGhyoWZMnMq3kr0.png",
        "poster": "https://image.openmoviedb.com/kinopoisk-images/1704946/453581ca-f5bf-44b5-a98a-e4cf27b42160/orig",
        "backdrop": "https://image.openmoviedb.com/tmdb-images/original/yrjFk8OVnwOQ5qUxbHZJYobxQra.jpg",
        "rating": 7.666,
        "votes": 61373,
        "movieLength": 94,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "pg13",
        "ageRating": 12,
        "top10": null,
        "top250": null,
        "typeNumber": 1,
        "status": null
      },
      {
        "name": "В пролёте",
        "alternativeName": "Forgetting Sarah Marshall",
        "enName": "",
        "names": [
          "В пролёте",
          "Forgetting Sarah Marshall",
          "Cómo sobrevivir a mi ex?",
          "Cómo Sobrevivir a Mi Ex",
          "Non mi scaricare",
          "Forgetting Sarah Marshall (Extended Version)",
          "Забути Сару Маршал",
          "Forgetting Sarah Marshall - UR",
          "Dumpet av Sarah Marshall",
          "Ressaca de Amor",
          "寝取られ男のラブ・バカンス"
        ],
        "type": "movie",
        "year": 2008,
        "genres": [
          "драма",
          "мелодрама",
          "комедия"
        ],
        "countries": [
          "США"
        ],
        "releaseYears": [],
        "id": 281394,
        "description": "Бедный музыкант Питер Бреттел 5 лет обожал свою девушку, красавицу-телезвезду Сару Маршалл. Когда она променяла его на британского рок-музыканта, мир Питера начал рушиться, и он решил развеяться и махнуть на Гавайи. В райском уголке сбывается худший кошмар Питера: его бывшая со своим новым парнем отдыхает в соседнем номере!",
        "shortDescription": "На отдыхе Питер оказывается в одном отеле с той, что разбила ему сердце. Солнечный ромком с Джейсоном Сигелом",
        "logo": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000017922d5af6112353697741b5ef6be/orig",
        "poster": "https://image.openmoviedb.com/kinopoisk-images/4303601/b7cde09e-dfe4-49fc-b382-fdebe8db3299/orig",
        "backdrop": "https://image.openmoviedb.com/tmdb-images/original/s39aQY3dK1s6ARrUKP5yeq824nR.jpg",
        "rating": 6.664,
        "votes": 48870,
        "movieLength": 111,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "r",
        "ageRating": 18,
        "top10": null,
        "top250": null,
        "typeNumber": 1,
        "status": null
      }
    ]
    this.filmsList = tempData
  }
};



</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.movie {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-column-gap: 16px;
  -webkit-column-gap: 16px;
  -moz-column-gap: 16px;
  column-gap: 16px;
  grid-row-gap: 64px;
  row-gap: 64px;
  margin: 50px;
}

.movies {
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  // grid-column-gap: 16px;
  // -webkit-column-gap: 16px;
  // -moz-column-gap: 16px;
  // column-gap: 16px;
  // grid-row-gap: 64px;
  // row-gap: 64px;
  // margin: 50px;
}

// .movie_cover-inner {
//   position: relative;
//   height: 360px;
// }

// .movie_cover {
//   max-width: 100%;
//   height: 100%;
// }

// .dark_movie {
//   background-color: #000;
//   opacity: 0.6;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   max-width: 100%;

// }

.movie_title {
  color: wheat;
}

.nameFilms {
  color: wheat;
}

img {
  width: 100px
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
