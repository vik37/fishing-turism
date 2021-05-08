export let water = {   
    lake : {
        natural :[ {
            id : 1,
            type : "natural",
            name : "Ohrid",                    
            mainDepth : 155,
            maxDepth : 300,
            long : 36.4,
            wide : 16.8,  
            text : "Lake Ohrid is one of the oldest in the world, and the deepest in the Balkans, "+
                    "with a maximum depth of 288 m (940 ft) and a mean depth of 155 m (508 ft). "+
                    "It covers an area of 358 km² (138 sq mi), containing an estimated 55.4 km³ of water. "+
                    "It is 30.4 km long by 14.8 km wide at its maximum extent with a shoreline length of 87.53 km, "+
                    "shared between Macedonia (56.02 km) and Albania (31.51 km). "+
                    "Of the total surface area, 248 square kilometres (96 sq mi) belongs to Macedonia and 110 km2"+ 
                    "belongs to Albania. There are three cities on the lake's shores: Ohrid and Struga on the Macedonian side; Pogradec in Albania. "+
                    "There are also several fishing villages, although tourism is now a more significant part of their income."+ 
                    "The catchment area of the lake has a population of around 170,000 people, with 131,000 people living "+
                    "directly at the lake shore (43,000 in Albania and 88,000 in Macedonia). "                  
        },
        {
            id : 2,
            type : "natural",
            name : "Prespa",                    
            mainDepth : 54,
            maxDepth : 76,
            long : 28,
            wide : 17,
            text : "The Lake Prespa is located on the tripoint of Macedonia, Albania, and Greece. "+
            "It is a system of two lakes separated by an isthmus, the Great Prespa Lake, "+
            "divided between the three countries, and the Little Prespa Lake, mostly within Greece. "+
            "They are the highest tectonic lakes in the Balkans, standing at an elevation of 853 metres (2,799 ft)." +
            "The area contains three national parks: Prespa in Albania, Galičica in Macedonia and Prespa in Greece. "+
            "The largest town in the region is Resen in Macedonia. In 2014, the Ohrid-Prespa Transboundary Reserve "+
            "between Albania and Macedonia was added to UNESCO's World Network of Biosphere Reserves."+
            "The Great Prespa Lake has the total surface of 259 km2 (100.00 sq mi). "+
            "The largest part of it, 176.3 km2 (68.07 sq mi) belongs to North Macedonia; "+
            "46.3 km2 (17.88 sq mi) to Albania; and 36.4 km2 (14.05 sq mi) to Greece."
        },
        {
            id : 3,
            type : "natural",
            name : "Dojran",                    
            mainDepth : 6.7,
            maxDepth : 10,
            long : 8.9,
            wide : 7.1,
            text : "Dojran Lake, also spelled Doiran Lake is a lake with an area of 43.1 km2 (16.6 sq mi) shared "+
                    "between Macedonia (27.3 km2, 10.5 sq mi) and Greece (15.8 km2, 6.1 sq mi)." +
                    "To the west is the city of Nov Dojran (Нов Дојран), to the east the village of Mouries, "+
                    "to the north the mountain Belasica and to the south the Greek town of Doirani. "+
                    "The lake has a rounded shape, a maximum depth of 10 m (33 ft) and a north-to-south "+
                    "length of 8.9 km (5.5 mi) and is 7.1 km (4.4 mi) at its widest, making it the third largest lake "+ 
                    "partially in Macedonia after Lake Ohrid and Lake Prespa." +
                    "The lake was on the southern line of the Macedonian front during World War I, "+
                    "and its southern shore became the site of the various battles between allied troops and "+
                    "Bulgarian troops in 1916, 1917 and 1918."
        }],              
        artificial : [{
            id : 1,
            name : "Kozjak",  
            type : "artificial",                 
            river : "Treska",
            long : 32,
            year: 2004,
            text: "Kozjak is an artificial lake in Western Macedonia. It is the largest artificial lake in Macedonia, "+
                   "located between the mountain Suva Gora in the west and the Jasen reserve in the east. "+
                   "Towards the lake there are two ways: the southern approach to the lake leads from Makedonski Brod "+
                    "and stretches along the river Treska. The other approach is from Skopje, "+
                   "where the road extends along the southern slopes of Vodno. Kozjak is a 32 km long lake, "+
                    "at some points even 130 meters deep, and the maximum distance from one to the other coast is 400 meters. "+
                    "It is situated at an ideal altitude of less than 300 meters. It has the richest fish fund. "+
                    "The Kozjak accumulation has the richest fish fund in Macedonia."+
                    "Fishing is permitted along the whole lake, except in the two bays of Jasen called Pekolnik "+
                    "and Kolomot, which are converted into attractive beaches for visitors. "+
                    "Fishing is regulated by the service responsible for the preservation of the lake. "+
                    "Everyone interested should contact the authorities for a license for recreational or sport fishing."
                    
        },
        {      
            id : 2,                 
            name : "Tikvesh",  
            type : "artificial",                                                   
            river : "Crna",
            long : 29,
            year : 1968,
            text : "Tikves Lake is located 12km south-west of Kavadarci on the River Crna or 3km from the village Vozarci. "+
                   "Tikves lake was built in 1968 by directing the waters of the river and building a 104m high dam. "+
                   "The dam is built of stones and it is 338m long. Tikves lake is the largest and the "+
                   "oldest artificial lake in Macedonia. Tikves lake covers an area of 14km2 and 29km with a capacity of "+
                   "475 million m3 water. The water of the Tikves lake is used for irrigation and deriving electricity. "+
                   "The irrigation is performed by the hydro-system Tikves and in the vicinity of the dam the hydroelectric "+
                   "plant Tikvesh is located. The lake is rich with fish. Most dominant is the sheat-fish that can reach "+
                   "the size of 2m. Thanks to the irrigation Tikves Lake made Tikves valley a real oasis with endless "+
                   "vineyards and orchards. Today Tikves Lake with its micro-climate establishes itself as an recreational and "+
                   "tourist resort."           
        },
        {      
            id : 2,                 
            name : "Mavrovo",
            type : "artificial",                                                  
            river : "",
            long : 10,
            year : 1952,
            text : "Mavrovo Lake is situated in the Mavrovo region, in the Mavrovo and Rostuša municipality "+
                   "of the Republic of Macedonia, less than 100 km from Skopje. It is an important tourist "+
                   "destination, being frequented for recreational activities such as swimming, boating and "+
                   "trout fishing during the summer; a distinctive building in the lake is the half-submerged "+
                   "church of Saint Nicholas. Since 1952 it is part of the Mavrovo National Park. "+
                   "With its surface of 13.7 km2 (3,400 acres), is one of the most extensive lakes of the country." +
                   "The lake is surrounded by the Šar, on the North, and the Bistra, on the South, both exceeding heights of 2000 m."
        },
        {   
            id : 3,
            name : "Mladost",
            type : "artificial",                                                 
            river : "Otovica",
            long : 1.5,
            year : 0,
            text : "Mladost Lake (Езеро Младост, Велешко Езеро) is an artificial lake on the Otovica River, "+
                    "located 11 km from Veles city. The lake was built for the purpose of irrigation of vineyards and "+
                    "agricultural plantations in the area that often suffered from drought in the past."+
                    "To the Lake, Mladost leads the regional road R-1102 (Skopje-Veles), and at 1 km is the connection "+
                    "with the E-75 highway (Skopje-Gevgelija). Today, Mladost Lake is one of the favorite places for rest "+
                    "and recreation of citizens from Veles and surrounding towns. The most frequent visitors to the Lake are "+
                    "the fishermen, as well as tourists during the summer months."
        },
        {
            id : 4,
            name : "Debar",
            type : "artificial",                          
            river : "black drim and radica",
            long : 15,
            year : 1969,
            text : "Debar Lake is an artificial lake in the western portion of Macedonia near the town of Debar "+
                   "after which it is named. A dam at Špilje blocks the Black Drin, the second longest river in "+
                   "the country. Lake Debar has a surface area of 13.2 square kilometres (1,320 ha) and is thus "+
                   "among the largest lakes in Macedonia. It is 92 metres (302 ft) deep and sits at an altitude of "+
                   "580 Metres above the Adriatic. It was created between 1966 and 1968, after the existing "+
                   "dam at Špilje was raised to 102 metres (335 ft). "+
                   "Debar Lake is the favorite lake among passionate fishermen, not only among the domestic ones, "+
                   "but also among those from the neighboring countries. Those who have not been hunting for carp or "+
                   "chub in Debar Lake, according to many are not true fishermen. Not far from the east coast of "+
                   "Debar Lake is the Debar Island, located about 1 km northwest of the village of Pralenik."
        },
        {
            id : 5,
            name : "Berovo", 
            type : "artificial",                           
            river : "Kleparska",
            long : 2.5,
            year : 0,
            text : "Berovo Lake extends along pine trees and deciduous trees. The mysterious, peaceful and "+
                    "meek landscape painting adorns the Maleshevo Mountains. They are part of an untouched "+
                    "nature concealed in the pine and deciduous forest, where Berovo Lake is peacefully calm. "+
                    "There, a man simply inhales the sight that has peacefully spread around him, marveling at "+
                    "all that beauty that is a paradise for the eyes and soul. "+
                    "Berovo Lake or Ratevo Lake is an artificial lake located 2 km from the town of Berovo. "+
                    "It can be reached by a road passing through the thick pine forest." +
                    "If you want to refresh yourself in the waters of the Berovo Lake, the best time for you "+
                    "would be in the months of July and August. The surroundings of the lake abound with "+
                    "beautiful terrain for picnics, recreation and sports."                                  
        }, 
        {
            id : 6,
            name : "Kalimanci", 
            type : "artificial",                           
            river : "Bregalnica",
            long : 14,
            year : 1969,
            text : "Kalimanci is an artificial lake in the eastern part of Macedonia, "+
                   "on the slopes of the Osogovo Mountains, near Makedonska Kamenica. The lake covers "+
                   "an area of 4.23 km2 and is characterized by a large shoreline. It is administratively "+
                   "located in the municipalities: Vinica, Makedonska Kamenica and Delchevo. "+
                   "The lake was created by dividing the valley of the river Bregalnica through the "+
                   "construction of a dam in 1969, and its main purpose is to irrigate a rice area of about "+
                   "28,000 ha, but also part of the arable land in Ovche Pole." +
                   "The favorable location and the good infrastructural connection of the lake are good "+
                   "preconditions for the development of tourism, and the rich fish representation offer "+
                   "excellent conditions for sport fishing. In addition, along the shore of the lake there are "+
                   "numerous archeological sites from different historical periods. "+
                   "However, the lake is not used for tourism at all, and in its vicinity there is not a "+
                   "single accommodation and catering facility."                               
        },
        {
            id : 7,
            name : "Mantovo", 
            type : "artificial",                           
            river : "Kriva Lakavica",
            long : 5.5,
            year : 1978,
            text : "Mantovo is an artificial lake in Lakavicko, in the southeastern part of Macedonia. "+
                   "It is located 15 km from the village Konce, 18 km from Radovish and 25 km from Stip. "+
                   "The lake has an elongated shape and covers a total area of 4.49 km2. "+
                   "The lake stretches in an east-west direction. It is bordered on the north by the area of "+ 
                   "the village Dolna Vrashtica, on the east by the area of the village Gabrevci, on the south "+
                   "by the area of the village Dolni Radesh, while on the west by the area of the village Garvan, "+
                   "where the embankment of the dam is located. "+
                   "The lake is rich in rich and diverse species, with many species of freshwater fish and birds in and around it. "
        },
        {
            id : 8,
            name : "Matka", 
            type : "artificial",                           
            river : "Treska",
            long : 7,
            year : 1938,
            text : "In the north-western part of Macedonia, near Skopje, the lake Matka is located on the river "+
                   "Treska. Lake Matka is the oldest artificial lake in Macedonia, the accumulation of which was "+
                   "built in 1938. The accumulation lake Matka, extends 7 km downstream along the Treska River, "+
                   "magnificently with its metallic gray - green color. The steep gray sedimentary dilapidated "+
                   "rocks, the favorite route and the eternal challenge of mountaineers - adventurers, rise high "+
                   "above the lake. And, with their coastlines, they sharply cut off the mysterious water surface "+
                   "of the lake.  "+ 
                   "From the dam Matka 1 to Matka 2 there are nine kilometers, and to Kozjak a total of 25. "+
                   "It has been obtained by partitioning the river Treska with a dam (St. Andreja), and "+
                   "creating an artificial accumulation in the canyon Matka. The lake water is used for "+
                   "obtaining electricity, but also for irrigation of the villages in the surroundings. "+
                   "The lake is stocked and is often used for sports fishing. In this lake there is the "+
                   "underwater cave Vrelo, one of the deepest underwater caves in Europe, which has a depth "+
                   "of more than 203 m."                                        
        }       
    ]},   
    river : [{
        id:1,
        name : "Vardar",
        length : 388 ,
        source: "Vrutok",
        mouth : "Aegean Sea",
        text : "The Vardar is the longest river in Macedonia and the second longest river in Greece, "+
                "in which it reaches the Aegean Sea at Thessaloniki. It is 388 km (241 mi) long, out of which "+
                "76 km are in Greece, and drains an area of around 25,000 km2 (9,653 sq mi). The maximum depth "+
                "of the river is 4 m (13 ft). The river rises at Vrutok, a few kilometers southwest of Gostivar "+
                "in Macedonia. It passes through Gostivar, Skopje and into Veles, crosses the Greek border near "+
                "Gevgelija, Polykastro and Axioupoli, before emptying into the Aegean Sea in Central Macedonia, "+
                "west of Thessaloniki in northern Greece."+
                "The Vardar basin comprises two-thirds of the territory of Macedonia. The valley features fertile "+
                "lands in the Polog region, around Gevgelija and in the Thessaloniki regional unit. The river is "+
                "surrounded by mountains elsewhere. The superhighways Greek National Road 1 in Greece and M1 and "+
                "E75 run within the valley along the river's entire length to near Skopje."
    },
    {
        id:2,
        name : "Black Drim",
        length : 149 ,
        source: "Struga (Ohrid Lake)",
        mouth : "Adriatic Sea",
        text : "The Black Drin, or Black Drim is a river in Macedonia and Albania. It flows out of Lake Ohrid in "+
                "Struga, Macedonia. It is 149 km (93 mi) long and its drainage basin is 3,504 km2 (1,353 sq mi). "+ 
                "Its average discharge is 118 m3/s (4,200 cu ft/s). After about 56 km (35 mi) it crosses the border to "+
                "Albania, west of Debar, Macedonia. It merges with the White Drin in Kukës to form the Drin, which flows "+
                "into the Adriatic Sea. It drains most of the eastern border region of Albania. "+
                "The Ohrid eel for millennia migrated from Lake Ohrid to the Sargassian Sea for reproduction. "+
                "In the second half of the 20th century, with the construction of the two dams on the Macedonian "+
                "part of the river Crn Drim, and four on the Albanian part, the eel route was completely blocked. "+
                "Dams are a problem for other fish species that used to travel to the Ohrid Lake from the Adriatic "+
                "Sea. According to the IUCN World Red List, European eel is considered a critically endangered species."
    },
    {
        id:3,
        name : "Black River",
        length : 207 ,
        source : "Zeleznec",
        mouth : "Vardar",
        text : "Crna River or Black river is a river in Macedonia. It is the right tributary of the Vardar River. "+
               "It runs through much of the south and west of the country. Its source is in the mountains of "+
               "western Macedonia, northwest of Demir Hisar. It enters the Pelagonia valley at the village of Buchin "+
               "and then flows through the village Sopotnica, and southwards through the plains east of Bitola. "+
               "At Brod (Novaci Municipality) it turns northeast. It leaves the Pelagonia valley at the Staravina "+
               "village and goes in the biggest canyon in Macedonia, the Skočivir valley and flows into the Vardar river "+
               "between Rosoman and Gradsko. Thus, the river makes a bend of almost 180 degrees east of Bitola. "+ 
               "This bend was part of the Macedonian front in World War I. It was known to the allied forces as the "+
               "Cerna Bend or Cerna Loop, and two major battles were fought here: the Battle of the Cerna Bend (1916) "+
               "and the Battle of the Crna Bend (1917)."
    },
    {
        id:4,
        name : "Bregalnica",
        length : 211.5,
        source : "Malesevo mountains",
        mouth : "Vardar",
        text : "Bregalnica is the second largest river in Macedonia. It starts as a spring near the mountain "+
                "city of Berovo and it passes near the cities of Makedonska Kamenica, Kočani, Vinica and Štip, "+
                "before joining the river Vardar on its way to the Aegean Sea. " +
                "The Bregalnica watershed according to the Bregalnica River Basin Management Project, "+
                "covers a territory of 4,307 km², which is about 21% of the Vardar River watershed and 17% of "+
                "the total territory of the country. The average altitude of the Bregalnica basin is 772 m. "+
                "The Bregalnica river has 6 tributaries on the left side (Ratevska, Osojnica, Zrnovska, Kozjacka, "+
                "Otinja, and Lakavica) and 6 tributaries on the right side (Zelevica, Kamenicka, Orizarska, Kocanska,"+
                "Zletovica and Svetinikolska). Along the river, 6 major reservoirs have been constructed: "+
                "Lake Berovsko/Ratevsko, Kalimanci, Gradce, Zletovsko Ezero/Knezevo, Mantovo and Mavrovica." +
                "The source of the river is located in the forests of the Maleševo Mountains, close to the "+
                "border of Bulgaria, east of the city of Berovo, in an altitude of around 1690 m a.s.l. "+
                "The Bregalnica River leads into the Vardar river on an altitude of 137 m a.s.l., close to "+
                "the village of Gradsko."
    },
    {
        id : 5,
        name : "Treska",
        length : 132,
        source : "Stogovo mountains",
        mouth : "Vardar"
    },
    {
        id : 6,
        name : "Pcinja", 
        length : 135,
        source : "Trgoviste (Srbija)",
        mouth : "Vardar",
        text : "Treska is a river in the western part of Macedonia, a right tributary to Vardar. It is 132 km "+
                "(82 mi) long, and its basin is 2350 km². "+
                "It rises in the Stogovo mountain at an altitude of around 2000 meters, and flows eastwards through "+
                "the valley of Kičevo. At Makedonski Brod it turns northwards, flows between the mountains of Suva Gora "+
                "and Karadžica, finally flowing into the Vardar in the Skopje suburb Gjorče Petrov. "+
                "Three dams have been built on Treska: (in 1937 the Matka dam and lake near Skopje, "+
                "in 2004 the Kozjak dam and lake, in 2012 the Sveta Petka"
    },
    { 
        id : 7,
        name : "Radika", 
        length : 70,
        source : "Mounth Vraca (Kosovo)",
        mouth : "Black Drim",
        text : "The Radika is a river in southern Kosovo and western Macedonia, a 70 km (43 mi)-long right "+
               "tributary to the Black Drin river. The Radika proper is 52 km (32 mi) long, but measured from "+
               "the most distant source in its watershed, that of the Crni Kamen river, it is 70 km (43 mi) long. "+
               "Overall, the Radika belongs to the Adriatic Sea drainage basin, drains an area of 665 km2 (257 sq mi) itself and it is not navigable." +
               "The most significant tributary of Crn Drim is the Radika River, 64.7 km long. The river springs "+
               "at 2,200 meters above sea level from the peak Golema Vraca on Shar Planina. The river created "+
               "one of the most attractive canyons for millions of years, penetrating the ravine sides of Bistra "+
               "and Stogovo in the east and Korab and Deshat to the west. It is bordered to the south by the "+
               "Debar valley, and to the north by the Shar Mountain. Radika is the only river with bifurcation "+
               "in Macedonia, which provides water to two basins, the Adriatic and the Aegean basin. "+
               "With channels, part of the waters of the river are brought to the Mavrovo Lake and fill it with "+
               "water, and from here with underground tunnels to Vardar. Here HPP (Vrben) was built. "+
               "In its course Radika receives many tributaries from which more than 10 km long are only: "+
               "Mavrovska Reka, r. Ribnica and Mala Reka."
    },
    {
        id : 8,
        name : "Strumica", 
        length : 114,
        source : "Mounth Plackovica",
        mouth : "Struma (Bulgaria)",
        text : "The Strumica or Strumeshnitsa is a river in Macedonia and Bulgaria. It runs through the town of "+
                "Strumica and flows into the river Struma. "+
                "The Strumica takes its source from the Plačkovica mountain in Radoviš municipality in North Macedonia, "+
                "running south in a deep valley and then known as the Stara Reka. It then enters the Radoviš Valley and "+ 
                "runs through the eponymous town of Radoviš. Afterwards the Strumica runs southeastwards through the "+
                "Strumica Valley (Vasilevo, Strumica and Novo Selo municipality), passing through the town of Strumica "+
                "and turning east to enter Bulgaria south of Zlatarevo. A wide meandering valley follows until the river "+
                "flows into the Struma as a right tributary northeast of Mitino, not far from Rupite."       
    }
]  
}