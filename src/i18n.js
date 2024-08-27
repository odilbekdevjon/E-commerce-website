import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    debug:true,
    lng:"en",
    resources: {
        en: {
            translation: {
                headerTitle1:"Home",
                headerTitle2:"About Us",
                headerTitle3:"Available products",
                headerTitle4:"Contact",
                heroTitle1:"Colony construction products",
                footerTitle1:"Contacts",
            },
        },
        ru: {
            translation: {
                headerTitle1:"Главная",
                headerTitle2:"О нас",
                headerTitle3:"Доступные продукты",
                headerTitle4:"Контакт",
                heroTitle1:"Строительная продукция колонии",
                footerTitle1:"Контакты"
            },
        },
        uz: {
            translation: {
                headerTitle1:"Bosh sahifa",
                headerTitle2:"Biz haqimizda",
                headerTitle3:"Mavjud maxsulotlar",
                headerTitle4:"Aloqalar",
                heroTitle1:"Koloniya qurilish maxsulotlari",
                footerTitle1:"Kontaktlar"
            },
        },
    },
    
    
  });

export default i18n;
