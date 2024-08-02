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
                headerTitle1:"Products",
                headerTitle2:"Dillers",
                headerTitle3:"Available products",
                heroTitle1:"Colony construction products",
                footerTitle1:"Contacts",
            },
        },
        ru: {
            translation: {
                headerTitle1:"Продукты",
                headerTitle2:"Диллардс",
                headerTitle3:"Доступные продукты",
                heroTitle1:"Строительная продукция колонии",
                footerTitle1:"Контакты"
            },
        },
        uz: {
            translation: {
                headerTitle1:"Maxsulotlar",
                headerTitle2:"Dillerlar",
                headerTitle3:"Mavjud maxsulotlar",
                heroTitle1:"Koloniya qurilish maxsulotlari",
                footerTitle1:"Kontaktlar"
            },
        },
    },
    
    
  });

export default i18n;
