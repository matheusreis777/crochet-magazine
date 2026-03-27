import { useState, useEffect, useRef, useCallback } from "react";

// ─── Types ──────────────────────────────────────────────────
type Phase =
  | "idle"
  | "yarn-over"
  | "pull-through"
  | "new-chain"
  | "slide-left"
  | "repeat";

interface AnimState {
  phase: Phase;
  chainCount: number;
  progress: number; // 0..1 within current phase
}

// ─── Constants ──────────────────────────────────────────────
const PHASE_DURATION: Record<Phase, number> = {
  idle: 800,
  "yarn-over": 700,
  "pull-through": 700,
  "new-chain": 500,
  "slide-left": 400,
  repeat: 0,
};

const PHASE_ORDER: Phase[] = [
  "idle",
  "yarn-over",
  "pull-through",
  "new-chain",
  "slide-left",
  "repeat",
];

const MAX_VISIBLE_CHAINS = 5;

type StitchAnimVariant =
  | "chain"
  | "single"
  | "half"
  | "double"
  | "tall"
  | "fan"
  | "relief"
  | "cluster"
  | "motif"
  | "advanced";

interface ChainStitchAnimationProps {
  stitchId: string;
  stitchName: string;
  steps: string[];
}

// Mapeia cada ponto real para uma "família" de movimento.
// Para criar um novo comportamento, adicione uma nova variant no tipo StitchAnimVariant
// e trate no render (GenericStitchScene ou uma nova Scene dedicada).
function getVariant(stitchId: string): StitchAnimVariant {
  if (stitchId === "correntinha") return "chain";

  const single = new Set([
    "ponto-baixo",
    "ponto-baixissimo",
    "ponto-caranguejo",
    "picot",
  ]);
  const half = new Set(["meio-ponto-alto", "ponto-musgo"]);
  const double = new Set([
    "ponto-alto",
    "ponto-v",
    "ponto-rede",
    "granny-square",
    "quadrado-solido",
  ]);
  const tall = new Set(["ponto-alto-duplo", "ponto-alto-triplo"]);
  const fan = new Set([
    "ponto-leque-estrutural",
    "ponto-shell",
    "ponto-leque-vazado",
    "borda-leques",
    "borda-conchas",
    "ponto-catherine-wheel",
  ]);
  const relief = new Set([
    "relevo-frente",
    "relevo-tras",
    "ponto-waffle",
    "ponto-cesta",
    "espinha-de-peixe",
  ]);
  const cluster = new Set([
    "ponto-pipoca",
    "ponto-puff",
    "ponto-bobble",
    "ponto-estrela",
    "ponto-flor",
  ]);
  const motif = new Set(["ponto-abacaxi", "ponto-crocodilo"]);
  const advanced = new Set([
    "overlay-crochet",
    "tapestry-crochet",
    "croche-tunisiano",
    "broomstick-lace",
  ]);

  if (single.has(stitchId)) return "single";
  if (half.has(stitchId)) return "half";
  if (double.has(stitchId)) return "double";
  if (tall.has(stitchId)) return "tall";
  if (fan.has(stitchId)) return "fan";
  if (relief.has(stitchId)) return "relief";
  if (cluster.has(stitchId)) return "cluster";
  if (motif.has(stitchId)) return "motif";
  if (advanced.has(stitchId)) return "advanced";

  return "double";
}

// ─── Helpers ────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

// ─── Chain Link SVG shape ───────────────────────────────────
function ChainLink({
  x,
  y,
  opacity = 1,
  scale = 1,
  active = false,
}: {
  x: number;
  y: number;
  opacity?: number;
  scale?: number;
  active?: boolean;
}) {
  const rx = 13 * scale;
  const ry = 8 * scale;
  return (
    <g
      transform={`translate(${x}, ${y})`}
      opacity={opacity}
      style={{ transition: "opacity 0.2s" }}
    >
      <ellipse
        cx={0}
        cy={0}
        rx={rx}
        ry={ry}
        stroke={active ? "#22a55b" : "#34d372"}
        strokeWidth={active ? 3 : 2.5}
        fill="none"
        strokeLinecap="round"
      />
      {/* Inner highlight */}
      <ellipse
        cx={-rx * 0.15}
        cy={-ry * 0.2}
        rx={rx * 0.55}
        ry={ry * 0.4}
        stroke={active ? "#22a55b" : "#34d372"}
        strokeWidth={active ? 2.5 : 2}
        fill="none"
        opacity={0.45}
      />
    </g>
  );
}

