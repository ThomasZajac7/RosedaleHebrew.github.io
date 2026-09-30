//Vocab
const vocabMaster = [
    ["אָב", "father, ancestor; (ms cstr) אָב; (mp) אָבוֹת (1,210)", 3], ["אָדוֹן", "lord, master; of God (439); Lord (774)", 3], ["אָדָם", "man, mankind, humankind (546)", 3], ["אֶרֶץ", "ground, land, earth (222)", 3], ["אָח", "(ms cstr) brother (629)", 3], ["אָחוֹת", "sister, relative, loved one (119)", 3], ["אִישׁ", "man, husband; (mp) אֲנָשִׁים (2,188)", 3], ["אֱלֹהִים", "God (237)", 3], ["אֱלֹהִים", "God, gods (2,602)", 3], ["אֵם", "(fs) mother; (with 3ms suff) אִמּוֹ (220)", 3], ["אֲדָמָה", "land, earth, ground (2,505)", 3], ["אִשָּׁה", "woman, wife; (fp) נָשִׁים (781)", 3], ["בַּיִת", "house, household; (mp) בָּתִּים (1,497)", 3], ["בֵּן", "son; (mp) בָּנִים (4,941)", 3], ["בַּת", "daughter; (fp) בָּנוֹת (587)", 3], ["דָּבָר", "word, matter, thing (1,454)", 3], ["יוֹם", "day; (mp) יָמִים (2,301)", 3], ["לַיְלָה", "night; (mp) לֵילוֹת (234)", 3], ["נַעַר", "boy, youth, servant (420)", 3], ["נַעֲרָה", "young girl, newly married woman, maidservant (76)", 3], ["גּוֹי", "nation, people; (mp) גּוֹיִם (567)", 4], ["דֶּרֶךְ", "(cs) way, road, journey (712)", 4], ["הַר", "mountain, hill, hill country; (mp) הָרִים (558)", 4], ["כֹּהֵן", "priest (750)", 4], ["לֵב", "heart, mind, will; (mp) לְבָבוֹת; also spelled לֵבָב (854)", 4], ["מַיִם", "water; (md cstr) מֵי (585)", 4], ["מֶלֶךְ", "king, ruler (2,530)", 4], ["נָבִיא", "prophet (317)", 4], ["נֶפֶשׁ", "(fs) soul, life, person, neck, throat (757)", 4], ["סוּס", "horse (138)", 4], ["סֵפֶר", "book, scroll, document (191); סֵפֶר הַתּוֹרָה = the book of the law", 4], ["עֶבֶד", "slave, servant (803)", 4], ["עַיִן", "(cs) eye, spring (900)", 4], ["עִיר", "(fs) city, town; (fp) עָרִים (1,088)", 4], ["צָבָא", "(cs) host, army, war, service; (cp) צְבָאוֹת (487); יְהוָה צְבָאוֹת = Lord of Hosts", 4], ["קוֹל", "voice, sound, noise; also spelled קֹל (505)", 4], ["רֹאשׁ", "head, top, chief; (mp) רָאשִׁים (600)", 4], ["שֵׁם", "name, reputation (864)", 4], ["שָׁנָה", "year; (fp) שָׁנִים (878)", 4], ["תּוֹרָה", "law, instruction, teaching (223)", 4], ["אֵשׁ", "(cs) fire (376)", 5], ["הֵיכָל", "temple, place (80)", 5], ["זָהָב", "gold (392)", 5], ["חֶרֶב", "(fs) sword (413)", 5], ["יֶלֶד", "child, boy, youth (89)", 5], ["יָם", "sea; (mp) יַמִּים (396)", 5], ["כֶּסֶף", "silver, money (403)", 5], ["מִזְבֵּחַ", "altar; (mp) מִזְבְּחוֹת (403)", 5], ["מָקוֹם", "place, location; (mp) מְקוֹמוֹת (401)", 5], ["מִשְׁפָּט", "judgment, decision, ordinance, law, custom (425)", 5], ["נְאֻם", "utterance, announcement, revelation (376); נְאֻם־יְהוָה = says (declares) Yahweh", 5], ["עוֹלָם", "forever, everlasting, ancient; also spelled עֹלָם (439)", 5], ["עָנָן", "(coll) cloud (87)", 5], ["רוּחַ", "(cs) spirit, wind, breath; (cp) רוּחוֹת (378)", 5], ["שַׂר", "ruler, prince (421)", 5], ["שָׁמַיִם", "heaven, sky (421)", 5], ["שַׁעַר", "gate (373)", 5], ["הַ", "(define article) the (24,058)", 5], ["וְ", "(conj) and, but, also, even, then (50,524)", 5], ["אַחֲרֵי", "after, behind; also spelled אַחַר (718)", 6], ["אֶל", "to, toward, into; (with 3ms suff) אֵלָיו (5,518)", 6], ["אֵת", "with, beside; also spelled אֶת; (with 3ms suff) אִתּוֹ (890)", 6], ["בְּ", "in, at, with, by, against (15,559)", 6], ["בֵּין", "between (409)", 6], ["בְּתוֹךְ", "in the midst (middle) of, inside (319)", 6], ["כְּ", "as, like, according to; (with 2ms suff) כָּמוֹךָ (3,053)", 6], ["לְ", "to, toward, for (20,321)", 6], ["מִן", "from, out of (272)", 6], ["עַל", "above, upward, on top of (140)", 6], ["עֵבֶר", "beyond, other side, edge, bank (92)", 6], ["עַד", "until, as far as (1,263)", 6], ["עִם", "with, together with (5,777)", 6], ["פָּנִים", "face, front; (cp) פְּנֵי (2,126)", 6], ["תַּחַת", "under, below, instead of (510)", 6], ["לִפְנֵי", "before, in front of; compound of לְ and פָּנִים", 6], ["מִפְּנֵי", "away from, out from, because of; compound of מִן and פָּנִים", 6], ["מִלִּפְנֵי", "away from before, from before, on account of; compound of מִן, לְ, and פָּנִים", 6], ["עַל־פְּנֵי", "in the face of, in sight of, in front of, before, up against, opposite to; compound of עַל and פָּנִים", 6], ["אֵת", "(define direct object marker); not translated (10,978)", 6], ["כֹּל", "all, each, every (5,415)", 6]
];


