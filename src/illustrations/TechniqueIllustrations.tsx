import React from "react";

/* ───────────────────────────────────────────────────────────
   Technique Step Illustrations
   Visual illustrations for each technique's steps.
   ─────────────────────────────────────────────────────────── */

type TechTemplate =
  | "yarn-loop"
  | "hook-insert"
  | "chain-fix"
  | "stitches-ring"
  | "pull-close"
  | "slip-stitch"
  | "slip-knot"
  | "yarn-over"
  | "pull-through"
  | "keep-tension"
  | "rhythm"
  | "test-loose"
  | "chain-center"
  | "work-one-side"
  | "turn-other-side"
  | "close-round"
  | "next-rounds"
  | "last-stitch"
  | "pull-new-color"
  | "continue-new"
  | "hide-yarn"
  | "prepare-yarns"
  | "crochet-over"
  | "follow-graph"
  | "check-tension"
  | "read-direction"
  | "select-colors"
  | "plan-bands"
  | "gradual-change"
  | "blend-optional"
  | "thread-needle"
  | "pass-inside"
  | "create-loop-join"
  | "repeat-other"
  | "pull-adjust"
  | "position-yarns"
  | "first-knot"
  | "second-knot"
  | "tighten-both"
  | "trim-ends"
  | "needle-through"
  | "change-direction"
  | "cut-close"
  | "wash-piece"
  | "remove-water"
  | "prepare-surface"
  | "pin-stretch"
  | "dry-fully"
  | "remove-pins"
  | "align-pieces"
  | "thread-tapestry"
  | "mattress-stitch"
  | "pull-every-few"
  | "finish-seam"
  | "symbol-chain"
  | "symbol-sc"
  | "symbol-dc"
  | "symbol-slst"
  | "symbol-inc"
  | "symbol-dec"
  | "find-center"
  | "first-round-graph"
  | "find-increases"
  | "repeat-sections"
  | "color-rows";

const TECH_STEP_MAPS: Record<string, TechTemplate[]> = {
  "anel-magico": [
    "yarn-loop",
    "hook-insert",
    "chain-fix",
    "stitches-ring",
    "pull-close",
    "slip-stitch",
  ],
  "corrente-base": [
    "slip-knot",
    "yarn-over",
    "keep-tension",
    "rhythm",
    "test-loose",
  ],
  "inicio-oval": [
    "chain-center",
    "work-one-side",
    "turn-other-side",
    "close-round",
    "next-rounds",
  ],
  "troca-limpa": ["last-stitch", "pull-new-color", "continue-new", "hide-yarn"],
  "tapestry-crochet": [
    "prepare-yarns",
    "crochet-over",
    "follow-graph",
    "check-tension",
    "read-direction",
  ],
  degradee: ["select-colors", "plan-bands", "gradual-change", "blend-optional"],
  "emenda-invisivel": [
    "thread-needle",
    "pass-inside",
    "create-loop-join",
    "repeat-other",
    "pull-adjust",
  ],
  "emenda-no-magico": [
    "position-yarns",
    "first-knot",
    "second-knot",
    "tighten-both",
    "trim-ends",
  ],
  "esconder-pontas": ["needle-through", "change-direction", "cut-close"],
  "bloqueio-pecas": [
    "wash-piece",
    "remove-water",
    "prepare-surface",
    "pin-stretch",
    "dry-fully",
    "remove-pins",
  ],
  "costura-invisivel": [
    "align-pieces",
    "thread-tapestry",
    "mattress-stitch",
    "pull-every-few",
    "finish-seam",
  ],
  "simbolos-basicos": [
    "symbol-chain",
    "symbol-sc",
    "symbol-dc",
    "symbol-slst",
    "symbol-inc",
    "symbol-dec",
  ],
  "grafico-circular": [
    "find-center",
    "first-round-graph",
    "find-increases",
    "repeat-sections",
    "color-rows",
  ],
};

const C = {
  hook: "#8B5E3C",
  hookShaft: "#A0724D",
  yarn: "#22a55b",
  yarnLight: "#34d372",
  yarnB: "#2980b9",
  arrow: "#e67e22",
  highlight: "#f1c40f",
  piece: "rgba(34,165,91,0.2)",
  white: "#ffffff",
  muted: "rgba(255,255,255,0.5)",
  red: "#c0392b",
};

