const movies = [
    {
    id: 1,
    title: "Пять ночей с Фредди 2",
    releaseDate: "05/12/2025",
    description: "Спустя год после сверхъестественного кошмара в пиццерии Freddy Fazbear's произошедшее превратилось в местную легенду и вдохновило на первое в городе празднование Fazfest. Не зная правды, Эбби тайно отправляется к Фредди, Бонни, Чике и Фокси, запускает цепь пугающих событий и сталкивается с мрачными секретами происхождения пиццерии, пробуждая давний ужас, скрытый десятилетиями.",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1час 44минуты",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/udAxQEORq2I5wxI97N2TEqdhzBE.jpg",
    videoUrl: "https://rutube.ru/play/embed/bf62383e43e1d04bdbedc2cd90dc5f79/?r=plwd"
  },{
    id: 2,
    title: "Супермен",
    releaseDate: "11/07/2025",
    description: "Кларк Кент, родившийся на планете Криптон, но выросший в простой американской семье, считает своим долгом служение человечеству в качестве Супермена. Он предотвращает вторжение сил Боравии в соседнюю страну, чем навлекает на себя гнев Лекса Лютора, который со своими приспешниками проникает в Крепость Одиночества Супермена и очерняет его перед общественностью.",
    categories: ["ФАНТАСТИКА", "ПРИКЛЮЧЕНИЯ", "БОЕВИК"],
    duration: "2часа 9минут",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/ikbG08TQtkIWUVRVotHhndf72pL.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 3,
    title: "Мстители",
    releaseDate: "01/05/2012",
    description: "В погоне за могуществом бог Локи вступает в сговор с воинственной расой Читаури, которая обещает ему армию для захвата Земли в обмен на Тессеракт – небольшой куб, содержащий в себе огромную силу. Проникнув в секретный центр организации «Щ.И.Т.», он объявляет о своих намерениях, после чего похищает Тессеракт и берет под контроль нескольких агентов, обеспечивших ему побег. В ответ на угрозу глава «Щ.И.Т.’а» Ник Фьюри созывает сильнейших супергероев планеты, которыми оказываются Железный человек, Черная вдова, Капитан Америка, Халк и Тор. Чтобы дать противнику достойный отпор, им придется отложить все свои разногласия и научиться работать в команде, иначе человечество ждет неминуемая гибель…",
    categories: ["ФАНТАСТИКА", "БОЕВИК", "ПРИКЛЮЧЕНИЯ"],
    duration: "2часа 17минут",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/7SCa2Uw4sdTkn7mGMAhq0AkSC6Y.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 4,
    title: "Начало",
    releaseDate: "30/07/2010",
    description: "Дом Кобб — талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадёт ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. И вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть всё назад, но для этого ему нужно совершить невозможное — инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача — не украсть идею, а внедрить её. Если у них получится, это и станет идеальным преступлением. Но никакое планирование или мастерство не могут подготовить команду к встрече с опасным противником, который, кажется, предугадывает каждый их ход. Врагом, увидеть которого мог бы лишь Кобб.",
    categories: ["ФАНТАСТИКА", "БОЕВИК", "ПРИКЛЮЧЕНИЯ"],
    duration: "2часа 28минут",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/piQXcdOGgv1O9HQ07pI0tnjkGJw.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 5,
    title: "Побег из Шоушенка",
    releaseDate: "23/09/1994",
    description: "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
    categories: ["ДРАМА", "КРИМИНАЛ"],
    duration: "2часа 22минуты",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/yvmKPlTIi0xdcFQIFcQKQJcI63W.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 6,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 7,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 8,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 9,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 10,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 11,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 12,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 13,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 14,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 15,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 16,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 17,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 18,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 19,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 20,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 21,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 22,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 23,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 24,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 25,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 26,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 27,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 28,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 29,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },{
    id: 30,
    title: "",
    releaseDate: "",
    description: "",
    categories: ["УЖАСЫ", "ТРИЛЛЕР"],
    duration: "1h 44m",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/geZhhgqqMrOQdhm4Kv9ulxPI5ZN.jpg",
    videoUrl: "https://example.com/video/interstellar"
  },
];

export default movies;