// ─── Crochet Hook SVG ───────────────────────────────────────
function CrochetHook({
  x,
  y,
  angle = 0,
}: {
  x: number;
  y: number;
  angle?: number;
}) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
      {/* Shaft */}
      <line
        x1={0}
        y1={-46}
        x2={0}
        y2={28}
        stroke="#5f7a6a"
        strokeWidth={4}
        strokeLinecap="round"
      />
      {/* Throat curve */}
      <path
        d="M 0 28 Q 0 38 -10 40 Q -18 41 -18 35"
        stroke="#5f7a6a"
        strokeWidth={3.5}
        fill="none"
        strokeLinecap="round"
      />
      {/* Hook tip */}
      <path
        d="M -18 35 Q -22 28 -14 25"
        stroke="#5f7a6a"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
      {/* Grip band */}
      <rect
        x={-5}
        y={-10}
        width={10}
        height={22}
        rx={3}
        fill="#d4edda"
        opacity={0.6}
      />
      {/* Handle nub */}
      <circle cx={0} cy={-43} r={4} fill="#22a55b" opacity={0.7} />
    </g>
  );
}

// ─── Yarn strand ────────────────────────────────────────────
function YarnStrand({
  x1,
  y1,
  x2,
  y2,
  cx,
  cy,
  color = "#22a55b",
  width = 2.5,
  opacity = 1,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  cx?: number;
  cy?: number;
  color?: string;
  width?: number;
  opacity?: number;
}) {
  if (cx !== undefined && cy !== undefined) {
    return (
      <path
        d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
        stroke={color}
        strokeWidth={width}
        fill="none"
        strokeLinecap="round"
        opacity={opacity}
      />
    );
  }
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      opacity={opacity}
    />
  );
}

// ─── Arrow guide ────────────────────────────────────────────
function ArrowGuide({
  x1,
  y1,
  x2,
  y2,
  color = "#22a55b",
  opacity = 0.7,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  opacity?: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len < 2) return null;
  const ux = dx / len;
  const uy = dy / len;
  const ax = x2 - ux * 10;
  const ay = y2 - uy * 10;
  const px = -uy;
  const py = ux;
  return (
    <g opacity={opacity}>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={2}
        strokeDasharray="5 4"
        strokeLinecap="round"
      />
      <polygon
        points={`${x2},${y2} ${ax + px * 5},${ay + py * 5} ${ax - px * 5},${ay - py * 5}`}
        fill={color}
      />
    </g>
  );
}

// ─── Label ──────────────────────────────────────────────────
function StepLabel({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <g>
      <rect
        x={x - 4}
        y={y - 14}
        width={text.length * 7.2 + 8}
        height={20}
        rx={6}
        fill="#22a55b"
        opacity={0.13}
      />
      <text
        x={x}
        y={y}
        fontSize={12}
        fill="#1a8047"
        fontFamily="Outfit, sans-serif"
        fontWeight={700}
      >
        {text}
      </text>
    </g>
  );
}