const HookSvg = ({
  x,
  y,
  rot = -30,
  s = 1,
}: {
  x: number;
  y: number;
  rot?: number;
  s?: number;
}) => (
  <g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`}>
    <path
      d="M0 0 C-1 -3 1 -6 3 -5 C5 -4 3 -1 1 0"
      fill={C.hook}
      stroke={C.hook}
      strokeWidth="0.5"
    />
    <line
      x1="0.5"
      y1="0"
      x2="0.5"
      y2="18"
      stroke={C.hookShaft}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="-1"
      y="12"
      width="3"
      height="8"
      rx="1"
      fill={C.hookShaft}
      opacity="0.7"
    />
  </g>
);

const Arrow = ({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={C.arrow}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <polygon
        points={`${x2},${y2} ${x2 - 4 * Math.cos(a - 0.4)},${y2 - 4 * Math.sin(a - 0.4)} ${x2 - 4 * Math.cos(a + 0.4)},${y2 - 4 * Math.sin(a + 0.4)}`}
        fill={C.arrow}
      />
    </g>
  );
};

const renderTechTemplate = (t: TechTemplate): React.ReactElement => {
  const common = {
    viewBox: "0 0 140 100",
    fill: "none",
    className: "step-illus-svg",
  };

  switch (t) {
    /* ── ANEL MÁGICO ────────────────────────── */
    case "yarn-loop":
      return (
        <svg {...common}>
          {/* Hand outline */}
          <path
            d="M30 80 Q25 60 35 50 Q40 45 50 45 Q55 45 58 50 Q60 55 55 60 Q50 50 45 55"
            stroke={C.muted}
            strokeWidth="1"
            fill="none"
          />
          {/* Yarn loop around fingers */}
          <ellipse
            cx="50"
            cy="50"
            rx="20"
            ry="18"
            stroke={C.yarn}
            strokeWidth="2.5"
            fill="none"
          />
          {/* X cross of yarn */}
          <line
            x1="38"
            y1="42"
            x2="62"
            y2="58"
            stroke={C.yarn}
            strokeWidth="1.5"
            opacity="0.6"
          />
          <line
            x1="38"
            y1="58"
            x2="62"
            y2="42"
            stroke={C.yarn}
            strokeWidth="1.5"
            opacity="0.6"
          />
          {/* Yarn tail */}
          <path
            d="M30 50 Q20 55 15 65"
            stroke={C.yarn}
            strokeWidth="1.5"
            fill="none"
          />
          <text
            x="90"
            y="50"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            Formar
          </text>
          <text
            x="90"
            y="58"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            o laço
          </text>
        </svg>
      );

    case "hook-insert":
      return (
        <svg {...common}>
          <ellipse
            cx="55"
            cy="50"
            rx="22"
            ry="18"
            stroke={C.yarn}
            strokeWidth="2"
            fill={C.piece}
          />
          <HookSvg x={62} y={38} rot={-20} s={1} />
          <Arrow x1={70} y1={55} x2={60} y2={48} />
          <text
            x="95"
            y="48"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            Inserir
          </text>
          <text
            x="95"
            y="56"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            agulha
          </text>
        </svg>
      );

    case "chain-fix":
      return (
        <svg {...common}>
          <ellipse
            cx="55"
            cy="52"
            rx="22"
            ry="18"
            stroke={C.yarn}
            strokeWidth="2"
            fill={C.piece}
          />
          <HookSvg x={64} y={36} rot={-15} s={0.9} />
          {/* Chain stitch on top */}
          <ellipse
            cx="58"
            cy="35"
            rx="5"
            ry="3"
            stroke={C.yarn}
            strokeWidth="1.5"
            fill={C.piece}
          />
          <text x="75" y="35" fill={C.highlight} fontSize="5" fontWeight="700">
            1 corr
          </text>
          <text
            x="95"
            y="55"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            Fixar com
          </text>
          <text
            x="95"
            y="63"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            corrente
          </text>
        </svg>
      );

    case "stitches-ring":
      return (
        <svg {...common}>
          <ellipse
            cx="55"
            cy="52"
            rx="20"
            ry="16"
            stroke={C.yarn}
            strokeWidth="1.5"
            fill={C.piece}
          />
          {/* Stitch marks inside ring */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={55 + 8 * Math.cos(a)}
                y1={52 + 8 * Math.sin(a)}
                x2={55 + 15 * Math.cos(a)}
                y2={52 + 15 * Math.sin(a)}
                stroke={C.yarn}
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity={i < 6 ? 0.7 : 0.3}
              />
            );
          })}
          <HookSvg x={68} y={40} rot={10} s={0.8} />
          <text
            x="95"
            y="50"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            Pontos no
          </text>
          <text
            x="95"
            y="58"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            anel
          </text>
        </svg>
      );

    case "pull-close":
      return (
        <svg {...common}>
          <circle
            cx="55"
            cy="50"
            r="6"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="1.5"
          />
          {/* Stitches radiating */}
          {Array.from({ length: 10 }).map((_, i) => {
            const a = (i * 36 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={55 + 8 * Math.cos(a)}
                y1={50 + 8 * Math.sin(a)}
                x2={55 + 16 * Math.cos(a)}
                y2={50 + 16 * Math.sin(a)}
                stroke={C.yarn}
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.6"
              />
            );
          })}
          {/* Pull arrow toward center */}
          <Arrow x1={30} y1={70} x2={48} y2={55} />
          <text x="20" y="78" fill={C.arrow} fontSize="5" fontWeight="700">
            Puxar ponta
          </text>
          <text
            x="90"
            y="50"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            Fechar
          </text>
        </svg>
      );

    case "slip-stitch":
      return (
        <svg {...common}>
          <circle
            cx="55"
            cy="50"
            r="16"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="1.2"
          />
          {Array.from({ length: 10 }).map((_, i) => {
            const a = (i * 36 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={55 + 8 * Math.cos(a)}
                y1={50 + 8 * Math.sin(a)}
                x2={55 + 15 * Math.cos(a)}
                y2={50 + 15 * Math.sin(a)}
                stroke={C.yarn}
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
              />
            );
          })}
          {/* Highlight first stitch connection */}
          <circle
            cx={55 + 15}
            cy={50}
            r="3"
            fill={C.highlight}
            fillOpacity="0.4"
            stroke={C.highlight}
            strokeWidth="0.8"
          />
          <HookSvg x={72} y={44} rot={0} s={0.8} />
          <text
            x="90"
            y="50"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Ponto
          </text>
          <text
            x="90"
            y="58"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            baixíssimo
          </text>
        </svg>
      );

    /* ── CORRENTE BASE ──────────────────────── */
    case "slip-knot":
      return (
        <svg {...common}>
          <HookSvg x={65} y={30} rot={-10} s={1} />
          {/* Slip knot loop */}
          <path
            d="M60 50 Q55 42 58 38 Q62 35 64 40"
            stroke={C.yarn}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M60 50 Q50 55 45 65"
            stroke={C.yarn}
            strokeWidth="1.5"
            fill="none"
          />
          <text
            x="90"
            y="50"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            Nó
          </text>
          <text
            x="90"
            y="58"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            inicial
          </text>
        </svg>
      );

    case "yarn-over":
      return (
        <svg {...common}>
          <HookSvg x={60} y={32} rot={-15} s={1} />
          {/* Yarn going over hook */}
          <path
            d="M40 60 Q50 45 58 42 Q66 40 75 48"
            stroke={C.yarn}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <Arrow x1={42} y1={58} x2={55} y2={45} />
          <text
            x="90"
            y="48"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            Laçar
          </text>
          <text x="80" y="70" fill={C.arrow} fontSize="5">
            yarn over
          </text>
        </svg>
      );

    case "keep-tension":
      return (
        <svg {...common}>
          {/* Chain being held */}
          {Array.from({ length: 6 }).map((_, i) => (
            <ellipse
              key={i}
              cx={25 + i * 12}
              cy="50"
              rx="5"
              ry="3.5"
              stroke={C.yarn}
              strokeWidth="1.5"
              fill={C.piece}
            />
          ))}
          {/* Fingers holding */}
          <path
            d="M25 60 Q20 55 25 50 Q30 45 35 50"
            stroke={C.muted}
            strokeWidth="1"
            fill="none"
          />
          <text
            x="50"
            y="38"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
            textAnchor="middle"
          >
            Tensão uniforme
          </text>
          <Arrow x1={25} y1={65} x2={25} y2={56} />
          <Arrow x1={85} y1={50} x2={100} y2={50} />
        </svg>
      );

    case "rhythm":
      return (
        <svg {...common}>
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={i}
              cx={18 + i * 13}
              cy="50"
              rx="5.5"
              ry="3.5"
              stroke={C.yarn}
              strokeWidth="1.5"
              fill={C.piece}
            />
          ))}
          <HookSvg x={120} y={42} rot={-15} s={0.85} />
          {/* Rhythm dots */}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={`r-${i}`}
              cx={18 + i * 13}
              cy="40"
              r="1"
              fill={C.highlight}
              opacity={0.4 + i * 0.07}
            />
          ))}
          <text
            x="70"
            y="72"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.7"
          >
            Ritmo constante
          </text>
        </svg>
      );

    case "test-loose":
      return (
        <svg {...common}>
          {Array.from({ length: 5 }).map((_, i) => (
            <ellipse
              key={i}
              cx={30 + i * 14}
              cy="50"
              rx="6"
              ry="4"
              stroke={C.yarn}
              strokeWidth="1.5"
              fill={C.piece}
            />
          ))}
          {/* Hook passing through chain */}
          <HookSvg x={45} y={42} rot={-45} s={0.8} />
          <Arrow x1={45} y1={58} x2={45} y2={52} />
          <text
            x="100"
            y="45"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Teste:
          </text>
          <text
            x="100"
            y="53"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            agulha
          </text>
          <text
            x="100"
            y="61"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            passa?
          </text>
        </svg>
      );

    /* ── INÍCIO OVAL ────────────────────────── */
    case "chain-center":
      return (
        <svg {...common}>
          {Array.from({ length: 10 }).map((_, i) => (
            <ellipse
              key={i}
              cx={20 + i * 10}
              cy="50"
              rx="4"
              ry="3"
              stroke={C.yarn}
              strokeWidth="1.2"
              fill={C.piece}
            />
          ))}
          <Arrow x1={15} y1={65} x2={115} y2={65} />
          <text
            x="65"
            y="78"
            fill={C.arrow}
            fontSize="5"
            fontWeight="700"
            textAnchor="middle"
          >
            Comprimento desejado
          </text>
        </svg>
      );

    case "work-one-side":
      return (
        <svg {...common}>
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={i}
              cx={25 + i * 11}
              cy="50"
              rx="4"
              ry="3"
              stroke={C.yarn}
              strokeWidth="1"
              fill={C.piece}
              opacity="0.5"
            />
          ))}
          {/* Stitches along top */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`s-${i}`}
              x1={25 + i * 11}
              y1="47"
              x2={25 + i * 11}
              y2="40"
              stroke={C.yarn}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={i < 6 ? 0.7 : 0.3}
            />
          ))}
          <HookSvg x={88} y={35} rot={-10} s={0.8} />
          <Arrow x1={22} y1={38} x2={80} y2={38} />
          <text
            x="110"
            y="52"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Lado 1
          </text>
        </svg>
      );

    case "turn-other-side":
      return (
        <svg {...common}>
          {/* Oval outline forming */}
          <ellipse
            cx="65"
            cy="50"
            rx="45"
            ry="16"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="1.2"
          />
          {/* Arrow going around */}
          <path
            d="M110 50 Q115 35 100 35 Q85 35 85 50 Q85 65 100 65 Q115 65 110 50"
            stroke={C.arrow}
            strokeWidth="0.8"
            fill="none"
            strokeDasharray="3 2"
          />
          <HookSvg x={30} y={58} rot={20} s={0.8} />
          <Arrow x1={100} y1={38} x2={85} y2={42} />
          <text
            x="65"
            y="82"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.7"
          >
            Virar e trabalhar outro lado
          </text>
        </svg>
      );

    case "close-round":
      return (
        <svg {...common}>
          <ellipse
            cx="65"
            cy="50"
            rx="45"
            ry="18"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="1.5"
          />
          <circle
            cx={65 + 45}
            cy={50}
            r="3"
            fill={C.highlight}
            fillOpacity="0.5"
            stroke={C.highlight}
            strokeWidth="1"
          />
          <circle
            cx={65 - 45}
            cy={50}
            r="3"
            fill={C.highlight}
            fillOpacity="0.5"
            stroke={C.highlight}
            strokeWidth="1"
          />
          <HookSvg x={22} y={42} rot={-20} s={0.8} />
          <text
            x="65"
            y="78"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.7"
          >
            Fechar a volta
          </text>
        </svg>
      );

    case "next-rounds":
      return (
        <svg {...common}>
          <ellipse
            cx="65"
            cy="50"
            rx="50"
            ry="25"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="1.2"
          />
          <ellipse
            cx="65"
            cy="50"
            rx="42"
            ry="18"
            fill="none"
            stroke={C.yarn}
            strokeWidth="0.5"
            strokeDasharray="2 2"
            opacity="0.4"
          />
          <ellipse
            cx="65"
            cy="50"
            rx="35"
            ry="12"
            fill="none"
            stroke={C.yarn}
            strokeWidth="0.5"
            strokeDasharray="2 2"
            opacity="0.3"
          />
          {/* Increase marks at tips */}
          <text
            x="18"
            y="52"
            fill={C.highlight}
            fontSize="8"
            fontWeight="800"
            textAnchor="middle"
          >
            V
          </text>
          <text
            x="112"
            y="52"
            fill={C.highlight}
            fontSize="8"
            fontWeight="800"
            textAnchor="middle"
          >
            V
          </text>
          <text
            x="65"
            y="86"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.7"
          >
            Continuar aumentando nas pontas
          </text>
        </svg>
      );

    /* ── TROCA DE COR ───────────────────────── */
    case "last-stitch":
      return (
        <svg {...common}>
          <rect
            x="20"
            y="35"
            width="80"
            height="30"
            rx="3"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="1"
          />
          {/* Last stitch incomplete */}
          <line
            x1="80"
            y1="35"
            x2="80"
            y2="28"
            stroke={C.yarn}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Two loops on hook */}
          <ellipse
            cx="82"
            cy="26"
            rx="3"
            ry="2"
            stroke={C.yarn}
            strokeWidth="1"
            fill="none"
          />
          <ellipse
            cx="82"
            cy="22"
            rx="3"
            ry="2"
            stroke={C.yarn}
            strokeWidth="1"
            fill="none"
          />
          <HookSvg x={85} y={18} rot={-10} s={0.85} />
          <text
            x="70"
            y="78"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            NÃO terminar
          </text>
          <text
            x="70"
            y="86"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            última laçada
          </text>
        </svg>
      );

    case "pull-new-color":
      return (
        <svg {...common}>
          <rect
            x="20"
            y="35"
            width="80"
            height="30"
            rx="3"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="1"
          />
          <HookSvg x={85} y={20} rot={-10} s={0.85} />
          {/* New color yarn being pulled */}
          <path
            d="M90 32 Q100 40 110 35"
            stroke={C.yarnB}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <Arrow x1={105} y1={38} x2={92} y2={32} />
          <ellipse
            cx="115"
            cy="35"
            rx="6"
            ry="5"
            fill={C.yarnB}
            opacity="0.3"
          />
          <text
            x="50"
            y="80"
            fill={C.yarnB}
            fontSize="6"
            fontWeight="700"
            opacity="0.8"
            textAnchor="middle"
          >
            Puxar cor nova ↑
          </text>
        </svg>
      );

    case "continue-new":
      return (
        <svg {...common}>
          <rect
            x="20"
            y="35"
            width="40"
            height="30"
            rx="3"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="1"
          />
          <rect
            x="60"
            y="35"
            width="40"
            height="30"
            rx="3"
            fill="rgba(41,128,185,0.2)"
            stroke={C.yarnB}
            strokeWidth="1"
          />
          <HookSvg x={95} y={28} rot={-10} s={0.85} />
          <text
            x="40"
            y="52"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.7"
          >
            Cor A
          </text>
          <text
            x="80"
            y="52"
            fill={C.yarnB}
            fontSize="5"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.8"
          >
            Cor B →
          </text>
        </svg>
      );

    case "hide-yarn":
      return (
        <svg {...common}>
          <rect
            x="20"
            y="35"
            width="90"
            height="30"
            rx="3"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="1"
          />
          {/* Yarn end hanging behind */}
          <path
            d="M60 65 Q55 72 50 78"
            stroke={C.yarn}
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="3 2"
          />
          <text x="45" y="88" fill={C.muted} fontSize="5">
            Esconder depois
          </text>
          <text
            x="65"
            y="28"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Fio por trás
          </text>
        </svg>
      );

    /* ── GRAPH-RELATED & SYMBOLS ────────────── */
    case "symbol-chain":
      return (
        <svg {...common}>
          <text
            x="30"
            y="55"
            fill={C.yarn}
            fontSize="28"
            fontWeight="800"
            textAnchor="middle"
          >
            ○
          </text>
          <text x="50" y="55" fill={C.muted} fontSize="8">
            =
          </text>
          <text x="90" y="50" fill={C.yarn} fontSize="7" fontWeight="700">
            Corrente
          </text>
          <text x="90" y="62" fill={C.muted} fontSize="5">
            (chain)
          </text>
        </svg>
      );

    case "symbol-sc":
      return (
        <svg {...common}>
          <text
            x="30"
            y="55"
            fill={C.yarn}
            fontSize="28"
            fontWeight="800"
            textAnchor="middle"
          >
            +
          </text>
          <text x="50" y="55" fill={C.muted} fontSize="8">
            =
          </text>
          <text x="90" y="50" fill={C.yarn} fontSize="7" fontWeight="700">
            Ponto Baixo
          </text>
          <text x="90" y="62" fill={C.muted} fontSize="5">
            (single crochet)
          </text>
        </svg>
      );

    case "symbol-dc":
      return (
        <svg {...common}>
          <text
            x="30"
            y="55"
            fill={C.yarn}
            fontSize="28"
            fontWeight="800"
            textAnchor="middle"
          >
            T
          </text>
          <line
            x1="25"
            y1="42"
            x2="35"
            y2="42"
            stroke={C.yarn}
            strokeWidth="1.5"
          />
          <text x="50" y="55" fill={C.muted} fontSize="8">
            =
          </text>
          <text x="90" y="50" fill={C.yarn} fontSize="7" fontWeight="700">
            Ponto Alto
          </text>
          <text x="90" y="62" fill={C.muted} fontSize="5">
            (double crochet)
          </text>
        </svg>
      );

    case "symbol-slst":
      return (
        <svg {...common}>
          <circle cx="30" cy="50" r="4" fill={C.yarn} />
          <text x="50" y="55" fill={C.muted} fontSize="8">
            =
          </text>
          <text x="90" y="50" fill={C.yarn} fontSize="7" fontWeight="700">
            Ponto
          </text>
          <text x="90" y="62" fill={C.yarn} fontSize="7" fontWeight="700">
            Baixíssimo
          </text>
        </svg>
      );

    case "symbol-inc":
      return (
        <svg {...common}>
          <text
            x="30"
            y="55"
            fill={C.highlight}
            fontSize="24"
            fontWeight="800"
            textAnchor="middle"
          >
            V
          </text>
          <text x="50" y="55" fill={C.muted} fontSize="8">
            =
          </text>
          <text x="90" y="50" fill={C.yarn} fontSize="7" fontWeight="700">
            Aumento
          </text>
          <text x="90" y="62" fill={C.muted} fontSize="5">
            2 pontos no mesmo
          </text>
        </svg>
      );

    case "symbol-dec":
      return (
        <svg {...common}>
          <text
            x="30"
            y="55"
            fill={C.red}
            fontSize="24"
            fontWeight="800"
            textAnchor="middle"
          >
            ∧
          </text>
          <text x="50" y="55" fill={C.muted} fontSize="8">
            =
          </text>
          <text x="90" y="50" fill={C.yarn} fontSize="7" fontWeight="700">
            Diminuição
          </text>
          <text x="90" y="62" fill={C.muted} fontSize="5">
            2 pontos fechados
          </text>
        </svg>
      );

    case "find-center":
      return (
        <svg {...common}>
          {/* Circular graph */}
          <circle
            cx="55"
            cy="50"
            r="35"
            stroke={C.muted}
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="55"
            cy="50"
            r="25"
            stroke={C.muted}
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="55"
            cy="50"
            r="15"
            stroke={C.muted}
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="55"
            cy="50"
            r="5"
            fill={C.highlight}
            fillOpacity="0.4"
            stroke={C.highlight}
            strokeWidth="1.5"
          />
          <Arrow x1={95} y1={50} x2={65} y2={50} />
          <text
            x="105"
            y="48"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Começar
          </text>
          <text
            x="105"
            y="56"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            no centro
          </text>
        </svg>
      );

    case "first-round-graph":
      return (
        <svg {...common}>
          <circle
            cx="55"
            cy="50"
            r="35"
            stroke={C.muted}
            strokeWidth="0.5"
            fill="none"
          />
          <circle cx="55" cy="50" r="5" fill={C.yarn} fillOpacity="0.3" />
          {/* First round highlighted */}
          <circle
            cx="55"
            cy="50"
            r="15"
            stroke={C.highlight}
            strokeWidth="2"
            fill="none"
          />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            return (
              <circle
                key={i}
                cx={55 + 15 * Math.cos(a)}
                cy={50 + 15 * Math.sin(a)}
                r="2"
                fill={C.highlight}
                fillOpacity="0.6"
              />
            );
          })}
          <Arrow x1={97} y1={44} x2={72} y2={44} />
          <text
            x="100"
            y="55"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            1ª carreira
          </text>
        </svg>
      );

    case "find-increases":
      return (
        <svg {...common}>
          <circle
            cx="55"
            cy="50"
            r="30"
            stroke={C.muted}
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="55"
            cy="50"
            r="20"
            stroke={C.muted}
            strokeWidth="0.5"
            fill="none"
          />
          {/* V marks at increase points */}
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const r = (a * Math.PI) / 180;
            return (
              <text
                key={a}
                x={55 + 25 * Math.cos(r)}
                y={52 + 25 * Math.sin(r)}
                fill={C.highlight}
                fontSize="8"
                fontWeight="800"
                textAnchor="middle"
              >
                V
              </text>
            );
          })}
          <text
            x="105"
            y="50"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Encontrar
          </text>
          <text
            x="105"
            y="58"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            aumentos
          </text>
        </svg>
      );

    case "repeat-sections":
      return (
        <svg {...common}>
          <circle
            cx="55"
            cy="50"
            r="35"
            stroke={C.muted}
            strokeWidth="0.5"
            fill="none"
          />
          {/* One section highlighted, rest faded */}
          <path
            d="M55 50 L55 15 A35 35 0 0 1 85 30 Z"
            fill={C.highlight}
            fillOpacity="0.15"
            stroke={C.highlight}
            strokeWidth="1"
          />
          <text x="68" y="30" fill={C.highlight} fontSize="5" fontWeight="700">
            Repetir
          </text>
          {/* Repeat arrow */}
          <path
            d="M85 32 A35 35 0 0 1 80 70"
            stroke={C.arrow}
            strokeWidth="1"
            fill="none"
            strokeDasharray="3 2"
          />
          <text x="95" y="55" fill={C.arrow} fontSize="5" fontWeight="700">
            ×6
          </text>
        </svg>
      );

    case "color-rows":
      return (
        <svg {...common}>
          <circle
            cx="55"
            cy="50"
            r="35"
            stroke={C.muted}
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="55"
            cy="50"
            r="28"
            stroke={C.yarnB}
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="55"
            cy="50"
            r="20"
            stroke={C.yarn}
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="55"
            cy="50"
            r="12"
            stroke={C.red}
            strokeWidth="2.5"
            fill="none"
          />
          <text x="105" y="42" fill={C.red} fontSize="5">
            ● Cor 1
          </text>
          <text x="105" y="52" fill={C.yarn} fontSize="5">
            ● Cor 2
          </text>
          <text x="105" y="62" fill={C.yarnB} fontSize="5">
            ● Cor 3
          </text>
        </svg>
      );

    /* ── GENERIC FALLBACKS ──────────────────── */
    default:
      return (
        <svg {...common}>
          <rect
            x="20"
            y="25"
            width="100"
            height="50"
            rx="6"
            fill={C.piece}
            stroke={C.yarn}
            strokeWidth="0.8"
          />
          <HookSvg x={70} y={35} rot={-20} s={0.8} />
          <path
            d="M55 55 Q60 65 75 55"
            stroke={C.yarn}
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      );
  }
};

/* ── Exported Component ───────────────────────────────────── */

interface TechniqueStepIllustrationProps {
  techniqueId: string;
  stepIndex: number;
}

const TechniqueStepIllustration: React.FC<TechniqueStepIllustrationProps> = ({
  techniqueId,
  stepIndex,
}) => {
  const templates = TECH_STEP_MAPS[techniqueId];
  if (!templates || stepIndex >= templates.length) {
    return null;
  }
  return renderTechTemplate(templates[stepIndex]);
};

export default TechniqueStepIllustration;