const card = document.getElementById("card");
let studySide = 0;
let side = 0;

let vocab = vocabMaster;
const HIndex = 0;
const EIndex = 1;
const CIndex = 2;

const correctBtn = document.getElementById("correct");
const showBtn = document.getElementById("show");
const wrongBtn = document.getElementById("wrong");

correctBtn.addEventListener("click", correct);
showBtn.addEventListener("click", show);
wrongBtn.addEventListener("click", wrong);


const submitChaptersBtn = document.getElementById("submit-chapters-button");
submitChaptersBtn.addEventListener("click", submitChapters);


rand = Math.floor(Math.random() * vocab.length);
card.innerText = vocab[rand][side]

function correct() {
    rand = Math.floor(Math.random() * vocab.length);
    side = studySide;
    card.innerHTML = vocab[rand][side];
}

function show() {
    if (side == 0) { side = 1; }
    else { side = 0; }
    card.innerHTML = vocab[rand][side];
}

function submitChapters() {

    //Submits the range!
    rangeStart = document.getElementById("startRange").valueAsNumber;
    rangeEnd = document.getElementById("endRange").valueAsNumber;

    initalizeVocab(rangeStart, rangeEnd);
}

function initalizeVocab(start, end) {
    vocab = vocabMaster;
    for (let i = 0; i < vocab.length; i++) {
        if (vocab[i][CIndex] < start || vocab[i][CIndex] > end) {
            console.log(vocab[i]);
            vocab.splice(i, 1);
        }
    }
}
/* for (let i = 0; i < 4; i++) {
    for (el of vocab[i]) {

        el.push(i + 3);

    }
}
console.log(JSON.stringify(vocab)); */