import React from "react";

/* ───────────────────────────────────────────────────────────
   Step Illustration System
   Template-based parametric SVG illustrations for project steps.
   Each step maps to a visual template showing the work state.
   ─────────────────────────────────────────────────────────── */

type StepTemplate =
  | "magic-ring"
  | "chain-base"
  | "first-round"
  | "increase-round"
  | "rows-growing"
  | "spiral-rounds"
  | "texture-work"
  | "color-transition"
  | "shape-rising"
  | "handles-attach"
  | "border-work"
  | "pieces-assembly"
  | "applique-attach"
  | "finishing-weave"
  | "blocking-pins"
  | "measurement"
  | "separate-piece";

const STEP_MAPS: Record<string, StepTemplate[]> = {
  "tapete-redondo-basico": [
    "magic-ring",
    "first-round",
    "increase-round",
    "increase-round",
    "border-work",
  ],
  "tapete-redondo-pipoca": [
    "magic-ring",
    "increase-round",
    "texture-work",
    "increase-round",
    "rows-growing",
    "border-work",
  ],
  "tapete-redondo-espiral": [
    "magic-ring",
    "color-transition",
    "spiral-rounds",
    "increase-round",
    "rows-growing",
    "finishing-weave",
  ],
  "tapete-retangular-simples": [
    "chain-base",
    "rows-growing",
    "rows-growing",
    "rows-growing",
    "finishing-weave",
  ],
  "tapete-retangular-relevo": [
    "chain-base",
    "rows-growing",
    "texture-work",
    "texture-work",
    "texture-work",
    "border-work",
  ],
  "passadeira-basica": [
    "measurement",
    "chain-base",
    "rows-growing",
    "rows-growing",
  ],
  "passadeira-rendada": [
    "chain-base",
    "texture-work",
    "texture-work",
    "rows-growing",
    "border-work",
    "border-work",
    "blocking-pins",
  ],
  "porta-copos-facil": ["magic-ring", "increase-round", "border-work"],
  "porta-copos-textura": [
    "chain-base",
    "texture-work",
    "rows-growing",
    "rows-growing",
    "border-work",
  ],
  "porta-papel-basico": [
    "chain-base",
    "rows-growing",
    "pieces-assembly",
    "chain-base",
  ],
  "porta-papel-decorado": [
    "rows-growing",
    "separate-piece",
    "separate-piece",
    "pieces-assembly",
    "applique-attach",
    "handles-attach",
  ],
  "sacola-basica": [
    "rows-growing",
    "shape-rising",
    "handles-attach",
    "border-work",
  ],
  "bolsa-fio-malha": [
    "chain-base",
    "increase-round",
    "shape-rising",
    "rows-growing",
    "handles-attach",
    "finishing-weave",
  ],
  "bolsa-ponto-fantasia": [
    "chain-base",
    "texture-work",
    "rows-growing",
    "pieces-assembly",
    "rows-growing",
    "pieces-assembly",
    "pieces-assembly",
  ],
  "jogo-americano": [
    "chain-base",
    "first-round",
    "increase-round",
    "increase-round",
    "border-work",
  ],
  "sousplat-croche": [
    "magic-ring",
    "increase-round",
    "texture-work",
    "measurement",
    "border-work",
    "pieces-assembly",
  ],
  "caminho-mesa": [
    "chain-base",
    "texture-work",
    "texture-work",
    "border-work",
    "separate-piece",
    "blocking-pins",
  ],
  "almofada-croche": [
    "chain-base",
    "texture-work",
    "texture-work",
    "rows-growing",
    "pieces-assembly",
    "pieces-assembly",
  ],
  "cachepot-croche": [
    "magic-ring",
    "shape-rising",
    "texture-work",
    "shape-rising",
    "border-work",
  ],
  "almofada-textura-avancada": [
    "magic-ring",
    "texture-work",
    "texture-work",
    "increase-round",
    "increase-round",
    "pieces-assembly",
    "finishing-weave",
  ],
  "necessaire-croche": [
    "rows-growing",
    "rows-growing",
    "pieces-assembly",
    "pieces-assembly",
    "pieces-assembly",
    "finishing-weave",
  ],
  "cesto-organizador": [
    "magic-ring",
    "shape-rising",
    "shape-rising",
    "handles-attach",
    "border-work",
  ],
  "organizador-parede": [
    "rows-growing",
    "separate-piece",
    "separate-piece",
    "border-work",
    "pieces-assembly",
    "pieces-assembly",
  ],
  "tapete-infantil-urso": [
    "first-round",
    "separate-piece",
    "separate-piece",
    "separate-piece",
    "applique-attach",
    "border-work",
  ],
  "tapete-infantil-arco-iris": [
    "first-round",
    "color-transition",
    "increase-round",
    "rows-growing",
    "border-work",
  ],
  "pano-prato-barrado": [
    "measurement",
    "chain-base",
    "rows-growing",
    "texture-work",
    "border-work",
  ],
  "pegador-panela": [
    "magic-ring",
    "first-round",
    "chain-base",
    "pieces-assembly",
    "border-work",
  ],
  "capa-galao": [
    "magic-ring",
    "shape-rising",
    "rows-growing",
    "shape-rising",
    "border-work",
    "applique-attach",
  ],
};

