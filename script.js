"use strict";

/* ============ ДАННЫЕ: 101 матч (2011-2026) ============ */
const MATCHES=[
/* ---- 2011 ---- */
{d:"2011-07-17",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Lokomotiv Moscow",ac:"RU",sc:"0:2",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"CUP",rnd:"R16",att:16000},

/* ---- 2017 ---- */
{d:"2017-09-21",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Akhmat Grozny",ac:"RU",sc:"3:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL"},
{d:"2017-09-24",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Krylia Sovetov Samara",ac:"RU",sc:"1:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"15"},

/* ---- 2018 ---- */
{d:"2018-05-17",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Anzhi Makhachkala",ac:"RU",sc:"3:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL"},
{d:"2018-07-01",h:"Spain",hc:"ES",a:"Russia",ac:"RU",sc:"1:1",pens:"3:4",st:"Stadion Luzhniki",ct:"Moscow",cc:"RU",cmp:"WC",rnd:"R16",att:78011,price:"14 700 ₽"},
{d:"2018-07-03",h:"Sweden",hc:"SE",a:"Switzerland",ac:"CH",sc:"1:0",st:"Gazprom Arena",ct:"Saint Petersburg",cc:"RU",cmp:"WC",rnd:"R16",att:64042},
{d:"2018-07-10",h:"France",hc:"FR",a:"Belgium",ac:"BE",sc:"1:0",st:"Gazprom Arena",ct:"Saint Petersburg",cc:"RU",cmp:"WC",rnd:"SF"},
{d:"2018-09-22",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Ural Yekaterinburg",ac:"RU",sc:"1:2",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RPL",rnd:"8"},
{d:"2018-10-07",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Spartak Moscow",ac:"RU",sc:"2:3",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RPL",rnd:"10"},
{d:"2018-10-28",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Lokomotiv Moscow",ac:"RU",sc:"0:3",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RPL",rnd:"12",att:11436},

/* ---- 2019 ---- */
{d:"2019-03-30",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Rubin Kazan",ac:"RU",sc:"1:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RPL",rnd:"21"},
{d:"2019-04-13",h:"Yenisey Krasnoyarsk",hc:"RU",a:"FC Ufa",ac:"RU",sc:"0:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RPL",rnd:"23"},
{d:"2019-07-20",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Rotor Volgograd",ac:"RU",sc:"0:3",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"3",att:4487},
{d:"2019-07-28",h:"Yenisey Krasnoyarsk",hc:"RU",a:"FC Krasnodar-2",ac:"RU",sc:"0:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"5"},
{d:"2019-08-10",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Neftekhimik Nizhnekamsk",ac:"RU",sc:"2:2",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"7"},
{d:"2019-09-14",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Baltika Kaliningrad",ac:"RU",sc:"2:2",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"13"},
{d:"2019-09-25",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Zenit St. Petersburg",ac:"RU",sc:"1:2",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"CUP",rnd:"R16"},
{d:"2019-11-13",h:"Torpedo Moscow",hc:"RU",a:"FC Nizhny Novgorod",ac:"RU",sc:"0:2",st:"Lukoil Arena",ct:"Moscow",cc:"RU",cmp:"RFL",rnd:"23",att:1212},

/* ---- 2020 ---- */
{d:"2020-03-09",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Shinnik Yaroslavl",ac:"RU",sc:"1:3",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"26"},
{d:"2020-10-21",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Spartak Moscow",ac:"RU",sc:"1:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"CUP",rnd:"GRP",note:"elite"},

/* ---- 2021 ---- */
{d:"2021-02-27",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Volgar Astrakhan",ac:"RU",sc:"1:4",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"27"},
{d:"2021-03-06",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Fakel Voronezh",ac:"RU",sc:"1:3",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"28",att:825},
{d:"2021-03-10",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Shinnik Yaroslavl",ac:"RU",sc:"6:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"29"},
{d:"2021-03-20",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Akron Tolyatti",ac:"RU",sc:"0:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"31",price:"150 ₽",note:"fanid"},
{d:"2021-03-28",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Baltika Kaliningrad",ac:"RU",sc:"1:2",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"33"},
{d:"2021-04-07",h:"Yenisey Krasnoyarsk",hc:"RU",a:"SKA-Khabarovsk",ac:"RU",sc:"2:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"35"},
{d:"2021-04-17",h:"Lokomotiv Moscow",hc:"RU",a:"FC Rostov",ac:"RU",sc:"4:1",st:"RZD Arena",ct:"Moscow",cc:"RU",cmp:"RPL",rnd:"26",att:10317},
{d:"2021-04-18",h:"Spartak Moscow",hc:"RU",a:"FC Ufa",ac:"RU",sc:"0:3",st:"Lukoil Arena",ct:"Moscow",cc:"RU",cmp:"RPL",rnd:"26",att:10980},
{d:"2021-04-24",h:"Dynamo Moscow",hc:"RU",a:"FC Khimki",ac:"RU",sc:"0:1",st:"VTB Arena",ct:"Moscow",cc:"RU",cmp:"RPL",rnd:"27"},
{d:"2021-05-02",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Chertanovo Moscow",ac:"RU",sc:"1:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"40"},
{d:"2021-05-15",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Irtysh Omsk",ac:"RU",sc:"2:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"42"},
{d:"2021-06-22",h:"WFC Yenisey Krasnoyarsk",hc:"RU",a:"WFC Krasnodar",ac:"RU",sc:"3:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"WOM",rnd:"12"},
{d:"2021-07-02",h:"Switzerland",hc:"CH",a:"Spain",ac:"ES",sc:"1:1",st:"Gazprom Arena",ct:"Saint Petersburg",cc:"RU",cmp:"EUR",rnd:"QF",att:24764,pens:"1:3"},
{d:"2021-07-17",h:"Yenisey Krasnoyarsk",hc:"RU",a:"PFC Kuban Krasnodar",ac:"RU",sc:"2:2",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"2"},
{d:"2021-09-19",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Tom Tomsk",ac:"RU",sc:"2:3",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"12"},
{d:"2021-10-09",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Rotor Volgograd",ac:"RU",sc:"1:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"16",att:500},
{d:"2021-10-27",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Krylia Sovetov Samara",ac:"RU",sc:"1:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"CUP",rnd:"GRP"},
{d:"2021-11-27",h:"Yenisey Krasnoyarsk",hc:"RU",a:"SKA-Khabarovsk",ac:"RU",sc:"3:1",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"25"},

/* ---- 2022 ---- */
{d:"2022-03-12",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Metallurg Lipetsk",ac:"RU",sc:"2:1",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"27"},
{d:"2022-03-24",h:"Yenisey-2 Krasnoyarsk",hc:"RU",a:"Amkal Moscow",ac:"RU",sc:"0:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"FR"},
{d:"2022-03-25",h:"WFC Yenisey Krasnoyarsk",hc:"RU",a:"WFC Lokomotiv Moscow",ac:"RU",sc:"0:1",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"WOM",rnd:"3"},
{d:"2022-03-26",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Fakel Voronezh",ac:"RU",sc:"2:1",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"29"},
{d:"2022-04-02",h:"Tom Tomsk",hc:"RU",a:"Yenisey Krasnoyarsk",ac:"RU",sc:"0:1",st:"Stadion Trud",ct:"Tomsk",cc:"RU",cmp:"RFL",rnd:"30"},
{d:"2022-04-06",h:"Yenisey Krasnoyarsk",hc:"RU",a:"FC Orenburg",ac:"RU",sc:"1:2",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"31"},
{d:"2022-04-10",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Akron Tolyatti",ac:"RU",sc:"3:2",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"32"},
{d:"2022-04-16",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Neftekhimik Nizhnekamsk",ac:"RU",sc:"2:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"33"},
{d:"2022-04-20",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Rubin Kazan",ac:"RU",sc:"3:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"CUP",rnd:"QF"},
{d:"2022-04-30",h:"Yenisey Krasnoyarsk",hc:"RU",a:"KAMAZ Naberezhnye Chelny",ac:"RU",sc:"0:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"35"},
{d:"2022-05-11",h:"Spartak Moscow",hc:"RU",a:"Yenisey Krasnoyarsk",ac:"RU",sc:"3:0",st:"Lukoil Arena",ct:"Moscow",cc:"RU",cmp:"CUP",rnd:"SF"},
{d:"2022-05-11",h:"Luch Atemi",hc:"RU",a:"Kurkino Moscow",ac:"RU",sc:"5:1",st:"Stadion Luch",ct:"Moscow",cc:"RU",cmp:"MSKA"},
{d:"2022-05-12",h:"Sokol Moscow",hc:"RU",a:"Molniya Moscow",ac:"RU",sc:"1:0",st:"Arena Sokol",ct:"Moscow",cc:"RU",cmp:"MSKB"},
{d:"2022-05-12",h:"Rodina-M Moscow",hc:"RU",a:"SShOR Torpedo Yunost Moskvy",ac:"RU",sc:"4:3",st:"Stadion Spartakovets im. Starostina",ct:"Moscow",cc:"RU",cmp:"MSKB"},
{d:"2022-09-04",h:"Yenisey Krasnoyarsk",hc:"RU",a:"SKA-Khabarovsk",ac:"RU",sc:"1:1",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"8"},
{d:"2022-09-18",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Akron Tolyatti",ac:"RU",sc:"0:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"10"},
{d:"2022-10-01",h:"Phuket Andaman",hc:"TH",a:"Young Singh Hatyai United",ac:"TH",sc:"4:3",st:"Surakul Stadium",ct:"Phuket",cc:"TH",cmp:"TH3C"},
{d:"2022-11-13",h:"Yenisey-2 Krasnoyarsk",hc:"RU",a:"Dynamo St. Petersburg",ac:"RU",sc:"2:2",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"SL2",rnd:"22"},
{d:"2022-11-20",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Alania Vladikavkaz",ac:"RU",sc:"2:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"19"},

/* ---- 2023 ---- */
{d:"2023-01-15",h:"Hua Hin City",hc:"TH",a:"Angthong FC",ac:"TH",sc:"1:2",st:"Hua Hin Municipal Stadium",ct:"Hua Hin",cc:"TH",cmp:"TH3C"},
{d:"2023-01-29",h:"Hua Hin City",hc:"TH",a:"Dragon Pathumwan Kanchanaburi",ac:"TH",sc:"0:1",st:"Hua Hin Municipal Stadium",ct:"Hua Hin",cc:"TH",cmp:"TH3C"},
{d:"2023-02-03",h:"Port Bangkok",hc:"TH",a:"Police Tero",ac:"TH",sc:"2:2",st:"PAT Stadium",ct:"Bangkok",cc:"TH",cmp:"TH1",rnd:"18"},
{d:"2023-02-04",h:"BG Pathum United",hc:"TH",a:"Buriram United",ac:"TH",sc:"0:2",st:"BG Stadium",ct:"Pathum Thani",cc:"TH",cmp:"TH1",rnd:"18"},
{d:"2023-03-05",h:"Hua Hin City",hc:"TH",a:"Assumption United Thonburi",ac:"TH",sc:"4:3",st:"Hua Hin Municipal Stadium",ct:"Hua Hin",cc:"TH",cmp:"TH3C",price:"109 ₽",note:"cash"},
{d:"2023-03-19",h:"Hua Hin City",hc:"TH",a:"Samut Songkhram FC",ac:"TH",sc:"1:2",st:"Hua Hin Municipal Stadium",ct:"Hua Hin",cc:"TH",cmp:"TH3C",price:"50 THB"},
{d:"2023-08-13",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Neftekhimik Nizhnekamsk",ac:"RU",sc:"2:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"5"},
{d:"2023-08-13",h:"Yenisey-2 Krasnoyarsk",hc:"RU",a:"Baltika-BFU Kaliningrad",ac:"RU",sc:"1:3",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"SLB",rnd:"4"},
{d:"2023-09-09",h:"Yenisey-2 Krasnoyarsk",hc:"RU",a:"Khimik Dzerzhinsk",ac:"RU",sc:"2:4",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"SLB",rnd:"8"},
{d:"2023-09-10",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Rodina Moscow",ac:"RU",sc:"2:2",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"9"},
{d:"2023-10-01",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Dynamo Makhachkala",ac:"RU",sc:"0:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"12"},
{d:"2023-10-22",h:"Yenisey-2 Krasnoyarsk",hc:"RU",a:"Znamya Truda Orekhovo-Zuyevo",ac:"RU",sc:"2:2",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"SLB",rnd:"14"},
{d:"2023-10-28",h:"Yenisey Krasnoyarsk",hc:"RU",a:"KAMAZ Naberezhnye Chelny",ac:"RU",sc:"2:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"16"},
{d:"2023-11-04",h:"WFC Yenisey Krasnoyarsk",hc:"RU",a:"WFC Rubin Kazan",ac:"RU",sc:"3:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"WOM",rnd:"LT2"},

/* ---- 2024 ---- */
{d:"2024-03-02",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Torpedo Moscow",ac:"RU",sc:"1:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"21",att:2863},
{d:"2024-03-09",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Akron Tolyatti",ac:"RU",sc:"2:3",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"22"},
{d:"2024-03-30",h:"Yenisey Krasnoyarsk",hc:"RU",a:"FC Khimki",ac:"RU",sc:"4:1",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"25"},
{d:"2024-04-07",h:"Yenisey-2 Krasnoyarsk",hc:"RU",a:"FC Tver",ac:"RU",sc:"1:2",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"SLB",rnd:"1"},
{d:"2024-04-13",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Alania Vladikavkaz",ac:"RU",sc:"4:1",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"27",price:"150 ₽"},
{d:"2024-04-28",h:"Yenisey-2 Krasnoyarsk",hc:"RU",a:"Luki-Energiya",ac:"RU",sc:"0:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"SLB",rnd:"4",price:"0 ₽"},
{d:"2024-04-28",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Volgar Astrakhan",ac:"RU",sc:"1:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"30",price:"200 ₽"},
{d:"2024-05-25",h:"Yenisey Krasnoyarsk",hc:"RU",a:"FC Tyumen",ac:"RU",sc:"2:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"34"},
{d:"2024-07-14",h:"Yenisey Krasnoyarsk",hc:"RU",a:"KAMAZ Naberezhnye Chelny",ac:"RU",sc:"2:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"1",price:"150 ₽"},
{d:"2024-08-18",h:"Yenisey Krasnoyarsk",hc:"RU",a:"PFC Sochi",ac:"RU",sc:"1:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"6",price:"200 ₽"},
{d:"2024-09-29",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Ural Yekaterinburg",ac:"RU",sc:"3:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"12"},
{d:"2024-10-20",h:"Yenisey Krasnoyarsk",hc:"RU",a:"FC Ufa",ac:"RU",sc:"1:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"15"},
{d:"2024-10-26",h:"FC Tyumen",hc:"RU",a:"Yenisey Krasnoyarsk",ac:"RU",sc:"4:1",st:"Stadion Geolog",ct:"Tyumen",cc:"RU",cmp:"RFL",rnd:"16"},
{d:"2024-11-02",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Rotor Volgograd",ac:"RU",sc:"2:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"17",att:2793},
{d:"2024-11-23",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Shinnik Yaroslavl",ac:"RU",sc:"0:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"20"},

/* ---- 2025 ---- */
{d:"2025-03-22",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Neftekhimik Nizhnekamsk",ac:"RU",sc:"2:0",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"25"},
{d:"2025-05-10",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Sokol Saratov",ac:"RU",sc:"2:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"32"},
{d:"2025-05-24",h:"Yenisey Krasnoyarsk",hc:"RU",a:"FC Tyumen",ac:"RU",sc:"4:3",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"34"},
{d:"2025-07-20",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Chayka Peschanokopskoye",ac:"RU",sc:"0:3",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"1"},
{d:"2025-07-27",h:"FC Irkutsk",hc:"RU",a:"Yenisey-2 Krasnoyarsk",ac:"RU",sc:"2:0",st:"Stadion Shakhter",ct:"Cheremkhovo",cc:"RU",cmp:"SLB",rnd:"16"},
{d:"2025-08-30",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Sokol Saratov",ac:"RU",sc:"1:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"7"},
{d:"2025-09-29",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Torpedo Moscow",ac:"RU",sc:"0:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"12",att:2710},

/* ---- 2026 ---- */
{d:"2026-03-01",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Volga Ulyanovsk",ac:"RU",sc:"1:1",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"22"},
{d:"2026-03-14",h:"WFC Yenisey Krasnoyarsk",hc:"RU",a:"WFC Spartak Moscow",ac:"RU",sc:"1:5",st:"Manezh Futbol-Arena Yenisey",ct:"Krasnoyarsk",cc:"RU",cmp:"WOM",rnd:"1"},
{d:"2026-04-12",h:"Yenisey-2 Krasnoyarsk",hc:"RU",a:"Zvezda St. Petersburg",ac:"RU",sc:"2:1",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"SLB",rnd:"3"},
{d:"2026-05-11",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Arsenal Tula",ac:"RU",sc:"1:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"33"},
{d:"2026-06-07",h:"Yenisey-2 Krasnoyarsk",hc:"RU",a:"Kosmos Khimki",ac:"RU",sc:"1:2",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"SLB",rnd:"11"},
{d:"2026-08-08",h:"Yenisey Krasnoyarsk",hc:"RU",a:"Tekstilshchik Ivanovo",ac:"RU",sc:"0:0",st:"Tsentralnyi Stadion",ct:"Krasnoyarsk",cc:"RU",cmp:"RFL",rnd:"5"},
{d:"2026-10-24",h:"Hua Hin City",hc:"TH",a:"Phetchaburi PBRU",ac:"TH",sc:"1:0",st:"Hua Hin Municipal Stadium",ct:"Hua Hin",cc:"TH",cmp:"TH3W"},
{d:"2026-10-31",h:"Phetchaburi PBRU",hc:"TH",a:"Samut Songkhram City",ac:"TH",sc:"1:1",st:"Phetchaburi Rajabhat University Stadium",ct:"Phetchaburi",cc:"TH",cmp:"TH3W"}
];

/* ============ НУМЕРАЦИЯ НОВЫХ СТАДИОНОВ (по списку владельца) ============ */
const STADIUM_NUM={
  "Tsentralnyi Stadion":1,
  "Manezh Futbol-Arena Yenisey":2,
  "Stadion Luzhniki":3,
  "Gazprom Arena":4,
  "Lukoil Arena":5,
  "RZD Arena":6,
  "Stadion Luch":7,
  "Arena Sokol":8,
  "Stadion Spartakovets im. Starostina":9,
  "VTB Arena":10,
  "Stadion Trud":11,
  "Surakul Stadium":12,
  "Hua Hin Municipal Stadium":13,
  "PAT Stadium":14,
  "BG Stadium":15,
  "Stadion Geolog":16,
  "Stadion Shakhter":17,
  "Phetchaburi Rajabhat University Stadium":18
};
const FIRST_VISIT={};
for(const m of MATCHES){if(!(m.st in FIRST_VISIT)||m.d<FIRST_VISIT[m.st])FIRST_VISIT[m.st]=m.d;}
function badgeText(n){
  if(lang==="ru")return"новый стадион №"+n;
  if(lang==="zh")return"第"+n+"座新体育场";
  return"new stadium #"+n;
}

/* ============ ПЕРЕВОДЫ ============ */
const I18N={
  ru:{slogan:"Ишь ты, Масленица! / граундхоппер из Сибири",locale:"ru-RU",
      tabs:{matches:"Матчи",clubs:"Клубы",stadiums:"Стадионы",cities:"Города"},
      stats:{matches:"матчей",countries:"стран",stadiums:"стадионов",cities:"городов",clubs:"клубов"},
      new:"новый стадион",free:"бесплатно",all:"Все"},
  en:{slogan:"Well, well — it's Maslenitsa! / groundhopper from Siberia",locale:"en-GB",
      tabs:{matches:"Matches",clubs:"Clubs",stadiums:"Stadiums",cities:"Cities"},
      stats:{matches:"matches",countries:"countries",stadiums:"stadiums",cities:"cities",clubs:"clubs"},
      new:"new stadium",free:"free entry",all:"All"},
  zh:{slogan:"哟，是的 — 谢肉节到了！/ 来自西伯利亚的球场旅行者",locale:"zh-CN",
      tabs:{matches:"比赛",clubs:"俱乐部",stadiums:"体育场",cities:"城市"},
      stats:{matches:"场",countries:"国家",stadiums:"体育场",cities:"城市",clubs:"俱乐部"},
      new:"新体育场",free:"免费",all:"全部"}
};

const COUNTRY={
  RU:{ru:"Россия",en:"Russia",zh:"俄罗斯"},
  TH:{ru:"Таиланд",en:"Thailand",zh:"泰国"},
  CH:{ru:"Швейцария",en:"Switzerland",zh:"瑞士"},
  ES:{ru:"Испания",en:"Spain",zh:"西班牙"},
  FR:{ru:"Франция",en:"France",zh:"法国"},
  BE:{ru:"Бельгия",en:"Belgium",zh:"比利时"},
  SE:{ru:"Швеция",en:"Sweden",zh:"瑞典"}
};

const COMP={
  RFL:{ru:"Первая лига",en:"Russian First League",zh:"俄罗斯甲级联赛"},
  RPL:{ru:"Премьер-лига",en:"Russian Premier League",zh:"俄罗斯超级联赛"},
  CUP:{ru:"Кубок России",en:"Russian Cup",zh:"俄罗斯杯"},
  WOM:{ru:"Суперлига (жен.)",en:"Russian Supreme Division Women",zh:"俄罗斯女子超级联赛"},
  SL2:{ru:"Вторая лига, группа 2",en:"Second League, Group 2",zh:"俄罗斯乙级联赛 第2组"},
  SLB:{ru:"Вторая лига Б, группа 2",en:"Second League B, Group 2",zh:"俄罗斯乙级联赛B 第2组"},
  EUR:{ru:"Чемпионат Европы",en:"UEFA European Championship",zh:"欧洲足球锦标赛"},
  WC:{ru:"Чемпионат мира",en:"FIFA World Cup",zh:"世界杯"},
  TH1:{ru:"Тайская лига 1",en:"Thai League 1",zh:"泰国超级联赛"},
  TH3C:{ru:"Третья лига Таиланда, Центр",en:"Thai League 3, Central region",zh:"泰国丙级联赛 中部"},
  TH3W:{ru:"Третья лига Таиланда, Запад",en:"Thai League 3, Western region",zh:"泰国丙级联赛 西部"},
  MSKA:{ru:"Чемпионат Москвы, дивизион A",en:"Moscow Championship, Division A",zh:"莫斯科锦标赛 A组"},
  MSKB:{ru:"Чемпионат Москвы, дивизион B",en:"Moscow Championship, Division B",zh:"莫斯科锦标赛 B组"},
  FR:{ru:"Товарищеский матч",en:"Friendly",zh:"友谊赛"}
};

const SPECIAL={
  R16:{ru:"1/16 финала",en:"1/16 finals",zh:"1/16决赛"},
  QF:{ru:"1/4 финала",en:"Quarter-finals",zh:"四分之一决赛"},
  SF:{ru:"полуфинал",en:"Semi-finals",zh:"半决赛"},
  GRP:{ru:"групповой этап",en:"Group stage",zh:"小组赛"},
  LT2:{ru:"нижний раунд, тур 2",en:"Lower-table round 2",zh:"保级组 第2轮"}
};

const NOTES={
  fanid:{ru:"Fan ID: нет",en:"No Fan-ID",zh:"无Fan-ID"},
  cash:{ru:"билет за наличные",en:"cash ticket",zh:"现金购票"},
  elite:{ru:"элитный раунд, 3 тур",en:"elite round, tour 3",zh:"精英轮 第3轮"}
};

const PEN={ru:"пен.",en:"pens",zh:"点球"};

/* ============ ФЛАГИ (SVG) ============ */
function flag(c){
  const s={
    RU:'<svg class="flag" viewBox="0 0 9 6"><rect width="9" height="2" fill="#fff"/><rect y="2" width="9" height="2" fill="#0039a6"/><rect y="4" width="9" height="2" fill="#d52b1e"/></svg>',
    TH:'<svg class="flag" viewBox="0 0 9 6"><rect width="9" height="6" fill="#a51931"/><rect y="1" width="9" height="4" fill="#f4f5f8"/><rect y="2" width="9" height="2" fill="#2d2a4a"/></svg>',
    CH:'<svg class="flag" viewBox="0 0 9 9"><rect width="9" height="9" fill="#da291c"/><rect x="3.5" y="1.5" width="2" height="6" fill="#fff"/><rect x="1.5" y="3.5" width="6" height="2" fill="#fff"/></svg>',
    ES:'<svg class="flag" viewBox="0 0 9 6"><rect width="9" height="6" fill="#aa151b"/><rect y="1.5" width="9" height="3" fill="#f1bf00"/></svg>',
    FR:'<svg class="flag" viewBox="0 0 9 6"><rect width="3" height="6" fill="#0055a4"/><rect x="3" width="3" height="6" fill="#fff"/><rect x="6" width="3" height="6" fill="#ef4135"/></svg>',
    BE:'<svg class="flag" viewBox="0 0 9 6"><rect width="3" height="6" fill="#000"/><rect x="3" width="3" height="6" fill="#fdda24"/><rect x="6" width="3" height="6" fill="#ef3340"/></svg>',
    SE:'<svg class="flag" viewBox="0 0 9 6"><rect width="9" height="6" fill="#006aa7"/><rect x="3" width="1.6" height="6" fill="#fecc00"/><rect y="2.2" width="9" height="1.6" fill="#fecc00"/></svg>'
  };
  return s[c]||"";
}

/* ============ ХЕЛПЕРЫ ============ */
let lang="ru";
let tab="stadiums";
let yearFilter="all";
function T(){return I18N[lang];}
function countryName(c){const o=COUNTRY[c];return o?o[lang]:c;}
function roundText(r){
  if(!r)return"";
  if(/^[0-9]+$/.test(r)){
    const n=+r;
    if(lang==="zh")return"第"+n+"轮";
    if(lang==="ru")return"тур "+n;
    return"Round "+n;
  }
  const s=SPECIAL[r];return s?s[lang]:r;
}
function compText(m){
  const c=COMP[m.cmp];if(!c)return"";
  let s=c[lang];
  const r=roundText(m.rnd);
  if(r)s+=", "+r;
  return s;
}
function fmtDate(d){
  const dt=new Date(d+"T12:00:00");
  return dt.toLocaleDateString(T().locale,{day:"2-digit",month:"2-digit",year:"numeric"});
}
function fmtNum(n){return n.toLocaleString(T().locale);}
function chipsHTML(m){
  const t=T();let out="";
  if(m.att)out+='<span class="chip">👥 '+fmtNum(m.att)+"</span>";
  if(m.price)out+='<span class="chip">🎟 '+(m.price==="0 ₽"?t.free:m.price)+"</span>";
  if(m.note&&NOTES[m.note])out+='<span class="chip">'+NOTES[m.note][lang]+"</span>";
  if(m.pens)out+='<span class="chip">'+PEN[lang]+" "+m.pens+"</span>";
  return out;
}

/* ============ РЕНДЕР ============ */
function content(html){document.getElementById("content").innerHTML=html;}

function renderMatches(){
  let sorted=[...MATCHES].sort((x,y)=>y.d.localeCompare(x.d));
  const t=T();
  const years=[...new Set(MATCHES.map(m=>m.d.slice(0,4)))].sort((a,b)=>b.localeCompare(a));
  let chips='<div class="year-chips">'
    +'<button class="ychip'+(yearFilter==="all"?" on":"")+'" data-y="all">'+t.all+"</button>"
    +years.map(y=>'<button class="ychip'+(yearFilter===y?" on":"")+'" data-y="'+y+'">'+y+"</button>").join("")
    +"</div>";
  if(yearFilter!=="all")sorted=sorted.filter(m=>m.d.slice(0,4)===yearFilter);
  let html=chips,year="";
  for(const m of sorted){
    const y=m.d.slice(0,4);
    if(yearFilter==="all"&&y!==year){year=y;html+='<h2 class="year">'+y+"</h2>";}
    const num=STADIUM_NUM[m.st];
    const show=num&&FIRST_VISIT[m.st]===m.d;
    html+='<div class="card">'
      +'<div class="c-top"><span class="date">'+fmtDate(m.d)+'</span><span class="comp">'+compText(m)+"</span></div>"
      +'<div class="c-teams"><div class="team">'+flag(m.hc)+"<span>"+m.h+"</span></div>"
      +'<div class="score">'+m.sc+"</div>"
      +'<div class="team"><span>'+m.a+"</span>"+flag(m.ac)+"</div></div>"
      +'<div class="c-foot"><span class="venue">'+m.st+" · "+m.ct+'</span><span class="chips">'
      +(show?'<span class="badge">'+badgeText(num)+"</span>":"")+chipsHTML(m)+"</span></div>"
      +"</div>";
  }
  content(html);
}

function listHTML(items){
  const max=Math.max.apply(null,items.map(i=>i.count));
  return items.map(i=>
    '<div class="row">'
    +'<div class="row-head">'+flag(i.country)+'<span class="name">'+i.name+"</span></div>"
    +(i.sub?'<div class="row-sub">'+i.sub+"</div>":"")
    +'<div class="row-bar"><div class="bar"><div class="fill" style="width:'+Math.round(i.count/max*100)+'%"></div></div>'
    +'<span class="cnt">'+i.count+"</span></div>"
    +"</div>"
  ).join("");
}

function aggStadiums(){
  const map=new Map();
  for(const m of MATCHES){
    if(!map.has(m.st))map.set(m.st,{name:m.st,count:0,country:m.cc,sub:""});
    const e=map.get(m.st);e.count++;
    if(!e.sub)e.sub=m.ct+" · "+countryName(m.cc);
  }
  return[...map.values()].sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name));
}
function aggClubs(){
  const map=new Map();
  for(const m of MATCHES){
    for(const[n,c]of[[m.h,m.hc],[m.a,m.ac]]){
      if(!map.has(n))map.set(n,{name:n,count:0,country:c,sub:countryName(c)});
      map.get(n).count++;
    }
  }
  return[...map.values()].sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name));
}
function aggCities(){
  const map=new Map();
  for(const m of MATCHES){
    if(!map.has(m.ct))map.set(m.ct,{name:m.ct,count:0,country:m.cc,sub:countryName(m.cc)});
    map.get(m.ct).count++;
  }
  return[...map.values()].sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name));
}

function render(){
  const t=T();
  document.getElementById("slogan").textContent=t.slogan;
  document.querySelectorAll("#tabs button").forEach(b=>{
    b.textContent=t.tabs[b.dataset.t];
    b.classList.toggle("on",b.dataset.t===tab);
  });
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===lang));
  renderStats();
  if(tab==="matches")renderMatches();
  else if(tab==="clubs")content(listHTML(aggClubs()));
  else if(tab==="stadiums")content(listHTML(aggStadiums()));
  else content(listHTML(aggCities()));
}

/* Ссылка на карту стадионов (Google My Maps) */
const MAP_URL="https://www.google.com/maps/d/u/0/edit?mid=1ZVQb9u8lfBeSaSMGkvcbnLCBwhezRBo&usp=sharing";

/* Статистика зафиксирована по данным владельца: 101 матч, 2 страны, 18 стадионов, 11 городов, 82 клуба */
function renderStats(){
  const FIXED={stadiums:18,matches:101,countries:2,cities:11,clubs:82};
  const s=T().stats;
  const card=(v,l)=>'<div class="st"><div class="v">'+v+'</div><div class="l">'+l+"</div></div>";
  const linkCard=(v,l)=>'<a class="st-link" href="'+MAP_URL+'" target="_blank" rel="noopener">'+card(v,l)+"</a>";
  document.getElementById("stats").innerHTML=
    linkCard(FIXED.stadiums,s.stadiums)+card(FIXED.matches,s.matches)+
    card(FIXED.countries,s.countries)+card(FIXED.cities,s.cities)+card(FIXED.clubs,s.clubs);
}

/* ============ ЦВЕТ МЕТКИ: кленовый сироп ============ */
(function(){
  const st=document.createElement("style");
  st.textContent=".badge{background:rgba(199,123,58,.16);color:#c77b3a;border:1px solid #c77b3a;box-shadow:0 0 5px rgba(199,123,58,.35)}"
    +".site-logo{width:54px;height:54px;border-radius:50%;object-fit:cover;box-shadow:0 2px 8px rgba(0,0,0,.5);margin-right:10px;flex-shrink:0}.year-chips{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px}.ychip{background:var(--card2,#232326);border:1px solid #2c2c30;color:var(--muted,#9aa0a6);border-radius:999px;padding:5px 13px;font-size:12.5px;cursor:pointer}.ychip.on,.ychip:hover{background:var(--amber,#ffb020);color:#151515;border-color:var(--amber,#ffb020);font-weight:600}.st-link{text-decoration:none}.st{transition:transform .15s,border-color .15s,box-shadow .15s}.st-link:hover .st{border-color:var(--amber,#ffb020);box-shadow:0 2px 12px rgba(255,176,32,.25);transform:translateY(-2px)}";
  document.head.appendChild(st);
})();

/* ============ ЛОГОТИП ============ */
(function(){
  const el=document.createElement("img");
  el.className="site-logo";
  el.alt="Fake Pancake";
  el.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='#1c1c1e'/><line x1='26' y1='24' x2='76' y2='56' stroke='#f2f2f2' stroke-width='4' stroke-linecap='round'/><line x1='74' y1='24' x2='24' y2='56' stroke='#f2f2f2' stroke-width='4' stroke-linecap='round'/><rect x='24' y='42' width='52' height='32' rx='5' fill='#c77b3a'/><rect x='24' y='36' width='52' height='10' rx='5' fill='#f2d8b8'/><line x1='37' y1='46' x2='37' y2='72' stroke='#8a5424' stroke-width='2'/><line x1='50' y1='46' x2='50' y2='72' stroke='#8a5424' stroke-width='2'/><line x1='63' y1='46' x2='63' y2='72' stroke='#8a5424' stroke-width='2'/><text x='50' y='68' font-family='Arial' font-size='15' font-weight='bold' fill='#121212' text-anchor='middle'>FP</text></svg>");
  const sl=document.getElementById("slogan");
  const hdr=sl?(sl.closest("header")||sl.parentElement):document.body;
  hdr.insertBefore(el,hdr.firstChild);
})();

/* ============ СОБЫТИЯ ============ */
document.getElementById("tabs").addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  tab=b.dataset.t;render();
});
document.querySelector(".lang").addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  lang=b.dataset.l;render();
});
document.getElementById("content").addEventListener("click",e=>{
  const b=e.target.closest(".ychip");if(!b)return;
  yearFilter=b.dataset.y;renderMatches();
});
render();
