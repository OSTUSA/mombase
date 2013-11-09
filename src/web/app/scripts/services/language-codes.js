'use strict';

angular.module('webApp')
  .service('LanguageCodes', function LanguageCodes() {
        /**
         * @author Phil Teare
         * using wikipedia data
         */
        var isoLangs = [
            {
                "abbr": "en",
                "name":"English",
                "nativeName":"English"
            },
            {
				"abbr": "ab",
                "name":"Abkhaz",
                "nativeName":"аҧсуа"
            },
            {
				"abbr": "aa",
                "name":"Afar",
                "nativeName":"Afaraf"
            },
            {
				"abbr": "af",
                "name":"Afrikaans",
                "nativeName":"Afrikaans"
            },
            {
				"abbr": "ak",
                "name":"Akan",
                "nativeName":"Akan"
            },
            {
				"abbr": "sq",
                "name":"Albanian",
                "nativeName":"Shqip"
            },
            {
				"abbr": "am",
                "name":"Amharic",
                "nativeName":"አማርኛ"
            },
            {
				"abbr": "ar",
                "name":"Arabic",
                "nativeName":"العربية"
            },
            {
				"abbr": "an",
                "name":"Aragonese",
                "nativeName":"Aragonés"
            },
            {
				"abbr": "hy",
                "name":"Armenian",
                "nativeName":"Հայերեն"
            },
            {
				"abbr": "as",
                "name":"Assamese",
                "nativeName":"অসমীয়া"
            },
            {
				"abbr": "av",
                "name":"Avaric",
                "nativeName":"авар мацӀ, магӀарул мацӀ"
            },
            {
				"abbr": "ae",
                "name":"Avestan",
                "nativeName":"avesta"
            },
            {
				"abbr": "ay",
                "name":"Aymara",
                "nativeName":"aymar aru"
            },
            {
				"abbr": "az",
                "name":"Azerbaijani",
                "nativeName":"azərbaycan dili"
            },
            {
				"abbr": "bm",
                "name":"Bambara",
                "nativeName":"bamanankan"
            },
            {
				"abbr": "ba",
                "name":"Bashkir",
                "nativeName":"башҡорт теле"
            },
            {
				"abbr": "eu",
                "name":"Basque",
                "nativeName":"euskara, euskera"
            },
            {
				"abbr": "be",
                "name":"Belarusian",
                "nativeName":"Беларуская"
            },
            {
				"abbr": "bn",
                "name":"Bengali",
                "nativeName":"বাংলা"
            },
            {
				"abbr": "bh",
                "name":"Bihari",
                "nativeName":"भोजपुरी"
            },
            {
				"abbr": "bi",
                "name":"Bislama",
                "nativeName":"Bislama"
            },
            {
				"abbr": "bs",
                "name":"Bosnian",
                "nativeName":"bosanski jezik"
            },
            {
				"abbr": "br",
                "name":"Breton",
                "nativeName":"brezhoneg"
            },
            {
				"abbr": "bg",
                "name":"Bulgarian",
                "nativeName":"български език"
            },
            {
				"abbr": "my",
                "name":"Burmese",
                "nativeName":"ဗမာစာ"
            },
            {
				"abbr": "ca",
                "name":"Catalan; Valencian",
                "nativeName":"Català"
            },
            {
				"abbr": "ch",
                "name":"Chamorro",
                "nativeName":"Chamoru"
            },
            {
				"abbr": "ce",
                "name":"Chechen",
                "nativeName":"нохчийн мотт"
            },
            {
				"abbr": "ny",
                "name":"Chichewa; Chewa; Nyanja",
                "nativeName":"chiCheŵa, chinyanja"
            },
            {
				"abbr": "zh",
                "name":"Chinese",
                "nativeName":"中文 (Zhōngwén), 汉语, 漢語"
            },
            {
				"abbr": "cv",
                "name":"Chuvash",
                "nativeName":"чӑваш чӗлхи"
            },
            {
				"abbr": "kw",
                "name":"Cornish",
                "nativeName":"Kernewek"
            },
            {
				"abbr": "co",
                "name":"Corsican",
                "nativeName":"corsu, lingua corsa"
            },
            {
				"abbr": "cr",
                "name":"Cree",
                "nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"
            },
            {
				"abbr": "hr",
                "name":"Croatian",
                "nativeName":"hrvatski"
            },
            {
				"abbr": "cs",
                "name":"Czech",
                "nativeName":"česky, čeština"
            },
            {
				"abbr": "da",
                "name":"Danish",
                "nativeName":"dansk"
            },
            {
				"abbr": "dv",
                "name":"Divehi; Dhivehi; Maldivian;",
                "nativeName":"ދިވެހި"
            },
            {
				"abbr": "nl",
                "name":"Dutch",
                "nativeName":"Nederlands, Vlaams"
            },
            {
				"abbr": "eo",
                "name":"Esperanto",
                "nativeName":"Esperanto"
            },
            {
				"abbr": "et",
                "name":"Estonian",
                "nativeName":"eesti, eesti keel"
            },
            {
				"abbr": "ee",
                "name":"Ewe",
                "nativeName":"Eʋegbe"
            },
            {
				"abbr": "fo",
                "name":"Faroese",
                "nativeName":"føroyskt"
            },
            {
				"abbr": "fj",
                "name":"Fijian",
                "nativeName":"vosa Vakaviti"
            },
            {
				"abbr": "fi",
                "name":"Finnish",
                "nativeName":"suomi, suomen kieli"
            },
            {
				"abbr": "fr",
                "name":"French",
                "nativeName":"français, langue française"
            },
            {
				"abbr": "ff",
                "name":"Fula; Fulah; Pulaar; Pular",
                "nativeName":"Fulfulde, Pulaar, Pular"
            },
            {
				"abbr": "gl",
                "name":"Galician",
                "nativeName":"Galego"
            },
            {
				"abbr": "ka",
                "name":"Georgian",
                "nativeName":"ქართული"
            },
            {
				"abbr": "de",
                "name":"German",
                "nativeName":"Deutsch"
            },
            {
				"abbr": "el",
                "name":"Greek, Modern",
                "nativeName":"Ελληνικά"
            },
            {
				"abbr": "gn",
                "name":"Guaraní",
                "nativeName":"Avañeẽ"
            },
            {
				"abbr": "gu",
                "name":"Gujarati",
                "nativeName":"ગુજરાતી"
            },
            {
				"abbr": "ht",
                "name":"Haitian; Haitian Creole",
                "nativeName":"Kreyòl ayisyen"
            },
            {
				"abbr": "ha",
                "name":"Hausa",
                "nativeName":"Hausa, هَوُسَ"
            },
            {
				"abbr": "he",
                "name":"Hebrew (modern)",
                "nativeName":"עברית"
            },
            {
				"abbr": "hz",
                "name":"Herero",
                "nativeName":"Otjiherero"
            },
            {
				"abbr": "hi",
                "name":"Hindi",
                "nativeName":"हिन्दी, हिंदी"
            },
            {
				"abbr": "ho",
                "name":"Hiri Motu",
                "nativeName":"Hiri Motu"
            },
            {
				"abbr": "hu",
                "name":"Hungarian",
                "nativeName":"Magyar"
            },
            {
				"abbr": "ia",
                "name":"Interlingua",
                "nativeName":"Interlingua"
            },
            {
				"abbr": "id",
                "name":"Indonesian",
                "nativeName":"Bahasa Indonesia"
            },
            {
				"abbr": "ie",
                "name":"Interlingue",
                "nativeName":"Originally called Occidental; then Interlingue after WWII"
            },
            {
				"abbr": "ga",
                "name":"Irish",
                "nativeName":"Gaeilge"
            },
            {
				"abbr": "ig",
                "name":"Igbo",
                "nativeName":"Asụsụ Igbo"
            },
            {
				"abbr": "ik",
                "name":"Inupiaq",
                "nativeName":"Iñupiaq, Iñupiatun"
            },
            {
				"abbr": "io",
                "name":"Ido",
                "nativeName":"Ido"
            },
            {
				"abbr": "is",
                "name":"Icelandic",
                "nativeName":"Íslenska"
            },
            {
				"abbr": "it",
                "name":"Italian",
                "nativeName":"Italiano"
            },
            {
				"abbr": "iu",
                "name":"Inuktitut",
                "nativeName":"ᐃᓄᒃᑎᑐᑦ"
            },
            {
				"abbr": "ja",
                "name":"Japanese",
                "nativeName":"日本語 (にほんご／にっぽんご)"
            },
            {
				"abbr": "jv",
                "name":"Javanese",
                "nativeName":"basa Jawa"
            },
            {
				"abbr": "kl",
                "name":"Kalaallisut, Greenlandic",
                "nativeName":"kalaallisut, kalaallit oqaasii"
            },
            {
				"abbr": "kn",
                "name":"Kannada",
                "nativeName":"ಕನ್ನಡ"
            },
            {
				"abbr": "kr",
                "name":"Kanuri",
                "nativeName":"Kanuri"
            },
            {
				"abbr": "ks",
                "name":"Kashmiri",
                "nativeName":"कश्मीरी, كشميري‎"
            },
            {
				"abbr": "kk",
                "name":"Kazakh",
                "nativeName":"Қазақ тілі"
            },
            {
				"abbr": "km",
                "name":"Khmer",
                "nativeName":"ភាសាខ្មែរ"
            },
            {
				"abbr": "ki",
                "name":"Kikuyu, Gikuyu",
                "nativeName":"Gĩkũyũ"
            },
            {
				"abbr": "rw",
                "name":"Kinyarwanda",
                "nativeName":"Ikinyarwanda"
            },
            {
				"abbr": "ky",
                "name":"Kirghiz, Kyrgyz",
                "nativeName":"кыргыз тили"
            },
            {
				"abbr": "kv",
                "name":"Komi",
                "nativeName":"коми кыв"
            },
            {
				"abbr": "kg",
                "name":"Kongo",
                "nativeName":"KiKongo"
            },
            {
				"abbr": "ko",
                "name":"Korean",
                "nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"
            },
            {
				"abbr": "ku",
                "name":"Kurdish",
                "nativeName":"Kurdî, كوردی‎"
            },
            {
				"abbr": "kj",
                "name":"Kwanyama, Kuanyama",
                "nativeName":"Kuanyama"
            },
            {
				"abbr": "la",
                "name":"Latin",
                "nativeName":"latine, lingua latina"
            },
            {
				"abbr": "lb",
                "name":"Luxembourgish, Letzeburgesch",
                "nativeName":"Lëtzebuergesch"
            },
            {
				"abbr": "lg",
                "name":"Luganda",
                "nativeName":"Luganda"
            },
            {
				"abbr": "li",
                "name":"Limburgish, Limburgan, Limburger",
                "nativeName":"Limburgs"
            },
            {
				"abbr": "ln",
                "name":"Lingala",
                "nativeName":"Lingála"
            },
            {
				"abbr": "lo",
                "name":"Lao",
                "nativeName":"ພາສາລາວ"
            },
            {
				"abbr": "lt",
                "name":"Lithuanian",
                "nativeName":"lietuvių kalba"
            },
            {
				"abbr": "lu",
                "name":"Luba-Katanga",
                "nativeName":""
            },
            {
				"abbr": "lv",
                "name":"Latvian",
                "nativeName":"latviešu valoda"
            },
            {
				"abbr": "gv",
                "name":"Manx",
                "nativeName":"Gaelg, Gailck"
            },
            {
				"abbr": "mk",
                "name":"Macedonian",
                "nativeName":"македонски јазик"
            },
            {
				"abbr": "mg",
                "name":"Malagasy",
                "nativeName":"Malagasy fiteny"
            },
            {
				"abbr": "ms",
                "name":"Malay",
                "nativeName":"bahasa Melayu, بهاس ملايو‎"
            },
            {
				"abbr": "ml",
                "name":"Malayalam",
                "nativeName":"മലയാളം"
            },
            {
				"abbr": "mt",
                "name":"Maltese",
                "nativeName":"Malti"
            },
            {
				"abbr": "mi",
                "name":"Māori",
                "nativeName":"te reo Māori"
            },
            {
				"abbr": "mr",
                "name":"Marathi (Marāṭhī)",
                "nativeName":"मराठी"
            },
            {
				"abbr": "mh",
                "name":"Marshallese",
                "nativeName":"Kajin M̧ajeļ"
            },
            {
				"abbr": "mn",
                "name":"Mongolian",
                "nativeName":"монгол"
            },
            {
				"abbr": "na",
                "name":"Nauru",
                "nativeName":"Ekakairũ Naoero"
            },
            {
				"abbr": "nv",
                "name":"Navajo, Navaho",
                "nativeName":"Diné bizaad, Dinékʼehǰí"
            },
            {
				"abbr": "nb",
                "name":"Norwegian Bokmål",
                "nativeName":"Norsk bokmål"
            },
            {
				"abbr": "nd",
                "name":"North Ndebele",
                "nativeName":"isiNdebele"
            },
            {
				"abbr": "ne",
                "name":"Nepali",
                "nativeName":"नेपाली"
            },
            {
				"abbr": "ng",
                "name":"Ndonga",
                "nativeName":"Owambo"
            },
            {
				"abbr": "nn",
                "name":"Norwegian Nynorsk",
                "nativeName":"Norsk nynorsk"
            },
            {
				"abbr": "no",
                "name":"Norwegian",
                "nativeName":"Norsk"
            },
            {
				"abbr": "ii",
                "name":"Nuosu",
                "nativeName":"ꆈꌠ꒿ Nuosuhxop"
            },
            {
				"abbr": "nr",
                "name":"South Ndebele",
                "nativeName":"isiNdebele"
            },
            {
				"abbr": "oc",
                "name":"Occitan",
                "nativeName":"Occitan"
            },
            {
				"abbr": "oj",
                "name":"Ojibwe, Ojibwa",
                "nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"
            },
            {
				"abbr": "cu",
                "name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
                "nativeName":"ѩзыкъ словѣньскъ"
            },
            {
				"abbr": "om",
                "name":"Oromo",
                "nativeName":"Afaan Oromoo"
            },
            {
				"abbr": "or",
                "name":"Oriya",
                "nativeName":"ଓଡ଼ିଆ"
            },
            {
				"abbr": "os",
                "name":"Ossetian, Ossetic",
                "nativeName":"ирон æвзаг"
            },
            {
				"abbr": "pa",
                "name":"Panjabi, Punjabi",
                "nativeName":"ਪੰਜਾਬੀ, پنجابی‎"
            },
            {
				"abbr": "pi",
                "name":"Pāli",
                "nativeName":"पाऴि"
            },
            {
				"abbr": "fa",
                "name":"Persian",
                "nativeName":"فارسی"
            },
            {
				"abbr": "pl",
                "name":"Polish",
                "nativeName":"polski"
            },
            {
				"abbr": "ps",
                "name":"Pashto, Pushto",
                "nativeName":"پښتو"
            },
            {
				"abbr": "pt",
                "name":"Portuguese",
                "nativeName":"Português"
            },
            {
				"abbr": "qu",
                "name":"Quechua",
                "nativeName":"Runa Simi, Kichwa"
            },
            {
				"abbr": "rm",
                "name":"Romansh",
                "nativeName":"rumantsch grischun"
            },
            {
				"abbr": "rn",
                "name":"Kirundi",
                "nativeName":"kiRundi"
            },
            {
				"abbr": "ro",
                "name":"Romanian, Moldavian, Moldovan",
                "nativeName":"română"
            },
            {
				"abbr": "ru",
                "name":"Russian",
                "nativeName":"русский язык"
            },
            {
				"abbr": "sa",
                "name":"Sanskrit (Saṁskṛta)",
                "nativeName":"संस्कृतम्"
            },
            {
				"abbr": "sc",
                "name":"Sardinian",
                "nativeName":"sardu"
            },
            {
				"abbr": "sd",
                "name":"Sindhi",
                "nativeName":"सिन्धी, سنڌي، سندھی‎"
            },
            {
				"abbr": "se",
                "name":"Northern Sami",
                "nativeName":"Davvisámegiella"
            },
            {
				"abbr": "sm",
                "name":"Samoan",
                "nativeName":"gagana faa Samoa"
            },
            {
				"abbr": "sg",
                "name":"Sango",
                "nativeName":"yângâ tî sängö"
            },
            {
				"abbr": "sr",
                "name":"Serbian",
                "nativeName":"српски језик"
            },
            {
				"abbr": "gd",
                "name":"Scottish Gaelic; Gaelic",
                "nativeName":"Gàidhlig"
            },
            {
				"abbr": "sn",
                "name":"Shona",
                "nativeName":"chiShona"
            },
            {
				"abbr": "si",
                "name":"Sinhala, Sinhalese",
                "nativeName":"සිංහල"
            },
            {
				"abbr": "sk",
                "name":"Slovak",
                "nativeName":"slovenčina"
            },
            {
				"abbr": "sl",
                "name":"Slovene",
                "nativeName":"slovenščina"
            },
            {
				"abbr": "so",
                "name":"Somali",
                "nativeName":"Soomaaliga, af Soomaali"
            },
            {
				"abbr": "st",
                "name":"Southern Sotho",
                "nativeName":"Sesotho"
            },
            {
				"abbr": "es",
                "name":"Spanish",
                "nativeName":"español, castellano"
            },
            {
				"abbr": "su",
                "name":"Sundanese",
                "nativeName":"Basa Sunda"
            },
            {
				"abbr": "sw",
                "name":"Swahili",
                "nativeName":"Kiswahili"
            },
            {
				"abbr": "ss",
                "name":"Swati",
                "nativeName":"SiSwati"
            },
            {
				"abbr": "sv",
                "name":"Swedish",
                "nativeName":"svenska"
            },
            {
				"abbr": "ta",
                "name":"Tamil",
                "nativeName":"தமிழ்"
            },
            {
				"abbr": "te",
                "name":"Telugu",
                "nativeName":"తెలుగు"
            },
            {
				"abbr": "tg",
                "name":"Tajik",
                "nativeName":"тоҷикӣ, toğikī, تاجیکی‎"
            },
            {
				"abbr": "th",
                "name":"Thai",
                "nativeName":"ไทย"
            },
            {
				"abbr": "ti",
                "name":"Tigrinya",
                "nativeName":"ትግርኛ"
            },
            {
				"abbr": "bo",
                "name":"Tibetan Standard, Tibetan, Central",
                "nativeName":"བོད་ཡིག"
            },
            {
				"abbr": "tk",
                "name":"Turkmen",
                "nativeName":"Türkmen, Түркмен"
            },
            {
				"abbr": "tl",
                "name":"Tagalog",
                "nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
            },
            {
				"abbr": "tn",
                "name":"Tswana",
                "nativeName":"Setswana"
            },
            {
				"abbr": "to",
                "name":"Tonga (Tonga Islands)",
                "nativeName":"faka Tonga"
            },
            {
				"abbr": "tr",
                "name":"Turkish",
                "nativeName":"Türkçe"
            },
            {
				"abbr": "ts",
                "name":"Tsonga",
                "nativeName":"Xitsonga"
            },
            {
				"abbr": "tt",
                "name":"Tatar",
                "nativeName":"татарча, tatarça, تاتارچا‎"
            },
            {
				"abbr": "tw",
                "name":"Twi",
                "nativeName":"Twi"
            },
            {
				"abbr": "ty",
                "name":"Tahitian",
                "nativeName":"Reo Tahiti"
            },
            {
				"abbr": "ug",
                "name":"Uighur, Uyghur",
                "nativeName":"Uyƣurqə, ئۇيغۇرچە‎"
            },
            {
				"abbr": "uk",
                "name":"Ukrainian",
                "nativeName":"українська"
            },
            {
				"abbr": "ur",
                "name":"Urdu",
                "nativeName":"اردو"
            },
            {
				"abbr": "uz",
                "name":"Uzbek",
                "nativeName":"zbek, Ўзбек, أۇزبېك‎"
            },
            {
				"abbr": "ve",
                "name":"Venda",
                "nativeName":"Tshivenḓa"
            },
            {
				"abbr": "vi",
                "name":"Vietnamese",
                "nativeName":"Tiếng Việt"
            },
            {
				"abbr": "vo",
                "name":"Volapük",
                "nativeName":"Volapük"
            },
            {
				"abbr": "wa",
                "name":"Walloon",
                "nativeName":"Walon"
            },
            {
				"abbr": "cy",
                "name":"Welsh",
                "nativeName":"Cymraeg"
            },
            {
				"abbr": "wo",
                "name":"Wolof",
                "nativeName":"Wollof"
            },
            {
				"abbr": "fy",
                "name":"Western Frisian",
                "nativeName":"Frysk"
            },
            {
				"abbr": "xh",
                "name":"Xhosa",
                "nativeName":"isiXhosa"
            },
            {
				"abbr": "yi",
                "name":"Yiddish",
                "nativeName":"ייִדיש"
            },
            {
				"abbr": "yo",
                "name":"Yoruba",
                "nativeName":"Yorùbá"
            },
            {
				"abbr": "za",
                "name":"Zhuang, Chuang",
                "nativeName":"Saɯ cueŋƅ, Saw cuengh"
            }
        ];

        return isoLangs;
  });