/* ── Shared SVG Elements ──────────────────────────────────── */

const C = {
  hook: "#8B5E3C",
  hookShaft: "#A0724D",
  yarn: "#22a55b",
  yarnLight: "#34d372",
  arrow: "#e67e22",
  highlight: "#f1c40f",
  piece: "#22a55b",
  pieceLight: "rgba(34,165,91,0.2)",
  pieceMed: "rgba(34,165,91,0.35)",
  white: "#ffffff",
  muted: "rgba(255,255,255,0.5)",
};

const HookSvg = ({
  x,
  y,
  rotation = -30,
  scale = 1,
}: {
  x: number;
  y: number;
  rotation?: number;
  scale?: number;
}) => (
  <g transform={`translate(${x},${y}) rotate(${rotation}) scale(${scale})`}>
    {/* Hook tip */}
    <path
      d="M0 0 C-1 -3 1 -6 3 -5 C5 -4 3 -1 1 0"
      fill={C.hook}
      stroke={C.hook}
      strokeWidth="0.5"
    />
    {/* Shaft */}
    <line
      x1="0.5"
      y1="0"
      x2="0.5"
      y2="18"
      stroke={C.hookShaft}
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Grip */}
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

const ArrowSvg = ({
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
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const headLen = 4;
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
        points={`${x2},${y2} ${x2 - headLen * Math.cos(angle - 0.4)},${y2 - headLen * Math.sin(angle - 0.4)} ${x2 - headLen * Math.cos(angle + 0.4)},${y2 - headLen * Math.sin(angle + 0.4)}`}
        fill={C.arrow}
      />
    </g>
  );
};

const YarnLine = ({
  path,
  dashed = false,
}: {
  path: string;
  dashed?: boolean;
}) => (
  <path
    d={path}
    stroke={C.yarn}
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
    strokeDasharray={dashed ? "3 2" : undefined}
  />
);

/* ── Template Renderers ───────────────────────────────────── */

