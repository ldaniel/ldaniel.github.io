/*
 * ... and Caf said:
 * 
 * Pessoal conforme combinado nos comprometemos a escrever TiGreets 1, 2, 3 e 4 
 * para o início da próxima semana. Cada um deles deverá conter uma única frase 
 * com 14 palavras perfazendo 40 sílabas e nada mais. Nem menos.
 * */

var syllabes = [
    'a', 'e', 'i', 'o', 'u', 'ai', 'ao', 'au', 'ei', 'eu', 'ia', 'ou',
    'lhe', 'lhes', 'lho', 'lhos', 'cha', 'che', 'chi', 'chu', 'cho',
    'ba', 'ca', 'da', 'fa', 'ga', 'ha', 'ja', 'la', 'ma', 'na', 'pa',
    'qua', 'ra', 'sa', 'ta', 'va', 'xa', 'za', 'be', 'ce', 'de',
    'fe', 'ge', 'he', 'je', 'le', 'me', 'ne', 'pe', 'que', 're', 'se',
    'te', 've', 'xe', 'ze', 'bi', 'ci', 'di', 'fi', 'gi', 'hi', 'ji',
    'li', 'mi', 'ni', 'pi', 'qui', 'ri', 'si', 'ti', 'vi', 'xi', 'zi',
    'bo', 'co', 'do', 'fo', 'go', 'ho', 'jo', 'lo', 'mo', 'no', 'po',
    'quo', 'ro', 'so', 'to', 'vo', 'xo', 'zo', 'bu', 'cu', 'du', 'fu',
    'gu', 'hu', 'ju', 'lu', 'mu', 'nu', 'pu', 'quas', 'ru', 'su', 'tu',
    'vu', 'xu', 'zu', 'bas', 'cas', 'das', 'fas', 'gas', 'has', 'jas',
    'las', 'mas', 'nas', 'pas', 'ques', 'ras', 'sas', 'tas', 'vas', 'xas',
    'zas', 'bes', 'ces', 'des', 'fes', 'ges', 'hes', 'jes', 'les', 'mes',
    'nes', 'pes', 'quis', 'res', 'ses', 'tes', 'ver', 'xes', 'zes', 'bis',
    'cis', 'dis', 'fis', 'gis', 'his', 'jis', 'lis', 'mis', 'nis', 'pis',
    'quos', 'ris', 'sis', 'tis', 'vis', 'xis', 'zis', 'bos', 'cos', 'dos',
    'fos', 'gos', 'hos', 'jos', 'los', 'mos', 'nos', 'pos', 'quar', 'ros',
    'sos', 'tos', 'vos', 'xos', 'zos', 'bus', 'cus', 'dus', 'fus', 'gus',
    'hus', 'jus', 'lus', 'mus', 'nus', 'pus', 'quer', 'rus', 'sus', 'tus',
    'vus', 'xus', 'zus', 'bar', 'car', 'dar', 'far', 'gar', 'har', 'jar',
    'lar', 'mar', 'nar', 'par', 'quir', 'rar', 'sar', 'tar', 'var', 'xar',
    'zar', 'ber', 'cer', 'der', 'fer', 'ger', 'her', 'jer', 'ler', 'mer',
    'ner', 'per', 'quor', 'rer', 'ser', 'ter', 'ver', 'xer', 'zer', 'bir',
    'cir', 'dir', 'fir', 'gir', 'hir', 'jir', 'lir', 'mir', 'nir', 'pir',
    'qual', 'rir', 'sir', 'tir', 'vir', 'xir', 'zir', 'bor', 'cor', 'dor',
    'for', 'gor', 'hor', 'jor', 'lor', 'mor', 'nor', 'por', 'as', 'ror',
    'sor', 'tor', 'vor', 'xor', 'zor', 'bur', 'cur', 'dur', 'fur', 'gur',
    'hur', 'jur', 'lur', 'mur', 'nur', 'pur', 'es', 'rur', 'sur', 'tur',
    'vur', 'xur', 'zur', 'bal', 'cal', 'dal', 'fal', 'gal', 'hal', 'jal',
    'lal', 'mal', 'nal', 'pal', 'is', 'ral', 'sal', 'tal', 'val', 'xal',
    'zal', 'bel', 'cel', 'del', 'fel', 'gel', 'hel', 'jel', 'lel', 'mel',
    'nel', 'pel', 'os', 'rel', 'sel', 'tel', 'vel', 'xel', 'zel', 'bil',
    'cil', 'dil', 'fil', 'gil', 'hil', 'jil', 'lil', 'mil', 'nil', 'pil',
    'us', 'ril', 'sil', 'til', 'vil', 'xil', 'zil', 'bol', 'col', 'dol',
    'fol', 'gol', 'hol', 'jol', 'lol', 'mol', 'nol', 'pol', 'ar', 'rol',
    'sol', 'tol', 'vol', 'xol', 'zol', 'bul', 'cul', 'dul', 'ful', 'gul',
    'hul', 'jul', 'lul', 'mul', 'nul', 'pul', 'er', 'rul', 'sul', 'tul',
    'vul', 'xul', 'zul', 'bam', 'cam', 'dam', 'fam', 'gam', 'ham', 'jam',
    'lam', 'mam', 'man', 'pam', 'ir', 'ram', 'sam', 'tam', 'vam', 'xam',
    'zam', 'bem', 'cem', 'dem', 'fem', 'gem', 'hem', 'jem', 'lem', 'mem',
    'men', 'pem', 'or', 'rem', 'sem', 'tem', 'vem', 'xem', 'zem', 'bim',
    'cim', 'dim', 'fim', 'gim', 'him', 'jim', 'lim', 'mim', 'min', 'pim',
    'ur', 'rim', 'sim', 'tim', 'vim', 'xim', 'zim', 'bom', 'com', 'dom',
    'fom', 'gom', 'hom', 'jom', 'lom', 'mom', 'mon', 'pom', 'al', 'rom',
    'som', 'tom', 'vom', 'xom', 'zom', 'bum', 'cum', 'dum', 'fum', 'gum',
    'hum', 'jum', 'lum', 'mum', 'mun', 'pum', 'el', 'rum', 'sum', 'tum',
    'vum', 'xum', 'zum', 'nha', 'nhe', 'nhi', 'nho', 'nhu', 'exc', 'na',
    'em', 'il', 'ol', 'ul', 'ex', 'in', 'on', 'um', '&eacute;', 
    "&atilde;o", "&atilde;os", "&otilde;es", "&agrave;", "quei", "sei"
]

