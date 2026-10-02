//Vocab
const vocabMaster = [
    ["אַבְרָהָם", "Abraham (175)", 2],

    ["אַהֲרֹן", "Aaron (347)", 2],

    ["דָּוִד", "David (1,075)", 2],

    ["יְהוּדָה", "Judah (820)", 2],

    ["יְהוָה", "Yahweh, the LORD (6,828)", 2],

    ["יְהוֹשֻׁעַ", "Joshua (218)", 2],

    ["יוֹסֵף", "Joseph (213)", 2],

    ["יַעֲקֹב", "Jacob (349)", 2],

    ["יִצְחָק", "Isaac (108)", 2],

    ["יְרוּשָׁלַיִם", "Jerusalem; יְרוּשָׁלֵם (alternate form) (643x)", 2],

    ["יִרְמְיָה", "Jeremiah; also spelled יִרְמְיָהוּ (147)", 2],

    ["יִשְׂרָאֵל", "Israel (2,507)", 2],

    ["כְּנַעַן", "Canaan (93)", 2],

    ["מִצְרַיִם", "Egypt (682)", 2],

    ["מֹשֶׁה", "Moses (766)", 2],

    ["עֵשָׂו", "Esau (99)", 2],

    ["פַּרְעֹה", "Pharaoh (274)", 2],

    ["צִיּוֹן", "Zion (154)", 2],

    ["שָׁאוּל", "Saul (406)", 2],

    ["שְׁלֹמֹה", "Solomon (293)", 2],

    ["שְׁמוּאֵל", "Samuel (140)", 2],
    ["אָב", "father, ancestor; (ms cstr) אָב; (mp) אָבוֹת (1,210)", 3], ["אָדוֹן", "lord, master; of God (439); Lord (774)", 3], ["אָדָם", "man, mankind, humankind (546)", 3], ["אֶרֶץ", "ground, land, earth (222)", 3], ["אָח", "(ms cstr) brother (629)", 3], ["אָחוֹת", "sister, relative, loved one (119)", 3], ["אִישׁ", "man, husband; (mp) אֲנָשִׁים (2,188)", 3], ["אֱלֹהִים", "God (237)", 3], ["אֱלֹהִים", "God, gods (2,602)", 3], ["אֵם", "(fs) mother; (with 3ms suff) אִמּוֹ (220)", 3], ["אֲדָמָה", "land, earth, ground (2,505)", 3], ["אִשָּׁה", "woman, wife; (fp) נָשִׁים (781)", 3], ["בַּיִת", "house, household; (mp) בָּתִּים (1,497)", 3], ["בֵּן", "son; (mp) בָּנִים (4,941)", 3], ["בַּת", "daughter; (fp) בָּנוֹת (587)", 3], ["דָּבָר", "word, matter, thing (1,454)", 3], ["יוֹם", "day; (mp) יָמִים (2,301)", 3], ["לַיְלָה", "night; (mp) לֵילוֹת (234)", 3], ["נַעַר", "boy, youth, servant (420)", 3], ["נַעֲרָה", "young girl, newly married woman, maidservant (76)", 3], ["גּוֹי", "nation, people; (mp) גּוֹיִם (567)", 4], ["דֶּרֶךְ", "(cs) way, road, journey (712)", 4], ["הַר", "mountain, hill, hill country; (mp) הָרִים (558)", 4], ["כֹּהֵן", "priest (750)", 4], ["לֵב", "heart, mind, will; (mp) לְבָבוֹת; also spelled לֵבָב (854)", 4], ["מַיִם", "water; (md cstr) מֵי (585)", 4], ["מֶלֶךְ", "king, ruler (2,530)", 4], ["נָבִיא", "prophet (317)", 4], ["נֶפֶשׁ", "(fs) soul, life, person, neck, throat (757)", 4], ["סוּס", "horse (138)", 4], ["סֵפֶר", "book, scroll, document (191); סֵפֶר הַתּוֹרָה = the book of the law", 4], ["עֶבֶד", "slave, servant (803)", 4], ["עַיִן", "(cs) eye, spring (900)", 4], ["עִיר", "(fs) city, town; (fp) עָרִים (1,088)", 4], ["צָבָא", "(cs) host, army, war, service; (cp) צְבָאוֹת (487); יְהוָה צְבָאוֹת = Lord of Hosts", 4], ["קוֹל", "voice, sound, noise; also spelled קֹל (505)", 4], ["רֹאשׁ", "head, top, chief; (mp) רָאשִׁים (600)", 4], ["שֵׁם", "name, reputation (864)", 4], ["שָׁנָה", "year; (fp) שָׁנִים (878)", 4], ["תּוֹרָה", "law, instruction, teaching (223)", 4], ["אֵשׁ", "(cs) fire (376)", 5], ["הֵיכָל", "temple, palace (80)", 5], ["זָהָב", "gold (392)", 5], ["חֶרֶב", "(fs) sword (413)", 5], ["יֶלֶד", "child, boy, youth (89)", 5], ["יָם", "sea; (mp) יַמִּים (396)", 5], ["כֶּסֶף", "silver, money (403)", 5], ["מִזְבֵּחַ", "altar; (mp) מִזְבְּחוֹת (403)", 5], ["מָקוֹם", "place, location; (mp) מְקוֹמוֹת (401)", 5], ["מִשְׁפָּט", "judgment, decision, ordinance, law, custom (425)", 5], ["נְאֻם", "utterance, announcement, revelation (376); נְאֻם־יְהוָה = says (declares) Yahweh", 5], ["עוֹלָם", "forever, everlasting, ancient; also spelled עֹלָם (439)", 5], ["עָנָן", "(coll) cloud (87)", 5], ["רוּחַ", "(cs) spirit, wind, breath; (cp) רוּחוֹת (378)", 5], ["שַׂר", "ruler, prince (421)", 5], ["שָׁמַיִם", "heaven, sky (421)", 5], ["שַׁעַר", "gate (373)", 5], ["הַ", "(define article) the (24,058)", 5], ["וְ", "(conj) and, but, also, even, then (50,524)", 5], ["אַחֲרֵי", "after, behind; also spelled אַחַר (718)", 6], ["אֶל", "to, toward, into; (with 3ms suff) אֵלָיו (5,518)", 6], ["אֵת", "with, beside; also spelled אֶת; (with 3ms suff) אִתּוֹ (890)", 6], ["בְּ", "in, at, with, by, against (15,559)", 6], ["בֵּין", "between (409)", 6], ["בְּתוֹךְ", "in the midst (middle) of, inside (319)", 6], ["כְּ", "as, like, according to; (with 2ms suff) כָּמוֹךָ (3,053)", 6], ["לְ", "to, toward, for (20,321)", 6], ["מִן", "from, out of (272)", 6], ["עַל", "above, upward, on top of (140)", 6], ["עֵבֶר", "beyond, other side, edge, bank (92)", 6], ["עַד", "until, as far as (1,263)", 6], ["עִם", "with, together with (5,777)", 6], ["פָּנִים", "face, front; (cp) פְּנֵי (2,126)", 6], ["תַּחַת", "under, below, instead of (510)", 6], ["לִפְנֵי", "before, in front of; compound of לְ and פָּנִים", 6], ["מִפְּנֵי", "away from, out from, because of; compound of מִן and פָּנִים", 6], ["מִלִּפְנֵי", "away from before, from before, on account of; compound of מִן, לְ, and פָּנִים", 6], ["עַל־פְּנֵי", "in the face of, in sight of, in front of, before, up against, opposite to; compound of עַל and פָּנִים", 6], ["אֵת", "(define direct object marker); not translated (10,978)", 6], ["כֹּל", "all, each, every (5,415)", 6],
    ["קֹדֶשׁ", "holiness, something that is holy (470)", 7],

    ["רָעָה", "evil, wickedness, calamity, disaster (354)", 7],

    ["גָּדוֹל", "great, big, large (527)", 7],

    ["זָקֵן", "old; (n) elder, old man (180)", 7],

    ["זָר", "foreign, strange (70)", 7],

    ["חַי", "living, alive; (mp) חַיִּים (254)", 7],

    ["חָכָם", "wise, skillful, experienced (138)", 7],

    ["טוֹב", "good, pleasant (530)", 7],

    ["יָשָׁר", "upright, just (119)", 7],

    ["מְעַט", "little, few (101)", 7],

    ["צַדִּיק", "righteous, just, innocent (206)", 7],

    ["קָדוֹשׁ", "holy, set apart (117)", 7],

    ["קָטֹן", "small, young, insignificant; (fs) קְטַנָּה (74)", 7],

    ["קָרוֹב", "near, close (75)", 7],

    ["רַב", "great, many; (mp) רַבִּים (419)", 7],

    ["רָחוֹק", "distant, remote, far away (84)", 7],

    ["רַע", "bad, evil, wicked, worthless; also spelled רָע (312)", 7],

    ["רָשָׁע", "wicked, guilty (264)", 7],

    ["מְאֹד", "very, exceedingly (300)", 7],
    ["אֲנַחְנוּ", "we (121)", 8],

    ["אֲנִי", "I (874)", 8],

    ["אָנֹכִי", "I (359)", 8],

    ["אַתָּה", "you 2ms (749)", 8],

    ["אַתֶּם", "you 2mp (283)", 8],

    ["הוּא", "he, it (1,398)", 8],

    ["הִיא", "she, it; also spelled הִוא in the Pentateuch (491)", 8],

    ["הֵם", "they; also spelled הֵמָּה (565)", 8],

    ["אֵלֶּה", "these (744)", 8],

    ["הוּא", "that (1,398)", 8],

    ["הִיא", "that (491)", 8],

    ["הֵמָּה", "those; also spelled הֵם (565)", 8],

    ["זֹאת", "this (605)", 8],

    ["זֶה", "this (1,178)", 8],

    ["מָה", "(interrog particle) prefixed to the first word of a question (664)", 8],

    ["לָמָּה", "why? also spelled מַדּוּעַ (178)", 8],

    ["מַה", "what? also spelled מָה and מַה (571)", 8],

    ["מַדּוּעַ", "why? (72)", 8],

    ["מִי", "who? (424)", 8],

    ["אַחֵר", "(adj) other, another; (fs) אַחֶרֶת (166)", 8],

    ["אֲשֶׁר", "(rel pron) who, that, which (5,503)", 8],

    ["כִּי", "that, because; (adversative) but, except; (emphatic) indeed, truly (4,887)", 8],

    ["אֵת", "(prefixed rel pron) who, which, that (143)", 8]
];


