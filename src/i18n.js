import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "header": "",
      "header__link main": "Main",
      "header__link about": "My skills",
      "header__link work": "My works",
      "header__link cont": "Contacts",
  
      "main": "",
      "main__title": "Hello! I`m",
      "main__name": "Vasyl Horyuk",
      "main__work": "Web development and design",
      "main__work p": "This is exactly what I love!",
      "main__btn": "My skills",
  
      "about": "",
      "about__spec 1": "My skills:",
      "about__item 1": "HTML5",
      "about__item 2": "CSS3",
      "about__item 3": "Bootstrap",
      "about__item 4": "JavaScript",
      "about__item 5": "PHP",
      "about__item 6": "MySQL",
      "about__item 7": "Basic knowledge of React",
      "about__spec 2": "What do I specialize in:",
      "about__item 2-1": "development of a landing page",
      "about__item 2-2": "development of a business card site",
      "about__item 2-3": "development of multi-page sites",
      "about__item 2-4": "development of new and improvement of old sites",
      "about__item 2-5": "adaptation of the site for any device sizes",
      "about__spec 3": "I work with layouts in:",
      "about__item 3-1": "Figma",
      "about__item 3-2": "Adobe Photoshop",
  
      "work": "",
      "work title": "My works:",
      "work descr": "Here you can see examples of some of my work.",
  
      "reviews": "",
      "reviews__descr 1": "I recommend!",
      "reviews__user-name 1": "Jack",
      "reviews__descr 2": "Everything is done perfectly!",
      "reviews__user-name 2": "Harry",
      "reviews__descr 3": "Did everything on time and beautifully!",
      "reviews__user-name 3": "Ivan",
      "reviews__descr 4": "Thank you.",
      "reviews__user-name 4": "Alla",
      "reviews__descr 5": "Made me a great site! Thank you!",
      "reviews__user-name 5": "Sasha",
  
      "contact": "",
      "contact title": "Contacts:",
      "contact descr": "Here you can leave a request or contact me.",
      "contact name": "Your name",
      "contact nameplace" : "Your name..",
      "contact email": "Your email",
      "contact emailplace" : "Your email..",
      "contact message": "Message",
      "contact messageplace" : "Message..",
      "contact send" : "Send",
  
      "footer": "",
      "footer about": "My skills",
      "footer work": "My works",
      "footer contact": "Contacts"
  }
  },
  ua: {
    translation: {
      "header": "",
      "header__link main": "Головна",
      "header__link about": "Мої навички",
      "header__link work": "Мої роботи",
      "header__link cont": "Контакти",
  
      "main": "",
      "main__title": "Привіт! Я",
      "main__name": "Горюк Василь",
      "main__work": "Веб-розробка та дизайн",
      "main__work p": "Це саме те, що я люблю!",
      "main__btn": "Мої навички",
  
      "about": "",
      "about__spec 1": "Мої навички:",
      "about__item 1": "HTML5",
      "about__item 2": "CSS3",
      "about__item 3": "Bootstrap",
      "about__item 4": "JavaScript",
      "about__item 5": "PHP",
      "about__item 6": "MySQL",
      "about__item 7": " Початкові навички React",
      "about__spec 2": "В чому я спеціалізуюся:",
      "about__item 2-1": "розробка лендинг сторінки",
      "about__item 2-2": "розробка сайту-візитки",
      "about__item 2-3": "розробка багатосторінкових сайтів",
      "about__item 2-4": "розробка нових та вдосконалення старих сайтів",
      "about__item 2-5": "адаптація сайту під будь-які розміри пристроїв",
      "about__spec 3": "Працюю з макетами в:",
      "about__item 3-1": "Figma",
      "about__item 3-2": "Adobe Photoshop",
  
      "work": "",
      "work title": "Мої роботи:",
      "work descr": "Тут ви можете побачити приклади деяких моїх робіт.",
  
      "reviews": "",
      "reviews__descr 1": "Рекомендую!",
      "reviews__user-name 1": "Джек",
      "reviews__descr 2": "Все зроблено чудово!",
      "reviews__user-name 2": "Гаррі",
      "reviews__descr 3": "Зробив все вчасно та гарно!",
      "reviews__user-name 3": "Иван",
      "reviews__descr 4": "Дякую.",
      "reviews__user-name 4": "Алла",
      "reviews__descr 5": "Зробив мені чудовий сайт! Дякую!",
      "reviews__user-name 5": "Саша",
  
      "contact": "",
      "contact title": "Контакти:",
      "contact descr": "Тут ви можете залишити заявку або зв'язатись зі мною.",
      "contact name": "Ваше ім'я",
      "contact nameplace" : "Ваше ім'я..",
      "contact email": "Ваша пошта",
      "contact emailplace" : "Ваша пошта..",
      "contact message": "Повідомлення",
      "contact messageplace" : "Повідомлення..",
      "contact send" : "Надіслати",
  
      "footer": "",
      "footer about": "Мої навички",
      "footer work": "Мої роботи",
      "footer contact": "Контакти"
  }
  },
  ru: {
    translation: {
      "header": "",
      "header__link main": "Главная",
      "header__link about": "Мои навыки",
      "header__link work": "Мои работы",
      "header__link cont": "Контакты",
  
      "main": "",
      "main__title": "Привет! Я",
      "main__name": "Горюк Василь",
      "main__work": "Веб-разработка и дизайн",
      "main__work p": "Это именно то, что я люблю!!",
      "main__btn": "Мои навыки",
  
      "about": "",
      "about__spec 1": "Мои навыки:",
      "about__item 1": "HTML5",
      "about__item 2": "CSS3",
      "about__item 3": "Bootstrap",
      "about__item 4": "JavaScript",
      "about__item 5": "PHP",
      "about__item 6": "MySQL",
      "about__item 7": "Начальные знания React",
      "about__spec 2": "В чем я специализируюсь:",
      "about__item 2-1": "разработка лендинга страницы",
      "about__item 2-2": "разработка сайта-визитки",
      "about__item 2-3": "разработка многостраничных сайтов",
      "about__item 2-4": "разработка новых и усовершенствование старых сайтов",
      "about__item 2-5": "адаптация сайта под любые размеры устройств",
      "about__spec 3": "Работаю с макетами в:",
      "about__item 3-1": "Figma",
      "about__item 3-2": "Adobe Photoshop",
  
      "work": "",
      "work title": "Мои работы:",
      "work descr": "Здесь можно увидеть примеры некоторых моих работ.",
  
      "reviews": "",
      "reviews__descr 1": "Рекомендую!",
      "reviews__user-name 1": "Джек",
      "reviews__descr 2": "Все сделано замечательно!",
      "reviews__user-name 2": "Гарри",
      "reviews__descr 3": "Сделал все вовремя и хорошо!",
      "reviews__user-name 3": "Иван",
      "reviews__descr 4": "Спасибо.",
      "reviews__user-name 4": "Алла",
      "reviews__descr 5": "Сделал мне отличный сайт! Спасибо!",
      "reviews__user-name 5": "Саша",
  
      "contact": "",
      "contact title": "Контакты:",
      "contact descr": "Здесь вы можете оставить заявку или связаться со мной.",
      "contact name": "Ваше имя",
      "contact nameplace" : "Ваше имя..",
      "contact email": "Ваша почта",
      "contact emailplace" : "Ваша почта..",
      "contact message": "Сообщение",
      "contact messageplace" : "Сообщение..",
      "contact send" : "Отослать",
  
      "footer": "",
      "footer about": "Мои навыки",
      "footer work": "Мои работы",
      "footer contact": "Контакты"
  }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ua",
    whitelist: ["ua", "ru", "en"],
    debug: false,
    detecrion: {
        order: ["localStorage","cookie"],
        caches: ["localStorage","cookie"],
    },
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;