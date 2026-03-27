const VERSES = [
  {
    text: "Esperei com paciência no Senhor, e ele se inclinou para mim, e ouviu o meu clamor.",
    ref: "Salmos 40:1",
  },
  {
    text: "Quem é paciente tem grande entendimento, mas o irascível demonstra grande insensatez.",
    ref: "Provérbios 14:29",
  },
  {
    text: "Melhor é o paciente do que o orgulhoso de espírito.",
    ref: "Eclesiastes 7:8",
  },
  {
    text: "A tribulação produz perseverança; a perseverança, um caráter aprovado; e o caráter aprovado, esperança.",
    ref: "Romanos 5:3-4",
  },
  {
    text: "Corramos com perseverança a corrida que nos é proposta.",
    ref: "Hebreus 12:1",
  },
  {
    text: "Não nos cansemos de fazer o bem, pois, se não desanimarmos, a seu tempo ceifaremos.",
    ref: "Gálatas 6:9",
  },
  {
    text: "Sede alegres na esperança, pacientes na tribulação, perseverantes na oração.",
    ref: "Romanos 12:12",
  },
];

const verse = VERSES[Math.floor(Math.random() * VERSES.length)];

export default function BibleVerseRotator() {
  return (
    <div className="bvr-wrapper">
      <div className="bvr-decoration" aria-hidden="true">
        ✦
      </div>

      <div className="bvr-verse-container">
        <blockquote className="bvr-verse-text">
          &ldquo;{verse.text}&rdquo;
        </blockquote>
        <cite className="bvr-verse-ref">{verse.ref}</cite>
      </div>
    </div>
  );
}