const max_words = 14;
const max_syllabes_per_phrase = 40;

var word_count = 0;
var word_syllabes_count = 0;

function getRandomSyllabe() {
    return syllabes[Math.floor(Math.random() * syllabes.length)];
}

function createWord() {
    var word, size;

    word = "";
    const min = 1;
    const max = 4;    
    
    if (word_count == (max_words - 1)) {
        if (word_syllabes_count < max_syllabes_per_phrase) {
            size = max_syllabes_per_phrase - word_syllabes_count;
        }
        else {
            size = 1;
        }
    }
    else {
        size = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (i = min; i <= size; i++) {
        word += getRandomSyllabe();
        word_syllabes_count += 1;
    }

    return word;
}

function capitalizeFirstLetter(phrase) {
    return phrase.replace(/^\w/, c => c.toUpperCase());
}

function getPause() {
    middle_ponctuation =
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
         " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
         ", ", ": ", "; "]
    return middle_ponctuation[Math.floor(Math.random() * middle_ponctuation.length)];
}

function getIntention() {
    terminal_ponctuation = [".", "!", "?", "..."]
    return terminal_ponctuation[Math.floor(Math.random() * terminal_ponctuation.length)];
}

function writePhrase() {
    var phrase, I_Am_Free;
    
    phrase = "";
    I_Am_Free = true;

    word_count = 0;
    word_syllabes_count = 0;

    while (I_Am_Free) {
        if (word_count == max_words) {
            I_Am_Free = false;
        }
        else {
            phrase += createWord();
            word_count += 1;

            if (word_count < max_words) {
                phrase += getPause();
            }
        }
    }    
        
    phrase = capitalizeFirstLetter(phrase);
    phrase += getIntention();

    //phrase = phrase + "<br /> word_count: " + word_count + " / word_syllabes_count: " + word_syllabes_count;

    return phrase;
}

function generateTiGreets() {
    document.getElementById('TiGreets1').innerHTML = writePhrase();
    document.getElementById('TiGreets2').innerHTML = writePhrase();
    document.getElementById('TiGreets3').innerHTML = writePhrase();
    document.getElementById('TiGreets4').innerHTML = writePhrase();
}