// ─── Main Animation Scene ───────────────────────────────────
// Cena dedicada da correntinha: possui lógica própria de formação de elos.
// Use esta cena como referência quando quiser animações super específicas.
function AnimationScene({ state }: { state: AnimState }) {
  const { phase, progress, chainCount } = state;
  const t = easeInOut(progress);
  const tOut = easeOut(progress);

  // Chain links positions (right-to-left for visual clarity)
  // Working point is at x=210, chains extend leftward
  const chainSpacing = 30;
  const chainBaseY = 130;
  const workingX = 210;

  // How many completed chains to display
  const visible = Math.min(chainCount, MAX_VISIBLE_CHAINS);

  // Hook position varies by phase
  let hookX = workingX;
  let hookY = 100;
  let hookAngle = 0;

  // Active loop on hook
  let loopX = workingX;
  let loopY = chainBaseY;
  let loopScale = 1;

  // Yarn from supply
  const supplyX = workingX + 60;
  const supplyY = 90;

  // Incoming yarn arc control point - moves during yarn-over
  let yarnCtrlX = supplyX - 10;
  let yarnCtrlY = supplyY - 20;
  let yarnEndX = workingX + 8;
  let yarnEndY = chainBaseY - 8;

  // New forming chain (during pull-through / new-chain)
  let formingOpacity = 0;
  let formingScale = 0;

  switch (phase) {
    case "idle":
      hookX = workingX;
      hookY = lerp(88, 92, Math.sin(progress * Math.PI * 2) * 0.5 + 0.5);
      hookAngle = 0;
      loopX = workingX;
      loopY = chainBaseY;
      break;

    case "yarn-over":
      // Hook lifts slightly and tilts to receive yarn
      hookX = lerp(workingX, workingX - 6, t);
      hookY = lerp(92, 82, t);
      hookAngle = lerp(0, -15, t);
      // Yarn swings over hook
      yarnCtrlX = lerp(supplyX - 10, workingX - 20, t);
      yarnCtrlY = lerp(supplyY - 20, chainBaseY - 50, t);
      yarnEndX = lerp(workingX + 8, workingX - 12, t);
      yarnEndY = lerp(chainBaseY - 8, chainBaseY - 22, t);
      loopX = workingX;
      loopY = chainBaseY;
      break;

    case "pull-through":
      // Hook pulls down through loop
      hookX = lerp(workingX - 6, workingX + 2, t);
      hookY = lerp(82, 120, t);
      hookAngle = lerp(-15, 8, t);
      // Yarn being pulled
      yarnEndX = lerp(workingX - 12, workingX, tOut);
      yarnEndY = lerp(chainBaseY - 22, chainBaseY + 15, tOut);
      yarnCtrlX = workingX - 18;
      yarnCtrlY = lerp(chainBaseY - 35, chainBaseY - 5, t);
      // Existing loop stretches then vanishes
      loopScale = lerp(1, 1.3, t);
      loopX = workingX;
      loopY = chainBaseY;
      // New chain forming
      formingOpacity = tOut;
      formingScale = tOut;
      break;

    case "new-chain":
      // New link pops into place
      hookX = workingX + 2;
      hookY = lerp(120, 95, tOut);
      hookAngle = lerp(8, 0, t);
      formingOpacity = 1;
      formingScale = lerp(1, 1, t);
      loopX = workingX;
      loopY = chainBaseY;
      // New active loop on hook
      loopScale = lerp(1.3, 1, tOut);
      break;

    case "slide-left":
      // Completed chains slide left, hook stays
      hookX = workingX;
      hookY = lerp(95, 92, t);
      hookAngle = 0;
      loopX = workingX;
      loopY = chainBaseY;
      break;
  }

  // Render completed chain links
  const chainLinks = [];
  for (let i = 0; i < visible; i++) {
    const idx = visible - 1 - i; // 0 = newest (rightmost)
    let cx = workingX - chainSpacing * (idx + 1);

    // During slide-left, shift everything left smoothly
    if (phase === "slide-left") {
      const extraShift = lerp(0, chainSpacing, t);
      cx -= extraShift;
    }

    const isNewest = idx === 0;
    const linkOpacity = cx < 20 ? Math.max(0, (cx - 10) / 20) : 1;

    chainLinks.push(
      <ChainLink
        key={i}
        x={cx}
        y={chainBaseY}
        opacity={linkOpacity}
        active={isNewest && (phase === "new-chain" || phase === "slide-left")}
        scale={isNewest && phase === "new-chain" ? lerp(1.15, 1, tOut) : 1}
      />,
    );
  }

  // Forming chain (during pull-through)
  const formingX = workingX - chainSpacing * 0.3;

  return (
    <svg
      viewBox="0 0 360 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      {/* Background */}
      <rect width={360} height={200} fill="transparent" />

      {/* Work surface guide line */}
      <line
        x1={20}
        y1={chainBaseY}
        x2={300}
        y2={chainBaseY}
        stroke="#d4edda"
        strokeWidth={1.5}
        strokeDasharray="6 5"
      />

      {/* Completed chain links */}
      {chainLinks}

      {/* Yarn supply strand */}
      <YarnStrand
        x1={supplyX}
        y1={supplyY}
        x2={yarnEndX}
        y2={yarnEndY}
        cx={yarnCtrlX}
        cy={yarnCtrlY}
        color="#22a55b"
        width={3}
      />
      {/* Yarn ball / spool hint */}
      <circle
        cx={supplyX + 14}
        cy={supplyY - 8}
        r={14}
        fill="#ecfdf5"
        stroke="#34d372"
        strokeWidth={1.5}
      />
      <ellipse
        cx={supplyX + 14}
        cy={supplyY - 8}
        rx={9}
        ry={6}
        stroke="#22a55b"
        strokeWidth={1.5}
        fill="none"
        opacity={0.5}
      />
      <ellipse
        cx={supplyX + 14}
        cy={supplyY - 8}
        rx={5}
        ry={9}
        stroke="#22a55b"
        strokeWidth={1}
        fill="none"
        opacity={0.4}
      />

      {/* Active loop on hook */}
      {phase !== "pull-through" || progress < 0.7 ? (
        <ChainLink
          x={loopX}
          y={loopY}
          scale={loopScale}
          active
          opacity={
            phase === "pull-through" ? Math.max(0, 1 - progress * 1.4) : 1
          }
        />
      ) : null}

      {/* Forming new chain during pull-through */}
      {(phase === "pull-through" || phase === "new-chain") && (
        <ChainLink
          x={formingX}
          y={chainBaseY}
          opacity={formingOpacity}
          scale={formingScale * 1.05}
          active
        />
      )}

      {/* Arrow guides */}
      {phase === "yarn-over" && (
        <ArrowGuide
          x1={supplyX + 2}
          y1={supplyY - 5}
          x2={workingX - 8}
          y2={chainBaseY - 18}
          opacity={0.7 + progress * 0.3}
        />
      )}
      {phase === "pull-through" && (
        <ArrowGuide
          x1={workingX}
          y1={chainBaseY - 25}
          x2={workingX + 2}
          y2={chainBaseY + 18}
          opacity={Math.min(1, progress * 2)}
        />
      )}

      {/* Crochet hook */}
      <CrochetHook x={hookX} y={hookY} angle={hookAngle} />

      {/* Step label */}
      {phase === "idle" && chainCount === 0 && (
        <StepLabel x={workingX - 45} y={175} text="Nó corrediço pronto" />
      )}
      {phase === "yarn-over" && (
        <StepLabel x={155} y={175} text="Laçar o fio (yarn over)" />
      )}
      {phase === "pull-through" && (
        <StepLabel x={150} y={175} text="Puxar pela laçada" />
      )}
      {phase === "new-chain" && (
        <StepLabel x={148} y={175} text={`Nova correntinha! (${chainCount})`} />
      )}
      {phase === "slide-left" && chainCount > 0 && (
        <StepLabel x={160} y={175} text="Repetir o processo..." />
      )}
    </svg>
  );
}

