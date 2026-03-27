import { useState, useMemo, useEffect } from "react";
import {
  PROJECTS,
  CATEGORIES,
  STITCHES,
  ALL_TAGS,
  type Project,
} from "./data/crochetData";
import {
  TECHNIQUES,
  TECHNIQUE_CATEGORIES,
  type Technique,
} from "./data/techniquesData";
import StitchGuide from "./StitchGuide";
import ProjectIllustration from "./illustrations/ProjectIllustrations";
import StepIllustration from "./illustrations/StepIllustrations";
import TechniqueStepIllustration from "./illustrations/TechniqueIllustrations";
import ReferenceGallery from "./components/ReferenceGallery";
import BibleVerseRotator from "./components/BibleVerseRotator";
import {
  getProjectReferences,
  getInspirationImages,
} from "./data/referenceImages";
import "./index.css";

// ── Hero Yarn Ball Illustration ────────────────────────────
const HeroYarnIllustration = () => (
  <svg width="280" height="280" viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="80" fill="#22a55b" fillOpacity="0.15" />
    <circle cx="100" cy="100" r="60" fill="#22a55b" fillOpacity="0.25" />
    <circle cx="100" cy="100" r="48" fill="#22a55b" fillOpacity="0.4" />
    <ellipse
      cx="100"
      cy="100"
      rx="48"
      ry="30"
      stroke="#22a55b"
      strokeWidth="2"
      strokeDasharray="4 3"
      opacity="0.6"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="30"
      ry="48"
      stroke="#22a55b"
      strokeWidth="1.5"
      strokeDasharray="4 3"
      opacity="0.4"
      transform="rotate(30 100 100)"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="35"
      ry="48"
      stroke="#22a55b"
      strokeWidth="1.5"
      strokeDasharray="4 3"
      opacity="0.4"
      transform="rotate(-30 100 100)"
    />
    <path
      d="M148 100 Q160 90 170 105 Q175 115 168 120"
      stroke="#22a55b"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <line
      x1="168"
      y1="120"
      x2="178"
      y2="128"
      stroke="#22a55b"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="178" cy="128" r="3" fill="#22a55b" opacity="0.5" />
  </svg>
);