const renderTemplate = (
  template: StepTemplate,
  stepIndex: number,
  totalSteps: number,
): React.ReactElement => {
  const progress = (stepIndex + 1) / totalSteps;
  const common = {
    viewBox: "0 0 140 100",
    fill: "none",
    className: "step-illus-svg",
  };

  switch (template) {
    case "magic-ring":
      return (
        <svg {...common}>
          {/* Yarn loop */}
          <ellipse
            cx="55"
            cy="50"
            rx="22"
            ry="20"
            stroke={C.yarn}
            strokeWidth="2.5"
            fill={C.pieceLight}
            strokeDasharray="4 2"
          />
          {/* Center point */}
          <circle cx="55" cy="50" r="3" fill={C.yarn} opacity="0.5" />
          {/* Hook inserting */}
          <HookSvg x={68} y={38} rotation={-20} />
          {/* Yarn from ball */}
          <YarnLine path="M33 50 Q20 55 15 65 Q12 72 18 76" />
          <ellipse cx="18" cy="80" rx="8" ry="6" fill={C.yarn} opacity="0.3" />
          {/* Arrow showing pull direction */}
          <ArrowSvg x1={75} y1={55} x2={85} y2={48} />
          {/* Label */}
          <text
            x="105"
            y="50"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            Anel
          </text>
          <text
            x="105"
            y="58"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            Mágico
          </text>
        </svg>
      );

    case "chain-base":
      return (
        <svg {...common}>
          {/* Chain links */}
          {Array.from({ length: 10 }).map((_, i) => (
            <ellipse
              key={i}
              cx={18 + i * 11}
              cy="50"
              rx="5"
              ry="3.5"
              stroke={C.yarn}
              strokeWidth="1.5"
              fill={i < 8 ? C.pieceLight : "none"}
              strokeDasharray={i >= 8 ? "2 1.5" : undefined}
            />
          ))}
          {/* Hook at end making next chain */}
          <HookSvg x={118} y={42} rotation={-15} scale={0.9} />
          {/* Yarn from left */}
          <YarnLine path="M8 50 Q4 60 8 68" />
          {/* Arrow showing direction */}
          <ArrowSvg x1={95} y1={42} x2={108} y2={42} />
          {/* Count indicator */}
          <text x="18" y="40" fill={C.muted} fontSize="5" textAnchor="middle">
            1
          </text>
          <text x="62" y="40" fill={C.muted} fontSize="5" textAnchor="middle">
            5
          </text>
          <text x="95" y="40" fill={C.muted} fontSize="5" textAnchor="middle">
            8
          </text>
        </svg>
      );

    case "first-round":
      return (
        <svg {...common}>
          {/* Center ring */}
          <circle
            cx="60"
            cy="50"
            r="8"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="1.5"
          />
          {/* First round of stitches */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            const completed = i < 9;
            return (
              <line
                key={i}
                x1={60 + 10 * Math.cos(a)}
                y1={50 + 10 * Math.sin(a)}
                x2={60 + 20 * Math.cos(a)}
                y2={50 + 20 * Math.sin(a)}
                stroke={completed ? C.yarn : C.muted}
                strokeWidth={completed ? "2" : "1"}
                strokeLinecap="round"
                strokeDasharray={completed ? undefined : "2 2"}
              />
            );
          })}
          <circle
            cx="60"
            cy="50"
            r="20"
            stroke={C.yarn}
            strokeWidth="0.5"
            strokeDasharray="2 2"
            opacity="0.4"
          />
          {/* Hook at active position */}
          <HookSvg x={78} y={42} rotation={10} scale={0.85} />
          <ArrowSvg x1={85} y1={52} x2={92} y2={58} />
          <text
            x="110"
            y="50"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            opacity="0.7"
          >
            1ª volta
          </text>
        </svg>
      );

    case "increase-round": {
      const radius = 18 + progress * 14;
      return (
        <svg {...common}>
          {/* Growing circle */}
          <circle
            cx="60"
            cy="50"
            r={radius}
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="1.2"
          />
          <circle
            cx="60"
            cy="50"
            r={radius - 6}
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="0.5"
            strokeDasharray="2 2"
            opacity="0.4"
          />
          <circle cx="60" cy="50" r="5" fill={C.yarn} opacity="0.3" />
          {/* V-marks showing increases */}
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const rad = (a * Math.PI) / 180;
            const cx = 60 + (radius - 3) * Math.cos(rad);
            const cy = 50 + (radius - 3) * Math.sin(rad);
            return (
              <text
                key={a}
                x={cx}
                y={cy}
                fill={C.highlight}
                fontSize="7"
                fontWeight="800"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                V
              </text>
            );
          })}
          <HookSvg x={60 + radius + 4} y={44} rotation={0} scale={0.8} />
          <text
            x="108"
            y="48"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            Aumentos
          </text>
          <ArrowSvg x1={68} y1={50 - radius + 2} x2={75} y2={50 - radius - 3} />
        </svg>
      );
    }

    case "rows-growing": {
      const rows = Math.round(3 + progress * 5);
      return (
        <svg {...common}>
          {/* Rectangle growing with rows */}
          <rect
            x="20"
            y={70 - rows * 7}
            width="80"
            height={rows * 7}
            rx="2"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="1"
          />
          {Array.from({ length: rows }).map((_, i) => (
            <line
              key={i}
              x1="24"
              y1={70 - (i + 1) * 7 + 3.5}
              x2="96"
              y2={70 - (i + 1) * 7 + 3.5}
              stroke={C.yarn}
              strokeWidth="0.6"
              opacity={i === rows - 1 ? "0.8" : "0.3"}
            />
          ))}
          {/* Hook working on top row */}
          <HookSvg x={90} y={70 - rows * 7 - 5} rotation={-25} scale={0.8} />
          {/* Direction arrows */}
          {rows > 3 && (
            <>
              <ArrowSvg x1={15} y1={70 - rows * 7 + 3} x2={15} y2={66} />
              <text
                x="8"
                y={70 - rows * 7 + 15}
                fill={C.muted}
                fontSize="5"
                transform={`rotate(-90 8 ${70 - rows * 7 + 15})`}
              >
                ↑
              </text>
            </>
          )}
          {/* Current row indicator */}
          <rect
            x="20"
            y={70 - rows * 7}
            width="80"
            height="7"
            fill={C.highlight}
            fillOpacity="0.15"
            stroke={C.highlight}
            strokeWidth="0.5"
            strokeDasharray="2 1"
          />
          <YarnLine
            path={`M100 ${70 - rows * 7 + 3} Q110 ${70 - rows * 7} 120 ${70 - rows * 7 + 10}`}
          />
        </svg>
      );
    }

    case "spiral-rounds":
      return (
        <svg {...common}>
          {/* Spiral illustration */}
          <path
            d="M60 50 C60 44 66 40 72 42 C78 44 80 50 78 56 C76 62 68 66 62 64 C56 62 52 56 54 50 C56 44 62 40 68 38"
            stroke={C.yarn}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Second color spiral */}
          <path
            d="M60 50 C60 56 54 60 48 58 C42 56 40 50 42 44 C44 38 52 34 58 36 C64 38 68 44 66 50"
            stroke={C.yarnLight}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="3 2"
          />
          <circle cx="60" cy="50" r="3" fill={C.yarn} opacity="0.5" />
          <HookSvg x={72} y={34} rotation={15} scale={0.85} />
          <text
            x="100"
            y="45"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            Espiral
          </text>
          <text
            x="100"
            y="53"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            contínua
          </text>
          <ArrowSvg x1={80} y1={40} x2={88} y2={35} />
        </svg>
      );

    case "texture-work":
      return (
        <svg {...common}>
          {/* Piece with texture close-up area */}
          <rect
            x="15"
            y="20"
            width="75"
            height="60"
            rx="4"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="0.8"
          />
          {/* Magnified area */}
          <circle
            cx="52"
            cy="48"
            r="22"
            fill="white"
            fillOpacity="0.15"
            stroke={C.highlight}
            strokeWidth="1.2"
            strokeDasharray="3 2"
          />
          {/* Texture pattern inside magnified area */}
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 4 }).map((_, c) => {
              const x = 37 + c * 10;
              const y = 35 + r * 8;
              return (
                <g key={`tx-${r}-${c}`}>
                  <line
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={y + 5}
                    stroke={C.yarn}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  {(r + c) % 2 === 0 && (
                    <circle
                      cx={x}
                      cy={y + 2.5}
                      r="1.5"
                      fill={C.yarn}
                      opacity="0.4"
                    />
                  )}
                </g>
              );
            }),
          )}
          <HookSvg x={70} y={35} rotation={-10} scale={0.75} />
          {/* Zoom indicator */}
          <line
            x1="72"
            y1="28"
            x2="100"
            y2="15"
            stroke={C.highlight}
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          <text x="100" y="14" fill={C.highlight} fontSize="5" fontWeight="700">
            Textura
          </text>
        </svg>
      );

    case "color-transition":
      return (
        <svg {...common}>
          {/* Piece showing two colors */}
          <rect
            x="20"
            y="30"
            width="85"
            height="40"
            rx="3"
            fill="none"
            stroke={C.yarn}
            strokeWidth="0.8"
          />
          {/* Color A section */}
          <rect
            x="20"
            y="30"
            width="42"
            height="40"
            rx="3"
            fill={C.yarn}
            fillOpacity="0.25"
          />
          {/* Color B section */}
          <rect
            x="62"
            y="30"
            width="43"
            height="40"
            rx="3"
            fill={C.yarnLight}
            fillOpacity="0.25"
          />
          {/* Transition line */}
          <line
            x1="62"
            y1="28"
            x2="62"
            y2="72"
            stroke={C.highlight}
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          {/* Hook at transition */}
          <HookSvg x={65} y={25} rotation={-15} scale={0.8} />
          {/* Color labels */}
          <text
            x="38"
            y="52"
            fill={C.yarn}
            fontSize="6"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.8"
          >
            Cor A
          </text>
          <text
            x="83"
            y="52"
            fill={C.yarnLight}
            fontSize="6"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.8"
          >
            Cor B
          </text>
          {/* Yarn change arrow */}
          <ArrowSvg x1={56} y1={78} x2={68} y2={78} />
          <text x="62" y="88" fill={C.arrow} fontSize="5" textAnchor="middle">
            Trocar aqui
          </text>
        </svg>
      );

    case "shape-rising":
      return (
        <svg {...common}>
          {/* Base oval */}
          <ellipse
            cx="60"
            cy="80"
            rx="30"
            ry="8"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="1"
          />
          {/* Rising walls */}
          <path
            d={`M30 80 L32 ${55 - progress * 15} Q60 ${48 - progress * 15} 88 ${55 - progress * 15} L90 80`}
            fill={C.pieceMed}
            stroke={C.yarn}
            strokeWidth="1.2"
          />
          {/* Horizontal stitch lines on walls */}
          {Array.from({ length: Math.round(2 + progress * 3) }).map((_, i) => (
            <path
              key={i}
              d={`M${33 + i * 0.5} ${75 - i * 7} Q60 ${72 - i * 7} ${87 - i * 0.5} ${75 - i * 7}`}
              stroke={C.yarn}
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
            />
          ))}
          {/* Hook working on rim */}
          <HookSvg x={85} y={50 - progress * 15} rotation={5} scale={0.8} />
          <ArrowSvg x1={20} y1={78} x2={20} y2={55 - progress * 10} />
          <text
            x="10"
            y={66 - progress * 5}
            fill={C.muted}
            fontSize="5"
            textAnchor="middle"
          >
            ↑
          </text>
        </svg>
      );

    case "handles-attach":
      return (
        <svg {...common}>
          {/* Piece body */}
          <rect
            x="30"
            y="35"
            width="55"
            height="45"
            rx="4"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="1"
          />
          {/* Handle shape */}
          <path
            d="M42 35 Q42 18 57 18 Q72 18 72 35"
            stroke={C.yarn}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Attachment points highlighted */}
          <circle
            cx="42"
            cy="35"
            r="3"
            fill={C.highlight}
            fillOpacity="0.5"
            stroke={C.highlight}
            strokeWidth="1"
          />
          <circle
            cx="72"
            cy="35"
            r="3"
            fill={C.highlight}
            fillOpacity="0.5"
            stroke={C.highlight}
            strokeWidth="1"
          />
          {/* Hook working at attachment */}
          <HookSvg x={46} y={28} rotation={-30} scale={0.8} />
          <YarnLine path="M42 35 Q35 30 30 35" />
          <text
            x="105"
            y="48"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            Fixar
          </text>
          <text
            x="105"
            y="56"
            fill={C.yarn}
            fontSize="5.5"
            fontWeight="700"
            opacity="0.7"
          >
            alças
          </text>
        </svg>
      );

    case "border-work":
      return (
        <svg {...common}>
          {/* Main piece */}
          <rect
            x="25"
            y="22"
            width="70"
            height="56"
            rx="4"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="0.8"
          />
          {/* Highlighted border being worked */}
          <rect
            x="25"
            y="22"
            width="70"
            height="56"
            rx="4"
            fill="none"
            stroke={C.highlight}
            strokeWidth="2.5"
            strokeDasharray="4 2"
            opacity="0.6"
          />
          {/* Border stitches on bottom edge */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={30 + i * 5.5}
              y1="78"
              x2={30 + i * 5.5}
              y2="82"
              stroke={C.yarn}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={i < 8 ? "0.7" : "0.3"}
            />
          ))}
          <HookSvg x={74} y={76} rotation={30} scale={0.8} />
          {/* Arrow along edge */}
          <ArrowSvg x1={28} y1={85} x2={70} y2={85} />
          <text
            x="100"
            y="86"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Borda
          </text>
        </svg>
      );

    case "pieces-assembly":
      return (
        <svg {...common}>
          {/* Two pieces being joined */}
          <rect
            x="15"
            y="25"
            width="45"
            height="50"
            rx="3"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="1"
          />
          <rect
            x="68"
            y="25"
            width="45"
            height="50"
            rx="3"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="1"
          />
          {/* Join line in the middle */}
          <line
            x1="62"
            y1="28"
            x2="62"
            y2="72"
            stroke={C.yarn}
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          {/* Stitch marks along join */}
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i}>
              <line
                x1="58"
                y1={32 + i * 7}
                x2="66"
                y2={32 + i * 7}
                stroke={C.yarn}
                strokeWidth="1"
                opacity="0.6"
              />
            </g>
          ))}
          {/* Arrows pushing together */}
          <ArrowSvg x1={50} y1={80} x2={58} y2={80} />
          <ArrowSvg x1={74} y1={80} x2={66} y2={80} />
          <text
            x="62"
            y="92"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.7"
          >
            Unir peças
          </text>
        </svg>
      );

    case "applique-attach":
      return (
        <svg {...common}>
          {/* Main piece */}
          <rect
            x="20"
            y="20"
            width="75"
            height="60"
            rx="4"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="0.8"
          />
          {/* Appliqué element (flower) */}
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx={57 + 8 * Math.cos((a * Math.PI) / 180)}
              cy={50 + 8 * Math.sin((a * Math.PI) / 180)}
              rx="5"
              ry="3"
              fill={C.yarn}
              fillOpacity="0.4"
              transform={`rotate(${a} ${57 + 8 * Math.cos((a * Math.PI) / 180)} ${50 + 8 * Math.sin((a * Math.PI) / 180)})`}
            />
          ))}
          <circle
            cx="57"
            cy="50"
            r="3.5"
            fill={C.highlight}
            fillOpacity="0.5"
          />
          {/* Sewing needle */}
          <line
            x1="68"
            y1="42"
            x2="80"
            y2="30"
            stroke={C.hook}
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle
            cx="80"
            cy="30"
            r="1.5"
            stroke={C.hook}
            strokeWidth="0.5"
            fill="none"
          />
          {/* Stitch lines attaching */}
          <line
            x1="60"
            y1="45"
            x2="62"
            y2="42"
            stroke={C.yarn}
            strokeWidth="0.5"
            strokeDasharray="1 1"
          />
          <line
            x1="55"
            y1="56"
            x2="53"
            y2="59"
            stroke={C.yarn}
            strokeWidth="0.5"
            strokeDasharray="1 1"
          />
          <text
            x="105"
            y="50"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Aplicar
          </text>
        </svg>
      );

    case "finishing-weave":
      return (
        <svg {...common}>
          {/* Completed piece */}
          <rect
            x="20"
            y="22"
            width="75"
            height="56"
            rx="4"
            fill={C.pieceMed}
            stroke={C.yarn}
            strokeWidth="1.2"
          />
          {/* Tapestry needle weaving */}
          <line
            x1="45"
            y1="50"
            x2="75"
            y2="50"
            stroke={C.hook}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="75"
            cy="50"
            r="1.5"
            stroke={C.hook}
            strokeWidth="0.5"
            fill="none"
          />
          {/* Woven yarn path (zigzag through stitches) */}
          <YarnLine path="M30 50 L38 48 L42 52 L46 48 L50 52 L54 48" dashed />
          {/* Scissors suggestion */}
          <line
            x1="88"
            y1="55"
            x2="95"
            y2="62"
            stroke={C.muted}
            strokeWidth="1"
            strokeLinecap="round"
          />
          <line
            x1="95"
            y1="55"
            x2="88"
            y2="62"
            stroke={C.muted}
            strokeWidth="1"
            strokeLinecap="round"
          />
          <text
            x="108"
            y="48"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Arremate
          </text>
          <text
            x="108"
            y="56"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            final
          </text>
        </svg>
      );

    case "blocking-pins":
      return (
        <svg {...common}>
          {/* Flat surface */}
          <rect
            x="10"
            y="20"
            width="110"
            height="65"
            rx="2"
            fill="white"
            fillOpacity="0.05"
            stroke={C.muted}
            strokeWidth="0.5"
          />
          {/* Piece stretched */}
          <rect
            x="25"
            y="30"
            width="75"
            height="45"
            rx="3"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="1"
          />
          {/* Pins */}
          {[
            [25, 30],
            [50, 30],
            [75, 30],
            [100, 30],
            [25, 75],
            [50, 75],
            [75, 75],
            [100, 75],
            [25, 52],
            [100, 52],
          ].map(([x, y], i) => (
            <g key={i}>
              <line
                x1={x}
                y1={y}
                x2={x}
                y2={y - 6}
                stroke="#c0392b"
                strokeWidth="0.8"
              />
              <circle cx={x} cy={y - 6} r="1.5" fill="#c0392b" />
            </g>
          ))}
          {/* Water drops */}
          <text x="55" y="55" fill="#2980b9" fontSize="7" opacity="0.3">
            💧
          </text>
          <text
            x="108"
            y="15"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            opacity="0.7"
          >
            Bloqueio
          </text>
        </svg>
      );

    case "measurement":
      return (
        <svg {...common}>
          {/* Measuring tape */}
          <rect
            x="15"
            y="48"
            width="100"
            height="8"
            rx="1"
            fill={C.highlight}
            fillOpacity="0.2"
            stroke={C.highlight}
            strokeWidth="0.8"
          />
          {Array.from({ length: 10 }).map((_, i) => (
            <g key={i}>
              <line
                x1={25 + i * 10}
                y1="48"
                x2={25 + i * 10}
                y2={i % 2 === 0 ? "52" : "50"}
                stroke={C.highlight}
                strokeWidth="0.5"
              />
              {i % 2 === 0 && (
                <text
                  x={25 + i * 10}
                  y="46"
                  fill={C.highlight}
                  fontSize="4"
                  textAnchor="middle"
                  opacity="0.7"
                >
                  {i * 5}
                </text>
              )}
            </g>
          ))}
          {/* Piece outline being measured */}
          <rect
            x="30"
            y="62"
            width="60"
            height="20"
            rx="2"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="0.8"
            strokeDasharray="3 2"
          />
          {/* Dimension arrows */}
          <ArrowSvg x1={30} y1={90} x2={90} y2={90} />
          <text
            x="60"
            y="98"
            fill={C.arrow}
            fontSize="5"
            textAnchor="middle"
            fontWeight="700"
          >
            Medir
          </text>
        </svg>
      );

    case "separate-piece":
      return (
        <svg {...common}>
          {/* Main piece (faded/ghosted) */}
          <rect
            x="15"
            y="20"
            width="50"
            height="60"
            rx="4"
            fill={C.pieceLight}
            stroke={C.yarn}
            strokeWidth="0.5"
            opacity="0.3"
          />
          {/* Separate component highlighted */}
          <circle
            cx="95"
            cy="40"
            r="18"
            fill={C.pieceMed}
            stroke={C.yarn}
            strokeWidth="1.5"
          />
          {/* Spiral pattern inside component */}
          <path
            d="M95 40 C97 36 100 38 99 42 C98 45 93 44 94 40"
            stroke={C.yarn}
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          {/* Hook working on separate piece */}
          <HookSvg x={108} y={30} rotation={-10} scale={0.8} />
          {/* Arrow showing it will be attached later */}
          <path
            d="M78 50 Q72 55 68 50"
            stroke={C.arrow}
            strokeWidth="0.8"
            fill="none"
            strokeDasharray="2 2"
          />
          <ArrowSvg x1={72} y1={52} x2={65} y2={48} />
          <text
            x="95"
            y="68"
            fill={C.yarn}
            fontSize="5"
            fontWeight="700"
            textAnchor="middle"
            opacity="0.7"
          >
            Peça avulsa
          </text>
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <rect
            x="20"
            y="20"
            width="100"
            height="60"
            rx="8"
            fill={C.pieceLight}
          />
          <HookSvg x={70} y={35} rotation={-20} scale={0.8} />
        </svg>
      );
  }
};

/* ── Exported Component ───────────────────────────────────── */

interface StepIllustrationProps {
  projectId: string;
  stepIndex: number;
  totalSteps: number;
}

const StepIllustration: React.FC<StepIllustrationProps> = ({
  projectId,
  stepIndex,
  totalSteps,
}) => {
  const templates = STEP_MAPS[projectId];
  if (!templates || stepIndex >= templates.length) {
    return null;
  }
  return renderTemplate(templates[stepIndex], stepIndex, totalSteps);
};

export default StepIllustration;