function loadVocab() {
    if (localStorage.getItem("vocab")) {
        return JSON.parse(localStorage.getItem("vocab"));
    }
    else {
        localStorage.setItem("vocab", JSON.stringify(vocabMaster));

        //Loads a copy of vocabMaster to vocab
        const temp = [];
        for (el of vocabMaster) {
            temp.push(el);
        }
        return temp;
    }
}

const vocab = loadVocab();
const HIndex = 0;
const EIndex = 1;
const CIndex = 2;

const card = document.getElementById("card");
let studySide = 0;
let side = 0;

//Sets range to the starting chapter and ending chapter of available vocab
let minRange = vocabMaster[0][CIndex];
let maxRange = vocabMaster[vocabMaster.length - 1][CIndex];
let startRange = minRange
let endRange = maxRange

function loadRange() {
    if (localStorage.getItem("startRange")) {
        startRange = Number(localStorage.getItem("startRange"));
        endRange = Number(localStorage.getItem("endRange"));
    }
    else {
        localStorage.setItem("startRange", startRange);
        localStorage.setItem("endRange", endRange);
    }
    //Reflect range in input values
    document.getElementById("start-range").value = startRange;
    document.getElementById("end-range").value = endRange;
}

loadRange();

let rand = 0;

const correctBtn = document.getElementById("correct");
const showBtn = document.getElementById("show");
const wrongBtn = document.getElementById("wrong");

