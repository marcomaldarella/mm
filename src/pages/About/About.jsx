import React, { useState } from "react";
import Footer from "../footer/Footer";
import "./About.css";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredEventIndex, setHoveredEventIndex] = useState(null);

  const projects = [
    {
      title: "KR3 Records",
      category: "Rebranding & Website Developing",
      "running time": `KR3 Records`,
      year: 2022,
    },
    {
      title: "Tenartist",
      category: "Web Developing",
      "running time": `Art direction by Motel Milano`,
      year: 2024,
    },
    {
      title: "Indaco",
      category: "UX Design & Web Developing",
      "running time": `Art direction by Auiki`,
      year: 2019,
    },
    {
      title: "Anafase",
      category: "Visual identity & Content creation",
      "running time": `Anafase`,
      year: 2022,
    },
    {
      title: "Marmo - Epistolae",
      category: "Art Direction & Graphic Design",
      "running time": `Utter Records`,
      year: 2023,
    },
    {
      title: "Vādin - Taiyō",
      category: "Art Direction & Graphic Design",
      "running time": `Utter Records`,
      year: 2020,
    },
    {
      title: "Marco Grassi",
      category: "Web Developing",
      "running time": `Art direction by Motel Milano`,
      year: 2024,
    },
    {
      title: "Onira",
      category: "Visual Indentity & Website",
      "running time": `Rodolfo Lissia & Filippo Schiaffino`,
      year: 2021,
    },
    {
      title: "Moreover Agency",
      category: "Visual Indentity & Website",
      "running time": `Moreover Studios`,
      year: 2022,
    },
    {
      title: "Barkosina Anusova - Fasting Culture",
      category: "Book Design",
      "running time": `Barkosina Anusova & Modular Mind Records`,
      year: 2020,
    },
  ];

  const events = [
    {
      title: "Beyond Common Ideas present Periellisso: Marco Maldarella (Live) +A/V Show",
      when: "10.12.15",
      where: "Ono Arte, Bologna",
      role: "Liveset & Exhibition",
    },
    {
      title: "Habitat & ArteFiera presents: Marco Maldarella(Live), Presente, Andrea Masciadri (Live visuals)",
      when: "28.01.16",
      where: "Dynamo, Bologna",
      role: "Liveset",
    },
    {
      title: "Link presents BOLO: CNC, Light Minded, Kobold, Quiet Sunday",
      when: "02.04.16",
      where: "Link, Bologna",
      role: "Marmo Live",
    },
    {
      title: "Kaos presents Khemia Release Party with: Rrose, Marmo Live, Lupus, Inept, Choronzon      ",
      when: "25.06.16",
      where: "Elektrowerkz, London",
      role: "Marmo Live",
    },
    {
      title: "Link presents BOLO: DMCS, Stefano Sabia,  Marco Maldarella (Live), S/I/O (Live), Dumbo Beat, Nudge      ",
      when: "09.07.16",
      where: "Link, Bologna",
      role: "Liveset",
    },
    {
      title: "Kaos vs Unmasked with: Codex Empire, Max Durante. Choronzon, Marmo (Live)",
      when: "17.12.16",
      where: "Elektrowerkz, London",
      role: "Marmo Live",
    },
    ,
    {
      title: "Moho #7: Don't DJ, Paolo Davide, Marmo (Live), Elios",
      when: "25.12.16ì",
      where: "Cocoricò, Riccione",
      role: "Marmo Live",
    },
    {
      title: "Timeshift, Bum, Whp NYE17: Shkedul, Marmo (Live), Cnc & Kobold",
      when: "31.12.16",
      where: "Laboratorio Crash, Bologna",
      role: "Marmo Live",
    },
    ,
    {
      title: "Tresor Newfaces presents: Marmo(Live), Cirkle, Progression",
      when: "01.02.17",
      where: "Tresor, Berlin",
      role: "Marmo Live",
    },
    {
      title: "Qloom presents: Marmo (Live), Adriano Canzian",
      when: "02.04.17",
      where: "Ca' Degli Uberti, Mantova",
      role: "Marmo Live",
    },
    {
      title: "Timeshift presents: Broken English Club, Silent Servant, Domenico Crisci, Marmo (Live)",
      when: "10.04.17",
      where: "ZR Factory, Bologna",
      role: "Marmo Live",
    },
    {
      title: "Ambivalen+ presents: Rrose | Rrose, Choronzon, Marco Maldarella (Visual show), Devianza, Lorac",
      when: "21.05.17",
      where: "The institute of Light , London",
      role: "Visual Show",
    },
    {
      title: "Ambivalen+ presents: Kodex Empire, Devianza, Years of Denial, Marco Maldarella & Christian Duka, Lorac",
      when: "16.07.17",
      where: "The institute of Light , London",
      role: "A/V Show with Christian Duka",
    },
    {
      title: "Timeshift presents: James Ruskin, Eomac, Cristian Marras, Marmo (Live)",
      when: "24.11.17",
      where: "Kindergarten, Bologna",
      role: "Marmo Live",
    },
    {
      title: "M II M II: Human Performance Lab (Live), Acid Vatican, Sarin, Faux Naif, Marmo (Live)",
      when: "8.11.18",
      where: "The Glove That Fits, London",
      role: "Marmo Live",
    },
    {
      title: "Artfutura Festival presents: Marco Maldarella & Christian Duka, Paul Friedlander, Claude Heiland-Allen",
      when: "22.11.18",
      where: "Stour Space, London",
      role: "A/V show with Christian Duka",
    },
    {
      title: "Hands XII: Rafal S, Marco Maldarella, Tullia Benedicta, Radiation Pattern, Flavio Deff, Quiet Sunday, Kobold, CNC",
      when: "30.11.18",
      where: "Kindergarten, Bologna",
      role: "DJset",
    },
    {
      title: "UR: Human Presence - Rebecca Evans, Jose Macabra, Sundip Aujla, Pell Ensemble,Elissavet Sfyri",
      when: "20.10.18",
      where: "Aures, London",
      role: "Light design & Visuals",
    },
    {
      title: "Hands XII: Rafal S, Marco Maldarella, Tullia Benedicta, Radiation Pattern, Flavio Deff, Quiet Sunday, Kobold, CNC",
      when: "30.11.18",
      where: "Kindergarten, Bologna",
      role: "DJset",
    },
    {
      title: "Co-Select invites Beyond Common Ideas: Airali, Enki, Ugo Leone, Marco Maldarella, Emmy Bacharach, Will Hofbauer",
      when: "30.11.18",
      where: "Grow Tottenham, London",
      role: "Live-set",
    },
    {
      title: "XOLO Takeover: Marco Maldarella & Christian Duka A/V",
      when: "13.09.20",
      where: "XOLO",
      role: "A/V Livestreaming",
    },
    {
      title: "XOLO Takeover: Marco Maldarella & Christian Duka A/V",
      when: "13.09.20",
      where: "XOLO",
      role: "A/V Livestreaming",
    }
    ,
    {
      title: "Marco Maldarella & Christian Duka present Holistic Miscommunications A/V",
      when: "22.09.20",
      where: "Iklectik - Art Council England",
      role: "A/V Livestreaming",
    },
    {
      title: "Sinestesie DanceDance: Canebau, Marco Maldarella",
      when: "02.12.21",
      where: "Circolo Dev, Bologna",
      role: "Liveset",
    },
    {
      title: "Cage presents: Asymptote, Anastasya, Marco Maldarella",
      when: "05.11.22",
      where: "Kindergarten, Bologna",
      role: "Djset",
    },
    {
      title: "Link NYE Marathon: Marco Maldarella b2b Treega",
      when: "31.12.22",
      where: "Link, Bologna",
      role: "Djset",
    },
    {
      title: "Anafase: Claudio PRC, Leena, Marco Maldarella",
      when: "21.01.23",
      where: "Kindergarten, Bologna",
      role: "Djset",
    },
    {
      title: "De Rio presents: Rene Wise, Marco Maldarella, De Rio Sound System",
      when: "04.03.23",
      where: "Viper, Firenze",
      role: "Djset",
    },
    {
      title: "Above Below Festival: Kia, Faery, Avsluta, Ness, Shoal, Moy, Annx, Orion, Marmo (Live) & many more",
      when: "02.06.23",
      where: "South + East, London",
      role: "Marmo Djset",
    },
    {
      title: "De Rio Secret b2b Afternoon Openair: Abo Abo, Tomo, Marco Maldarella Bruna, Plastique, Gabsphere, Deatmetha, M13, Plastique, Wild Enry, Marco Baroncini",
      when: "02.09.23",
      where: "Terrafranta, Firenze",
      role: "Djset",
    },
    {
      title: "Materica Records presents: Nebula VA release party: Rudis Materia, Radiation Pattern, Marco Maldarella",
      when: "23.09.23",
      where: "8sixA, Amsterdam",
      role: "Djset",
    },
    {
      title: "NNNAAAMMM presents: Nastya Muravyova, Marco Maldarella",
      when: "29.09.23",
      where: "Tank, Bologna",
      role: "Djset",
    },
    {
      title: "Rhythm Research Showcase & RC04 Release Party: Surt, BMBMND, Ritual Cycles, Marco Maldarella",
      when: "17.11.23",
      where: "Beate Uwe, Berlin",
      role: "Djset",
    },
    {
      title: "Link presents: Endlec, Ellen Allien, Marco Maldarella",
      when: "18.11.23",
      where: "Link, Bologna",
      role: "Djset",
    },
    {
      title: "Pulse#269 - JASSS, ojoo, Marco Maldarella, Norf, Akiko",
      when: "07.12.23 ",
      where: "Argo16, Venezia - Mestre",
      role: "Djset",
    },
    {
      title: "Stagno Records presents: Atoloi (Live), CP1 (Live), Marmo (Live)",
      when: "19.12.23",
      where: "C3, Milano",
      role: "Marmo Live",
    }



  ];
  return (
    <div className="overview-page">
      <div className="table">
        <div className="t-row" id="table-header">
          <div className="index"><p>#</p></div>
          <div className="title"><p>SELECTED WORKS</p></div>
          <div className="category"><p>ROLE</p></div>
          <div className="time"><p>CLIENT</p></div>
          <div className="year"><p>YEAR</p></div>
        </div>
        {projects.map((project, index) => (
          <div
            className={`t-row ${hoveredIndex !== null && index !== hoveredIndex ? "not-hovered" : ""}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="index"><p>0{index + 1}</p></div>
            <div className="title"><p>{project.title}</p></div>
            <div className="category"><p>{project.category}</p></div>
            <div className="time"><p>{project["running time"]}</p></div>
            <div className="year"><p>{project.year}</p></div>
          </div>
        ))}
      </div>

      <div className="whitespace-300"></div>

      <div className="table">
        <div className="t-row" id="table-header">
          <div className="index"><p>#</p></div>
          <div className="title-event"><p>SELECTED EVENTS</p></div>
          <div className="role"><p>ROLE</p></div>
          <div className="where"><p>WHERE</p></div>
          <div className="when"><p>WHEN</p></div>
        </div>
        {events.map((event, index) => (
          <div
            className={`t-row ${hoveredEventIndex !== null && index !== hoveredEventIndex ? "not-hovered" : ""}`}
            key={index}
            onMouseEnter={() => setHoveredEventIndex(index)}
            onMouseLeave={() => setHoveredEventIndex(null)}
          >
            <div className="index"><p>0{index + 1}</p></div>
            <div className="title-event"><p>{event.title}</p></div>
            <div className="role"><p>{event.role}</p></div>
            <div className="where"><p>{event.where}</p></div>
            <div className="when"><p>{event.when}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