function GenericStitchScene({
  state,
  variant,
}: {
  state: AnimState;
  variant: StitchAnimVariant;
}) {
  const { phase, progress, chainCount } = state;
  const t = easeInOut(progress);
  const tOut = easeOut(progress);

  const baseY = 148;
  const activeX = 226;
  const spacing = 28;

  // Altura média do ponto por família visual.
  // Aumentar valor = ponto mais alto na cena; reduzir = ponto mais baixo/compacto.
  const heightByVariant: Record<Exclude<StitchAnimVariant, "chain">, number> = {
    single: 50,
    half: 66,
    double: 84,
    tall: 110,
    fan: 90,
    relief: 82,
    cluster: 88,
    motif: 96,
    advanced: 92,
  };

  const stitchHeight =
    heightByVariant[variant as Exclude<StitchAnimVariant, "chain">] ?? 84;

  let hookX = activeX + 16;
  let hookY = 94;
  let hookAngle = 0;
  if (phase === "yarn-over") {
    hookX = lerp(activeX + 16, activeX + 6, t);
    hookY = lerp(94, 82, t);
    hookAngle = lerp(0, -12, t);
  }
  if (phase === "pull-through") {
    hookX = lerp(activeX + 6, activeX + 2, tOut);
    hookY = lerp(82, baseY - stitchHeight + 18, tOut);
    hookAngle = lerp(-12, 8, t);
  }
  if (phase === "new-chain") {
    hookX = activeX + 4;
    hookY = lerp(baseY - stitchHeight + 18, 92, tOut);
    hookAngle = lerp(8, 0, t);
  }

  // Quantos pontos antigos ficam visíveis no pano de fundo da animação.
  const visible = Math.min(chainCount + 3, 7);
  const prevPosts = [];
  for (let i = 0; i < visible; i++) {
    let x = activeX - spacing * (i + 1);
    if (phase === "slide-left") x -= lerp(0, spacing, t);

    const alpha = x < 16 ? Math.max(0, (x - 4) / 12) : 1;
    const h = stitchHeight - (i % 2 === 0 ? 0 : 7);

    // "fan": gera múltiplos arcos no mesmo ponto (efeito leque/concha).
    if (variant === "fan") {
      prevPosts.push(
        <g key={`fan-${i}`} opacity={alpha}>
          {[-10, 0, 10].map((o) => (
            <path
              key={o}
              d={`M ${x + o} ${baseY} Q ${x + o * 0.6} ${baseY - h * 0.55} ${x + o * 0.2} ${baseY - h}`}
              stroke="#34d372"
              strokeWidth={2.2}
              fill="none"
              strokeLinecap="round"
            />
          ))}
        </g>,
      );
      continue;
    }

    // "cluster": várias hastes convergindo para um topo único (pipoca/puff/bobble).
    if (variant === "cluster") {
      prevPosts.push(
        <g key={`cluster-${i}`} opacity={alpha}>
          <path
            d={`M ${x - 8} ${baseY} Q ${x - 5} ${baseY - h * 0.55} ${x} ${baseY - h}`}
            stroke="#34d372"
            strokeWidth={2.2}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={`M ${x} ${baseY} Q ${x} ${baseY - h * 0.55} ${x} ${baseY - h}`}
            stroke="#34d372"
            strokeWidth={2.2}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={`M ${x + 8} ${baseY} Q ${x + 5} ${baseY - h * 0.55} ${x} ${baseY - h}`}
            stroke="#34d372"
            strokeWidth={2.2}
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={x} cy={baseY - h} r={4} fill="#22a55b" opacity={0.75} />
        </g>,
      );
      continue;
    }

    // "relief": alternância lateral para simular frente/tras e textura de relevo.
    const reliefShift = variant === "relief" ? (i % 2 === 0 ? -5 : 5) : 0;
    prevPosts.push(
      <g key={`post-${i}`} opacity={alpha}>
        <path
          d={`M ${x} ${baseY} Q ${x + reliefShift} ${baseY - h * 0.5} ${x + reliefShift * 0.3} ${baseY - h}`}
          stroke="#34d372"
          strokeWidth={2.4}
          fill="none"
          strokeLinecap="round"
        />
        <ellipse
          cx={x + reliefShift * 0.3}
          cy={baseY - h}
          rx={8}
          ry={5}
          stroke="#34d372"
          strokeWidth={2}
          fill="none"
          opacity={0.85}
        />
      </g>,
    );
  }

  const activeHeight =
    phase === "pull-through"
      ? lerp(stitchHeight * 0.7, stitchHeight, tOut)
      : phase === "new-chain"
        ? lerp(stitchHeight * 1.12, stitchHeight, tOut)
        : stitchHeight;

  return (
    <svg
      viewBox="0 0 360 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      <rect width={360} height={200} fill="transparent" />

      <line
        x1={18}
        y1={baseY}
        x2={314}
        y2={baseY}
        stroke="#d4edda"
        strokeWidth={1.5}
        strokeDasharray="6 5"
      />

      {prevPosts}

      <path
        d={`M ${activeX} ${baseY} Q ${activeX} ${baseY - activeHeight * 0.55} ${activeX} ${baseY - activeHeight}`}
        stroke="#22a55b"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
      <ellipse
        cx={activeX}
        cy={baseY - activeHeight}
        rx={10}
        ry={6}
        stroke="#22a55b"
        strokeWidth={2.4}
        fill="none"
      />

      <YarnStrand
        x1={305}
        y1={88}
        x2={activeX + 8}
        y2={baseY - activeHeight + 10}
        cx={lerp(290, 250, phase === "yarn-over" ? t : 0.1)}
        cy={lerp(66, 78, phase === "pull-through" ? tOut : 0.1)}
        color="#22a55b"
        width={3}
      />
      <circle
        cx={317}
        cy={80}
        r={12}
        fill="#ecfdf5"
        stroke="#34d372"
        strokeWidth={1.5}
      />

      {(phase === "yarn-over" || phase === "pull-through") && (
        <ArrowGuide
          x1={phase === "yarn-over" ? 290 : activeX}
          y1={phase === "yarn-over" ? 82 : baseY - activeHeight - 10}
          x2={phase === "yarn-over" ? activeX + 6 : activeX + 2}
          y2={
            phase === "yarn-over"
              ? baseY - activeHeight + 10
              : baseY - activeHeight + 16
          }
          opacity={0.8}
        />
      )}

      <CrochetHook x={hookX} y={hookY} angle={hookAngle} />

      {phase === "idle" && <StepLabel x={145} y={176} text="Posição inicial" />}
      {phase === "yarn-over" && (
        <StepLabel x={152} y={176} text="Inserir e laçar" />
      )}
      {phase === "pull-through" && (
        <StepLabel x={152} y={176} text="Puxar laçadas" />
      )}
      {phase === "new-chain" && (
        <StepLabel x={152} y={176} text="Ponto concluído" />
      )}
      {phase === "slide-left" && (
        <StepLabel x={160} y={176} text="Repetição contínua" />
      )}
    </svg>
  );
}