// ── Stitch Mini Illustration ───────────────────────────────
const StitchIllustration = ({ stitchId }: { stitchId: string }) => {
  const props = {
    width: "60",
    height: "60",
    viewBox: "0 0 40 40",
    stroke: "var(--primary)",
    strokeWidth: "2",
    fill: "none",
  };
  switch (stitchId) {
    case "corr":
      return (
        <svg {...props}>
          <ellipse cx="20" cy="12" rx="6" ry="4" strokeDasharray="2 1" />
          <ellipse cx="20" cy="20" rx="6" ry="4" />
          <ellipse cx="20" cy="28" rx="6" ry="4" strokeDasharray="2 1" />
        </svg>
      );
    case "pb":
      return (
        <svg {...props}>
          <path d="M10 20 L30 20 M20 10 L20 30" strokeLinecap="round" />
          <rect
            x="15"
            y="15"
            width="10"
            height="10"
            rx="2"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      );
    case "pa":
      return (
        <svg {...props}>
          <path d="M20 5 V35 M12 15 H28 M12 25 H28" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

// ── Hamburger Icon ─────────────────────────────────────────
const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const ThemeIcon = ({ dark }: { dark: boolean }) =>
  dark ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0-1.2 6 4 9.79 3.31 2.42 5.79 0 5.79 0z" />
    </svg>
  ) : (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
      <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
      <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
      <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
    </svg>
  );

// ── Customizacao (Studio Criativo) ─────────────────────────
const Customizacao = ({
  initialProject,
  onGoToProject,
}: {
  initialProject: Project | null;
  onGoToProject: (project: Project) => void;
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState(
    initialProject?.id || PROJECTS[0].id,
  );
  const [mainColor, setMainColor] = useState("#22a55b");
  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId);

  const YARN_COLORS = [
    "#ffffff",
    "#f5f5dc",
    "#deb887",
    "#a0522d",
    "#c0392b",
    "#e67e22",
    "#f1c40f",
    "#27ae60",
    "#2980b9",
    "#1a237e",
    "#6a1b9a",
    "#e91e63",
    "#37474f",
    "#212121",
    "#78909c",
    "#a1887f",
    "#00bcd4",
    "#4caf50",
    "#ff5722",
    "#9e9e9e",
  ];

  return (
    <div className="section container animate-fade">
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h1
          className="serif"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--text)" }}
        >
          Studio <span style={{ fontWeight: 400, opacity: 0.5 }}>Criativo</span>
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1.1rem",
            maxWidth: "520px",
            margin: "12px auto 0",
          }}
        >
          Visualize combinações de cores e modelos antes do primeiro ponto.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(280px, 1fr) minmax(280px, 420px)",
          gap: "48px",
        }}
      >
        {/* Preview */}
        <div
          className="card"
          style={{
            background: "var(--surface)",
            minHeight: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProjectIllustration
            projectId={selectedProject?.id || PROJECTS[0].id}
            color={mainColor}
          />
          <div
            className="glass"
            style={{
              marginTop: "32px",
              padding: "10px 20px",
              borderRadius: "100px",
              fontWeight: 700,
              color: "var(--text)",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: mainColor,
              }}
            />
            {mainColor.toUpperCase()}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div>
            <p
              style={{
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "var(--primary)",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              1. Selecione o Modelo
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                gap: "10px",
                maxHeight: "320px",
                overflowY: "auto",
              }}
            >
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  style={{
                    padding: "10px 10px",
                    borderRadius: "12px",
                    border: "2px solid",
                    borderColor:
                      selectedProjectId === p.id
                        ? "var(--primary)"
                        : "var(--border)",
                    background:
                      selectedProjectId === p.id
                        ? "var(--accent-light)"
                        : "var(--surface)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    lineHeight: 1.3,
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    textAlign: "center",
                    color:
                      selectedProjectId === p.id
                        ? "var(--primary)"
                        : "var(--text-muted)",
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "var(--primary)",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              2. Escolha a Cor
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "10px",
              }}
            >
              {YARN_COLORS.map((c) => (
                <div
                  key={c}
                  onClick={() => setMainColor(c)}
                  style={{
                    height: "44px",
                    background: c,
                    cursor: "pointer",
                    borderRadius: "10px",
                    border: "2px solid var(--surface)",
                    boxShadow:
                      mainColor === c
                        ? "0 0 0 2px var(--primary)"
                        : "var(--shadow-sm)",
                    transition: "all 0.25s ease",
                    transform: mainColor === c ? "scale(1.1)" : "none",
                  }}
                />
              ))}
            </div>
          </div>

          <button
            className="btn btn-primary"
            style={{
              width: "100%",
              padding: "18px",
              fontSize: "0.95rem",
              marginTop: "8px",
            }}
          >
            Gerar Projeto Técnico (PDF)
          </button>

          {selectedProject && (
            <button
              className="btn"
              onClick={() => onGoToProject(selectedProject)}
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "0.9rem",
                marginTop: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              📖 Ver Receita Completa
            </button>
          )}
        </div>
      </div>

      <ReferenceGallery
        images={getInspirationImages(selectedProject?.categoryId || "")}
        title="Inspirações — Modelos Reais"
      />
    </div>
  );
};

// ── Aprender (Biblioteca de Receitas + Sidebar + Search/Filters) ──
const SIDEBAR_CATEGORIES = [
  { id: "all", label: "Todos os Projetos", icon: "📚" },
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.name, icon: c.icon })),
];

const DIFFICULTY_COLORS: Record<string, string> = {
  Iniciante: "var(--primary)",
  Intermediário: "#e67e22",
  Avançado: "#c0392b",
};

