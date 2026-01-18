// ===============================================
//  MULTILINGUAL TRANSLATION SYSTEM
// ===============================================

const translations = {
    en: {
        // NAVIGATION
        nav_home: "Home",
        nav_about: "About",
        nav_music: "Music & Arts",
        nav_travel: "Travel",
        nav_events: "Events",
        nav_gallery: "Gallery",
        nav_contact: "Contact",

        // HERO
        hero_title: "Welcome to the Azerbaijan Cultural Center",
        hero_text: "Discover the rich heritage of Azerbaijani culture, music, art, and travel.",
        hero_btn: "Learn More",

        // ABOUT
        about_title: "About Azerbaijan",
        about_text: "The Azerbaijan Cultural Center is a non-profit organization dedicated to promoting Azerbaijani culture, art, music, and travel experiences.",

        // MUSIC & ARTS
        music_title: "Music & Arts",
        music_text: "Learn about traditional Azerbaijani music, instruments, and art forms.",
        music_card1_title: "Traditional Instruments",
        music_card1_text: "The image displays a collection of traditional Azerbaijani musical instruments, housed in the Azerbaijan State Museum of Musical Culture.",
        music_card2_title: "Azerbaijan State Musical Theatre",
        music_card2_text: "A central hub for performances showcasing Azerbaijani music and theatrical arts.",

        // TRAVEL
        travel_title: "Travel Guide",
        travel_text: "Explore Azerbaijan's beautiful landscapes, cities, and cultural landmarks.",
        travel_card1_title: "Baku",
        travel_card1_text: "Capital city with rich history.",
        travel_card2_title: "Sheki",
        travel_card2_text: "Historic town with beautiful architecture.",

        // EVENTS
        events_title: "Events",
        events_text: "Upcoming events and cultural programs.",
        events_item1: "Nov 20 – Azerbaijani Music Night",
        events_item2: "Dec 10 – Art & Carpet Exhibition",

        // CONTACT
        contact_title: "Contact",
        contact_email: "Email: info@azerbaijanculturalcenter.org",
        contact_address: "Address: 123 Culture St, Baku, Azerbaijan",

        // IMAGE DESCRIPTIONS
        img_instruments_desc: "Traditional Azerbaijani musical instruments displayed at the State Museum of Musical Culture.",
        img_theatre_desc: "The Azerbaijan State Musical Theatre, a major venue for music and performing arts.",
        img_baku_desc: "A scenic view of Baku, showcasing its blend of modern and historical architecture.",
        img_sheki_desc: "The historic city of Sheki, known for its ancient palaces and unique craftsmanship."
    },

    az: {
        nav_home: "Ana səhifə",
        nav_about: "Haqqımızda",
        nav_music: "Musiqi & İncəsənət",
        nav_travel: "Səyahət",
        nav_events: "Tədbirlər",
        nav_gallery: "Qalereya",
        nav_contact: "Əlaqə",

        hero_title: "Azərbaycan Mədəniyyət Mərkəzinə Xoş Gəlmisiniz",
        hero_text: "Azərbaycan mədəniyyətinin, musiqisinin, incəsənətinin və səyahət imkanlarının zəngin irsini kəşf edin.",
        hero_btn: "Daha Ətraflı",

        about_title: "Azərbaycan Haqqında",
        about_text: "Azərbaycan Mədəniyyət Mərkəzi Azərbaycan mədəniyyətini, incəsənətini, musiqisini və səyahət imkanlarını tanıtmağa həsr olunmuş qeyri-kommersiya təşkilatıdır.",

        music_title: "Musiqi & İncəsənət",
        music_text: "Azərbaycan musiqi ənənələrini, alətlərini və incəsənət növlərini öyrənin.",
        music_card1_title: "Ənənəvi Alətlər",
        music_card1_text: "Şəkildə Azərbaycanın ənənəvi musiqi alətləri, Azərbaycan Dövlət Musiqi Mədəniyyəti Muzeyində nümayiş olunur.",
        music_card2_title: "Azərbaycan Dövlət Musiqi Teatrı",
        music_card2_text: "Azərbaycan musiqisi və teatr sənətini nümayiş etdirən mərkəzi məkandır.",

        travel_title: "Səyahət Bələdçisi",
        travel_text: "Azərbaycanın gözəl mənzərələrini, şəhərlərini və mədəni abidələrini kəşf edin.",
        travel_card1_title: "Bakı",
        travel_card1_text: "Tarixi zəngin paytaxt şəhəri.",
        travel_card2_title: "Şəki",
        travel_card2_text: "Gözəl memarlığa malik tarixi şəhər.",

        events_title: "Tədbirlər",
        events_text: "Gələcək tədbirlər və mədəni proqramlar.",
        events_item1: "20 Noy – Azərbaycan Musiqi Gecəsi",
        events_item2: "10 Dek – İncəsənət və Xalça Sərgisi",

        contact_title: "Əlaqə",
        contact_email: "Email: info@azerbaijanculturalcenter.org",
        contact_address: "Ünvan: 123 Mədəniyyət küçəsi, Bakı, Azərbaycan",

        img_instruments_desc: "Azərbaycan Dövlət Musiqi Mədəniyyəti Muzeyində nümayiş olunan ənənəvi musiqi alətləri.",
        img_theatre_desc: "Azərbaycan Dövlət Musiqili Teatrı – musiqi və səhnə sənətinin əsas mərkəzlərindən biri.",
        img_baku_desc: "Müasir və tarixi memarlığın vəhdətini əks etdirən Bakı mənzərəsi.",
        img_sheki_desc: "Qədim sarayları və özünəməxsus sənətkarlığı ilə məşhur olan tarixi Şəki şəhəri."
    },

    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_music: "Musique & Arts",
        nav_travel: "Voyage",
        nav_events: "Événements",
        nav_gallery: "Galerie",
        nav_contact: "Contact",

        hero_title: "Bienvenue au Centre Culturel d'Azerbaïdjan",
        hero_text: "Découvrez le riche patrimoine de la culture, de la musique, de l'art et du voyage azerbaïdjanais.",
        hero_btn: "En savoir plus",

        about_title: "À propos de l'Azerbaïdjan",
        about_text: "Le Centre Culturel d'Azerbaïdjan est une organisation à but non lucratif dédiée à la promotion de la culture, de l'art, de la musique et des expériences de voyage azerbaïdjanaises.",

        music_title: "Musique & Arts",
        music_text: "Découvrez la musique traditionnelle, les instruments et les formes d'art de l'Azerbaïdjan.",
        music_card1_title: "Instruments Traditionnels",
        music_card1_text: "Instruments traditionnels exposés au Musée d'État de la Culture Musicale.",
        music_card2_title: "Théâtre Musical d'État",
        music_card2_text: "Centre principal pour les représentations de musique et théâtre azerbaïdjanais.",

        travel_title: "Guide de Voyage",
        travel_text: "Explorez les magnifiques paysages, villes et sites culturels d'Azerbaïdjan.",
        travel_card1_title: "Bakou",
        travel_card1_text: "Capitale avec une riche histoire.",
        travel_card2_title: "Chaki",
        travel_card2_text: "Ville historique avec une belle architecture.",

        events_title: "Événements",
        events_text: "Événements et programmes culturels à venir.",
        events_item1: "20 Nov – Nuit de musique azerbaïdjanaise",
        events_item2: "10 Déc – Exposition d'art & tapis",

        contact_title: "Contact",
        contact_email: "Email: info@azerbaijanculturalcenter.org",
        contact_address: "Adresse: 123 Rue de la Culture, Bakou, Azerbaïdjan",

        img_instruments_desc: "Instruments de musique traditionnels exposés au Musée d'État.",
        img_theatre_desc: "Le Théâtre Musical d'État d'Azerbaïdjan.",
        img_baku_desc: "Vue pittoresque de Bakou.",
        img_sheki_desc: "La ville historique de Chaki."
    },

    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_music: "Музыка & Искусство",
        nav_travel: "Путешествия",
        nav_events: "События",
        nav_gallery: "Галерея",
        nav_contact: "Контакт",

        hero_title: "Добро пожаловать в Азербайджанский культурный центр",
        hero_text: "Откройте для себя богатое наследие азербайджанской культуры, музыки, искусства и путешествий.",
        hero_btn: "Узнать больше",

        about_title: "Об Азербайджане",
        about_text: "Азербайджанский культурный центр — некоммерческая организация, посвященная продвижению азербайджанской культуры, искусства, музыки и путешествий.",

        music_title: "Музыка & Искусство",
        music_text: "Узнайте о традиционной азербайджанской музыке, инструментах и формах искусства.",
        music_card1_title: "Традиционные Инструменты",
        music_card1_text: "Коллекция традиционных инструментов в Государственном музее музыкальной культуры.",
        music_card2_title: "Государственный Музыкальный Театр",
        music_card2_text: "Центр музыкальных и театральных искусств.",

        travel_title: "Путеводитель",
        travel_text: "Исследуйте красивые пейзажи, города и культурные достопримечательности Азербайджана.",
        travel_card1_title: "Баку",
        travel_card1_text: "Столица с богатой историей.",
        travel_card2_title: "Шеки",
        travel_card2_text: "Исторический город с красивой архитектурой.",

        events_title: "События",
        events_text: "Предстоящие события и культурные программы.",
        events_item1: "20 Ноя – Вечер азербайджанской музыки",
        events_item2: "10 Дек – Выставка искусства и ковров",

        contact_title: "Контакт",
        contact_email: "Email: info@azerbaijanculturalcenter.org",
        contact_address: "Адрес: 123 Улица Культуры, Баку, Азербайджан",

        img_instruments_desc: "Традиционные музыкальные инструменты Азербайджана.",
        img_theatre_desc: "Государственный Музыкальный Театр Азербайджана.",
        img_baku_desc: "Вид на город Баку.",
        img_sheki_desc: "Исторический город Шеки."
    }
};

// ===============================================
//  LANGUAGE SWITCHER
// ===============================================

const languageSelect = document.getElementById("language-switch");

languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
});

// ===============================================
//  AUTO-LOAD DEFAULT LANGUAGE
// ===============================================

window.addEventListener("DOMContentLoaded", () => {
    const defaultLang = "en";
    languageSelect.value = defaultLang;

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[defaultLang][key]) {
            el.textContent = translations[defaultLang][key];
        }
    });
});

// ===============================================
//  SECTION SWITCHING LOGIC
// ===============================================

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-target");

        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));

        tab.classList.add("active");
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    });
});