correctBtn.addEventListener("click", correct);
showBtn.addEventListener("click", show);
wrongBtn.addEventListener("click", wrong);


const submitChaptersBtn = document.getElementById("submit-chapters-button");
submitChaptersBtn.addEventListener("click", submitChapters);

info = document.getElementById("info");

//Start by loading a card to use
initalizeRandomCard();

//Then render info of remaining and chapter.
renderInfo();

function correct() {
    if (vocab.length > 1) {
        //Removes the correct word from remaining list
        vocab.splice(rand, 1);
    }
    else {
        initalizeVocab(startRange, endRange);
    }
    //Gets the next random card
    rand = Math.floor(Math.random() * vocab.length);
    side = studySide;
    card.innerHTML = vocab[rand][side];

    renderInfo();

    //Save to local storage
    localStorage.setItem("vocab", JSON.stringify(vocab));
}

function show() {
    if (side == 0) { side = 1; }
    else { side = 0; }
    card.innerHTML = vocab[rand][side];
}

function wrong() {
    //Gets the next random card
    rand = Math.floor(Math.random() * vocab.length);
    side = studySide;
    card.innerHTML = vocab[rand][side];

    renderInfo();
}

function submitChapters() {

    //Submits the range!
    startRange = document.getElementById("start-range").valueAsNumber;
    endRange = document.getElementById("end-range").valueAsNumber;

    //If range is within available chapters, run new vocab list
    if (startRange >= minRange && endRange <= maxRange && startRange < endRange) {

        initalizeVocab(startRange, endRange);
        initalizeRandomCard();
        renderInfo();

        //Save start and end range
        localStorage.setItem("startRange", startRange);
        localStorage.setItem("endRange", endRange);
    }
    else {
        document.getElementById("start-range").value = minRange;
        document.getElementById("end-range").value = maxRange;
    }
}

function initalizeVocab(start, end) {
    //Clear the array
    vocab.splice(0,);

    for (let i = 0; i < vocabMaster.length; i++) {
        if (Number(vocabMaster[i][CIndex]) >= start && Number(vocabMaster[i][CIndex]) <= end) {
            //push the vocab in range to vocab
            vocab.push(vocabMaster[i]);
        }
    }

    if (vocab.length === 0) {
        for (el of vocabMaster) {
            vocab.push(el);
        }
    }

    //Save to local storage
    localStorage.setItem("vocab", JSON.stringify(vocab));
}

function initalizeRandomCard() {
    rand = Math.floor(Math.random() * vocab.length);
    card.innerText = vocab[rand][side];
}

function renderInfo() {
    info.innerText = `Remaining: ${vocab.length}
    Chapters ${startRange}-${endRange}`;
}

/* for (let i = 0; i < 4; i++) {
    for (el of vocab[i]) {

        el.push(i + 3);

    }
}
console.log(JSON.stringify(vocab)); */
