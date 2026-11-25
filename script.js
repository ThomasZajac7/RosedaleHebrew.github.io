//Vocab
const vocabMaster = [

    //Chapter 2, should be correct but also guessable if off by a pathech
    ["אַבְרָהָם", "Abraham (175)", 2],

    ["אַהֲרֹן", "Aaron (347)", 2],

    ["דָּוִד", "David (1,075)", 2],

    ["יְהוּדָה", "Judah (820)", 2],

    ["יהוה", "Yahweh, the LORD (6,828)", 2],

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

    // Chapter 3 -- Verified!
    ["אָב", "אָבוֹת (mp); אֲבִי (ms cstr); father, ancestor (1,210)", 3],
    ["אָדוֹן", "lord, master; אֲדֹנָי Lord (of God 439x) (774)", 3],
    ["אָדָם", "man, mankind, humankind (546)", 3],
    ["אֲדָמָה", "ground, land, earth (222)", 3],
    ["אָח", "אַחִים (mp); אֲחִי (ms cstr); brother (629)", 3],
    ["אָחוֹת", "sister, relative, loved one (119)", 3],
    ["אִישׁ", "אֲנָשִׁים (mp); man, husband (2,188)", 3],
    ["אֵל", "God, god (237)", 3],
    ["אֱלֹהִים", "God, gods (2,602)", 3],
    ["אֵם", "אִמּוֹ (with 3ms suff); (fs) mother (220)", 3],
    ["אֶרֶץ", "(fs) land, earth, ground (2,505)", 3],
    ["אִשָּׁה", "אֵשֶׁת (fs cstr); נָשִׁים (fp); woman, wife (781)", 3],
    ["בַּיִת", "בֵּית (1497x ms cstr); בָּתִּים (mp); (ms) house, household, (metaphorically) dynasty (2,047)", 3],
    ["בֵּן", "בְּנֵי (mp cstr); בָּנִים (mp); בֶּן־ (ms cstr); son (4,941)", 3],
    ["בַּת", "בָּנוֹת (fp); daughter (587)", 3],
    ["דָּבָר", "word, matter, thing (1,454)", 3],
    ["יוֹם", "יָמִים (mp); day (2,301)", 3],
    ["לַיְלָה", "לֵילוֹת (mp); (ms) night (234)", 3],
    ["נַעַר", "boy, youth, servant (240)", 3],
    ["נַעֲרָה", "young girl, newly married woman, maidservant (76)", 3],

    // Chapter 4 -- Verified
    ["גּוֹי", "גוֹיִם (mp); nation, people (567)", 4],
    ["דֶּרֶךְ", "(cs) way, road, journey (712)", 4],
    ["הַר", "הָרִים (mp); mountain, hill, hill country (558)", 4],
    ["כֹּהֵן", "priest (750)", 4],
    ["לֵב", "לִבּוֹת (mp); also spelled לֵבָב; heart, mind, will (854)", 4],
    ["מַיִם", "מֵי (md cstr); water (585)", 4],
    ["מֶלֶךְ", "king, ruler (2,530)", 4],
    ["נָבִיא", "prophet (317)", 4],
    ["נֶפֶשׁ", "(fs) soul, life, person, neck, throat (757)", 4],
    ["סוּס", "horse (138)", 4],
    ["סֵפֶר", "book, scroll, document; סֵפֶר הַתּוֹרָה \"the book of the law\" (191)", 4],
    ["עֶבֶד", "slave, servant (803)", 4],
    ["עַיִן", "(cs) eye, spring (900)", 4],
    ["עִיר", "עָרִים (fp); (fs) city, town (1,088)", 4],
    ["צָבָא", "צְבָאוֹת (cp); (cs) host, army, war, service; יְהוָה צְבָאוֹת \"Lord of Hosts\" (487)", 4],
    ["קוֹל", "voice, sound, noise; also spelled קֹל (505)", 4],
    ["רֹאשׁ", "רָאשִׁים (mp); head, top, chief (600)", 4],
    ["שֵׁם", "name, reputation (864)", 4],
    ["שָׁנָה", "שָׁנִים (fp); year (878)", 4],
    ["תּוֹרָה", "law, instruction, teaching (223)", 4],

    // Chapter 5 -- Verified!
    ["אֵשׁ", "(cs) fire (376)", 5],
    ["הֵיכָל", "temple, palace (80)", 5],
    ["זָהָב", "gold (392)", 5],
    ["חֶרֶב", "(fs) sword (413)", 5],
    ["יֶלֶד", "child, boy, youth (89)", 5],
    ["יָם", "יַמִּים (mp); sea (396)", 5],
    ["כֶּסֶף", "silver, money (403)", 5],
    ["מִזְבֵּחַ", "מִזְבְּחוֹת (mp); altar (403)", 5],
    ["מָקוֹם", "מְקֹמוֹת (mp); place, location (401)", 5],
    ["מִשְׁפָּט", "judgment, decision, ordinance, law, custom (425)", 5],
    ["נְאֻם", "utterance, announcement, revelation; נְאֻם־יְהוָה \"says (declares) Yahweh\" (376)", 5],
    ["עוֹלָם", "forever, everlasting, ancient; also spelled עֹלָם (439)", 5],
    ["עָנָן", "(coll) clouds (87)", 5],
    ["רוּחַ", "רוּחוֹת (cp); (cs) spirit, wind, breath (378)", 5],
    ["שַׂר", "ruler, prince (421)", 5],
    ["שָׁמַיִם", "heaven, sky (421)", 5],
    ["שַׁעַר", "gate (373)", 5],
    ["הַ", "(definite article) the (24,058)", 5],
    ["וְ", "(conj) and, but, also, even, then (50,524)", 5],

    //Chapter 6 -- This should be right

    ["אַחֲרֵי", "after, behind; also spelled אַחַר (718)", 6],

    ["אֶל־", "to, toward, into; (with 3ms suff) אֵלָיו (5,518)", 6],

    ["אֵת", "with, beside; also spelled אֶת־ with loss of accent or (with 3ms suff) אִתּוֹ (890)", 6],

    ["בְּ", "in, at, with, by, against (15,559)", 6],

    ["בֵּין", "between (409)", 6],

    ["בְּתוֹךְ", "in the midst (middle) of, inside (319); combination of (prep) בְּ and (n) תָּוֶךְ (middle, center); also תּוֹךְ (68x) and אֶל־תּוֹךְ (22x)", 6],

    ["כְּ", "as, like, according to; (with 2ms suff) כָּמוֹךָ (3,053)", 6],

    ["לְ", "to, toward, for (20,321)", 6],

    ["לְמַעַן", "on account of, for the sake of (272)", 6],

    ["מִן", "from, out of; also spelled מִן. (Nun assimilates as Dagesh Forte) when prefixed to another word (7,592)", 6],

    ["מֵעַל", "above, upward, on top of (140)", 6],

    ["עֵבֶר", "beyond, other side, edge, bank (92)", 6],

    ["עַד", "until, as far as (1,263)", 6],

    ["עַל", "on, upon, on account of, according to (5,777)", 6],

    ["עִם", "with, together with; (with 3ms suff) עִמּוֹ (1,048)", 6],

    ["פָּנִים", "(cp) face, front; לִפְנֵי (prep ל prefixed to cstr) before, in front of (2,126)", 6],

    ["תַּחַת", "under, below, instead of (510)", 6],

    ["אֵת", "(definite direct object marker) not translated; also spelled אֶת with loss of accent or (with 3ms suff) אֹתוֹ (10,978)", 6],

    ["כֹּל", "all, each, every; (cstr) כָּל־ (5,415)", 6],


    ["לִפְנֵי", "before, in the presence of (ל + פָּנִים)", 6],

    ["מִפְּנֵי", "away from, out from, from the presence of, from before, on account of, because of (מִן + פָּנִים)", 6],

    ["מִלִּפְנֵי", "away from, from before, from the presence of, on account of (מִן + ל + פָּנִים)", 6],

    ["עַל־פְּנֵי", "in the face of, in the sight of, in front of, before, up against, opposite to (עַל + פָּנִים)", 6],

    ["מֵעַל", "from upon (מִן + עַל)", 6],

    ["מִתַּחַת", "from under (מִן + תַּחַת)", 6],

    ["מֵאֵת", "from with (מִן + אֵת)", 6],

    ["עַל־דְּבַר", "on account of (עַל + דָּבָר)", 6],

    ["בְּתוֹךְ", "in the midst of (ב + תּוֹךְ)", 6],

    ["מִתּוֹךְ", "from the midst of (מִן + תּוֹךְ)", 6],

    ["בְּקֶרֶב", "in the midst (middle) of (ב + קֶרֶב)", 6],

    ["מִקֶּרֶב", "from the midst (middle) of (מִן + קֶרֶב)", 6],

    //Chapter 7 -- Verified!

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

    // Chapter 8 -- Verified!

    ["אֲנַחְנוּ", "we (121)", 8],

    ["אֲנִי", "I (874)", 8],

    ["אָנֹכִי", "I (359)", 8],

    ["אַתָּה", "you 2ms (749)", 8],

    ["אַתֶּם", "you 2mp (283)", 8],

    ["הוּא", "he, it / that (1,398)", 8],

    ["הִיא", "she, it / that; also spelled הִוא in the Pentateuch (491)", 8],

    ["הֵם", "they / those; also spelled הֵמָּה (565)", 8],

    ["אֵלֶּה", "these (744)", 8],

    ["זֹאת", "this (fs) (605)", 8],

    ["זֶה", "this (ms) (1,178)", 8],

    ["הֲ", "(interrog particle) prefixed to the first word of a question (664)", 8],

    ["לָמָּה", "why? also spelled מַדּוּעַ (178)", 8],

    ["מַה", "what? also spelled מָה and מַה (571)", 8],

    ["מַדּוּעַ", "why? (72)", 8],

    ["מִי", "who? (424)", 8],

    ["אַחֵר", "(adj) other, another; (fs) אַחֶרֶת (166)", 8],

    ["אֲשֶׁר", "(rel pron) who, that, which (5,503)", 8],

    ["כִּי", "that, because; (adversative) but, except; (emphatic) indeed, truly (4,887)", 8],

    ["שֶׁ", "(prefixed rel pron) who, which, that (143)", 8],

    // Chapter 9 -- Verified!

    ["אַף", "אַפַּיִם nostril, nose; (metaphorically) anger; (md) (277)", 9],

    ["בָּקָר", "cattle, herd (183)", 9],

    ["בֹּקֶר", "morning (213)", 9],

    ["בְּרָכָה", "blessing, gift (71)", 9],

    ["חַטָּאת", "חַטַּאת (fs cstr); חַטָּאוֹת and חַטֹּאת (fp cstr); sin, sin offering (298)", 9],

    ["כָּבוֹד", "glory, splendor, honor, abundance; כְּבוֹד יְהוָה \"the glory of the Lord\" (200)", 9],

    ["כְּלִי", "כֵּלִים (mp); כְּלֵי (mp cstr); vessel, implement, weapon (325)", 9],

    ["לֶחֶם", "bread, food (340)", 9],

    ["מִלְחָמָה", "war, battle, struggle (319)", 9],

    ["מִשְׁפָּחָה", "family, clan (304)", 9],

    ["עַם", "עַמִּים (mp); people (1,869)", 9],

    ["עֵץ", "tree, wood (330)", 9],

    ["אוֹ", "(conj) or (321)", 9],

    ["אַיִן", "(particle of nonexistence) is not, are not, nothing; most often spelled אֵין (790)", 9],

    ["גַּם", "also, even (769)", 9],

    ["הֵן", "behold, if (107)", 9],

    ["הִנֵּה", "הִנְנִי (with 1cs suff); behold, look (1,061)", 9],

    ["יֵשׁ", "(particle of existence) there is, there are (138)", 9],

    ["לְבַד", "לְבַדּוֹ (with 3ms suff); alone, by oneself (161)", 9],

    ["סָבִיב", "around, about; (substantive) surroundings (338)", 9],



    // Chapter 10 -- Verified!

    ["אֶבֶן", "אֲבָנִים (fp); (fs) stone (276)", 10],

    ["אֹיֵב", "enemy (285)", 10],

    ["בְּרִית", "covenant (287)", 10],

    ["בָּשָׂר", "flesh, meat, skin (270)", 10],

    ["גְּבוּל", "border, boundary, territory (251)", 10],

    ["חֹדֶשׁ", "month, new moon (283)", 10],

    ["חַיִל", "strength, wealth, army (246)", 10],

    ["חֶסֶד", "loyalty, faithfulness, steadfast love, lovingkindness (249)", 10],

    ["יָד", "(fs) hand; (metaphorically) power (1,627)", 10],

    ["מִדְבָּר", "wilderness, desert, pasture (269)", 10],

    ["מָוֶת", "מוֹת (ms cstr); death, dying (153)", 10],

    ["מַטֶּה", "מַטּוֹת (mp); (ms) staff, rod, tribe (252)", 10],

    ["עֹלָה", "whole burnt offering (sacrifice that is completely burned) (286)", 10],

    ["עֵת", "עִתִּים and עִתוֹת (cp); (cs) time, point of time (296)", 10],

    ["צֹאן", "(cs) flock(s), flock of sheep and goats (274)", 10],

    ["רֶגֶל", "(fs) foot (251)", 10],

    ["שָׂדֶה", "(ms) field, pastureland (329)", 10],



    // Chapter 11 -- Verified!

    ["אַמָּה", "cubit (distance between elbow and tip of middle finger), forearm (249)", 11],

    ["אֹרֶךְ", "length (95)", 11],

    ["חֲצִי", "half, middle (125)", 11],

    ["רֹחַב", "width, breadth, expanse (101)", 11],

    ["אֶחָד", "אַחַת (fs); one (976)", 11],

    ["שְׁנַיִם", "שְׁתַּיִם (fd); (md) two (769)", 11],

    ["שָׁלֹשׁ", "שְׁלֹשָׁה (fs); שְׁלֹשִׁים (mp) thirty; (ms) three (606)", 11],

    ["אַרְבַּע", "אַרְבָּעָה (fs); אַרְבָּעִים (mp) forty; four (455)", 11],

    ["חָמֵשׁ", "חֲמִשָּׁה (fs); חֲמִשִּׁים (mp) fifty; five (508)", 11],

    ["שֵׁשׁ", "שָׁשָּׁה (fs); שֵׁשֶׁת (fs cstr); שְׁשִׁים (mp) sixty; six (274)", 11],

    ["שֶׁבַע", "שִׁבְעָה (fs); שִׁבְעִים (mp) seventy; (ms) seven (490)", 11],

    ["שְׁמֹנֶה", "שְׁמֹנָה (fs); שְׁמֹנִים (mp) eighty; eight (147)", 11],

    ["תֵּשַׁע", "תִּשְׁעָה (fs); תִּשְׁעִים (mp) ninety; nine (78)", 11],

    ["עָשָׂר", "עֶשְׂרֵה (fs); ten; used in constructions to express numerals eleven to nineteen (337)", 11],

    ["מֵאָה", "מֵאוֹת (fp); מְאֹתַיִם (fd) two hundred; hundred (583)", 11],

    ["אֶלֶף", "אַלְפַּיִם (md) two thousand; thousand (496)", 11],

    ["רִאשׁוֹן", "רִאשֹׁנִים (mp); רִאשֹׁנָה (fs); first, former (182)", 11],

    ["שֵׁנִי", "שֵׁנִית (fs); second (156)", 11],

    ["שְׁלִישִׁי", "שְׁלִישִׁיָּה and שְׁלִשִׁית (fs); third (108)", 11],

    ["שְׁבִיעִי", "שְׁבִיעִית (fs); seventh (98)", 11],



    // Chapter 12 -- Verified!

    ["אָכַל", "(Q) to eat, consume; (Ni) be eaten, consumed; (Hi) feed (820)", 12],

    ["אָמַר", "(Q) to say; (Ni) be said, called; (Hi) declare, proclaim (5,316)", 12],

    ["הָיָה", "(Q) to be, become, happen, occur; (Ni) be done, brought about, come to pass, occur (3,576)", 12],

    ["הָלַךְ", "(Q) to go, walk, (metaphorically) behave; (Pi) go, walk; (Hith) walk about, move to and fro (1,554)", 12],

    ["יָצָא", "(Q) to go or come out; (Hi) cause to go or come out, lead out, bring out (1,076)", 12],

    ["יָשַׁב", "(Q) to sit (down), dwell, inhabit; (Hi) cause to sit or dwell, settle (a city) (1,088)", 12],

    ["נָגַשׁ", "(Q) to draw near, approach; (Ni) draw near; (Hi) bring (near), offer (a sacrifice) (125)", 12],

    ["נָתַן", "(Q) to give, put, place, set; (Ni) be given (2,014)", 12],

    ["עָשָׂה", "(Q) to do, make; (Ni) be done, made (2,632)", 12],

    ["רָאָה", "(Q) to see, perceive, understand; (Ni) appear; (Pu) be seen; (Hi) let or cause someone to see (something) (1,311)", 12],

    ["שָׁמַע", "(Q) to hear, listen to, understand, obey; (Ni) be heard; (Hi) proclaim (1,165)", 12],

    ["אַךְ", "only, surely, nevertheless (161)", 12],

    ["אַל", "(neg particle) no, not (729)", 12],

    ["אִם", "if; כִּי־אִם but, except, only (1,070)", 12],

    ["בַּל", "(poetic) no, never (73); 69x in Isa, Pss, Prov", 12],

    ["לֹא", "לוֹא also spelled; neg particle) no, not (5,189)", 12],

    ["עַתָּה", "now, after all, at last, then (435)", 12],

    ["תָּמִיד", "continually (104)", 12],

    // Chapter 13  -- Verified

    ["בָּרַךְ", "(Q) bless, praise; (Q Pass ptc) blessed, praised, adored; (Pi) bless, praise", 13],

    ["זָכַר", "(Q) to remember; (Ni) be remembered, thought of; (Hi) remind", 13],

    ["חָזַק", "(Q) to be(come) strong, have courage; (Pi) make strong, strengthen; (Hi) strengthen, seize, grasp, take hold of; (Hith) strengthen oneself, show oneself as strong or courageous", 13],

    ["יָדַע", "(Q) to know, to know someone (Adam knew Eve his wife, and she conceived and bore Cain (Genesis 4:1)); (Ni) be(come) known, reveal oneself; (Hi) make known, inform", 13],

    ["כָּבֵד", "(Q) to be heavy, weighty, honored; (Ni) be honored; (Pi) honor; (Hi) make heavy, dull or insensitive, harden (heart)", 13],

    ["כָּתַב", "(Q) to write (upon), register, record; (Ni) be written", 13],

    ["מָלֵא", "(Q) to be full, fill (up); (Ni) be filled (with); (Pi) fill, perform, carry out, consecrate as priest", 13],

    ["מָלַךְ", "(Q) to be(come) king or queen, reign, rule; (Hi) make someone king or queen, install someone as king or queen", 13],

    ["מָצָא", "(Q) to find (out), reach, obtain, achieve; (Ni) be found", 13],

    ["פָּקַד", "(Q) to attend (to), pay attention to, take care of, miss (someone), number, appoint; (Ni) be missed, visited, appointed; (Hi) appoint, entrust", 13],

    ["שָׁכַב", "(Q) to lie down, to lie down with", 13],

    ["שָׁלַח", "(Q) to send, stretch out; (Pi) send, stretch out, send away, expel; (Pu) be sent away (off)", 13],

    ["שָׁמַר", "(Q) to watch (over), guard, keep, observe, preserve, protect, take care of; (Ni) to be kept, protected, on one's guard", 13],

    ["כֹּה", "thus, here", 13],

    ["כֵּן", "so, thus", 13],

    ["עוֹד", "again, still, as long as", 13],



    // Chapter 14 -- Verified!

    ["בּוֹא", "(Q) to go in, enter, come to, come upon; (Hi) bring (in), come (in); (Hoph) be brought (2,592)", 14],

    ["בָּנָה", "(Q) to build (up), rebuild, build (establish) a family; (Ni) be built, have a child (by or from) (377)", 14],

    ["יָלַד", "(Q) to bear (children), give birth, bring forth, beget; (Ni) be born; (Pi) help at birth, serve as midwife; (Pu) be born; (Hi) become the father of, beget (499)", 14],

    ["יָרֵא", "(Q) to fear, be afraid, in awe of, reverence; (Ni) be feared, held in honor (317)", 14],

    ["יָרַד", "(Q) to go down, descend; (Hi) bring down, lead down (382)", 14],

    ["לָקַח", "(Q) to take, grasp, capture, seize; (Ni) be captured, taken away (967)", 14],

    ["מוּת", "(Q) to die; (Hi) kill, put to death; (Hoph) be killed (845)", 14],

    ["נָפַל", "(Q) to fall, fall upon; (Hi) cause to fall, bring to ruin (435)", 14],

    ["נָשָׂא", "(Q) to lift, carry, raise, bear (load or burden), take (away); (Ni) be carried, lifted up, exalted; (Pi) lift up, exalt; (Hith) lift oneself up, exalt oneself (659)", 14],

    ["עָבַר", "(Q) to pass over, pass through, pass by, cross; (Hi) cause to pass over, bring over, cause or allow to pass (through), cause to pass through fire, sacrifice (553)", 14],

    ["עָלָה", "(Q) to go up, ascend; (Ni) be taken up; (Hi) bring or lead up or out, offer up (sacrifice) (894)", 14],

    ["עָמַד", "(Q) to stand (up), take one's stand, stand still; (Hi) station, set up, appoint, designate (524)", 14],

    ["קוּם", "(Q) to rise, arise, get up, stand (up); (Hi) set up, put up, cause to arise, establish (627)", 14],

    ["קָרָא", "(Q) to call, summon, proclaim, read aloud, give a name to; (Ni) be called, summoned, proclaimed (739)", 14],

    ["שִׂים", "(Q) to set (up), put, place, set in place, establish; also spelled שׂוּם (588)", 14],

    ["שׁוּב", "(Q) to turn back, turn, return; (Hi) cause to return, bring back, restore (1,075)", 14],

    ["פֹּה", "here, at this place; also spelled פֹּא (82)", 14],

    ["רַק", "only, still, but, however (109)", 14],



    // Chapter 15 -- Verified

    ["חָיָה", "(Q) to live, be alive, revive, restore to life; (Pi) preserve alive, let live, give life; (Hi) preserve, keep alive, revive, restore to life (283)", 15],

    ["יָכֹל", "(Q) to be able, capable of, endure, prevail (193)", 15],

    ["כָּרַת", "(Q) to cut, cut off, cut down; (idiom) to make a covenant (with); (Ni) be cut off (down); (Hi) cut off, destroy, exterminate (289)", 15],

    ["סוּר", "(Q) to turn (aside), turn off, leave (off), desist; (Hi) remove, take away, get rid of (298)", 15],

    ["עָבַד", "(Q) to work, serve, toil (289)", 15],

    ["עָנָה", "(Q) to answer, respond, reply, testify; (Ni) be answered (316)", 15],

    ["אֹזֶן", "אָזְנֵי (fd cstr); (fs) ear (188)", 15],

    ["אַיִל", "ram, ruler; (adj) mighty (171)", 15],

    ["זֶבַח", "sacrifice (162)", 15],

    ["חַיִּים", "life, lifetime (140)", 15],

    ["צְדָקָה", "righteousness, righteous act, justice (159)", 15],

    ["צָפוֹן", "(fs) north, northern (153)", 15],

    ["אָז", "then, since, before (141)", 15],

    ["אַף", "(conj) also, indeed, even (133)", 15],

    ["גִּבּוֹר", "(adj) mighty, valiant, heroic; (n) hero (160)", 15],

    ["פֶּן־", "lest, otherwise (133)", 15],



    // Chapter 16 -- Verified!

    ["גָּאַל", "(Q) to redeem, act as kinsman (perform the responsibilities of the next-of-kin), avenge (104)", 16],

    ["חַטָא", "(Q) to miss (a goal or mark), sin, commit a sin; (Pi) make a sin offering; (Hi) cause to sin (240)", 16],

    ["יָסַף", "(Q) to add, continue (to do something again); (Hi) add, increase, do again and again (213)", 16],

    ["יָרַשׁ", "(Q) to inherit, take possession of, dispossess, impoverish; (Hi) cause to possess or inherit, dispossess (232)", 16],

    ["כָּפַר", "(Pi) to cover (over), atone (for), make atonement (102)", 16],

    ["נָטָה", "(Q) to spread out, stretch out, extend, pitch (a tent), turn, bend; (Hi) turn, incline, stretch out, spread out (216)", 16],

    ["עָזַב", "(Q) to leave, leave behind, forsake, abandon, set free (214)", 16],

    ["קָרַב", "(Q) to approach, draw near, come near; (Hi) bring (near), present, offer a sacrifice or offering (280)", 16],

    ["רָבָה", "(Q) to be(come) numerous, great, increase; (Hi) make many, make great, multiply, increase (229)", 16],

    ["שָׁתָה", "(Q) to drink (217)", 16],

    ["כַּף", "(fs) hand, palm, sole of the foot (195)", 16],

    ["פֶּה", "(ms) mouth, opening; (ms cstr) פִּי (498)", 16],

    ["רֵעַ", "friend, companion, neighbor (188)", 16],

    ["נֶגֶד", "(prep) opposite, in front of (151)", 16],

    ["שָׁם", "there, then, at that time (835)", 16],

    // Chapter 17 -- Verified
    ["אָבַד", "(Q) to perish, vanish, be(come) lost, go astray; (Pi) cause to perish, destroy; (Hi) exterminate (185)", 17],
    ["אָהַב", "(Q) to love (of human and divine love); (Pi ptc) lover (217)", 17],
    ["אָסַף", "(Q) to gather (in), take in, take away, destroy; (Ni) be gathered, taken away, assemble (200)", 17],
    ["גָּלָה", "(Q) to uncover, reveal, disclose; (Ni) uncover, reveal oneself, be revealed, exposed; (Pi) uncover, reveal, disclose; (Hi) take (carry away) into exile (187)", 17],
    ["טָהֵר", "(Q) to be clean (ceremonially), pure (morally); (Pi) cleanse, purify, pronounce clean; (Hith) purify or cleanse oneself (94)", 17],

    ["כָּלָה", "(Q) to be complete, finished, at an end, accomplished, spent, exhausted, come to an end; (Pi) complete, finish, bring to an end (207)", 17],
    ["רוּם", "(Q) to be high, exalted, rise, arise; (Hi) raise, lift up, exalt, take away; (Hoph) be exalted; (Polel) exalt, bring up, extol, raise (children) (197)", 17],
    ["שָׁפַט", "(Q) to judge, make a judgment, decide (between), settle (a dispute or controversy); (Ni) go to court, plead, dispute (204)", 17],

    ["אֹהֶל", "tent (348)", 17],
    ["אֱמֶת", "truth, fidelity; אֲמִתֶּךָ (with 2ms suff) (127)", 17],
    ["דָּם", "blood; bloodshed (361)", 17],
    ["כִּסֵּא", "seat, chair, throne (135)", 17],
    ["מִסְפָּר", "number (134)", 17],
    ["שֶׁמֶשׁ", "(cs) sun (134)", 17],

    // Chapter 18 - Verified

    ["בָּחַר", "(Q) to choose, test, examine (172)", 18],
    ["בִּין", "(Q) to understand, perceive, consider, give heed to; (Ni) be discerning, have understanding; (Hi) understand, teach; (Hith) show oneself perceptive (171)", 18],
    ["דָּרַשׁ", "(Q) to seek, inquire (of or about), investigate, require, demand (165)", 18],
    ["הָרַג", "(Q) to kill, slay (167)", 18],
    ["חָפֵץ", "(Q) to delight in, take pleasure in, desire, be willing (74)", 18],
    ["קָדַשׁ", "(Q) to be holy, set apart or consecrated; (Ni) be honored or treated as holy; (Pi) set apart, consecrate or dedicate as holy; (Hi) consecrate, dedicate or declare as holy; (Hith) show or keep oneself holy (171)", 18],
    ["רָעָה", "(Q) to pasture, tend (flocks), graze, shepherd, feed (167)", 18],
    ["שָׁאַל", "(Q) to ask (of), inquire (of), request, demand (176)", 18],

    ["בַּעַל", "owner, master, husband, (divine title) Baal (161)", 18],
    ["שֵׁבֶט", "rod, staff, scepter, tribe (190); שִׁבְטֵי יִשְׂרָאֵל \"the tribes of Israel\"", 18],
    ["שָׁלוֹם", "peace, welfare, wholeness (237)", 18],

    ["בַּעַד", "(prep) behind, through (104)", 18],
    ["יַעַן", "on account of, because; 33x with יַעַן אֲשֶׁר as אֲשֶׁר (100)", 18],
    ["נָא", "(emphatic particle) please, now, surely (405)", 18],


    // Chapter 19 - Verified

    ["בָּטַח", "(Q) to trust, rely upon (118)", 19],
    ["בָּכָה", "(Q) to weep (in grief or joy), weep (for) (114)", 19],
    ["לָבַשׁ", "(Q) to put on a garment, clothe, be clothed; (Hi) clothe (112)", 19],
    ["שָׂרַף", "(Q) to burn (completely), destroy; (Ni) be burned (117)", 19],
    ["שָׁלֵם", "(Q) to be complete, finished; (Pi) complete, finish, make whole, restore, reward; (Hi) bring to completion, consummate (116)", 19],

    ["דּוֹר", "generation; also spelled דֹּר; (mp) דֹּרוֹת  (167)", 19],
    ["זֶרַע", "seed, offspring, descendants (229)", 19],
    ["חוּץ", "outside, street; (mp) חוּצוֹת; (prefixed with prep מִן) מִחוּץ from outside, outside (164)", 19],
    ["מְלָאכָה", "work, occupation, service (167)", 19],

    ["עָוֹן", "transgression, iniquity, guilt, punishment (of sin); (mp) עֲוֹנוֹת (233)", 19],
    ["פַּר", "bull, ox, steer (133)", 19],
    ["פֶּתַח", "opening, entrance, doorway (164)", 19],
    ["רֹב", "multitude, abundance, greatness (150)", 19],
    ["שָׂפָה", "lip, language, edge, shore (178)", 19],


    // Chapter 20 - Verified

    ["טָמֵא", "(Q) to be(come) unclean; (Ni) defile oneself; (Pi) defile, pronounce or declare unclean; (Hith) defile oneself, become unclean (162)", 20],
    ["נָגַע", "(Q) to touch, strike, reach; (Hi) touch, reach, throw, arrive (150)", 20],
    ["נוּס", "(Q) to flee, escape (160)", 20],
    ["סָבַב", "(Q) to turn (about), go around, surround; (Ni) turn; (Hi) cause to go around, lead around (163)", 20],
    ["סָפַר", "(Q) to count; (Pi) count, recount, make known, proclaim, report, tell (107)", 20],
    ["קָרָא", "(Q) to meet, encounter, happen; inf cstr with prep לִקְרַאת ׳ל toward, against, opposite (136)", 20],
    ["שָׂמַח", "(Q) to rejoice, be joyful, glad; (Pi) cause to rejoice, gladden, make someone happy (156)", 20],
    ["שָׁבַר", "(Q) to break (up), break in pieces, smash, shatter; (Ni) be smashed, broken, shattered or destroyed; (Pi) shatter, smash, break (148)", 20],

    ["יַיִן", "wine; (ms cstr) יֵין (141)", 20],
    ["מַעֲשֶׂה", "(ms) work, deed, act (235)", 20],
    ["עֲבֹדָה", "work, labor, service, worship (145)", 20],
    ["עֵדָה", "congregation, assembly (171)", 20],
    ["קֶרֶב", "inner part(s), organ(s), body; (prep) בְּקֶרֶב (155x) in the middle of, among (227)", 20],

    ["בִּלְתִּי", "(negates inf cstr) not, except; also spelled לְבִלְתִּי (86x) with prep לְ (112)", 20],
    ["יַחְדָּו", "together, at the same time (96)", 20],

    // Chapter 21 - Verified

    ["זָבַח", "(Q) to slaughter (for sacrifice), sacrifice; (Pi) offer sacrifice, sacrifice (134)", 21],
    ["חָנָה", "(Q) to decline, camp, encamp, pitch camp, lay siege to (143)", 21],
    ["נוּחַ", "(Q) to rest, settle down, repose; (Hi) cause to rest, secure rest, set, leave (behind or untouched) (140)", 21],
    ["נָסַע", "(Q) to pull (out or up), set out, start out, depart, journey (146)", 21],
    ["פָּנָה", "(Q) to turn (toward, from, to the side, away) (134)", 21],
    ["פָּתַח", "(Q) to open (up); (Ni) be opened, loosened, set free; (Pi) let loose, loosen (136)", 21],
    ["רָדַף", "(Q) to pursue, follow after, chase, persecute (144)", 21],
    ["שָׂנֵא", "(Q) to hate; (Pi ptc) enemy (148)", 21],
    ["שָׁאַר", "(Ni) to remain, be left over, survive; (Hi) leave (someone or something) remaining (133)", 21],

    ["מוֹעֵד", "appointed time (of feast), meeting place, assembly (223)", 21],
    ["מַחֲנֶה", "(cs) camp, army; (cp) מַחֲנוֹת and מַחֲנִים (215)", 21],
    ["מַלְאָךְ", "messenger, angel (213)", 21],
    ["מִנְחָה", "gift, offering, tribute (211)", 21],
    ["נַחֲלָה", "inheritance, property, possession (222)", 21],


    // Chapter 22

    ["בּוֹשׁ", "(Q) to be ashamed; (Hi) put to shame (125)", 22],
    ["גָּדַל", "(Q) to grow up, be(come) great, strong, wealthy, important; (Pi) bring up (children), make great, extol; (Hi) make great, magnify, do great things (117)", 22],
    ["חָשַׁב", "(Q) to think, consider, devise, plan, value, reckon; (Ni) be reckoned, accounted, considered (as); (Pi) think, consider, devise, plan (124)", 22],
    ["יָטַב", "(Q) to be well with, go well with, be pleasing (to); (Hi) make things go well for, do good to, deal well with, treat kindly (117)", 22],
    ["לָכַד", "(Q) to take, capture, catch, seize; (Ni) be caught, captured (121)", 22],
    ["קָבַץ", "(Q) to collect, gather, assemble; (Ni) be gathered, assembled; (Pi) gather together, assemble (127)", 22],
    ["קָבַר", "(Q) to bury; (Ni) be buried (133)", 22],
    ["שָׁכַן", "(Q) to settle (down), abide, reside, dwell, inhabit; (Pi) abide, dwell (130)", 22],
    ["שָׁפַךְ", "(Q) to pour (out), spill, shed (blood) (117)", 22],

    ["אֲרוֹן", "(cs) ark, chest, coffin (202); אֲרוֹן הַבְּרִית \"the ark of the covenant\"", 22],
    ["חֹק", "statute, appointed time, portion; (mp) חֻקִּים (131)", 22],
    ["חֻקָּה", "statute, ordinance (104)", 22],
    ["מִשְׁכָּן", "dwelling place, tabernacle; (mp) מִשְׁכָּנוֹת (139)", 22],


    // Chapter 23

    ["בֶּגֶד", "clothes, garment, covering (216)", 23],
    ["בְּהֵמָה", "animal(s), beast(s), cattle (190)", 23],
    ["בְּכוֹר", "firstborn, oldest offspring (120)", 23],
    ["חָכְמָה", "wisdom, skill (153)", 23],
    ["חֵמָה", "wrath, heat, poison (125)", 23],
    ["חָצֵר", "(cs) courtyard, village, settlement; (cp) חֲצֵרִים and חֲצֵרוֹת (192)", 23],
    ["כֹּחַ", "strength, power (126)", 23],
    ["נְחֹשֶׁת", "copper, bronze (139)", 23],
    ["נָשִׂיא", "chief, leader, prince (130)", 23],
    ["עֶצֶם", "(fs) bone, skeleton (126)", 23],
    ["עֶרֶב", "evening, sunset (134)", 23],
    ["קָהָל", "assembly, community, crowd (123)", 23],
    ["שֶׁמֶן", "oil, fat (193)", 23],


    // Chapter 24

    ["אָמַן", "(Ni) to be reliable, faithful or trustworthy; (Hi) believe (in), trust, have trust in, put trust in (97)", 24],
    ["יָשַׁע", "(Ni) to be delivered, victorious, receive help; (Hi) help, save, deliver, rescue, come to the aid of (205)", 24],
    ["יָתַר", "(Ni) to be left over, remain; (Hi) have (something) left over or remaining (106)", 24],
    ["כּוּן", "(Ni) to be established, steadfast, ready, arranged, stand firm; (Hi) establish, set up, prepare, make ready, make firm (219)", 24],
    ["לָחַם", "(Q, Ni) to fight, do battle with (rare in Q) (171)", 24],
    ["מָלַט", "(Ni) to escape, flee to safety, slip away; (Pi) let someone escape, save someone, leave undisturbed (94)", 24],
    ["נָחַם", "(Ni) to be sorry, regret, have compassion (on or for); (Pi) comfort, console (108)", 24],
    ["נָכָה", "(Hi) to strike, smite, beat, strike dead, destroy; (Hoph) be struck down dead, beaten (501)", 24],
    ["נָצַב", "(Ni) to stand (firm), take one's stand, station oneself, be positioned; (Hi) station, set (up), place, establish (74)", 24],
    ["נָצַל", "(Ni) to be rescued, delivered, saved; (Hi) tear from, take away, deliver from (213)", 24],
    ["סָתַר", "(Ni) to be hidden, hide oneself; (Hi) hide (82)", 24],
    ["רוּץ", "(Q) to run (104)", 24],
    ["שָׁחַת", "(Pi, Hi) to ruin, destroy, spoil, annihilate (152)", 24],
    ["שָׁמַד", "(Ni) to be exterminated, destroyed or annihilated; (Hi) exterminate, annihilate, destroy (90)", 24],


    // Chapter 25

    ["הָפַךְ", "(Q) to turn, overturn, overthrow, destroy; (Ni) be destroyed, turned into, changed (95)", 25],
    ["חָרָה", "(Q) to be(come) hot, burn with anger, become angry (93)", 25],
    ["רָעַע", "(Q) to be bad, evil or displeasing; (Hi) do evil, do wickedly, do injury, harm, treat badly (98)", 25],
    ["שָׂבַע", "(Q) to be satisfied, have one's fill (of), eat or drink one's fill; (Hi) satisfy (97)", 25],
    ["שָׁכַח", "(Q) to forget; (Ni) be forgotten (102)", 25],
    ["שָׁמֵם", "(Q) to be deserted, uninhabited; (Ni) be made uninhabited, desolate, deserted; (Hi) make deserted or desolated (92)", 25],

    ["זָכָר", "male, man (82)", 25],
    ["חֹשֶׁךְ", "darkness (80)", 25],
    ["כְּסִיל", "fool, shameless person (70)", 25],
    ["מִגְרָשׁ", "open land, pasture (114)", 25],
    ["מַמְלָכָה", "kingdom, dominion, reign (117)", 25],
    ["נָהָר", "river, stream; (mp) נְהָרִים and נְהָרוֹת (119)", 25],
    ["צֶדֶק", "righteousness, equity (123)", 25],
    ["שִׁיר", "song (78)", 25],


    // Chapter 26

    ["בָּקַשׁ", "(Pi) to seek, search for, look for, discover, demand, require; (Pu) be sought (225)", 26],
    ["דָּבַר", "(Q) to speak (rare in Q); (Pi) speak (1,136)", 26],
    ["הָלַל", "(Pi) to praise, sing hallelujah; (Pu) be praised, praiseworthy; (Hith) boast (146)", 26],
    ["כָּסָה", "(Q) to cover, conceal, hide; (Pi) cover (up), conceal, clothe (153)", 26],
    ["מָהַר", "(Pi) to hasten, hurry, go or come quickly (81)", 26],
    ["נָבָא", "(Ni) to prophesy, be in a state of prophetic ecstasy; (Hith) speak or behave as a prophet (115)", 26],
    ["סָגַר", "(Q) to shut (in), close; (Hi) deliver (up), hand over, surrender, give up (91)", 26],
    ["צִוָּה", "(Pi) to command, give an order, charge; (Pu) be ordered, be told, receive a command (496)", 26],
    ["קָטַר", "(Pi) to make a sacrifice go up in smoke, offer (a sacrifice) by burning; (Hi) cause a sacrifice to go up in smoke (115)", 26],
    ["שִׁיר", "(Q) to sing (of); (Q ptc) singer (88)", 26],
    ["שָׁרַת", "(Pi) to minister, serve (98)", 26],

    ["מִצְוָה", "commandment; (fp) מִצֺוֹת; מִצֺוֹת יְהוָה \"the commandments of the Lord\" (184)", 26],

    ["טָהוֹר", "(adj) clean, pure (96)", 26],
    ["טָמֵא", "(adj) unclean (88)", 26],
    ["עָנִי", "(adj) poor, humble, afflicted (80)", 26],


    // Chapter 27

    ["גּוּר", "(Q) to sojourn, dwell (stay) as a foreigner or alien (82)", 27],
    ["יָעַץ", "(Q) to advise, counsel, plan, decide; (Ni) consult or take counsel together (80)", 27],
    ["לָמַד", "(Q) to learn; (Pi) teach (87)", 27],
    ["מָכַר", "(Q) to sell, hand over; (Ni) be sold, sell oneself (into slavery) (80)", 27],
    ["מָשַׁל", "(Q) to rule, reign, govern, have dominion (81)", 27],
    ["עָזַר", "(Q) to help, assist, come to the aid of (82)", 27],
    ["קָלַל", "(Q) to be small, insignificant, of little account, swift; (Ni, Pi) declare cursed; (Hi) treat with contempt (82)", 27],
    ["קָנָה", "(Q) to get, acquire, buy (85)", 27],
    ["שָׁחַט", "(Q) to slaughter (animals for sacrifice) (81)", 27],

    ["כָּנָף", "(fs) wing, edge, extremity (111)", 27],
    ["עַמּוּד", "pillar, column, tent pole (112)", 27],
    ["שֶׁקֶר", "lie, deception, falsehood (113)", 27],


    // Chapter 28

    ["אָסַר", "(Q) to tie, bind, fetter, imprison (73)", 28],
    ["זָעַק", "(Q) to cry (out), call for help, summon (73)", 28],
    ["חָלָה", "(Q) to be(come) weak, tired, sick; (Ni) be exhausted; (Pi) appease, flatter (75)", 28],
    ["חָנַן", "(Q) to be gracious to, show favor to, favor; (Hith) plead for grace, favor or compassion (77)", 28],
    ["מָאַס", "(Q) to refuse, reject, despise (74)", 28],
    ["עוּר", "(Q) to be awake, stir up; (Hi) arouse, rouse, wake up, stir up; (Polel) arouse, disturb, awaken (80)", 28],
    ["עָרַךְ", "(Q) to set in order, lay out, set in rows, arrange, stack (wood), draw up a battle formation (75)", 28],
    ["רָחַץ", "(Q) to wash (with water), wash (off or away), bathe, bathe oneself (72)", 28],

    ["יָמִין", "(fs) right hand, south (141)", 28],
    ["מַרְאֶה", "vision, sight, appearance (103)", 28],
    ["עָפָר", "dust, dry earth (110)", 28],
    ["פַּעַם", "(fs) foot, pace, time; (fp) פְּעָמִים (118)", 28],


    // Chapter 29

    ["גֵּר", "stranger, sojourner, alien (92)", 29],
    ["חַיָּה", "animal, beast, living thing (96)", 29],
    ["חֵלֶב", "fat; (metaphorically) best, choice part (92)", 29],
    ["חֲמוֹר", "donkey (96)", 29],
    ["יוֹתֵר", "rest, remainder, excess (97)", 29],
    ["נַחַל", "stream, brook, wadi (137)", 29],
    ["עוֹר", "skin, hide, leather (99)", 29],
    ["עֹז", "strength, power, might; (with 3ms suff) עֻזּוֹ (76)", 29],
    ["פֶּשַׁע", "transgression, rebellion (93)", 29],
    ["קָצֶה", "(ms) end, border, outskirts (92)", 29],
    ["שִׂמְחָה", "joy, gladness (94)", 29],

    ["תָּמִים", "(adj) blameless, perfect, honest, devout (91)", 29]
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

//All code for the menu
const menuBtn = document.getElementById("menu-button");
menuBtn.addEventListener("click", openMenu);

const darkModeChk = document.getElementById("dark-mode-chk");
darkModeChk.addEventListener("click", () => {
    console.log("maybe dark!");
    document.body.classList.toggle("is-dark");

})
function openMenu() {
    document.querySelector(".menu").classList.toggle("is-shown");
}


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
    if (startRange >= minRange && endRange <= maxRange && startRange <= endRange) {

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
