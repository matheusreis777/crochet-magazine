import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import {
  STITCH_CATEGORIES,
  STITCH_GUIDE_DATA,
  type StitchDetail,
  type Difficulty,
} from "./data/stitchGuideData";

// ============================================================
//  SVG Stitch Illustrations — Technical / Vector Style
// ============================================================
const ILLU_COLORS = {
  yarn: "#22a55b",
  yarnLight: "#34d372",
  hook: "#0d9488",
  bg: "#f0faf4",
  grid: "#d4edda",
  accent: "#c0392b",
};

const StitchSVG = ({ stitchId }: { stitchId: string }) => {
  const common = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 200 200",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  const yarn = ILLU_COLORS.yarn;
  const yarnL = ILLU_COLORS.yarnLight;
  const grid = ILLU_COLORS.grid;

  switch (stitchId) {
    // ---------- BÁSICOS ----------
    case "correntinha":
      return (
        <svg {...common}>
          {/* chain links */}
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse
              key={i}
              cx={100}
              cy={30 + i * 35}
              rx={22}
              ry={14}
              stroke={yarn}
              strokeWidth={3}
              fill="none"
              strokeDasharray={i === 2 ? "none" : "none"}
            />
          ))}
          {/* yarn thread */}
          <path
            d="M100 16 Q88 30 100 44 Q112 58 100 72 Q88 86 100 100 Q112 114 100 128 Q88 142 100 156 Q112 170 100 184"
            stroke={yarnL}
            strokeWidth={1.5}
            strokeDasharray="4 3"
            fill="none"
          />
          {/* direction arrow */}
          <path d="M100 188 L96 180 L104 180 Z" fill={yarnL} />
        </svg>
      );

    case "ponto-baixo":
      return (
        <svg {...common}>
          {/* base chain */}
          <line
            x1={40}
            y1={160}
            x2={160}
            y2={160}
            stroke={grid}
            strokeWidth={2}
          />
          {[60, 100, 140].map((x) => (
            <ellipse
              key={x}
              cx={x}
              cy={160}
              rx={14}
              ry={8}
              stroke={grid}
              strokeWidth={1.5}
            />
          ))}
          {/* stitch body — insert, yarn over, pull through */}
          <path
            d="M100 160 L100 130"
            stroke={yarn}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M100 130 Q85 120 80 110"
            stroke={yarn}
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M80 110 Q75 100 85 95"
            stroke={yarn}
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M85 95 Q95 90 105 95"
            stroke={yarn}
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
          />
          {/* loop on hook */}
          <ellipse
            cx={105}
            cy={85}
            rx={12}
            ry={8}
            stroke={yarn}
            strokeWidth={2.5}
          />
          {/* hook */}
          <line
            x1={117}
            y1={85}
            x2={155}
            y2={50}
            stroke={ILLU_COLORS.hook}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M155 50 Q160 45 155 40 Q150 38 148 42"
            stroke={ILLU_COLORS.hook}
            strokeWidth={3}
            fill="none"
          />
          {/* cross mark label */}
          <path
            d="M30 70 L50 90 M30 90 L50 70"
            stroke={yarn}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </svg>
      );

    case "meio-ponto-alto":
      return (
        <svg {...common}>
          <line
            x1={40}
            y1={165}
            x2={160}
            y2={165}
            stroke={grid}
            strokeWidth={2}
          />
          {[60, 100, 140].map((x) => (
            <ellipse
              key={x}
              cx={x}
              cy={165}
              rx={14}
              ry={8}
              stroke={grid}
              strokeWidth={1.5}
            />
          ))}
          {/* post */}
          <path
            d="M100 165 L100 100"
            stroke={yarn}
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* yarn-over wrap */}
          <path
            d="M88 120 Q100 110 112 120"
            stroke={yarnL}
            strokeWidth={2.5}
            fill="none"
            strokeLinecap="round"
          />
          {/* top loops */}
          <ellipse
            cx={100}
            cy={90}
            rx={16}
            ry={10}
            stroke={yarn}
            strokeWidth={2.5}
          />
          {/* T-symbol label */}
          <line
            x1={25}
            y1={70}
            x2={55}
            y2={70}
            stroke={yarn}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <line
            x1={40}
            y1={55}
            x2={40}
            y2={90}
            stroke={yarn}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </svg>
      );

    case "ponto-alto":
      return (
        <svg {...common}>
          <line
            x1={40}
            y1={170}
            x2={160}
            y2={170}
            stroke={grid}
            strokeWidth={2}
          />
          {[60, 100, 140].map((x) => (
            <ellipse
              key={x}
              cx={x}
              cy={170}
              rx={14}
              ry={8}
              stroke={grid}
              strokeWidth={1.5}
            />
          ))}
          {/* tall post */}
          <path
            d="M100 170 L100 70"
            stroke={yarn}
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* yarn-over bar */}
          <path
            d="M88 120 L112 110"
            stroke={yarnL}
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* top */}
          <ellipse
            cx={100}
            cy={62}
            rx={16}
            ry={10}
            stroke={yarn}
            strokeWidth={2.5}
          />
          {/* T-with-bar label */}
          <line
            x1={25}
            y1={65}
            x2={55}
            y2={65}
            stroke={yarn}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <line
            x1={40}
            y1={50}
            x2={40}
            y2={95}
            stroke={yarn}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <line
            x1={30}
            y1={80}
            x2={50}
            y2={74}
            stroke={yarnL}
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      );

    case "ponto-baixissimo":
      return (
        <svg {...common}>
          <line
            x1={40}
            y1={140}
            x2={160}
            y2={140}
            stroke={grid}
            strokeWidth={2}
          />
          {[60, 100, 140].map((x) => (
            <ellipse
              key={x}
              cx={x}
              cy={140}
              rx={14}
              ry={8}
              stroke={grid}
              strokeWidth={1.5}
            />
          ))}
          {/* very short insertion */}
          <path
            d="M100 140 L100 125"
            stroke={yarn}
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* quick pull through */}
          <path
            d="M95 128 Q100 118 105 128"
            stroke={yarn}
            strokeWidth={2.5}
            fill="none"
          />
          {/* dot — symbol */}
          <circle cx={40} cy={80} r={8} fill={yarn} />
          {/* arrow showing direction */}
          <path
            d="M70 100 L130 100"
            stroke={yarnL}
            strokeWidth={1.5}
            strokeDasharray="5 4"
          />
          <path d="M130 100 L124 95 L124 105 Z" fill={yarnL} />
        </svg>
      );

    // ---------- ESTRUTURA ----------
    case "ponto-alto-duplo":
      return (
        <svg {...common}>
          <line
            x1={40}
            y1={180}
            x2={160}
            y2={180}
            stroke={grid}
            strokeWidth={2}
          />
          <path
            d="M100 180 L100 45"
            stroke={yarn}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M86 130 L114 120"
            stroke={yarnL}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M86 100 L114 90"
            stroke={yarnL}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <ellipse
            cx={100}
            cy={38}
            rx={16}
            ry={10}
            stroke={yarn}
            strokeWidth={2.5}
          />
        </svg>
      );

    case "ponto-alto-triplo":
      return (
        <svg {...common}>
          <line
            x1={40}
            y1={185}
            x2={160}
            y2={185}
            stroke={grid}
            strokeWidth={2}
          />
          <path
            d="M100 185 L100 30"
            stroke={yarn}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M86 140 L114 130"
            stroke={yarnL}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M86 105 L114 95"
            stroke={yarnL}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M86 70 L114 60"
            stroke={yarnL}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <ellipse
            cx={100}
            cy={24}
            rx={14}
            ry={9}
            stroke={yarn}
            strokeWidth={2.5}
          />
        </svg>
      );

    case "ponto-leque-estrutural":
      return (
        <svg {...common}>
          <line
            x1={20}
            y1={170}
            x2={180}
            y2={170}
            stroke={grid}
            strokeWidth={2}
          />
          {/* fan of 5 dc from same point */}
          {[-40, -20, 0, 20, 40].map((angle, i) => (
            <g key={i}>
              <line
                x1={100}
                y1={170}
                x2={100 + Math.sin((angle * Math.PI) / 180) * 80}
                y2={170 - Math.cos((angle * Math.PI) / 180) * 80}
                stroke={yarn}
                strokeWidth={2.5}
                strokeLinecap="round"
              />
              <ellipse
                cx={100 + Math.sin((angle * Math.PI) / 180) * 85}
                cy={170 - Math.cos((angle * Math.PI) / 180) * 85}
                rx={8}
                ry={6}
                stroke={yarn}
                strokeWidth={2}
              />
            </g>
          ))}
          <circle cx={100} cy={170} r={5} fill={yarnL} />
        </svg>
      );

    case "ponto-v":
      return (
        <svg {...common}>
          <line
            x1={30}
            y1={170}
            x2={170}
            y2={170}
            stroke={grid}
            strokeWidth={2}
          />
          {/* V shape — 2 dc + chain*/}
          <line
            x1={100}
            y1={170}
            x2={70}
            y2={70}
            stroke={yarn}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <line
            x1={100}
            y1={170}
            x2={130}
            y2={70}
            stroke={yarn}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <ellipse
            cx={70}
            cy={62}
            rx={12}
            ry={8}
            stroke={yarn}
            strokeWidth={2}
          />
          <ellipse
            cx={130}
            cy={62}
            rx={12}
            ry={8}
            stroke={yarn}
            strokeWidth={2}
          />
          {/* chain between */}
          <ellipse
            cx={100}
            cy={60}
            rx={8}
            ry={5}
            stroke={yarnL}
            strokeWidth={2}
          />
          <circle cx={100} cy={170} r={4} fill={yarnL} />
        </svg>
      );

    // ---------- RELEVO ----------
    case "relevo-frente":
      return (
        <svg {...common}>
          {/* previous row posts */}
          {[60, 100, 140].map((x) => (
            <rect
              key={x}
              x={x - 6}
              y={120}
              width={12}
              height={50}
              rx={3}
              fill="none"
              stroke={grid}
              strokeWidth={2}
            />
          ))}
          {/* relief stitch wrapping around post */}
          <path
            d="M75 100 Q100 80 100 95 Q100 115 85 130 Q75 140 70 150"
            stroke={yarn}
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M125 100 Q100 80 100 95"
            stroke={yarn}
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
          {/* arrow showing front insertion */}
          <path
            d="M85 135 L78 128 M85 135 L92 128"
            stroke={ILLU_COLORS.hook}
            strokeWidth={2}
            strokeLinecap="round"
          />
          <text
            x={30}
            y={50}
            fontSize={11}
            fill={yarn}
            fontFamily="sans-serif"
            fontWeight={600}
          >
            Frente
          </text>
          <path
            d="M40 55 L40 90 L50 85"
            stroke={yarn}
            strokeWidth={1.5}
            fill="none"
          />
        </svg>
      );

    case "relevo-tras":
      return (
        <svg {...common}>
          {[60, 100, 140].map((x) => (
            <rect
              key={x}
              x={x - 6}
              y={120}
              width={12}
              height={50}
              rx={3}
              fill="none"
              stroke={grid}
              strokeWidth={2}
            />
          ))}
          <path
            d="M75 100 Q100 115 100 100 Q100 85 115 105 Q125 120 125 150"
            stroke={yarn}
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M75 100 Q100 115 100 100"
            stroke={yarn}
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
          <text
            x={30}
            y={50}
            fontSize={11}
            fill={yarn}
            fontFamily="sans-serif"
            fontWeight={600}
          >
            Trás
          </text>
          <path
            d="M40 55 L40 90 L50 85"
            stroke={yarn}
            strokeWidth={1.5}
            fill="none"
          />
        </svg>
      );

    case "ponto-pipoca":
      return (
        <svg {...common}>
          <line
            x1={40}
            y1={170}
            x2={160}
            y2={170}
            stroke={grid}
            strokeWidth={2}
          />
          {/* cluster of 5 dc folded */}
          {[-20, -10, 0, 10, 20].map((off, i) => (
            <path
              key={i}
              d={`M100 170 Q${95 + off} ${120 - i * 3} ${90 + off} ${80}`}
              stroke={yarn}
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
          ))}
          {/* fold-over closing */}
          <ellipse
            cx={100}
            cy={72}
            rx={28}
            ry={18}
            stroke={yarn}
            strokeWidth={2.5}
            fill={ILLU_COLORS.bg}
          />
          <ellipse
            cx={100}
            cy={72}
            rx={28}
            ry={18}
            stroke={yarn}
            strokeWidth={2.5}
            fill="none"
          />
          {/* popping out effect */}
          <path
            d="M80 62 Q100 40 120 62"
            stroke={yarnL}
            strokeWidth={2}
            fill="none"
            strokeDasharray="3 3"
          />
        </svg>
      );

    case "ponto-puff":
      return (
        <svg {...common}>
          <line
            x1={40}
            y1={170}
            x2={160}
            y2={170}
            stroke={grid}
            strokeWidth={2}
          />
          {/* multiple yarn-overs stacked */}
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M${85 + i * 4} 170 Q${80 + i * 3} ${130 - i * 5} ${90 + i * 3} ${90 - i * 3}`}
              stroke={i % 2 === 0 ? yarn : yarnL}
              strokeWidth={2.5}
              fill="none"
              strokeLinecap="round"
            />
          ))}
          {/* puffy top */}
          <ellipse
            cx={100}
            cy={72}
            rx={30}
            ry={22}
            stroke={yarn}
            strokeWidth={2.5}
            fill={ILLU_COLORS.bg}
          />
          <ellipse
            cx={100}
            cy={72}
            rx={30}
            ry={22}
            stroke={yarn}
            strokeWidth={2.5}
            fill="none"
          />
          {/* softness lines */}
          {[-12, 0, 12].map((off) => (
            <path
              key={off}
              d={`M${94 + off} 58 Q${100 + off} 50 ${106 + off} 58`}
              stroke={yarnL}
              strokeWidth={1.5}
              fill="none"
            />
          ))}
        </svg>
      );

    // ---------- TEXTURA ----------
    case "ponto-arroz":
      return (
        <svg {...common}>
          {/* grid of alternating sc and ch */}
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => {
              const x = 40 + col * 35;
              const y = 35 + row * 38;
              const isSC = (row + col) % 2 === 0;
              return isSC ? (
                <g key={`${row}-${col}`}>
                  <path
                    d={`M${x - 8} ${y - 8} L${x + 8} ${y + 8} M${x + 8} ${y - 8} L${x - 8} ${y + 8}`}
                    stroke={yarn}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                  />
                </g>
              ) : (
                <ellipse
                  key={`${row}-${col}`}
                  cx={x}
                  cy={y}
                  rx={10}
                  ry={7}
                  stroke={yarnL}
                  strokeWidth={2}
                />
              );
            }),
          )}
        </svg>
      );

    case "ponto-waffle":
      return (
        <svg {...common}>
          {/* waffle grid */}
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => {
              const x = 30 + col * 55;
              const y = 30 + row * 55;
              return (
                <g key={`${row}-${col}`}>
                  <rect
                    x={x}
                    y={y}
                    width={45}
                    height={45}
                    rx={4}
                    stroke={yarn}
                    strokeWidth={2}
                    fill="none"
                  />
                  <rect
                    x={x + 8}
                    y={y + 8}
                    width={29}
                    height={29}
                    rx={3}
                    stroke={grid}
                    strokeWidth={1.5}
                    fill={ILLU_COLORS.bg}
                  />
                </g>
              );
            }),
          )}
        </svg>
      );

    case "ponto-estrela":
      return (
        <svg {...common}>
          {/* starburst pattern */}
          {[0, 1, 2].map((row) =>
            [0, 1].map((col) => {
              const cx = 55 + col * 90;
              const cy = 55 + row * 55;
              return (
                <g key={`${row}-${col}`}>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={cx + Math.cos((i * Math.PI) / 3) * 22}
                      y2={cy + Math.sin((i * Math.PI) / 3) * 22}
                      stroke={yarn}
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  ))}
                  <circle cx={cx} cy={cy} r={5} fill={yarnL} />
                </g>
              );
            }),
          )}
        </svg>
      );

    case "ponto-cesta":
      return (
        <svg {...common}>
          {/* basket weave blocks */}
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => {
              const x = 15 + col * 44;
              const y = 15 + row * 44;
              const isVert =
                (Math.floor(row / 2) + Math.floor(col / 2)) % 2 === 0;
              return (
                <g key={`${row}-${col}`}>
                  <rect
                    x={x}
                    y={y}
                    width={38}
                    height={38}
                    rx={2}
                    stroke={grid}
                    strokeWidth={1}
                    fill="none"
                  />
                  {isVert
                    ? [0, 1, 2].map((i) => (
                        <line
                          key={i}
                          x1={x + 10 + i * 10}
                          y1={y + 4}
                          x2={x + 10 + i * 10}
                          y2={y + 34}
                          stroke={yarn}
                          strokeWidth={2.5}
                          strokeLinecap="round"
                        />
                      ))
                    : [0, 1, 2].map((i) => (
                        <line
                          key={i}
                          x1={x + 4}
                          y1={y + 10 + i * 10}
                          x2={x + 34}
                          y2={y + 10 + i * 10}
                          stroke={yarn}
                          strokeWidth={2.5}
                          strokeLinecap="round"
                        />
                      ))}
                </g>
              );
            }),
          )}
        </svg>
      );

    // ---------- VAZADOS ----------
    case "ponto-shell":
      return (
        <svg {...common}>
          <line
            x1={10}
            y1={170}
            x2={190}
            y2={170}
            stroke={grid}
            strokeWidth={2}
          />
          {/* shell group */}
          {[60, 140].map((cx) => (
            <g key={cx}>
              {[-30, -15, 0, 15, 30].map((angle, i) => (
                <line
                  key={i}
                  x1={cx}
                  y1={170}
                  x2={cx + Math.sin((angle * Math.PI) / 180) * 70}
                  y2={170 - Math.cos((angle * Math.PI) / 180) * 70}
                  stroke={yarn}
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              ))}
              <path
                d={`M${cx - 35} ${88} Q${cx} ${60} ${cx + 35} ${88}`}
                stroke={yarnL}
                strokeWidth={2}
                fill="none"
                strokeDasharray="4 3"
              />
            </g>
          ))}
          {/* sc between */}
          <path
            d="M95 165 L105 155 M105 165 L95 155"
            stroke={yarn}
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      );

    case "ponto-rede":
      return (
        <svg {...common}>
          {/* mesh net pattern */}
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => {
              const x = 40 + col * 50 + (row % 2) * 25;
              const y = 30 + row * 55;
              return (
                <g key={`${row}-${col}`}>
                  {/* arcs */}
                  <path
                    d={`M${x - 25} ${y + 30} Q${x} ${y} ${x + 25} ${y + 30}`}
                    stroke={yarn}
                    strokeWidth={2}
                    fill="none"
                  />
                  <circle cx={x} cy={y + 2} r={3} fill={yarnL} />
                </g>
              );
            }),
          )}
        </svg>
      );

    case "ponto-leque-vazado":
      return (
        <svg {...common}>
          <line
            x1={10}
            y1={170}
            x2={190}
            y2={170}
            stroke={grid}
            strokeWidth={2}
          />
          {/* open fan */}
          <g>
            {[-25, 0, 25].map((angle, i) => (
              <g key={i}>
                <line
                  x1={100}
                  y1={170}
                  x2={100 + Math.sin((angle * Math.PI) / 180) * 75}
                  y2={170 - Math.cos((angle * Math.PI) / 180) * 75}
                  stroke={yarn}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                />
                <ellipse
                  cx={100 + Math.sin((angle * Math.PI) / 180) * 80}
                  cy={170 - Math.cos((angle * Math.PI) / 180) * 80}
                  rx={8}
                  ry={5}
                  stroke={yarn}
                  strokeWidth={2}
                />
              </g>
            ))}
            {/* gaps with chains */}
            <ellipse
              cx={84}
              cy={100}
              rx={6}
              ry={4}
              stroke={yarnL}
              strokeWidth={1.5}
            />
            <ellipse
              cx={116}
              cy={100}
              rx={6}
              ry={4}
              stroke={yarnL}
              strokeWidth={1.5}
            />
          </g>
        </svg>
      );

    case "ponto-abacaxi":
      return (
        <svg {...common}>
          {/* pineapple motif outline */}
          <path
            d="M100 25 Q50 80 60 140 Q80 175 100 180 Q120 175 140 140 Q150 80 100 25"
            stroke={yarn}
            strokeWidth={2.5}
            fill="none"
          />
          {/* internal arcs */}
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M${70 + i * 3} ${60 + i * 25} Q100 ${45 + i * 25} ${130 - i * 3} ${60 + i * 25}`}
              stroke={yarnL}
              strokeWidth={1.5}
              fill="none"
            />
          ))}
          {/* mesh dots */}
          {[0, 1, 2, 3].map((row) =>
            Array.from({ length: 3 - Math.abs(row - 1.5) > 1 ? 3 : 2 }).map(
              (_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={85 + col * 15 + (row % 2) * 7}
                  cy={80 + row * 25}
                  r={2.5}
                  fill={yarn}
                />
              ),
            ),
          )}
        </svg>
      );

    // ---------- DECORATIVOS ----------
    case "ponto-crocodilo":
      return (
        <svg {...common}>
          {/* scales */}
          {[0, 1, 2].map((row) =>
            [0, 1].map((col) => {
              const cx = 55 + col * 90 + (row % 2) * 45;
              const cy = 40 + row * 55;
              return (
                <g key={`${row}-${col}`}>
                  <path
                    d={`M${cx - 25} ${cy - 15} Q${cx - 30} ${cy + 20} ${cx} ${cy + 30} Q${cx + 30} ${cy + 20} ${cx + 25} ${cy - 15}`}
                    stroke={yarn}
                    strokeWidth={2.5}
                    fill="none"
                  />
                  {/* inner lines */}
                  <path
                    d={`M${cx - 18} ${cy - 10} L${cx - 12} ${cy + 18}`}
                    stroke={yarnL}
                    strokeWidth={1.5}
                  />
                  <path
                    d={`M${cx} ${cy - 12} L${cx} ${cy + 22}`}
                    stroke={yarnL}
                    strokeWidth={1.5}
                  />
                  <path
                    d={`M${cx + 18} ${cy - 10} L${cx + 12} ${cy + 18}`}
                    stroke={yarnL}
                    strokeWidth={1.5}
                  />
                </g>
              );
            }),
          )}
        </svg>
      );

    case "ponto-flor":
      return (
        <svg {...common}>
          {/* center */}
          <circle
            cx={100}
            cy={100}
            r={14}
            fill={yarnL}
            stroke={yarn}
            strokeWidth={2}
          />
          {/* petals */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = i * 60;
            const rad = (angle * Math.PI) / 180;
            const px = 100 + Math.cos(rad) * 45;
            const py = 100 + Math.sin(rad) * 45;
            return (
              <ellipse
                key={i}
                cx={px}
                cy={py}
                rx={22}
                ry={14}
                transform={`rotate(${angle} ${px} ${py})`}
                stroke={yarn}
                strokeWidth={2.5}
                fill="none"
              />
            );
          })}
          {/* stitch lines in petals */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = i * 60;
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={`l${i}`}
                x1={100 + Math.cos(rad) * 18}
                y1={100 + Math.sin(rad) * 18}
                x2={100 + Math.cos(rad) * 55}
                y2={100 + Math.sin(rad) * 55}
                stroke={yarnL}
                strokeWidth={1.5}
                strokeDasharray="3 3"
              />
            );
          })}
        </svg>
      );

    case "ponto-bobble":
      return (
        <svg {...common}>
          <line
            x1={30}
            y1={170}
            x2={170}
            y2={170}
            stroke={grid}
            strokeWidth={2}
          />
          {/* incomplete dc converging */}
          {[-15, -7, 0, 7, 15].map((off, i) => (
            <path
              key={i}
              d={`M${100 + off} 170 Q${95 + off * 0.5} 120 ${100} 80`}
              stroke={yarn}
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
          ))}
          {/* bobble top */}
          <circle
            cx={100}
            cy={75}
            r={22}
            stroke={yarn}
            strokeWidth={2.5}
            fill={ILLU_COLORS.bg}
          />
          <circle
            cx={100}
            cy={75}
            r={22}
            stroke={yarn}
            strokeWidth={2.5}
            fill="none"
          />
          {/* closing stitch */}
          <path
            d="M100 53 L100 40"
            stroke={yarnL}
            strokeWidth={2}
            strokeLinecap="round"
          />
          <ellipse
            cx={100}
            cy={36}
            rx={6}
            ry={4}
            stroke={yarnL}
            strokeWidth={1.5}
          />
        </svg>
      );

    case "ponto-catherine-wheel":
      return (
        <svg {...common}>
          {/* wave pattern */}
          <path
            d="M10 100 Q35 50 60 100 Q85 150 110 100 Q135 50 160 100 Q185 150 200 100"
            stroke={yarn}
            strokeWidth={3}
            fill="none"
          />
          <path
            d="M10 120 Q35 70 60 120 Q85 170 110 120 Q135 70 160 120 Q185 170 200 120"
            stroke={yarnL}
            strokeWidth={2}
            fill="none"
            strokeDasharray="4 3"
          />
          {/* clusters at peaks */}
          {[60, 160].map((x) => (
            <g key={x}>
              {[-8, 0, 8].map((off, i) => (
                <line
                  key={i}
                  x1={x + off}
                  y1={100}
                  x2={x + off}
                  y2={70}
                  stroke={yarn}
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              ))}
            </g>
          ))}
          {[110].map((x) => (
            <g key={x}>
              {[-8, 0, 8].map((off, i) => (
                <line
                  key={i}
                  x1={x + off}
                  y1={120}
                  x2={x + off}
                  y2={150}
                  stroke={yarn}
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              ))}
            </g>
          ))}
        </svg>
      );

    // ---------- ACABAMENTO ----------
    case "ponto-caranguejo":
      return (
        <svg {...common}>
          <line
            x1={20}
            y1={130}
            x2={180}
            y2={130}
            stroke={grid}
            strokeWidth={2}
          />
          {/* reverse sc — going right */}
          {[50, 80, 110, 140].map((x, i) => (
            <g key={i}>
              <path
                d={`M${x + 20} 130 Q${x + 10} 110 ${x} 105 Q${x - 5} 100 ${x} 95`}
                stroke={yarn}
                strokeWidth={2.5}
                fill="none"
                strokeLinecap="round"
              />
              <circle cx={x} cy={93} r={4} fill={yarnL} />
            </g>
          ))}
          {/* direction arrow (right) */}
          <path
            d="M30 80 L170 80"
            stroke={ILLU_COLORS.hook}
            strokeWidth={2}
            strokeDasharray="5 4"
          />
          <path d="M170 80 L162 74 L162 86 Z" fill={ILLU_COLORS.hook} />
          <text
            x={60}
            y={72}
            fontSize={11}
            fill={ILLU_COLORS.hook}
            fontFamily="sans-serif"
          >
            ← sentido inverso
          </text>
        </svg>
      );

    case "picot":
      return (
        <svg {...common}>
          <line
            x1={20}
            y1={150}
            x2={180}
            y2={150}
            stroke={grid}
            strokeWidth={2}
          />
          {/* picot bumps */}
          {[50, 100, 150].map((x) => (
            <g key={x}>
              <path
                d={`M${x - 15} 150 L${x - 15} 140`}
                stroke={yarn}
                strokeWidth={2}
                strokeLinecap="round"
              />
              <ellipse
                cx={x - 5}
                cy={115}
                rx={6}
                ry={4}
                stroke={yarn}
                strokeWidth={1.5}
              />
              <ellipse
                cx={x}
                cy={105}
                rx={6}
                ry={4}
                stroke={yarn}
                strokeWidth={1.5}
              />
              <ellipse
                cx={x + 5}
                cy={115}
                rx={6}
                ry={4}
                stroke={yarn}
                strokeWidth={1.5}
              />
              <circle cx={x} cy={100} r={3} fill={yarnL} />
              <path
                d={`M${x + 15} 150 L${x + 12} 140`}
                stroke={yarn}
                strokeWidth={2}
                strokeLinecap="round"
              />
            </g>
          ))}
        </svg>
      );

    case "borda-leques":
      return (
        <svg {...common}>
          <line
            x1={10}
            y1={140}
            x2={190}
            y2={140}
            stroke={grid}
            strokeWidth={2}
          />
          {/* fan scallops */}
          {[60, 140].map((cx) => (
            <g key={cx}>
              {[-30, -15, 0, 15, 30].map((angle, i) => (
                <line
                  key={i}
                  x1={cx}
                  y1={140}
                  x2={cx + Math.sin((angle * Math.PI) / 180) * 60}
                  y2={140 - Math.cos((angle * Math.PI) / 180) * 60}
                  stroke={yarn}
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              ))}
              <path
                d={`M${cx - 30} ${80} Q${cx} ${55} ${cx + 30} ${80}`}
                stroke={yarnL}
                strokeWidth={1.5}
                fill="none"
              />
            </g>
          ))}
        </svg>
      );

    case "borda-conchas":
      return (
        <svg {...common}>
          <line
            x1={10}
            y1={140}
            x2={190}
            y2={140}
            stroke={grid}
            strokeWidth={2}
          />
          {/* smaller shells — 3 dc each */}
          {[45, 85, 125, 165].map((cx) => (
            <g key={cx}>
              {[-18, 0, 18].map((angle, i) => (
                <line
                  key={i}
                  x1={cx}
                  y1={140}
                  x2={cx + Math.sin((angle * Math.PI) / 180) * 45}
                  y2={140 - Math.cos((angle * Math.PI) / 180) * 45}
                  stroke={yarn}
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              ))}
              <path
                d={`M${cx - 14} ${97} Q${cx} ${85} ${cx + 14} ${97}`}
                stroke={yarnL}
                strokeWidth={1.5}
                fill="none"
              />
            </g>
          ))}
        </svg>
      );

    // ---------- PEÇAS ----------
    case "granny-square":
      return (
        <svg {...common}>
          {/* square layers */}
          <rect
            x={60}
            y={60}
            width={80}
            height={80}
            rx={2}
            stroke={yarn}
            strokeWidth={2.5}
            fill="none"
          />
          <rect
            x={75}
            y={75}
            width={50}
            height={50}
            rx={2}
            stroke={yarnL}
            strokeWidth={2}
            fill="none"
          />
          <rect
            x={88}
            y={88}
            width={24}
            height={24}
            rx={2}
            stroke={yarn}
            strokeWidth={2}
            fill="none"
          />
          {/* corner clusters */}
          {[
            [60, 60],
            [140, 60],
            [60, 140],
            [140, 140],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle
                cx={cx}
                cy={cy}
                r={6}
                fill={yarnL}
                stroke={yarn}
                strokeWidth={1.5}
              />
            </g>
          ))}
          {/* edge clusters */}
          {[
            [100, 60],
            [100, 140],
            [60, 100],
            [140, 100],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <line
                x1={cx - 6}
                y1={cy}
                x2={cx + 6}
                y2={cy}
                stroke={yarn}
                strokeWidth={2}
              />
              <line
                x1={cx}
                y1={cy - 6}
                x2={cx}
                y2={cy + 6}
                stroke={yarn}
                strokeWidth={2}
              />
            </g>
          ))}
          {/* center ring */}
          <circle
            cx={100}
            cy={100}
            r={8}
            fill="none"
            stroke={ILLU_COLORS.hook}
            strokeWidth={2}
          />
        </svg>
      );

    case "espinha-de-peixe":
      return (
        <svg {...common}>
          {/* herringbone V pattern */}
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2].map((col) => {
              const x = 35 + col * 50;
              const y = 25 + row * 35;
              return (
                <g key={`${row}-${col}`}>
                  <line
                    x1={x}
                    y1={y + 25}
                    x2={x + 15}
                    y2={y}
                    stroke={yarn}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                  />
                  <line
                    x1={x + 15}
                    y1={y}
                    x2={x + 30}
                    y2={y + 25}
                    stroke={yarnL}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                  />
                </g>
              );
            }),
          )}
        </svg>
      );

    case "ponto-musgo":
      return (
        <svg {...common}>
          {/* alternating height stitches */}
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].map((col) => {
              const x = 25 + col * 35;
              const y = 180 - row * 42;
              const isTall = (row + col) % 2 === 0;
              const h = isTall ? 32 : 16;
              return (
                <g key={`${row}-${col}`}>
                  <line
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={y - h}
                    stroke={isTall ? yarn : yarnL}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx={x}
                    cy={y - h - 4}
                    rx={6}
                    ry={4}
                    stroke={isTall ? yarn : yarnL}
                    strokeWidth={1.5}
                  />
                </g>
              );
            }),
          )}
        </svg>
      );

    case "quadrado-solido":
      return (
        <svg {...common}>
          {/* solid square with stitch texture */}
          <rect
            x={35}
            y={35}
            width={130}
            height={130}
            rx={4}
            stroke={yarn}
            strokeWidth={2.5}
            fill="none"
          />
          {/* dense stitch rows */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={40}
              y1={45 + i * 15}
              x2={160}
              y2={45 + i * 15}
              stroke={grid}
              strokeWidth={1}
            />
          ))}
          {/* stitch marks */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((row) =>
            [0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={45 + col * 16}
                cy={45 + row * 15}
                r={2}
                fill={yarnL}
              />
            )),
          )}
          {/* corner marks */}
          {[
            [35, 35],
            [165, 35],
            [35, 165],
            [165, 165],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={5} fill={yarn} />
          ))}
        </svg>
      );

    // ---------- AVANÇADAS ----------
    case "overlay-crochet":
      return (
        <svg {...common}>
          {/* base layer */}
          <circle
            cx={100}
            cy={100}
            r={75}
            stroke={grid}
            strokeWidth={2}
            fill="none"
          />
          <circle
            cx={100}
            cy={100}
            r={55}
            stroke={grid}
            strokeWidth={1.5}
            fill="none"
          />
          <circle
            cx={100}
            cy={100}
            r={35}
            stroke={grid}
            strokeWidth={1.5}
            fill="none"
          />
          {/* overlay stitches */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = i * 45;
            const rad = (angle * Math.PI) / 180;
            return (
              <g key={i}>
                <path
                  d={`M${100 + Math.cos(rad) * 35} ${100 + Math.sin(rad) * 35}
                  L${100 + Math.cos(rad) * 75} ${100 + Math.sin(rad) * 75}`}
                  stroke={yarn}
                  strokeWidth={3}
                  strokeLinecap="round"
                />
              </g>
            );
          })}
          {/* color accents on overlay */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = i * 45 + 22.5;
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={i}
                cx={100 + Math.cos(rad) * 55}
                cy={100 + Math.sin(rad) * 55}
                r={6}
                fill={yarnL}
                stroke={yarn}
                strokeWidth={1.5}
              />
            );
          })}
          <circle
            cx={100}
            cy={100}
            r={12}
            fill={ILLU_COLORS.hook}
            opacity={0.3}
          />
        </svg>
      );

    case "tapestry-crochet":
      return (
        <svg {...common}>
          {/* pixel grid pattern */}
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => {
              const x = 20 + col * 21;
              const y = 20 + row * 21;
              const isDark =
                (row + col) % 3 === 0 || row === col || row + col === 7;
              return (
                <rect
                  key={`${row}-${col}`}
                  x={x}
                  y={y}
                  width={18}
                  height={18}
                  rx={2}
                  fill={isDark ? yarn : "none"}
                  stroke={isDark ? yarn : grid}
                  strokeWidth={1.5}
                  fillOpacity={isDark ? 0.7 : 0}
                />
              );
            }),
          )}
        </svg>
      );

    case "croche-tunisiano":
      return (
        <svg {...common}>
          {/* long hook */}
          <line
            x1={20}
            y1={40}
            x2={180}
            y2={40}
            stroke={ILLU_COLORS.hook}
            strokeWidth={4}
            strokeLinecap="round"
          />
          <path
            d="M180 40 Q186 36 182 30 Q178 26 175 30"
            stroke={ILLU_COLORS.hook}
            strokeWidth={3}
            fill="none"
          />
          {/* loops on hook */}
          {Array.from({ length: 7 }).map((_, i) => (
            <ellipse
              key={i}
              cx={35 + i * 22}
              cy={40}
              rx={8}
              ry={12}
              stroke={yarn}
              strokeWidth={2}
              fill="none"
            />
          ))}
          {/* vertical bars coming down */}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={35 + i * 22}
              y1={52}
              x2={35 + i * 22}
              y2={140}
              stroke={yarnL}
              strokeWidth={2}
              strokeLinecap="round"
            />
          ))}
          {/* return pass */}
          <path
            d="M30 160 L170 160"
            stroke={yarn}
            strokeWidth={2}
            strokeDasharray="5 4"
          />
          <text
            x={50}
            y={178}
            fontSize={10}
            fill={yarn}
            fontFamily="sans-serif"
          >
            ← volta fechando
          </text>
        </svg>
      );

    case "broomstick-lace":
      return (
        <svg {...common}>
          {/* broomstick/ruler */}
          <rect
            x={15}
            y={30}
            width={170}
            height={14}
            rx={7}
            fill={ILLU_COLORS.hook}
            opacity={0.3}
            stroke={ILLU_COLORS.hook}
            strokeWidth={2}
          />
          {/* large loops on stick */}
          {Array.from({ length: 5 }).map((_, i) => (
            <ellipse
              key={i}
              cx={40 + i * 32}
              cy={37}
              rx={12}
              ry={25}
              stroke={yarn}
              strokeWidth={2.5}
              fill="none"
            />
          ))}
          {/* gathered groups below */}
          {[0, 1].map((g) => (
            <g key={g}>
              <path
                d={`M${50 + g * 72} 90 Q${72 + g * 72} 80 ${94 + g * 72} 90`}
                stroke={yarn}
                strokeWidth={2.5}
                fill="none"
              />
              <path
                d={`M${55 + g * 72} 95 Q${72 + g * 72} 140 ${89 + g * 72} 95`}
                stroke={yarnL}
                strokeWidth={2}
                fill="none"
                strokeDasharray="3 3"
              />
              {/* sc group */}
              {[0, 1, 2].map((s) => (
                <path
                  key={s}
                  d={`M${57 + s * 14 + g * 72} 92 L${63 + s * 14 + g * 72} 100 M${63 + s * 14 + g * 72} 92 L${57 + s * 14 + g * 72} 100`}
                  stroke={yarn}
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
              ))}
            </g>
          ))}
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <rect
            x={30}
            y={30}
            width={140}
            height={140}
            rx={12}
            stroke={yarn}
            strokeWidth={2}
            fill="none"
          />
          <path
            d="M70 100 Q100 60 130 100"
            stroke={yarn}
            strokeWidth={3}
            fill="none"
          />
          <circle cx={100} cy={100} r={6} fill={yarnL} />
        </svg>
      );
  }
};

