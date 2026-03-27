import React from "react";

interface Props {
  projectId: string;
  color?: string;
}

const ProjectIllustration: React.FC<Props> = ({
  projectId,
  color = "var(--primary)",
}) => {
  const common = {
    viewBox: "0 0 100 100",
    fill: "none",
    style: { width: "100%", height: "100%" } as React.CSSProperties,
  };

  switch (projectId) {
    /* ── TAPETES REDONDOS ───────────────────── */
    case "tapete-redondo-basico":
      return (
        <svg {...common}>
          {/* Filled concentric rings showing circular increases */}
          <circle cx="50" cy="50" r="42" fill={color} fillOpacity="0.1" />
          <circle cx="50" cy="50" r="35" fill={color} fillOpacity="0.15" />
          <circle cx="50" cy="50" r="28" fill={color} fillOpacity="0.22" />
          <circle cx="50" cy="50" r="21" fill={color} fillOpacity="0.3" />
          <circle cx="50" cy="50" r="14" fill={color} fillOpacity="0.4" />
          <circle cx="50" cy="50" r="7" fill={color} fillOpacity="0.55" />
          {/* Stitch dashes on each ring — simulating crochet rows */}
          {[42, 35, 28, 21, 14].map((r) => (
            <circle
              key={`sr-${r}`}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="white"
              strokeWidth="0.7"
              strokeDasharray={`${r * 0.22} ${r * 0.15}`}
              strokeOpacity="0.5"
            />
          ))}
          {/* Magic ring center */}
          <circle cx="50" cy="50" r="3.5" fill={color} fillOpacity="0.8" />
          <circle cx="50" cy="50" r="1.5" fill="white" fillOpacity="0.7" />
          {/* Outer border — finished edge */}
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="white"
            strokeWidth="1.8"
            strokeOpacity="0.7"
          />
        </svg>
      );

    case "tapete-redondo-pipoca":
      return (
        <svg {...common}>
          <circle cx="50" cy="50" r="42" fill={color} fillOpacity="0.1" />
          <circle cx="50" cy="50" r="34" fill={color} fillOpacity="0.18" />
          <circle cx="50" cy="50" r="26" fill={color} fillOpacity="0.28" />
          <circle cx="50" cy="50" r="18" fill={color} fillOpacity="0.38" />
          <circle cx="50" cy="50" r="10" fill={color} fillOpacity="0.5" />
          {/* Stitch dashes between pipoca rows */}
          {[42, 34, 26, 18].map((r) => (
            <circle
              key={`sd-${r}`}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeDasharray={`${r * 0.2} ${r * 0.15}`}
              strokeOpacity="0.35"
            />
          ))}
          {/* Pipoca bobbles on inner ring — raised 3D dots */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <g key={`p1-${a}`}>
              <circle
                cx={50 + 18 * Math.cos((a * Math.PI) / 180)}
                cy={50 + 18 * Math.sin((a * Math.PI) / 180)}
                r="3"
                fill="white"
                fillOpacity="0.55"
              />
              <circle
                cx={50 + 18 * Math.cos((a * Math.PI) / 180) - 0.5}
                cy={50 + 18 * Math.sin((a * Math.PI) / 180) - 0.5}
                r="1.5"
                fill="white"
                fillOpacity="0.3"
              />
            </g>
          ))}
          {/* Pipoca bobbles on mid ring */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
            <g key={`p2-${a}`}>
              <circle
                cx={50 + 30 * Math.cos((a * Math.PI) / 180)}
                cy={50 + 30 * Math.sin((a * Math.PI) / 180)}
                r="3.2"
                fill="white"
                fillOpacity="0.5"
              />
              <circle
                cx={50 + 30 * Math.cos((a * Math.PI) / 180) - 0.5}
                cy={50 + 30 * Math.sin((a * Math.PI) / 180) - 0.5}
                r="1.6"
                fill="white"
                fillOpacity="0.25"
              />
            </g>
          ))}
          {/* Center magic ring */}
          <circle cx="50" cy="50" r="4" fill={color} fillOpacity="0.7" />
          <circle cx="50" cy="50" r="1.8" fill="white" fillOpacity="0.5" />
          {/* Outer border */}
          <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="1.8" />
        </svg>
      );

    case "tapete-redondo-espiral":
      return (
        <svg {...common}>
          {/* Base circle */}
          <circle cx="50" cy="50" r="42" fill={color} fillOpacity="0.08" />
          {/* Bicolor spiral segments - Color A (main) */}
          <path
            d="M50 50 L50 8 A42 42 0 0 1 86.3 29 Z"
            fill={color}
            fillOpacity="0.55"
          />
          <path
            d="M50 50 L86.3 71 A42 42 0 0 1 50 92 Z"
            fill={color}
            fillOpacity="0.55"
          />
          <path
            d="M50 50 L13.7 29 A42 42 0 0 1 13.7 71 Z"
            fill={color}
            fillOpacity="0.55"
          />
          {/* Bicolor spiral segments - Color B (lighter) */}
          <path
            d="M50 50 L86.3 29 A42 42 0 0 1 86.3 71 Z"
            fill={color}
            fillOpacity="0.22"
          />
          <path
            d="M50 50 L50 92 A42 42 0 0 1 13.7 71 Z"
            fill={color}
            fillOpacity="0.22"
          />
          <path
            d="M50 50 L13.7 29 A42 42 0 0 0 50 8 Z"
            fill={color}
            fillOpacity="0.22"
          />
          {/* Spiral curve lines */}
          <path
            d="M50 8 C62 18, 70 35, 50 50"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M86.3 29 C82 45, 68 58, 50 50"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M86.3 71 C72 72, 58 65, 50 50"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M50 92 C42 78, 42 62, 50 50"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M13.7 71 C22 62, 38 55, 50 50"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M13.7 29 C28 32, 42 42, 50 50"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          {/* Concentric stitch rings */}
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="none"
            stroke="white"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="white"
            strokeWidth="0.6"
            strokeOpacity="0.35"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="white"
            strokeWidth="0.6"
            strokeOpacity="0.3"
          />
          {/* Center */}
          <circle cx="50" cy="50" r="4" fill={color} fillOpacity="0.9" />
          <circle cx="50" cy="50" r="2" fill="white" fillOpacity="0.8" />
          {/* Outer ring */}
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke={color}
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
      );

    /* ── TAPETES RETANGULARES ───────────────── */
    case "tapete-retangular-simples":
      return (
        <svg {...common}>
          <rect
            x="15"
            y="22"
            width="70"
            height="56"
            rx="3"
            fill={color}
            fillOpacity="0.15"
          />
          {/* Crochet rows — back-and-forth stitch lines */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`row-${i}`}
              x1="19"
              y1={27 + i * 5.5}
              x2="81"
              y2={27 + i * 5.5}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.35"
            />
          ))}
          {/* V-stitch texture per row */}
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, c) => (
              <path
                key={`v-${r}-${c}`}
                d={`M${22 + c * 6} ${29.5 + r * 5.5} l2 3 l2 -3`}
                stroke="white"
                strokeWidth="0.6"
                strokeOpacity="0.45"
                fill="none"
                strokeLinecap="round"
              />
            )),
          )}
          {/* Alternating row shading for depth */}
          {[0, 2, 4, 6].map((i) => (
            <rect
              key={`sh-${i}`}
              x="15"
              y={27 + i * 5.5}
              width="70"
              height="5.5"
              fill="white"
              fillOpacity="0.06"
            />
          ))}
          {/* Finished border */}
          <rect
            x="15"
            y="22"
            width="70"
            height="56"
            rx="3"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "tapete-retangular-relevo":
      return (
        <svg {...common}>
          <rect
            x="15"
            y="22"
            width="70"
            height="56"
            rx="3"
            fill={color}
            fillOpacity="0.18"
          />
          {/* Basket weave pattern — alternating blocks of H/V raised stitches */}
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => {
              const x = 19 + c * 9;
              const y = 25 + r * 10;
              const horiz = (r + c) % 2 === 0;
              return horiz ? (
                <g key={`bw-${r}-${c}`}>
                  <line
                    x1={x}
                    y1={y + 2}
                    x2={x + 7}
                    y2={y + 2}
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.45"
                    strokeLinecap="round"
                  />
                  <line
                    x1={x}
                    y1={y + 5}
                    x2={x + 7}
                    y2={y + 5}
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.35"
                    strokeLinecap="round"
                  />
                </g>
              ) : (
                <g key={`bw-${r}-${c}`}>
                  <line
                    x1={x + 2}
                    y1={y}
                    x2={x + 2}
                    y2={y + 8}
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.45"
                    strokeLinecap="round"
                  />
                  <line
                    x1={x + 5}
                    y1={y}
                    x2={x + 5}
                    y2={y + 8}
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.35"
                    strokeLinecap="round"
                  />
                </g>
              );
            }),
          )}
          {/* Alternating block shading for depth */}
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) =>
              (r + c) % 2 === 0 ? (
                <rect
                  key={`sh-${r}-${c}`}
                  x={19 + c * 9}
                  y={25 + r * 10}
                  width="7"
                  height="8"
                  fill="white"
                  fillOpacity="0.06"
                />
              ) : null,
            ),
          )}
          <rect
            x="15"
            y="22"
            width="70"
            height="56"
            rx="3"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      );

    /* ── PASSADEIRAS ────────────────────────── */
    case "passadeira-basica":
      return (
        <svg {...common}>
          {/* Long runner shape */}
          <rect
            x="8"
            y="32"
            width="84"
            height="36"
            rx="2"
            fill={color}
            fillOpacity="0.15"
          />
          {/* Stitch rows */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`r-${i}`}
              x1="12"
              y1={37 + i * 6}
              x2="88"
              y2={37 + i * 6}
              stroke="white"
              strokeWidth="0.4"
              opacity="0.3"
            />
          ))}
          {/* V-stitch texture across rows */}
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 14 }).map((_, c) => (
              <path
                key={`sv-${r}-${c}`}
                d={`M${12 + c * 5.5} ${39 + r * 6} l1.8 2.5 l1.8 -2.5`}
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.4"
                fill="none"
                strokeLinecap="round"
              />
            )),
          )}
          {/* Simple fringe at short ends */}
          {Array.from({ length: 6 }).map((_, i) => (
            <React.Fragment key={`fr-${i}`}>
              <line
                x1={8}
                y1={35 + i * 5.5}
                x2={4}
                y2={35 + i * 5.5}
                stroke="white"
                strokeWidth="0.8"
                opacity="0.4"
                strokeLinecap="round"
              />
              <line
                x1={92}
                y1={35 + i * 5.5}
                x2={96}
                y2={35 + i * 5.5}
                stroke="white"
                strokeWidth="0.8"
                opacity="0.4"
                strokeLinecap="round"
              />
            </React.Fragment>
          ))}
          {/* Finished border */}
          <rect
            x="8"
            y="32"
            width="84"
            height="36"
            rx="2"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "passadeira-rendada":
      return (
        <svg {...common}>
          <rect
            x="8"
            y="28"
            width="84"
            height="44"
            rx="2"
            fill={color}
            fillOpacity="0.1"
          />
          {/* Fan/shell stitch pattern — two rows */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const cx = 14 + i * 10;
            return (
              <g key={`fan-${i}`}>
                <path
                  d={`M${cx} 50 Q${cx - 5} 41 ${cx - 6} 36 M${cx} 50 Q${cx - 2} 40 ${cx - 1} 35 M${cx} 50 Q${cx + 2} 40 ${cx + 1} 35 M${cx} 50 Q${cx + 5} 41 ${cx + 6} 36`}
                  stroke="white"
                  strokeWidth="0.7"
                  opacity="0.55"
                  fill="none"
                />
                <circle
                  cx={cx}
                  cy="50"
                  r="1.2"
                  fill="white"
                  fillOpacity="0.45"
                />
              </g>
            );
          })}
          {/* Openwork holes between fans */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <circle
              key={`h-${i}`}
              cx={19 + i * 10}
              cy="42"
              r="1.5"
              fill={color}
              fillOpacity="0.08"
              stroke="white"
              strokeWidth="0.4"
              strokeOpacity="0.35"
            />
          ))}
          {/* Scalloped top edge */}
          <path
            d="M8 28 Q14 23 20 28 Q26 23 32 28 Q38 23 44 28 Q50 23 56 28 Q62 23 68 28 Q74 23 80 28 Q86 23 92 28"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Scalloped bottom edge */}
          <path
            d="M8 72 Q14 77 20 72 Q26 77 32 72 Q38 77 44 72 Q50 77 56 72 Q62 77 68 72 Q74 77 80 72 Q86 77 92 72"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Light chain stitch lines */}
          <line
            x1="12"
            y1="58"
            x2="88"
            y2="58"
            stroke="white"
            strokeWidth="0.4"
            strokeOpacity="0.3"
            strokeDasharray="2 2"
          />
          <line
            x1="12"
            y1="64"
            x2="88"
            y2="64"
            stroke="white"
            strokeWidth="0.4"
            strokeOpacity="0.25"
            strokeDasharray="2 2"
          />
        </svg>
      );

    /* ── PORTA-COPOS ────────────────────────── */
    case "porta-copos-facil":
      return (
        <svg {...common}>
          {/* Coaster — concentric crochet rings */}
          <circle cx="50" cy="55" r="30" fill={color} fillOpacity="0.12" />
          <circle cx="50" cy="55" r="23" fill={color} fillOpacity="0.2" />
          <circle cx="50" cy="55" r="16" fill={color} fillOpacity="0.3" />
          <circle cx="50" cy="55" r="9" fill={color} fillOpacity="0.42" />
          {/* Stitch dashes on rings */}
          {[30, 23, 16, 9].map((r) => (
            <circle
              key={`cd-${r}`}
              cx="50"
              cy="55"
              r={r}
              fill="none"
              stroke="white"
              strokeWidth="0.6"
              strokeDasharray={`${r * 0.25} ${r * 0.18}`}
              strokeOpacity="0.5"
            />
          ))}
          {/* Magic ring center */}
          <circle cx="50" cy="55" r="3" fill={color} fillOpacity="0.7" />
          <circle cx="50" cy="55" r="1.2" fill="white" fillOpacity="0.6" />
          {/* Cup silhouette on top for context */}
          <path
            d="M42 38 L42 18 Q42 14 50 14 Q58 14 58 18 L58 38"
            fill="white"
            fillOpacity="0.1"
            stroke="white"
            strokeWidth="0.8"
            strokeOpacity="0.35"
          />
          {/* Cup handle */}
          <path
            d="M58 20 Q66 20 66 26 Q66 32 58 32"
            fill="none"
            stroke="white"
            strokeWidth="0.7"
            strokeOpacity="0.3"
          />
          {/* Outer coaster border */}
          <circle cx="50" cy="55" r="30" stroke="white" strokeWidth="1.5" />
        </svg>
      );

    case "porta-copos-textura":
      return (
        <svg {...common}>
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            rx="4"
            fill={color}
            fillOpacity="0.15"
          />
          {/* Moss stitch grid — alternating raised/flat stitches */}
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) =>
              (r + c) % 2 === 0 ? (
                <g key={`ms-${r}-${c}`}>
                  <circle
                    cx={31 + c * 7}
                    cy={31 + r * 7}
                    r="2"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <circle
                    cx={30.5 + c * 7}
                    cy={30.5 + r * 7}
                    r="0.8"
                    fill="white"
                    fillOpacity="0.25"
                  />
                </g>
              ) : (
                <rect
                  key={`ms-${r}-${c}`}
                  x={29.5 + c * 7}
                  y={30.5 + r * 7}
                  width="3"
                  height="1"
                  rx="0.5"
                  fill="white"
                  fillOpacity="0.3"
                />
              ),
            ),
          )}
          {/* Stitch row lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`mrl-${i}`}
              x1="28"
              y1={34.5 + i * 7}
              x2="72"
              y2={34.5 + i * 7}
              stroke="white"
              strokeWidth="0.3"
              strokeOpacity="0.2"
            />
          ))}
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            rx="4"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      );

    /* ── PORTA-PAPEL ────────────────────────── */
    case "porta-papel-basico":
      return (
        <svg {...common}>
          {/* Holder body — tall for 2 rolls */}
          <rect
            x="28"
            y="14"
            width="44"
            height="68"
            rx="3"
            fill={color}
            fillOpacity="0.2"
          />
          {/* Top roll visible */}
          <ellipse
            cx="50"
            cy="30"
            rx="15"
            ry="10"
            fill="white"
            fillOpacity="0.25"
            stroke="white"
            strokeWidth="0.7"
          />
          <ellipse
            cx="50"
            cy="30"
            rx="5"
            ry="3.5"
            fill={color}
            fillOpacity="0.3"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Separator line between rolls */}
          <line
            x1="32"
            y1="48"
            x2="68"
            y2="48"
            stroke="white"
            strokeWidth="0.8"
            strokeOpacity="0.5"
            strokeDasharray="3 2"
          />
          {/* Bottom roll visible */}
          <ellipse
            cx="50"
            cy="60"
            rx="15"
            ry="10"
            fill="white"
            fillOpacity="0.2"
            stroke="white"
            strokeWidth="0.7"
          />
          <ellipse
            cx="50"
            cy="60"
            rx="5"
            ry="3.5"
            fill={color}
            fillOpacity="0.25"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Crochet texture lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={i}
              x1="32"
              y1={19 + i * 6}
              x2="68"
              y2={19 + i * 6}
              stroke="white"
              strokeWidth="0.3"
              opacity="0.2"
            />
          ))}
          {/* Hanging loop at top */}
          <path
            d="M44 14 Q50 4 56 14"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Outer border */}
          <rect
            x="28"
            y="14"
            width="44"
            height="68"
            rx="3"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "porta-papel-decorado":
      return (
        <svg {...common}>
          {/* Holder body */}
          <rect
            x="26"
            y="14"
            width="48"
            height="68"
            rx="3"
            fill={color}
            fillOpacity="0.18"
          />
          {/* Top roll */}
          <ellipse
            cx="50"
            cy="28"
            rx="16"
            ry="10"
            fill="white"
            fillOpacity="0.22"
            stroke="white"
            strokeWidth="0.7"
          />
          <ellipse
            cx="50"
            cy="28"
            rx="5.5"
            ry="3.5"
            fill={color}
            fillOpacity="0.25"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Bottom roll */}
          <ellipse
            cx="50"
            cy="56"
            rx="16"
            ry="10"
            fill="white"
            fillOpacity="0.18"
            stroke="white"
            strokeWidth="0.6"
          />
          <ellipse
            cx="50"
            cy="56"
            rx="5.5"
            ry="3.5"
            fill={color}
            fillOpacity="0.2"
            stroke="white"
            strokeWidth="0.4"
          />
          {/* Flower appliqué — centered on body */}
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx={50 + 8 * Math.cos((a * Math.PI) / 180)}
              cy={42 + 8 * Math.sin((a * Math.PI) / 180)}
              rx="4.5"
              ry="2.8"
              fill="white"
              fillOpacity="0.55"
              transform={`rotate(${a} ${50 + 8 * Math.cos((a * Math.PI) / 180)} ${42 + 8 * Math.sin((a * Math.PI) / 180)})`}
            />
          ))}
          <circle cx="50" cy="42" r="3.5" fill={color} fillOpacity="0.55" />
          {/* Leaf details */}
          <path
            d="M62 48 Q67 44 65 52"
            fill={color}
            fillOpacity="0.35"
            stroke="white"
            strokeWidth="0.5"
          />
          <path
            d="M38 48 Q33 44 35 52"
            fill={color}
            fillOpacity="0.35"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Hanging loop */}
          <path
            d="M44 14 Q50 4 56 14"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Crochet stitch texture */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="30"
              y1={20 + i * 7.5}
              x2="70"
              y2={20 + i * 7.5}
              stroke="white"
              strokeWidth="0.3"
              opacity="0.18"
            />
          ))}
          {/* Outer border */}
          <rect
            x="26"
            y="14"
            width="48"
            height="68"
            rx="3"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );

    /* ── BOLSAS ─────────────────────────────── */
    case "sacola-basica":
      return (
        <svg {...common}>
          {/* Tote bag body — slight trapezoid */}
          <path
            d="M24 82 L28 32 L72 32 L76 82 Z"
            fill={color}
            fillOpacity="0.18"
          />
          {/* Handles — two strong straps */}
          <path
            d="M36 32 L36 18 Q36 12 42 12 L42 32"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          <path
            d="M58 32 L58 18 Q58 12 64 12 L64 32"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          {/* Crochet row texture */}
          {Array.from({ length: 8 }).map((_, i) => {
            const y = 37 + i * 5.5;
            const shrink = i * 0.4;
            return (
              <line
                key={`r-${i}`}
                x1={29 + shrink}
                y1={y}
                x2={71 - shrink}
                y2={y}
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
              />
            );
          })}
          {/* V-stitch marks in rows */}
          {Array.from({ length: 7 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <path
                key={`v-${r}-${c}`}
                d={`M${31 + c * 5.8 + r * 0.15} ${39.5 + r * 5.5} l1.5 2.5 l1.5 -2.5`}
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.35"
                fill="none"
                strokeLinecap="round"
              />
            )),
          )}
          {/* Top opening line */}
          <line
            x1="28"
            y1="32"
            x2="72"
            y2="32"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          {/* Bag outline */}
          <path
            d="M24 82 L28 32 L72 32 L76 82 Z"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "bolsa-fio-malha":
      return (
        <svg {...common}>
          {/* Bag body — structured rounded shape */}
          <path
            d="M22 80 Q22 38 34 32 L66 32 Q78 38 78 80 Z"
            fill={color}
            fillOpacity="0.2"
          />
          {/* Bamboo ring handles — natural color */}
          <circle
            cx="36"
            cy="22"
            r="9"
            stroke="#c8a87a"
            strokeWidth="3.5"
            fill="none"
          />
          <circle
            cx="36"
            cy="22"
            r="9"
            stroke="#e0c9a0"
            strokeWidth="1"
            fill="none"
            strokeOpacity="0.5"
          />
          <circle
            cx="64"
            cy="22"
            r="9"
            stroke="#c8a87a"
            strokeWidth="3.5"
            fill="none"
          />
          <circle
            cx="64"
            cy="22"
            r="9"
            stroke="#e0c9a0"
            strokeWidth="1"
            fill="none"
            strokeOpacity="0.5"
          />
          {/* Thick yarn / trapilho texture — wide horizontal rows */}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`ty-${i}`}
              x1="26"
              y1={38 + i * 6}
              x2="74"
              y2={38 + i * 6}
              stroke="white"
              strokeWidth="2"
              opacity="0.2"
              strokeLinecap="round"
            />
          ))}
          {/* Bag connection to rings */}
          <path
            d="M30 32 L30 28"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M42 32 L42 28"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M58 32 L58 28"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M70 32 L70 28"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
          {/* Bag outline */}
          <path
            d="M22 80 Q22 38 34 32 L66 32 Q78 38 78 80 Z"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "bolsa-ponto-fantasia":
      return (
        <svg {...common}>
          {/* Clutch body */}
          <path
            d="M15 40 L85 40 L85 78 L15 78 Z"
            fill={color}
            fillOpacity="0.18"
            stroke="white"
            strokeWidth="1"
          />
          {/* Flap — triangular envelope */}
          <path
            d="M15 40 L50 22 L85 40"
            fill={color}
            fillOpacity="0.25"
            stroke="white"
            strokeWidth="1.2"
          />
          {/* Fan/shell stitch pattern on body */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={`cf-${i}`}>
              <path
                d={`M${24 + i * 13} 60 Q${21 + i * 13} 52 ${18 + i * 13} 47 M${24 + i * 13} 60 Q${23 + i * 13} 50 ${23 + i * 13} 45 M${24 + i * 13} 60 Q${25 + i * 13} 50 ${25 + i * 13} 45 M${24 + i * 13} 60 Q${27 + i * 13} 52 ${30 + i * 13} 47`}
                stroke="white"
                strokeWidth="0.7"
                opacity="0.5"
                fill="none"
              />
              <circle
                cx={24 + i * 13}
                cy="60"
                r="1"
                fill="white"
                fillOpacity="0.4"
              />
            </g>
          ))}
          {/* Texture dots on flap */}
          {[0, 1, 2, 3].map((i) => (
            <path
              key={`fd-${i}`}
              d={`M${30 + i * 14} 34 l2 -3 l2 3`}
              stroke="white"
              strokeWidth="0.6"
              strokeOpacity="0.4"
              fill="none"
            />
          ))}
          {/* Magnetic clasp */}
          <circle cx="50" cy="40" r="3" fill="white" fillOpacity="0.5" />
          <circle cx="50" cy="40" r="1.2" fill={color} fillOpacity="0.4" />
          {/* Lining visible at top */}
          <line
            x1="17"
            y1="42"
            x2="83"
            y2="42"
            stroke="white"
            strokeWidth="0.4"
            strokeOpacity="0.3"
          />
        </svg>
      );

    /* ── MESA POSTA ─────────────────────────── */
    case "jogo-americano":
      return (
        <svg {...common}>
          {/* Oval placemat body */}
          <ellipse
            cx="50"
            cy="52"
            rx="42"
            ry="30"
            fill={color}
            fillOpacity="0.12"
          />
          {/* Stitch rings on placemat */}
          <ellipse
            cx="50"
            cy="52"
            rx="35"
            ry="24"
            fill={color}
            fillOpacity="0.08"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="2.5 1.8"
            strokeOpacity="0.35"
          />
          <ellipse
            cx="50"
            cy="52"
            rx="28"
            ry="18"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeDasharray="2 1.5"
            strokeOpacity="0.3"
          />
          {/* Plate silhouette */}
          <circle
            cx="50"
            cy="50"
            r="14"
            stroke="white"
            strokeWidth="0.8"
            opacity="0.35"
            fill="white"
            fillOpacity="0.04"
          />
          <circle
            cx="50"
            cy="50"
            r="10"
            stroke="white"
            strokeWidth="0.4"
            opacity="0.25"
          />
          {/* Fork */}
          <line
            x1="30"
            y1="38"
            x2="30"
            y2="64"
            stroke="white"
            strokeWidth="1"
            opacity="0.35"
            strokeLinecap="round"
          />
          <line
            x1="28"
            y1="38"
            x2="28"
            y2="44"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.25"
            strokeLinecap="round"
          />
          <line
            x1="32"
            y1="38"
            x2="32"
            y2="44"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.25"
            strokeLinecap="round"
          />
          {/* Knife */}
          <line
            x1="70"
            y1="38"
            x2="70"
            y2="64"
            stroke="white"
            strokeWidth="1.2"
            opacity="0.35"
            strokeLinecap="round"
          />
          {/* Placemat border */}
          <ellipse
            cx="50"
            cy="52"
            rx="42"
            ry="30"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "sousplat-croche":
      return (
        <svg {...common}>
          {/* Outer charger */}
          <circle cx="50" cy="50" r="42" fill={color} fillOpacity="0.1" />
          {/* Main body ring */}
          <circle cx="50" cy="50" r="36" fill={color} fillOpacity="0.12" />
          {/* Decorative fan-stitch border — scallops */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
            <ellipse
              key={`fb-${a}`}
              cx={50 + 38 * Math.cos((a * Math.PI) / 180)}
              cy={50 + 38 * Math.sin((a * Math.PI) / 180)}
              rx="5"
              ry="2.5"
              fill="white"
              fillOpacity="0.35"
              transform={`rotate(${a + 90} ${50 + 38 * Math.cos((a * Math.PI) / 180)} ${50 + 38 * Math.sin((a * Math.PI) / 180)})`}
            />
          ))}
          {/* Inner elaborate texture ring */}
          <circle
            cx="50"
            cy="50"
            r="28"
            fill={color}
            fillOpacity="0.08"
            stroke="white"
            strokeWidth="0.7"
            strokeDasharray="2.5 1.8"
            strokeOpacity="0.4"
          />
          {/* Radial stitch lines */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
            <line
              key={`rl-${a}`}
              x1={50 + 18 * Math.cos((a * Math.PI) / 180)}
              y1={50 + 18 * Math.sin((a * Math.PI) / 180)}
              x2={50 + 28 * Math.cos((a * Math.PI) / 180)}
              y2={50 + 28 * Math.sin((a * Math.PI) / 180)}
              stroke="white"
              strokeWidth="0.4"
              opacity="0.3"
            />
          ))}
          {/* Plate suggestion in center */}
          <circle
            cx="50"
            cy="50"
            r="16"
            fill="white"
            fillOpacity="0.06"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
          {/* Center stitch ring */}
          <circle
            cx="50"
            cy="50"
            r="6"
            fill={color}
            fillOpacity="0.15"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.35"
          />
          {/* Outer border */}
          <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="1.5" />
        </svg>
      );

    case "caminho-mesa":
      return (
        <svg {...common}>
          <rect
            x="6"
            y="28"
            width="88"
            height="44"
            rx="2"
            fill={color}
            fillOpacity="0.12"
          />
          {/* Diamond / losango pattern — larger and clearer */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={`d-${i}`}>
              <path
                d={`M${17 + i * 13} 50 L${23.5 + i * 13} 38 L${30 + i * 13} 50 L${23.5 + i * 13} 62 Z`}
                fill="white"
                fillOpacity="0.15"
                stroke="white"
                strokeWidth="0.7"
                opacity="0.55"
              />
              {/* Inner diamond detail */}
              <path
                d={`M${20 + i * 13} 50 L${23.5 + i * 13} 43 L${27 + i * 13} 50 L${23.5 + i * 13} 57 Z`}
                fill="none"
                stroke="white"
                strokeWidth="0.4"
                opacity="0.35"
              />
            </g>
          ))}
          {/* Fringe at left end */}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`fl-${i}`}
              x1="6"
              y1={31 + i * 5.5}
              x2="0"
              y2={33 + i * 5.5}
              stroke="white"
              strokeWidth="0.8"
              opacity="0.5"
              strokeLinecap="round"
            />
          ))}
          {/* Fringe at right end */}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`fr-${i}`}
              x1="94"
              y1={31 + i * 5.5}
              x2="100"
              y2={33 + i * 5.5}
              stroke="white"
              strokeWidth="0.8"
              opacity="0.5"
              strokeLinecap="round"
            />
          ))}
          {/* Stitch row lines */}
          <line
            x1="10"
            y1="34"
            x2="90"
            y2="34"
            stroke="white"
            strokeWidth="0.3"
            strokeOpacity="0.25"
          />
          <line
            x1="10"
            y1="66"
            x2="90"
            y2="66"
            stroke="white"
            strokeWidth="0.3"
            strokeOpacity="0.25"
          />
          {/* Finished border */}
          <rect
            x="6"
            y="28"
            width="88"
            height="44"
            rx="2"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );

    /* ── DECORAÇÃO ──────────────────────────── */
    case "almofada-croche":
      return (
        <svg {...common}>
          {/* Pillow body — slightly puffy corners */}
          <rect
            x="18"
            y="18"
            width="64"
            height="64"
            rx="8"
            fill={color}
            fillOpacity="0.15"
          />
          {/* Waffle grid — double lines for depth */}
          {Array.from({ length: 6 }).map((_, i) => (
            <React.Fragment key={`wf-${i}`}>
              <line
                x1={28 + i * 9}
                y1="22"
                x2={28 + i * 9}
                y2="78"
                stroke="white"
                strokeWidth="1"
                opacity="0.35"
              />
              <line
                x1={29.5 + i * 9}
                y1="22"
                x2={29.5 + i * 9}
                y2="78"
                stroke="white"
                strokeWidth="0.3"
                opacity="0.2"
              />
              <line
                x1="22"
                y1={28 + i * 9}
                x2="78"
                y2={28 + i * 9}
                stroke="white"
                strokeWidth="1"
                opacity="0.35"
              />
              <line
                x1="22"
                y1={29.5 + i * 9}
                x2="78"
                y2={29.5 + i * 9}
                stroke="white"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </React.Fragment>
          ))}
          {/* Waffle cell shading — alternating for depth */}
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) =>
              (r + c) % 2 === 0 ? (
                <rect
                  key={`ws-${r}-${c}`}
                  x={23 + c * 9}
                  y={23 + r * 9}
                  width="5"
                  height="5"
                  fill="white"
                  fillOpacity="0.07"
                />
              ) : null,
            ),
          )}
          {/* 3 closure buttons */}
          {[0, 1, 2].map((i) => (
            <g key={`btn-${i}`}>
              <circle
                cx={38 + i * 12}
                cy="79"
                r="2.5"
                fill="white"
                fillOpacity="0.5"
              />
              <circle
                cx={38 + i * 12}
                cy="79"
                r="1"
                fill={color}
                fillOpacity="0.3"
              />
            </g>
          ))}
          <rect
            x="18"
            y="18"
            width="64"
            height="64"
            rx="8"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "cachepot-croche":
      return (
        <svg {...common}>
          {/* Pot body — slight taper */}
          <path
            d="M28 85 L30 42 Q30 36 50 36 Q70 36 70 42 L72 85 Z"
            fill={color}
            fillOpacity="0.18"
          />
          {/* Horizontal stitch rows */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={`hl-${i}`}
              x1="32"
              y1={44 + i * 7}
              x2="68"
              y2={44 + i * 7}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
          {/* V-stitch texture marks */}
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <path
                key={`cv-${r}-${c}`}
                d={`M${34 + c * 7} ${46 + r * 7} l2 3 l2 -3`}
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                fill="none"
              />
            )),
          )}
          {/* Folded over top border / rim */}
          <ellipse
            cx="50"
            cy="36"
            rx="20"
            ry="4.5"
            fill={color}
            fillOpacity="0.12"
            stroke="white"
            strokeWidth="1"
          />
          {/* Plant leaves sticking out — realistic leaf shapes */}
          <path
            d="M42 36 Q38 22 34 12"
            stroke={color}
            strokeOpacity="0.55"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M42 36 Q36 20 30 16"
            stroke={color}
            strokeOpacity="0.3"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M50 36 Q50 16 52 6"
            stroke={color}
            strokeOpacity="0.5"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M58 36 Q62 22 66 12"
            stroke={color}
            strokeOpacity="0.55"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M58 36 Q64 20 70 16"
            stroke={color}
            strokeOpacity="0.3"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Pot outline */}
          <path
            d="M28 85 L30 42 Q30 36 50 36 Q70 36 70 42 L72 85 Z"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "almofada-textura-avancada":
      return (
        <svg {...common}>
          {/* Pillow circular shape — slight shadow for 3D */}
          <circle cx="50" cy="50" r="42" fill={color} fillOpacity="0.06" />
          {/* Mandala color rings */}
          <circle cx="50" cy="50" r="40" fill="#e8b4f8" fillOpacity="0.15" />
          <circle cx="50" cy="50" r="34" fill="#8bc4f6" fillOpacity="0.18" />
          <circle cx="50" cy="50" r="28" fill={color} fillOpacity="0.22" />
          <circle cx="50" cy="50" r="22" fill="#f6c85b" fillOpacity="0.22" />
          <circle cx="50" cy="50" r="16" fill="#f6845b" fillOpacity="0.22" />
          <circle cx="50" cy="50" r="10" fill={color} fillOpacity="0.4" />
          {/* Petal shapes in outer ring */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <ellipse
              key={`po-${a}`}
              cx={50 + 37 * Math.cos((a * Math.PI) / 180)}
              cy={50 + 37 * Math.sin((a * Math.PI) / 180)}
              rx="5"
              ry="2.5"
              fill="white"
              fillOpacity="0.3"
              transform={`rotate(${a} ${50 + 37 * Math.cos((a * Math.PI) / 180)} ${50 + 37 * Math.sin((a * Math.PI) / 180)})`}
            />
          ))}
          {/* Shell/fan stitches in mid ring */}
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <path
              key={`sh-${a}`}
              d={`M${50 + 25 * Math.cos((a * Math.PI) / 180)} ${50 + 25 * Math.sin((a * Math.PI) / 180)} 
                  q${3 * Math.cos(((a - 40) * Math.PI) / 180)} ${3 * Math.sin(((a - 40) * Math.PI) / 180)} 
                   ${5 * Math.cos(((a - 20) * Math.PI) / 180)} ${5 * Math.sin(((a - 20) * Math.PI) / 180)}`}
              fill="none"
              stroke="white"
              strokeWidth="0.7"
              strokeOpacity="0.5"
            />
          ))}
          {/* Inner petal ring */}
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={`pi-${a}`}
              cx={50 + 18 * Math.cos((a * Math.PI) / 180)}
              cy={50 + 18 * Math.sin((a * Math.PI) / 180)}
              rx="3.5"
              ry="2"
              fill="white"
              fillOpacity="0.35"
              transform={`rotate(${a} ${50 + 18 * Math.cos((a * Math.PI) / 180)} ${50 + 18 * Math.sin((a * Math.PI) / 180)})`}
            />
          ))}
          {/* Center flower */}
          <circle cx="50" cy="50" r="5" fill={color} fillOpacity="0.6" />
          <circle cx="50" cy="50" r="2.5" fill="white" fillOpacity="0.5" />
          {/* Pillow border — shows it's a cushion */}
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
          {/* Subtle pillow edge shadow */}
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
        </svg>
      );

    /* ── UTILITÁRIOS ────────────────────────── */
    case "necessaire-croche":
      return (
        <svg {...common}>
          {/* Pouch body — slightly rounded */}
          <rect
            x="18"
            y="28"
            width="64"
            height="44"
            rx="6"
            fill={color}
            fillOpacity="0.18"
            stroke="white"
            strokeWidth="1.2"
          />
          {/* Zipper line */}
          <line
            x1="20"
            y1="32"
            x2="80"
            y2="32"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Zipper teeth — interlocking */}
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={`zt-${i}`}>
              <line
                x1={24 + i * 4.5}
                y1="30.2"
                x2={24 + i * 4.5}
                y2="31.5"
                stroke="white"
                strokeWidth="0.7"
                opacity="0.5"
              />
              <line
                x1={24 + i * 4.5}
                y1="32.5"
                x2={24 + i * 4.5}
                y2="33.8"
                stroke="white"
                strokeWidth="0.7"
                opacity="0.5"
              />
            </g>
          ))}
          {/* Zipper pull tab */}
          <circle cx="78" cy="32" r="2.8" fill="white" fillOpacity="0.55" />
          <line
            x1="78"
            y1="34.8"
            x2="78"
            y2="37"
            stroke="white"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          {/* Crochet stitch texture */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`tl-${i}`}
              x1="24"
              y1={40 + i * 6}
              x2="76"
              y2={40 + i * 6}
              stroke="white"
              strokeWidth="0.4"
              opacity="0.2"
            />
          ))}
          {/* V-stitches */}
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 8 }).map((_, c) => (
              <path
                key={`nv-${r}-${c}`}
                d={`M${26 + c * 6.2} ${42 + r * 6} l1.8 2.5 l1.8 -2.5`}
                stroke="white"
                strokeWidth="0.4"
                strokeOpacity="0.25"
                fill="none"
              />
            )),
          )}
          {/* Lining hint at top */}
          <line
            x1="22"
            y1="34"
            x2="76"
            y2="34"
            stroke="white"
            strokeWidth="0.3"
            strokeOpacity="0.2"
          />
        </svg>
      );

    case "cesto-organizador":
      return (
        <svg {...common}>
          {/* Basket body */}
          <path
            d="M20 82 L22 38 Q22 34 50 34 Q78 34 78 38 L80 82 Z"
            fill={color}
            fillOpacity="0.18"
          />
          {/* Top rim — thicker for sturdy feel */}
          <ellipse
            cx="50"
            cy="34"
            rx="28"
            ry="5"
            fill={color}
            fillOpacity="0.1"
            stroke="white"
            strokeWidth="1.2"
          />
          {/* Horizontal thick yarn rows */}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`hr-${i}`}
              x1={24 + i * 0.3}
              y1={42 + i * 6.5}
              x2={76 - i * 0.3}
              y2={42 + i * 6.5}
              stroke="white"
              strokeWidth="1.2"
              opacity="0.25"
              strokeLinecap="round"
            />
          ))}
          {/* Vertical stitch marks for trapilho weave */}
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <line
                key={`vs-${r}-${c}`}
                x1={28 + c * 7}
                y1={40 + r * 6.5}
                x2={28 + c * 7}
                y2={44 + r * 6.5}
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              />
            )),
          )}
          {/* Side handles — integrated cutout style */}
          <path
            d="M22 48 Q13 48 13 54 Q13 60 22 60"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M78 48 Q87 48 87 54 Q87 60 78 60"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Basket outline */}
          <path
            d="M20 82 L22 38 Q22 34 50 34 Q78 34 78 38 L80 82 Z"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "organizador-parede":
      return (
        <svg {...common}>
          {/* Back panel */}
          <rect
            x="20"
            y="10"
            width="60"
            height="75"
            rx="3"
            fill={color}
            fillOpacity="0.12"
            stroke="white"
            strokeWidth="1"
          />
          {/* Crochet texture on back panel */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`bpl-${i}`}
              x1="24"
              y1={16 + i * 5.5}
              x2="76"
              y2={16 + i * 5.5}
              stroke="white"
              strokeWidth="0.3"
              opacity="0.15"
            />
          ))}
          {/* Large bottom pocket */}
          <rect
            x="24"
            y="55"
            width="52"
            height="26"
            rx="2"
            fill={color}
            fillOpacity="0.22"
            stroke="white"
            strokeWidth="0.8"
          />
          {/* Pocket stitch lines */}
          {Array.from({ length: 3 }).map((_, i) => (
            <line
              key={`bpsl-${i}`}
              x1="28"
              y1={61 + i * 6}
              x2="72"
              y2={61 + i * 6}
              stroke="white"
              strokeWidth="0.3"
              opacity="0.25"
            />
          ))}
          {/* Two medium pockets */}
          <rect
            x="24"
            y="30"
            width="24"
            height="20"
            rx="2"
            fill={color}
            fillOpacity="0.18"
            stroke="white"
            strokeWidth="0.8"
          />
          <rect
            x="52"
            y="30"
            width="24"
            height="20"
            rx="2"
            fill={color}
            fillOpacity="0.18"
            stroke="white"
            strokeWidth="0.8"
          />
          {/* Items peeking out of pockets */}
          <line
            x1="34"
            y1="30"
            x2="32"
            y2="24"
            stroke="white"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeLinecap="round"
          />
          <line
            x1="66"
            y1="30"
            x2="68"
            y2="24"
            stroke="white"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeLinecap="round"
          />
          {/* Wooden rod at top */}
          <line
            x1="16"
            y1="12"
            x2="84"
            y2="12"
            stroke="#c8a87a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="12"
            x2="84"
            y2="12"
            stroke="#e0c9a0"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeOpacity="0.5"
          />
          {/* Hanging cord */}
          <path
            d="M30 12 Q50 3 70 12"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      );

    /* ── INFANTIL ───────────────────────────── */
    case "tapete-infantil-urso":
      return (
        <svg {...common}>
          {/* Face circle — main rug body */}
          <circle cx="50" cy="55" r="34" fill={color} fillOpacity="0.25" />
          {/* Stitch rings on face for crochet texture */}
          <circle
            cx="50"
            cy="55"
            r="28"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeOpacity="0.2"
            strokeDasharray="2 1.5"
          />
          <circle
            cx="50"
            cy="55"
            r="20"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeOpacity="0.15"
            strokeDasharray="2 1.5"
          />
          {/* Ears */}
          <circle
            cx="26"
            cy="26"
            r="13"
            fill={color}
            fillOpacity="0.3"
            stroke="white"
            strokeWidth="1"
          />
          <circle cx="26" cy="26" r="7" fill={color} fillOpacity="0.45" />
          <circle
            cx="74"
            cy="26"
            r="13"
            fill={color}
            fillOpacity="0.3"
            stroke="white"
            strokeWidth="1"
          />
          <circle cx="74" cy="26" r="7" fill={color} fillOpacity="0.45" />
          {/* Eyes — glossy */}
          <circle cx="39" cy="48" r="4.5" fill="white" fillOpacity="0.65" />
          <circle cx="39" cy="48" r="2.2" fill={color} fillOpacity="0.8" />
          <circle cx="37.5" cy="46.5" r="0.8" fill="white" fillOpacity="0.7" />
          <circle cx="61" cy="48" r="4.5" fill="white" fillOpacity="0.65" />
          <circle cx="61" cy="48" r="2.2" fill={color} fillOpacity="0.8" />
          <circle cx="59.5" cy="46.5" r="0.8" fill="white" fillOpacity="0.7" />
          {/* Snout area */}
          <ellipse
            cx="50"
            cy="62"
            rx="9"
            ry="6"
            fill="white"
            fillOpacity="0.25"
            stroke="white"
            strokeWidth="0.8"
          />
          {/* Nose */}
          <ellipse
            cx="50"
            cy="59"
            rx="3.5"
            ry="2.2"
            fill={color}
            fillOpacity="0.65"
          />
          {/* Mouth */}
          <path
            d="M46 65 Q50 70 54 65"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          {/* Face border */}
          <circle cx="50" cy="55" r="34" stroke="white" strokeWidth="1.5" />
        </svg>
      );

    case "tapete-infantil-arco-iris":
      return (
        <svg {...common}>
          {/* Rainbow semicircle bands — each with subtle stitch dashes */}
          <path
            d="M10 75 A40 40 0 0 1 90 75"
            fill="#e74c3c"
            fillOpacity="0.25"
          />
          <path
            d="M10 75 A40 40 0 0 1 90 75"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeDasharray="2.5 2"
            strokeOpacity="0.3"
          />
          <path
            d="M16 75 A34 34 0 0 1 84 75"
            fill="#e67e22"
            fillOpacity="0.25"
          />
          <path
            d="M16 75 A34 34 0 0 1 84 75"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeDasharray="2.2 1.8"
            strokeOpacity="0.3"
          />
          <path
            d="M22 75 A28 28 0 0 1 78 75"
            fill="#f1c40f"
            fillOpacity="0.25"
          />
          <path
            d="M22 75 A28 28 0 0 1 78 75"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeDasharray="2 1.5"
            strokeOpacity="0.3"
          />
          <path
            d="M28 75 A22 22 0 0 1 72 75"
            fill="#27ae60"
            fillOpacity="0.3"
          />
          <path
            d="M28 75 A22 22 0 0 1 72 75"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeDasharray="1.8 1.5"
            strokeOpacity="0.3"
          />
          <path
            d="M34 75 A16 16 0 0 1 66 75"
            fill="#2980b9"
            fillOpacity="0.25"
          />
          <path
            d="M34 75 A16 16 0 0 1 66 75"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeDasharray="1.5 1.2"
            strokeOpacity="0.3"
          />
          <path
            d="M40 75 A10 10 0 0 1 60 75"
            fill="#8e44ad"
            fillOpacity="0.25"
          />
          {/* Straight base line */}
          <line
            x1="8"
            y1="75"
            x2="92"
            y2="75"
            stroke="white"
            strokeWidth="1.8"
          />
          {/* Outer arc border */}
          <path
            d="M10 75 A40 40 0 0 1 90 75"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
          {/* Small cloud puff details at top */}
          <circle cx="50" cy="34" r="1.5" fill="white" fillOpacity="0.2" />
          <circle cx="44" cy="38" r="1" fill="white" fillOpacity="0.15" />
          <circle cx="56" cy="38" r="1" fill="white" fillOpacity="0.15" />
        </svg>
      );

    /* ── COZINHA ─────────────────────────────── */
    case "pano-prato-barrado":
      return (
        <svg {...common}>
          {/* Towel body — fabric texture */}
          <rect
            x="22"
            y="8"
            width="56"
            height="58"
            rx="2"
            fill="white"
            fillOpacity="0.12"
            stroke="white"
            strokeWidth="0.8"
          />
          {/* Horizontal weave lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`tw-${i}`}
              x1="26"
              y1={18 + i * 9}
              x2="74"
              y2={18 + i * 9}
              stroke="white"
              strokeWidth="0.3"
              opacity="0.15"
            />
          ))}
          {/* Hanging loop */}
          <path
            d="M48 8 Q50 3 52 8"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
            strokeOpacity="0.4"
          />
          {/* Crochet border section at bottom */}
          <rect
            x="22"
            y="58"
            width="56"
            height="20"
            fill={color}
            fillOpacity="0.25"
          />
          {/* Border stitch rows */}
          {Array.from({ length: 4 }).map((_, i) => (
            <line
              key={`bl-${i}`}
              x1="26"
              y1={62 + i * 4}
              x2="74"
              y2={62 + i * 4}
              stroke="white"
              strokeWidth="0.4"
              opacity="0.35"
            />
          ))}
          {/* Scalloped/ondulated bottom edge */}
          <path
            d="M22 78 Q27 85 32 78 Q37 85 42 78 Q47 85 52 78 Q57 85 62 78 Q67 85 72 78 Q76 84 78 78"
            stroke="white"
            strokeWidth="1.5"
            fill={color}
            fillOpacity="0.15"
          />
          {/* V-stitch detail in border */}
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={`bv-${i}`}
              d={`M${27 + i * 6.2} 64 l2 3 l2 -3`}
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.35"
              fill="none"
            />
          ))}
        </svg>
      );

    case "pegador-panela":
      return (
        <svg {...common}>
          {/* Back layer (shadow offset for 3D depth) */}
          <circle
            cx="52"
            cy="54"
            r="28"
            fill={color}
            fillOpacity="0.1"
            stroke="white"
            strokeWidth="0.8"
            strokeOpacity="0.25"
          />
          {/* Front layer — main visible */}
          <circle cx="50" cy="52" r="28" fill={color} fillOpacity="0.2" />
          {/* Concentric stitch rings */}
          <circle
            cx="50"
            cy="52"
            r="22"
            fill={color}
            fillOpacity="0.12"
            stroke="white"
            strokeWidth="0.6"
            strokeDasharray="2.5 1.8"
            strokeOpacity="0.45"
          />
          <circle
            cx="50"
            cy="52"
            r="15"
            fill={color}
            fillOpacity="0.08"
            stroke="white"
            strokeWidth="0.6"
            strokeDasharray="2 1.5"
            strokeOpacity="0.4"
          />
          <circle
            cx="50"
            cy="52"
            r="8"
            fill={color}
            fillOpacity="0.2"
            stroke="white"
            strokeWidth="0.6"
            strokeDasharray="1.5 1.2"
            strokeOpacity="0.4"
          />
          {/* Center point */}
          <circle cx="50" cy="52" r="3" fill={color} fillOpacity="0.5" />
          <circle cx="50" cy="52" r="1.2" fill="white" fillOpacity="0.6" />
          {/* Hanging loop */}
          <path
            d="M50 24 Q50 10 58 10 Q66 10 66 20"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          {/* Front layer outer ring */}
          <circle cx="50" cy="52" r="28" stroke="white" strokeWidth="1.8" />
          {/* "2 camadas" — visible edge of back layer */}
          <path
            d="M78 52 A28 28 0 0 1 52 80"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            strokeDasharray="3 2"
          />
        </svg>
      );

    case "capa-galao":
      return (
        <svg {...common}>
          {/* Rounded dome top — covers the gallon top */}
          <path
            d="M24 42 Q24 12 50 8 Q76 12 76 42"
            fill={color}
            fillOpacity="0.18"
            stroke="white"
            strokeWidth="1"
          />
          {/* Cylindrical body */}
          <rect
            x="24"
            y="42"
            width="52"
            height="44"
            fill={color}
            fillOpacity="0.12"
          />
          {/* Stitch texture rows across dome */}
          <path
            d="M30 32 Q50 28 70 32"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeOpacity="0.35"
          />
          <path
            d="M27 22 Q50 16 73 22"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            strokeOpacity="0.3"
          />
          {/* Horizontal stitch lines on body */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={i}
              x1="27"
              y1={47 + i * 7.5}
              x2="73"
              y2={47 + i * 7.5}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
          {/* V-stitch marks */}
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <path
                key={`vs-${r}-${c}`}
                d={`M${30 + c * 7} ${49 + r * 7.5} l2 3 l2 -3`}
                stroke="white"
                strokeWidth="0.4"
                strokeOpacity="0.3"
                fill="none"
              />
            )),
          )}
          {/* Tap/torneira opening — clear rectangular cutout */}
          <rect
            x="62"
            y="58"
            width="14"
            height="10"
            rx="2"
            fill={color}
            fillOpacity="0.06"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          {/* Small tap icon inside opening */}
          <circle cx="69" cy="63" r="2" fill="white" fillOpacity="0.35" />
          <line
            x1="69"
            y1="65"
            x2="69"
            y2="67"
            stroke="white"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          {/* Elastic/ruffle at base */}
          <path
            d="M24 86 Q30 82 36 86 Q42 90 48 86 Q54 82 60 86 Q66 90 72 86 Q76 84 76 86"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Body side borders */}
          <line
            x1="24"
            y1="42"
            x2="24"
            y2="86"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="76"
            y1="42"
            x2="76"
            y2="86"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      );

    /* ── FALLBACK ───────────────────────────── */
    default:
      return (
        <svg {...common}>
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="8"
            fill={color}
            fillOpacity="0.2"
          />
          <circle cx="50" cy="50" r="15" fill={color} fillOpacity="0.3" />
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="8"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );
  }
};

export default ProjectIllustration;