// ─── Step indicator ─────────────────────────────────────────
const PHASE_LABELS: Partial<Record<Phase, { step: number; label: string }>> = {
  idle: { step: 1, label: "Posição inicial" },
  "yarn-over": { step: 2, label: "Inserir e laçar" },
  "pull-through": { step: 3, label: "Puxar laçadas" },
  "new-chain": { step: 4, label: "Ponto concluído" },
  "slide-left": { step: 4, label: "Repetir..." },
};

// ─── Public Component ────────────────────────────────────────
export default function ChainStitchAnimation({
  stitchId,
  stitchName,
  steps,
}: ChainStitchAnimationProps) {
  // 1) Seleciona família visual para o ponto atual.
  const variant = getVariant(stitchId);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState<0.5 | 1 | 1.5>(1);
  const [animState, setAnimState] = useState<AnimState>({
    phase: "idle",
    chainCount: 0,
    progress: 0,
  });

  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const phaseElapsedRef = useRef<number>(0);
  const chainCountRef = useRef<number>(0);
  const phaseIndexRef = useRef<number>(0);
  const speedRef = useRef(speed);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const reset = useCallback(() => {
    phaseElapsedRef.current = 0;
    chainCountRef.current = 0;
    phaseIndexRef.current = 0;
    lastTimeRef.current = 0;
    setAnimState({ phase: "idle", chainCount: 0, progress: 0 });
  }, []);

  // 2) Motor de animação:
  // - requestAnimationFrame para suavidade
  // - speedRef permite trocar velocidade sem recriar toda a lógica
  // - tickRef evita dependência circular na chamada recursiva do frame
  const tickRef = useRef<FrameRequestCallback | null>(null);

  const tick = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = (timestamp - lastTimeRef.current) * speedRef.current;
      lastTimeRef.current = timestamp;

      phaseElapsedRef.current += dt;

      const currentPhaseIdx = phaseIndexRef.current;
      const currentPhase = PHASE_ORDER[currentPhaseIdx];
      const duration = PHASE_DURATION[currentPhase];

      if (currentPhase === "repeat") {
        // 3) Final do ciclo: contabiliza ponto criado e reinicia sequência.
        chainCountRef.current += 1;
        phaseIndexRef.current = 1;
        phaseElapsedRef.current = 0;
        if (chainCountRef.current >= 6) {
          setTimeout(() => {
            reset();
          }, 600);
          return;
        }
        setAnimState({
          phase: "yarn-over",
          chainCount: chainCountRef.current,
          progress: 0,
        });
        rafRef.current = requestAnimationFrame((ts) => tickRef.current!(ts));
        return;
      }

      const progress = Math.min(phaseElapsedRef.current / duration, 1);

      setAnimState({
        phase: currentPhase,
        chainCount: chainCountRef.current,
        progress,
      });

      if (progress >= 1) {
        phaseElapsedRef.current = 0;
        phaseIndexRef.current = Math.min(
          currentPhaseIdx + 1,
          PHASE_ORDER.length - 1,
        );
      }

      rafRef.current = requestAnimationFrame((ts) => tickRef.current!(ts));
    },
    [reset],
  );

  // Keep ref in sync with latest tick (must be in effect, not render)
  useEffect(() => {
    tickRef.current = tick;
  }, [tick]);

  useEffect(() => {
    if (playing) {
      lastTimeRef.current = 0;
      rafRef.current = requestAnimationFrame((ts) => tickRef.current!(ts));
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing]);

  const stepInfo = PHASE_LABELS[animState.phase];
  const stepLabels =
    variant === "chain"
      ? ["Início", "Laçar", "Puxar", "Novo ponto"]
      : ["Base", "Inserir", "Laçar", "Concluir"];

  return (
    <div
      className="csa-wrapper"
      role="img"
      aria-label={`Animação didática demonstrando o ponto ${stitchName}`}
    >
      {/* Canvas */}
      <div className="csa-canvas">
        {/* 4) Escolha de cena: correntinha usa cena dedicada; demais usam cena genérica por variant. */}
        {variant === "chain" ? (
          <AnimationScene state={animState} />
        ) : (
          <GenericStitchScene state={animState} variant={variant} />
        )}
      </div>

      {/* Step progress dots */}
      <div className="csa-steps-row" aria-hidden="true">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`csa-step-dot ${stepInfo && stepInfo.step >= s ? "active" : ""} ${stepInfo && stepInfo.step === s ? "current" : ""}`}
          >
            <span className="csa-step-dot-label">{stepLabels[s - 1]}</span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div
        className="csa-controls"
        role="group"
        aria-label="Controles da animação"
      >
        <button
          className="csa-btn csa-btn-primary"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pausar animação" : "Reproduzir animação"}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
          {playing ? "Pausar" : "Reproduzir"}
        </button>

        <button
          className="csa-btn"
          onClick={() => {
            reset();
            setPlaying(true);
          }}
          aria-label="Reiniciar animação"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Reiniciar
        </button>

        <div
          className="csa-speed-group"
          role="group"
          aria-label="Velocidade da animação"
        >
          <span className="csa-speed-label">Velocidade</span>
          {([0.5, 1, 1.5] as const).map((s) => (
            <button
              key={s}
              className={`csa-speed-btn ${speed === s ? "active" : ""}`}
              onClick={() => setSpeed(s)}
              aria-pressed={speed === s}
              aria-label={`Velocidade ${s === 0.5 ? "lenta" : s === 1 ? "normal" : "rápida"}`}
            >
              {s === 0.5 ? "0.5×" : s === 1 ? "1×" : "1.5×"}
            </button>
          ))}
        </div>
      </div>

      {/* Screen-reader description */}
      <p className="sr-only">
        {`Animação em loop do ponto ${stitchName}. Ela demonstra posição inicial, inserção da agulha, laçada do fio, puxada das laçadas e repetição.`}
        {steps.length > 0 ? ` Primeiro passo: ${steps[0]}` : ""}
      </p>
    </div>
  );
}