// ============================================================
//  Chart Symbol Mini-SVG
// ============================================================
const ChartSymbolSVG = ({ stitchId }: { stitchId: string }) => {
  const common = {
    width: "48",
    height: "48",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  const s = ILLU_COLORS.yarn;

  switch (stitchId) {
    case "correntinha":
      return (
        <svg {...common}>
          <ellipse
            cx={20}
            cy={20}
            rx={10}
            ry={7}
            stroke={s}
            strokeWidth={2.5}
          />
        </svg>
      );
    case "ponto-baixo":
      return (
        <svg {...common}>
          <path
            d="M12 12 L28 28 M28 12 L12 28"
            stroke={s}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </svg>
      );
    case "meio-ponto-alto":
      return (
        <svg {...common}>
          <line x1={10} y1={18} x2={30} y2={18} stroke={s} strokeWidth={2.5} />
          <line x1={20} y1={8} x2={20} y2={32} stroke={s} strokeWidth={2.5} />
        </svg>
      );
    case "ponto-alto":
      return (
        <svg {...common}>
          <line x1={20} y1={6} x2={20} y2={34} stroke={s} strokeWidth={2.5} />
          <line x1={10} y1={18} x2={30} y2={18} stroke={s} strokeWidth={2.5} />
          <line x1={14} y1={24} x2={26} y2={20} stroke={s} strokeWidth={2} />
        </svg>
      );
    case "ponto-baixissimo":
      return (
        <svg {...common}>
          <circle cx={20} cy={20} r={6} fill={s} />
        </svg>
      );
    case "ponto-alto-duplo":
      return (
        <svg {...common}>
          <line x1={20} y1={4} x2={20} y2={36} stroke={s} strokeWidth={2.5} />
          <line x1={12} y1={18} x2={28} y2={14} stroke={s} strokeWidth={2} />
          <line x1={12} y1={26} x2={28} y2={22} stroke={s} strokeWidth={2} />
        </svg>
      );
    case "ponto-alto-triplo":
      return (
        <svg {...common}>
          <line x1={20} y1={4} x2={20} y2={36} stroke={s} strokeWidth={2.5} />
          <line x1={12} y1={14} x2={28} y2={10} stroke={s} strokeWidth={2} />
          <line x1={12} y1={22} x2={28} y2={18} stroke={s} strokeWidth={2} />
          <line x1={12} y1={30} x2={28} y2={26} stroke={s} strokeWidth={2} />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx={20} cy={20} r={8} stroke={s} strokeWidth={2} />
          <circle cx={20} cy={20} r={3} fill={s} />
        </svg>
      );
  }
};

// ============================================================
//  Difficulty Badge
// ============================================================
const DIFFICULTY_CONFIG: Record<Difficulty, { color: string; bg: string }> = {
  Iniciante: { color: "#27ae60", bg: "#eafaf1" },
  Intermediário: { color: "#e67e22", bg: "#fef5e7" },
  Avançado: { color: "#c0392b", bg: "#fdedec" },
};

const DifficultyBadge = ({ level }: { level: Difficulty }) => {
  const cfg = DIFFICULTY_CONFIG[level];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "100px",
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.03em",
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.color}22`,
      }}
    >
      {level}
    </span>
  );
};

// ============================================================
//  Stitch Card
// ============================================================
interface StitchCardProps {
  stitch: StitchDetail;
  isFavorite: boolean;
  isWatchLater: boolean;
  onToggleFavorite: () => void;
  onToggleWatchLater: () => void;
  onClick: () => void;
}

const StitchCard = ({
  stitch,
  isFavorite,
  isWatchLater,
  onToggleFavorite,
  onToggleWatchLater,
  onClick,
}: StitchCardProps) => (
  <div className="sg-card" onClick={onClick}>
    {/* illustration */}
    <div className="sg-card-illustration">
      <StitchSVG stitchId={stitch.id} />
    </div>

    {/* content */}
    <div className="sg-card-body">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "8px",
        }}
      >
        <DifficultyBadge level={stitch.difficulty} />
        <code
          style={{
            fontSize: "0.7rem",
            color: "var(--primary)",
            fontWeight: 800,
            background: "var(--accent-light)",
            padding: "3px 8px",
            borderRadius: "6px",
          }}
        >
          {stitch.abbr}
        </code>
      </div>
      <h3 className="sg-card-title">{stitch.name}</h3>
      <p className="sg-card-desc">{stitch.description}</p>

      {/* actions */}
      <div className="sg-card-actions" onClick={(e) => e.stopPropagation()}>
        <button
          className={`sg-action-btn ${isFavorite ? "active" : ""}`}
          onClick={onToggleFavorite}
          title="Favoritar"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
        <button
          className={`sg-action-btn ${isWatchLater ? "active" : ""}`}
          onClick={onToggleWatchLater}
          title="Ver depois"
        >
          {isWatchLater ? "🔖" : "📑"}
        </button>
      </div>
    </div>
  </div>
);

// ============================================================
//  Stitch Detail Modal
// ============================================================
interface StitchModalProps {
  stitch: StitchDetail;
  onClose: () => void;
  isFavorite: boolean;
  isWatchLater: boolean;
  onToggleFavorite: () => void;
  onToggleWatchLater: () => void;
}

const StitchModal = ({
  stitch,
  onClose,
  isFavorite,
  isWatchLater,
  onToggleFavorite,
  onToggleWatchLater,
}: StitchModalProps) => {
  const category = STITCH_CATEGORIES.find((c) => c.id === stitch.categoryId);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll & focus trap
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    // Focus the close button on open
    closeRef.current?.focus();

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    modal.addEventListener("keydown", trapFocus);
    return () => modal.removeEventListener("keydown", trapFocus);
  }, []);

  return createPortal(
    <div
      className="sg-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={stitch.name}
      ref={modalRef}
    >
      <div className="sg-modal" onClick={(e) => e.stopPropagation()}>
        {/* ── Sticky header ── */}
        <div className="sg-modal-sticky-header">
          <div className="sg-modal-sticky-title">
            <span className="sg-modal-category">
              {category?.icon} {category?.name}
            </span>
            <h2 className="serif sg-modal-title">{stitch.name}</h2>
          </div>
          <button
            className="sg-modal-close"
            onClick={onClose}
            ref={closeRef}
            aria-label="Fechar modal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Scrollable content ── */}
        <div className="sg-modal-scroll">
          {/* Illustration + meta */}
          <div className="sg-modal-hero">
            <div className="sg-modal-illustration">
              <StitchSVG stitchId={stitch.id} />
            </div>
            <div className="sg-modal-meta">
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <DifficultyBadge level={stitch.difficulty} />
                <code
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--primary)",
                    fontWeight: 800,
                  }}
                >
                  ({stitch.abbr})
                </code>
              </div>
              <p className="sg-modal-description">{stitch.description}</p>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className={`sg-action-btn-lg ${isFavorite ? "active" : ""}`}
                  onClick={onToggleFavorite}
                >
                  {isFavorite ? "♥ Favoritado" : "♡ Favoritar"}
                </button>
                <button
                  className={`sg-action-btn-lg ${isWatchLater ? "active" : ""}`}
                  onClick={onToggleWatchLater}
                >
                  {isWatchLater ? "🔖 Salvo" : "📑 Ver depois"}
                </button>
              </div>
            </div>
          </div>

          {/* ── Body sections ── */}
          <div className="sg-modal-body">
            {/* Chart Symbol */}
            <div className="sg-modal-section">
              <h3 className="sg-modal-section-title">Símbolo no Gráfico</h3>
              <div className="sg-chart-symbol-box">
                <ChartSymbolSVG stitchId={stitch.id} />
                <span
                  style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}
                >
                  {stitch.chartSymbol}
                </span>
              </div>
            </div>

            {/* Step by step */}
            <div className="sg-modal-section">
              <h3 className="sg-modal-section-title">Passo a Passo</h3>
              <div className="sg-steps">
                {stitch.steps.map((step, i) => (
                  <div key={i} className="sg-step">
                    <div className="sg-step-number">{i + 1}</div>
                    <p className="sg-step-text">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="sg-modal-section">
              <h3 className="sg-modal-section-title">Aplicações Práticas</h3>
              <div className="sg-applications">
                {stitch.applications.map((app, i) => (
                  <span key={i} className="sg-application-tag">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

// ============================================================
//  Local Storage helpers
// ============================================================
function loadSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveSet(key: string, set: Set<string>) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

// ============================================================
//  Main Component — StitchGuide
// ============================================================
export default function StitchGuide() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);
  const [selectedStitch, setSelectedStitch] = useState<StitchDetail | null>(
    null,
  );
  const [favorites, setFavorites] = useState<Set<string>>(() =>
    loadSet("sg-favorites"),
  );
  const [watchLater, setWatchLater] = useState<Set<string>>(() =>
    loadSet("sg-watch-later"),
  );
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showWatchLaterOnly, setShowWatchLaterOnly] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Persist
  useEffect(() => {
    saveSet("sg-favorites", favorites);
  }, [favorites]);
  useEffect(() => {
    saveSet("sg-watch-later", watchLater);
  }, [watchLater]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const toggleWatchLater = useCallback((id: string) => {
    setWatchLater((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  // Filter data
  const filtered = STITCH_GUIDE_DATA.filter((s) => {
    if (search) {
      const q = search.toLowerCase();
      if (
        !s.name.toLowerCase().includes(q) &&
        !s.abbr.toLowerCase().includes(q) &&
        !s.description.toLowerCase().includes(q)
      )
        return false;
    }
    if (selectedCategory && s.categoryId !== selectedCategory) return false;
    if (selectedDifficulty && s.difficulty !== selectedDifficulty) return false;
    if (showFavoritesOnly && !favorites.has(s.id)) return false;
    if (showWatchLaterOnly && !watchLater.has(s.id)) return false;
    return true;
  });

  // Group by category for display
  const groupedByCategory = STITCH_CATEGORIES.map((cat) => ({
    category: cat,
    stitches: filtered.filter((s) => s.categoryId === cat.id),
  })).filter((g) => g.stitches.length > 0);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory(null);
    setSelectedDifficulty(null);
    setShowFavoritesOnly(false);
    setShowWatchLaterOnly(false);
  };

  const hasActiveFilters =
    !!search ||
    !!selectedCategory ||
    !!selectedDifficulty ||
    showFavoritesOnly ||
    showWatchLaterOnly;

  return (
    <div className="section container animate-fade sg-root">
      {/* ---- HEADER ---- */}
      <div className="sg-header">
        <span className="sg-header-label">Enciclopédia Digital</span>
        <h1 className="serif sg-title">
          Guia de Pontos{" "}
          <span style={{ fontWeight: 400, fontStyle: "italic" }}>
            de Crochê
          </span>
        </h1>
        <p className="sg-subtitle">
          Aprenda qualquer ponto com ilustrações técnicas, passo a passo
          didático e simbologia profissional.
        </p>
      </div>

      {/* ---- SEARCH BAR ---- */}
      <div className="sg-search-container">
        <div className="sg-search-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-muted)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <input
          className="sg-search-input"
          type="text"
          placeholder='Buscar ponto... ex: "puff", "correntinha", "granny"'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="sg-search-clear" onClick={() => setSearch("")}>
            ✕
          </button>
        )}
      </div>

      {/* ---- FILTERS ---- */}
      <div className="sg-filters-wrapper">
        {/* Mobile toggle */}
        <button
          className="sg-filter-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="16" y2="12" />
            <line x1="4" y1="18" x2="12" y2="18" />
          </svg>
          Filtros
          {hasActiveFilters && <span className="sg-filter-badge" />}
        </button>

        <div className={`sg-filters ${mobileMenuOpen ? "open" : ""}`}>
          {/* Category pills */}
          <div className="sg-filter-group">
            <p className="sg-filter-label">Categoria</p>
            <div className="sg-filter-pills">
              {STITCH_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`sg-pill ${selectedCategory === cat.id ? "active" : ""}`}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === cat.id ? null : cat.id,
                    )
                  }
                >
                  <span className="sg-pill-icon">{cat.icon}</span> {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty pills */}
          <div className="sg-filter-group">
            <p className="sg-filter-label">Nível</p>
            <div className="sg-filter-pills">
              {(["Iniciante", "Intermediário", "Avançado"] as Difficulty[]).map(
                (d) => (
                  <button
                    key={d}
                    className={`sg-pill ${selectedDifficulty === d ? "active" : ""}`}
                    onClick={() =>
                      setSelectedDifficulty(selectedDifficulty === d ? null : d)
                    }
                  >
                    {d}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Special filters */}
          <div className="sg-filter-group">
            <p className="sg-filter-label">Coleções</p>
            <div className="sg-filter-pills">
              <button
                className={`sg-pill ${showFavoritesOnly ? "active" : ""}`}
                onClick={() => {
                  setShowFavoritesOnly(!showFavoritesOnly);
                  setShowWatchLaterOnly(false);
                }}
              >
                ♥ Favoritos ({favorites.size})
              </button>
              <button
                className={`sg-pill ${showWatchLaterOnly ? "active" : ""}`}
                onClick={() => {
                  setShowWatchLaterOnly(!showWatchLaterOnly);
                  setShowFavoritesOnly(false);
                }}
              >
                📑 Ver depois ({watchLater.size})
              </button>
            </div>
          </div>

          {hasActiveFilters && (
            <button className="sg-clear-filters" onClick={clearFilters}>
              Limpar todos os filtros
            </button>
          )}
        </div>
      </div>

      {/* ---- RESULTS COUNT ---- */}
      <div className="sg-results-info">
        <span>
          {filtered.length} ponto{filtered.length !== 1 ? "s" : ""} encontrado
          {filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ---- STITCH GRID ---- */}
      {filtered.length === 0 ? (
        <div className="sg-empty">
          <div className="sg-empty-icon">🧶</div>
          <h3>Nenhum ponto encontrado</h3>
          <p>Tente ajustar seus filtros ou termos de busca.</p>
          <button
            className="btn btn-primary"
            style={{ marginTop: "16px" }}
            onClick={clearFilters}
          >
            Ver todos os pontos
          </button>
        </div>
      ) : (
        groupedByCategory.map(({ category, stitches }) => (
          <div key={category.id} className="sg-category-section">
            <div className="sg-category-header">
              <span className="sg-category-icon">{category.icon}</span>
              <div>
                <h2 className="serif sg-category-title">{category.name}</h2>
                <p className="sg-category-desc">{category.description}</p>
              </div>
              <span className="sg-category-count">{stitches.length}</span>
            </div>
            <div className="sg-grid">
              {stitches.map((stitch) => (
                <StitchCard
                  key={stitch.id}
                  stitch={stitch}
                  isFavorite={favorites.has(stitch.id)}
                  isWatchLater={watchLater.has(stitch.id)}
                  onToggleFavorite={() => toggleFavorite(stitch.id)}
                  onToggleWatchLater={() => toggleWatchLater(stitch.id)}
                  onClick={() => setSelectedStitch(stitch)}
                />
              ))}
            </div>
          </div>
        ))
      )}

      {/* ---- MODAL ---- */}
      {selectedStitch && (
        <StitchModal
          stitch={selectedStitch}
          onClose={() => setSelectedStitch(null)}
          isFavorite={favorites.has(selectedStitch.id)}
          isWatchLater={watchLater.has(selectedStitch.id)}
          onToggleFavorite={() => toggleFavorite(selectedStitch.id)}
          onToggleWatchLater={() => toggleWatchLater(selectedStitch.id)}
        />
      )}
    </div>
  );
}