// ── Technique Detail ───────────────────────────────────────
const TechniqueDetail = ({
  technique,
  onBack,
}: {
  technique: Technique;
  onBack: () => void;
}) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const progress = (completedSteps.length / technique.steps.length) * 100;

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="section container animate-fade">
      <button onClick={onBack} className="ap-back-btn">
        ← Voltar para Técnicas
      </button>
      <div className="course-layout">
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div className="card glass">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <span
                className="ap-difficulty-badge"
                style={{ background: DIFFICULTY_COLORS[technique.difficulty] }}
              >
                {technique.difficulty}
              </span>
            </div>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                marginBottom: "16px",
              }}
            >
              {technique.name}
            </h1>
            <p style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              {technique.description}
            </p>
            <div className="progress-track">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--primary)",
                fontWeight: 800,
              }}
            >
              Progresso: {Math.round(progress)}% Concluído
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {technique.steps.map((step, i) => (
              <div
                key={i}
                className="card step-card-with-illus"
                onClick={() => toggleStep(i)}
                style={{
                  background: completedSteps.includes(i)
                    ? "var(--accent-light)"
                    : "white",
                  padding: "0",
                  borderLeft: completedSteps.includes(i)
                    ? "6px solid var(--primary)"
                    : "1px solid var(--border)",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <div className="step-illus-container">
                  <TechniqueStepIllustration
                    techniqueId={technique.id}
                    stepIndex={i}
                  />
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: completedSteps.includes(i)
                          ? "var(--primary)"
                          : "var(--secondary)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        flexShrink: 0,
                        fontSize: "0.9rem",
                      }}
                    >
                      {completedSteps.includes(i) ? "✓" : i + 1}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          marginBottom: "6px",
                          textDecoration: completedSteps.includes(i)
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.92rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside style={{ position: "sticky", top: "100px" }}>
          <div
            className="card"
            style={{ background: "var(--surface-muted)", border: "none" }}
          >
            <h3
              className="serif"
              style={{ fontSize: "1.4rem", marginBottom: "20px" }}
            >
              Dicas Importantes
            </h3>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {technique.tips.map((tip, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "8px",
                    fontSize: "0.88rem",
                    lineHeight: "1.5",
                  }}
                >
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>
                    💡
                  </span>{" "}
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

const Aprender = ({
  onSelectProject,
  onSelectTechnique,
}: {
  onSelectProject: (p: Project) => void;
  onSelectTechnique: (t: Technique) => void;
}) => {
  const [filter, setFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"projetos" | "tecnicas">("projetos");

  const filtered = useMemo(() => {
    let list = PROJECTS;
    if (filter !== "all") list = list.filter((p) => p.categoryId === filter);
    if (difficultyFilter !== "all")
      list = list.filter((p) => p.difficulty === difficultyFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)),
      );
    }
    if (selectedTags.length > 0)
      list = list.filter((p) => selectedTags.some((t) => p.tags.includes(t)));
    return list;
  }, [filter, difficultyFilter, search, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const counts = useMemo(
    () => ({
      Iniciante: PROJECTS.filter((p) => p.difficulty === "Iniciante").length,
      Intermediário: PROJECTS.filter((p) => p.difficulty === "Intermediário")
        .length,
      Avançado: PROJECTS.filter((p) => p.difficulty === "Avançado").length,
    }),
    [],
  );

  // Progress from localStorage
  const getProgress = (projectId: string) => {
    try {
      const data = localStorage.getItem(`progress-${projectId}`);
      if (data) return JSON.parse(data) as number[];
    } catch {
      /* ignore */
    }
    return [];
  };

  return (
    <div className="section container animate-fade">
      <div style={{ marginBottom: "48px" }}>
        <h1 className="serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Biblioteca de{" "}
          <span style={{ fontWeight: 400, fontStyle: "italic" }}>
            Aprendizado
          </span>
        </h1>
        <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>
          {PROJECTS.length} projetos em {CATEGORIES.length} categorias · Do
          iniciante ao avançado
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="ap-view-toggle">
        <button
          className={`ap-view-btn ${viewMode === "projetos" ? "active" : ""}`}
          onClick={() => setViewMode("projetos")}
        >
          📖 Projetos ({PROJECTS.length})
        </button>
        <button
          className={`ap-view-btn ${viewMode === "tecnicas" ? "active" : ""}`}
          onClick={() => setViewMode("tecnicas")}
        >
          🎓 Técnicas Fundamentais ({TECHNIQUES.length})
        </button>
      </div>

      {viewMode === "tecnicas" ? (
        /* ── Techniques View ── */
        <div className="ap-techniques-grid">
          {TECHNIQUE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="ap-tech-category">
              <div className="ap-tech-cat-header">
                <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                <div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "4px" }}>
                    {cat.name}
                  </h3>
                  <p
                    style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}
                  >
                    {cat.description}
                  </p>
                </div>
              </div>
              <div className="ap-tech-list">
                {TECHNIQUES.filter((t) => t.categoryId === cat.id).map(
                  (tech) => (
                    <div
                      key={tech.id}
                      className="ap-tech-card"
                      onClick={() => onSelectTechnique(tech)}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "6px",
                        }}
                      >
                        <span
                          className="ap-difficulty-badge"
                          style={{
                            background: DIFFICULTY_COLORS[tech.difficulty],
                            fontSize: "0.68rem",
                            padding: "3px 8px",
                          }}
                        >
                          {tech.difficulty}
                        </span>
                        <h4 style={{ fontSize: "0.95rem" }}>{tech.name}</h4>
                      </div>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-muted)",
                          lineHeight: "1.4",
                        }}
                      >
                        {tech.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "var(--primary)",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          marginTop: "8px",
                        }}
                      >
                        Aprender <span>→</span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ── Projects View ── */
        <>
          {/* Search Bar */}
          <div className="ap-search-container">
            <svg
              className="ap-search-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-muted)"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              className="ap-search-input"
              type="text"
              placeholder="Buscar projetos por nome, tag ou descrição..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="ap-search-clear" onClick={() => setSearch("")}>
                ✕
              </button>
            )}
          </div>

          {/* Difficulty Pills */}
          <div className="ap-filter-row">
            <span className="ap-filter-label">Nível:</span>
            <div className="ap-pills">
              {[
                { k: "all", label: `Todos (${PROJECTS.length})` },
                { k: "Iniciante", label: `Iniciante (${counts.Iniciante})` },
                {
                  k: "Intermediário",
                  label: `Intermediário (${counts.Intermediário})`,
                },
                { k: "Avançado", label: `Avançado (${counts.Avançado})` },
              ].map((d) => (
                <button
                  key={d.k}
                  className={`ap-pill ${difficultyFilter === d.k ? "active" : ""}`}
                  onClick={() => setDifficultyFilter(d.k)}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Pills */}
          {selectedTags.length > 0 && (
            <div className="ap-filter-row" style={{ marginTop: "8px" }}>
              <span className="ap-filter-label">Tags:</span>
              <div className="ap-pills">
                {selectedTags.map((tag) => (
                  <button
                    key={tag}
                    className="ap-pill active"
                    onClick={() => toggleTag(tag)}
                  >
                    #{tag} ✕
                  </button>
                ))}
                <button
                  className="ap-clear-link"
                  onClick={() => setSelectedTags([])}
                >
                  Limpar
                </button>
              </div>
            </div>
          )}

          <div className="aprender-layout">
            {/* Sidebar */}
            <aside className="aprender-sidebar">
              <h3>Categorias</h3>
              {SIDEBAR_CATEGORIES.map((cat) => {
                const count =
                  cat.id === "all"
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.categoryId === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    className={`sidebar-link ${filter === cat.id ? "active" : ""}`}
                    onClick={() => setFilter(cat.id)}
                  >
                    <span>{cat.icon}</span>
                    <span style={{ flex: 1 }}>{cat.label}</span>
                    <span className="ap-sidebar-count">{count}</span>
                  </button>
                );
              })}
              {/* Popular Tags */}
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <h3>Tags Populares</h3>
                <div className="ap-pills" style={{ marginTop: "8px" }}>
                  {ALL_TAGS.slice(0, 15).map((tag) => (
                    <button
                      key={tag}
                      className={`ap-pill-sm ${selectedTags.includes(tag) ? "active" : ""}`}
                      onClick={() => toggleTag(tag)}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
              {/* Learning Path */}
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <h3>Trilha de Aprendizado</h3>
                <div className="ap-learning-path">
                  <div className="ap-path-item">
                    <div
                      className="ap-path-dot"
                      style={{ background: "var(--primary)" }}
                    />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.82rem" }}>
                        Iniciante
                      </p>
                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {counts.Iniciante} projetos
                      </p>
                    </div>
                  </div>
                  <div className="ap-path-item">
                    <div
                      className="ap-path-dot"
                      style={{ background: "#e67e22" }}
                    />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.82rem" }}>
                        Intermediário
                      </p>
                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {counts.Intermediário} projetos
                      </p>
                    </div>
                  </div>
                  <div className="ap-path-item">
                    <div
                      className="ap-path-dot"
                      style={{ background: "#c0392b" }}
                    />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.82rem" }}>
                        Avançado
                      </p>
                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {counts.Avançado} projetos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Cards */}
            <div>
              <p className="ap-results-info">
                {filtered.length}{" "}
                {filtered.length === 1
                  ? "projeto encontrado"
                  : "projetos encontrados"}
              </p>
              <div className="ap-cards-grid">
                {filtered.map((project) => {
                  const prog = getProgress(project.id);
                  const pct =
                    prog.length > 0
                      ? Math.round((prog.length / project.steps.length) * 100)
                      : 0;
                  return (
                    <div
                      key={project.id}
                      className="ap-project-card"
                      onClick={() => onSelectProject(project)}
                    >
                      <div className="ap-card-illustration">
                        <ProjectIllustration
                          projectId={project.id}
                          color="var(--primary)"
                        />
                      </div>
                      <div className="ap-card-body">
                        <div className="ap-card-badges">
                          <span
                            className="ap-difficulty-badge"
                            style={{
                              background: DIFFICULTY_COLORS[project.difficulty],
                            }}
                          >
                            {project.difficulty}
                          </span>
                          <span className="ap-time-badge">
                            ⏱ {project.estimatedTime}
                          </span>
                        </div>
                        <h3 className="ap-card-title">{project.name}</h3>
                        <p className="ap-card-desc">{project.description}</p>
                        <div className="ap-card-tags">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="ap-tag"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleTag(tag);
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="ap-card-footer">
                          <span className="ap-card-yarn">
                            {project.estimatedYarn}
                          </span>
                          {pct > 0 ? (
                            <span className="ap-card-resume">
                              Continuar ({pct}%) →
                            </span>
                          ) : (
                            <span className="ap-card-start">
                              Começar Aula →
                            </span>
                          )}
                        </div>
                        {pct > 0 && (
                          <div
                            className="progress-track"
                            style={{ height: "4px", marginTop: "8px" }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                {filtered.length === 0 && (
                  <div className="ap-empty">
                    <p style={{ fontSize: "2rem", marginBottom: "8px" }}>🔍</p>
                    <h3>Nenhum projeto encontrado</h3>
                    <p>Tente ajustar os filtros ou termos de busca.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ── Project Detail ─────────────────────────────────────────
const ProjectDetail = ({
  project,
  onBack,
  onGoToCustomize,
}: {
  project: Project;
  onBack: () => void;
  onGoToCustomize: () => void;
}) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    try {
      const data = localStorage.getItem(`progress-${project.id}`);
      if (data) return JSON.parse(data);
    } catch {
      /* ignore */
    }
    return [];
  });
  const progress = (completedSteps.length / project.steps.length) * 100;

  useEffect(() => {
    localStorage.setItem(
      `progress-${project.id}`,
      JSON.stringify(completedSteps),
    );
  }, [completedSteps, project.id]);

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="section container animate-fade">
      <button onClick={onBack} className="ap-back-btn">
        ← Voltar para Biblioteca
      </button>

      <div className="course-layout">
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div className="card glass">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "24px 0 20px",
                background: "var(--accent-light)",
                borderRadius: "16px",
                marginBottom: "20px",
              }}
            >
              <ProjectIllustration
                projectId={project.id}
                color="var(--primary)"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
                flexWrap: "wrap",
              }}
            >
              <span
                className="ap-difficulty-badge"
                style={{ background: DIFFICULTY_COLORS[project.difficulty] }}
              >
                {project.difficulty}
              </span>
              <span className="ap-time-badge">⏱ {project.estimatedTime}</span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                🧶 Agulha {project.hookRecommended}
              </span>
            </div>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                marginBottom: "8px",
              }}
            >
              {project.name}
            </h1>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
                marginBottom: "16px",
              }}
            >
              {project.description}
            </p>
            <div className="ap-card-tags" style={{ marginBottom: "16px" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="ap-tag">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="progress-track">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--primary)",
                fontWeight: 800,
              }}
            >
              Progresso: {Math.round(progress)}% Concluído (
              {completedSteps.length}/{project.steps.length} etapas)
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {project.steps.map((step, i) => (
              <div
                key={i}
                className="card step-card-with-illus"
                onClick={() => toggleStep(i)}
                style={{
                  background: completedSteps.includes(i)
                    ? "var(--accent-light)"
                    : "white",
                  padding: "0",
                  borderLeft: completedSteps.includes(i)
                    ? "6px solid var(--primary)"
                    : "1px solid var(--border)",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <div className="step-illus-container">
                  <StepIllustration
                    projectId={project.id}
                    stepIndex={i}
                    totalSteps={project.steps.length}
                  />
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: completedSteps.includes(i)
                          ? "var(--primary)"
                          : "var(--secondary)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        flexShrink: 0,
                        fontSize: "0.9rem",
                      }}
                    >
                      {completedSteps.includes(i) ? "✓" : i + 1}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          marginBottom: "6px",
                          textDecoration: completedSteps.includes(i)
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.92rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ReferenceGallery
            images={getProjectReferences(project.categoryId)}
            title="Referências do Modelo"
          />
        </div>

        <aside style={{ position: "sticky", top: "100px" }}>
          <div
            className="card"
            style={{ background: "var(--surface-muted)", border: "none" }}
          >
            <h3
              className="serif"
              style={{ fontSize: "1.4rem", marginBottom: "20px" }}
            >
              Preparação
            </h3>
            <p
              style={{
                fontWeight: 800,
                fontSize: "0.75rem",
                color: "var(--primary)",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              Materiais Necessários
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              {project.materials.map((m) => (
                <li
                  key={m}
                  style={{ display: "flex", gap: "8px", fontSize: "0.9rem" }}
                >
                  <span style={{ color: "var(--primary)" }}>✦</span> {m}
                </li>
              ))}
            </ul>
            {project.stitchesUsed.length > 0 && (
              <div style={{ marginBottom: "20px" }}>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    color: "var(--primary)",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Pontos Utilizados
                </p>
                <div className="ap-pills" style={{ gap: "6px" }}>
                  {project.stitchesUsed.map((s) => {
                    const stitch = STITCHES.find((st) => st.id === s);
                    return (
                      <span key={s} className="ap-tag">
                        {stitch ? stitch.name : s}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
            <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  background: "white",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    marginBottom: "4px",
                  }}
                >
                  FIO
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  {project.estimatedYarn}
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  background: "white",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    marginBottom: "4px",
                  }}
                >
                  AGULHA
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  {project.hookRecommended}
                </p>
              </div>
            </div>
            <div
              style={{
                padding: "16px",
                background: "white",
                borderRadius: "14px",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "var(--primary)",
                  marginBottom: "6px",
                }}
              >
                DICA DE OURO
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text)",
                  fontStyle: "italic",
                }}
              >
                "{project.beginnerTip}"
              </p>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={onGoToCustomize}
            >
              Personalizar Cores
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

// ── Stitch Ribbon ──────────────────────────────────────────
const StitchRibbon = () => (
  <aside className="stitch-sidebar">
    <p
      style={{
        fontWeight: 800,
        fontSize: "0.8rem",
        color: "var(--primary)",
        marginBottom: "16px",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      Consulta Rápida — Pontos Essenciais
    </p>
    <div className="stitch-sidebar-list">
      {STITCHES.map((s) => (
        <div key={s.id} className="stitch-card-mini">
          <StitchIllustration stitchId={s.id} />
          <div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <code
                style={{
                  fontSize: "0.78rem",
                  color: "var(--primary)",
                  fontWeight: 800,
                }}
              >
                {s.abbr}
              </code>
              <strong style={{ fontSize: "0.88rem" }}>{s.name}</strong>
            </div>
            <p
              style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                marginTop: "2px",
              }}
            >
              {s.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

// ── Main App ───────────────────────────────────────────────
function App() {
  type ThemeMode = "light" | "dark";
  const [activeTab, setActiveTab] = useState<
    "home" | "aprender" | "customizar" | "guia-pontos"
  >("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(
    null,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem("crochetando-theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Scroll to top on tab change or project/technique selection
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeTab, selectedProject, selectedTechnique]);

  // Persist and apply theme globally
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("crochetando-theme", theme);
  }, [theme]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setSelectedTechnique(null);
    setActiveTab("aprender");
  };

  const handleTechniqueSelect = (technique: Technique) => {
    setSelectedTechnique(technique);
    setSelectedProject(null);
    setActiveTab("aprender");
  };

  const navigate = (tab: typeof activeTab, resetProject = true) => {
    setActiveTab(tab);
    if (resetProject) {
      setSelectedProject(null);
      setSelectedTechnique(null);
    }
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const NAV_ITEMS: { id: typeof activeTab; label: string }[] = [
    { id: "home", label: "Início" },
    { id: "aprender", label: "Aprender" },
    { id: "guia-pontos", label: "Guia de Pontos" },
    { id: "customizar", label: "Customizar" },
  ];

  return (
    <div className="App">
      {/* ── Nav ──────────────────────────────── */}
      <div className="nav-container">
        <nav className="nav glass">
          <div className="nav-logo" onClick={() => navigate("home")}>
            Crochetando
          </div>

          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`nav-link ${activeTab === item.id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="nav-theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
              }
              title={
                theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
              }
            >
              <ThemeIcon dark={theme === "dark"} />
              <span>{theme === "dark" ? "Claro" : "Escuro"}</span>
            </button>

            <button className="nav-cta" onClick={() => navigate("aprender")}>
              Começar Grátis
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <HamburgerIcon />
          </button>
        </nav>
      </div>

      {/* ── Mobile Menu ─────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu open"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-menu-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`mobile-menu-link ${activeTab === item.id ? "active" : ""}`}
                onClick={() => navigate(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              className="mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
              }
            >
              <ThemeIcon dark={theme === "dark"} />
              <span>{theme === "dark" ? "Modo Claro" : "Modo Escuro"}</span>
            </button>
            <button
              className="btn btn-primary"
              style={{ marginTop: "16px" }}
              onClick={() => navigate("aprender")}
            >
              Começar Grátis
            </button>
          </div>
        </div>
      )}

      {/* ── Main Content ────────────────────── */}
      <main style={{ paddingTop: "104px" }}>
        {/* HOME */}
        {activeTab === "home" && (
          <div className="container section animate-fade">
            {/* Hero */}
            <div className="hero">
              <div>
                <span className="hero-label">Crochê com propósito</span>
                <h1 className="hero-title serif">
                  Desacelere.{" "}
                  <span style={{ fontStyle: "italic", fontWeight: 400 }}>
                    Crie
                  </span>{" "}
                  com as mãos.
                </h1>
                <p className="hero-text">
                  O Crochetando nasceu da vontade de ocupar o tempo com algo
                  significativo, longe das telas e redes sociais. Aqui você
                  aprende crochê no seu ritmo, exercita a paciência e descobre o
                  prazer de criar algo único com as próprias mãos.
                </p>
                <div className="hero-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("aprender")}
                  >
                    Aprender Crochê
                  </button>
                  <button
                    className="btn btn-outline"
                    onClick={() => navigate("customizar")}
                  >
                    Customizar Peça
                  </button>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-illustration-wrap">
                  <HeroYarnIllustration />
                </div>
                <div className="hero-float-badge glass">
                  <p>DESTAQUE</p>
                  <p className="serif" style={{ fontSize: "1.2rem" }}>
                    {PROJECTS.length} Projetos · 37 Pontos
                  </p>
                </div>
              </div>
            </div>

            {/* Informativos de Crochê */}
            <section
              className="home-info-section"
              aria-label="Informativos de crochê"
            >
              <div className="home-info-header">
                <h2 className="serif">Fundamentos para Evoluir no Crochê</h2>
                <p>
                  Antes de acelerar a produção, fortalecer a base técnica ajuda
                  a evitar erros e deixa o resultado mais bonito e consistente.
                </p>
              </div>

              <div className="home-info-grid">
                {[
                  {
                    title: "Escolha correta de agulha e fio",
                    desc: "Sempre compare a espessura do fio com a numeração da agulha. Essa combinação define conforto nas mãos e o caimento final da peça.",
                  },
                  {
                    title: "Controle de tensão",
                    desc: "Manter os pontos com tensão uniforme evita ondulações e repuxos. Faça pequenas amostras para ajustar seu ritmo antes de iniciar o projeto.",
                  },
                  {
                    title: "Leitura de receita sem confusão",
                    desc: "Leia todos os passos antes de começar, marque carreiras concluídas e identifique abreviações. Isso reduz retrabalho e melhora a precisão.",
                  },
                  {
                    title: "Acabamento faz diferença",
                    desc: "Arremates bem escondidos, blocagem e costuras limpas transformam uma peça simples em um trabalho com aparência profissional.",
                  },
                  {
                    title: "Prática consciente",
                    desc: "Sessões curtas e frequentes, com pausas para mãos e ombros, ajudam na memória muscular e na evolução constante sem sobrecarga.",
                  },
                  {
                    title: "Cuidados com a peça pronta",
                    desc: "Lave com delicadeza, seque na horizontal e guarde sem deformar. A conservação correta mantém textura, cor e estrutura por mais tempo.",
                  },
                ].map((info) => (
                  <article key={info.title} className="home-info-item">
                    <h3>{info.title}</h3>
                    <p>{info.desc}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <div className="how-section">
              <h2 className="serif">Como Funciona</h2>
              <div className="how-steps">
                {[
                  {
                    n: "1",
                    title: "Escolha um Modelo",
                    desc: "Navegue pela biblioteca de receitas e selecione a peça que deseja criar.",
                  },
                  {
                    n: "2",
                    title: "Siga o Passo a Passo",
                    desc: "Cada receita tem instruções detalhadas com pontos, materiais e dicas.",
                  },
                  {
                    n: "3",
                    title: "Personalize & Crie",
                    desc: "Use o Studio Criativo para testar cores e gere seu projeto técnico.",
                  },
                ].map((s) => (
                  <div key={s.n} className="how-step">
                    <div className="how-step-number">{s.n}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="cta-banner">
              <h2 className="serif">Pronto para Começar?</h2>
              <p>
                Tudo o que você precisa para aprender crochê do zero, grátis e
                na palma da sua mão.
              </p>
              <button className="btn" onClick={() => navigate("aprender")}>
                Explorar Receitas
              </button>
            </div>
          </div>
        )}

        {/* APRENDER */}
        {activeTab === "aprender" && (
          <div className="aprender-with-sidebar animate-fade">
            <div className="aprender-main">
              {selectedProject ? (
                <ProjectDetail
                  project={selectedProject}
                  onGoToCustomize={() => navigate("customizar", false)}
                  onBack={() => setSelectedProject(null)}
                />
              ) : selectedTechnique ? (
                <TechniqueDetail
                  technique={selectedTechnique}
                  onBack={() => setSelectedTechnique(null)}
                />
              ) : (
                <Aprender
                  onSelectProject={handleProjectSelect}
                  onSelectTechnique={handleTechniqueSelect}
                />
              )}
            </div>
            <StitchRibbon />
          </div>
        )}

        {/* GUIA DE PONTOS */}
        {activeTab === "guia-pontos" && <StitchGuide />}

        {/* CUSTOMIZAR */}
        {activeTab === "customizar" && (
          <Customizacao
            initialProject={selectedProject}
            onGoToProject={handleProjectSelect}
          />
        )}
      </main>

      {/* ── Footer ──────────────────────────── */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <h2 className="serif">Crochetando</h2>
              <p>
                Feito para quem quer desacelerar, criar com as mãos e
                redescobrir a paciência — um ponto de cada vez.
              </p>
            </div>
            <BibleVerseRotator />
          </div>
          <p className="footer-copy">
            © 2025 Crochetando. Feito com dedicação e muitos pontos.
          </p>
          <p className="footer-dev">
            Desenvolvido por{" "}
            <a
              href="https://www.matheusreis.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              matheusreis.dev
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
