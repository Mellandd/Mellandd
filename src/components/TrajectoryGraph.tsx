const VW = 960;
const VH = 500;

type NodeType = "past" | "current" | "upcoming";
type LabelDir = "above" | "below";

interface TNode {
  id: string;
  label: string;
  sublabel: string;
  years: string;
  cx: number;
  cy: number;
  r: number;
  type: NodeType;
  labelDir: LabelDir;
}

const NODES: TNode[] = [
  {
    id: "institute",
    label: "Secondary Education",
    sublabel: "Cartagena (Spain)",
    years: "≤ 2017",
    cx: 80,
    cy: 250,
    r: 18,
    type: "past",
    labelDir: "above",
  },
  {
    id: "bsmath",
    label: "B.S. Mathematics",
    sublabel: "Universidad de Murcia",
    years: "2017 – 2022",
    cx: 295,
    cy: 140,
    r: 22,
    type: "past",
    labelDir: "above",
  },
  {
    id: "bscs",
    label: "B.S. Computer Science",
    sublabel: "Universidad de Murcia",
    years: "2017 – 2022",
    cx: 295,
    cy: 360,
    r: 22,
    type: "past",
    labelDir: "below",
  },
  {
    id: "master",
    label: "M.S. Big Data",
    sublabel: "Universidad de Murcia",
    years: "2022 – 2023",
    cx: 510,
    cy: 250,
    r: 22,
    type: "past",
    labelDir: "above",
  },
  {
    id: "phd",
    label: "Ph.D. Computer Science",
    sublabel: "University of Murcia · AI Research",
    years: "2023 – Present",
    cx: 722,
    cy: 250,
    r: 30,
    type: "current",
    labelDir: "above",
  },
  {
    id: "research",
    label: "Research Stay",
    sublabel: "Univ. Osnabrück + DFKI",
    years: "2026 · Germany · 3 months",
    cx: 722,
    cy: 375,
    r: 22,
    type: "past",
    labelDir: "below",
  },
];

// cx: 900,
// cy: 250,
// r: 25,

const EDGES = [
  { from: "institute", to: "bsmath", upcoming: false },
  { from: "institute", to: "bscs", upcoming: false },
  { from: "bsmath", to: "master", upcoming: false },
  { from: "bscs", to: "master", upcoming: false },
  { from: "master", to: "phd", upcoming: false },
  { from: "phd", to: "research", upcoming: false },
];

function getPath(fromId: string, toId: string): string {
  const from = NODES.find((n) => n.id === fromId)!;
  const to = NODES.find((n) => n.id === toId)!;
  const mx = (from.cx + to.cx) / 2;
  return `M ${from.cx} ${from.cy} C ${mx} ${from.cy}, ${mx} ${to.cy}, ${to.cx} ${to.cy}`;
}

export const TrajectoryGraph = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[580px]">
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          className="w-full"
          aria-label="Academic trajectory diagram"
        >
          <defs>
            {/* Glow filter – cyan */}
            <filter id="tg-glow-c" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glow filter – amber */}
            <filter id="tg-glow-a" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glow filter – cyan strong (pulsing ring) */}
            <filter id="tg-glow-cs" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Edge gradients */}
            <linearGradient id="tg-eg-std" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(190 100% 50%)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="hsl(190 100% 50%)" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="tg-eg-up" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(190 100% 55%)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(38 95% 58%)" stopOpacity="0.95" />
            </linearGradient>

            {/* Grid tile */}
            <pattern id="tg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="hsl(240 10% 18% / 0.22)"
                strokeWidth="0.5"
              />
            </pattern>

            <style>{`
              @keyframes tg-flow {
                to { stroke-dashoffset: -28; }
              }
              @keyframes tg-flow-up {
                to { stroke-dashoffset: -40; }
              }
              @keyframes tg-ring {
                0%, 100% { r: 42; opacity: 0.12; }
                50%       { r: 48; opacity: 0.28; }
              }
              @keyframes tg-ring2 {
                0%, 100% { r: 52; opacity: 0.05; }
                50%       { r: 58; opacity: 0.14; }
              }
              .tg-ef  { stroke-dasharray: 8 6;  animation: tg-flow    1.9s linear infinite; }
              .tg-efu { stroke-dasharray: 12 8; animation: tg-flow-up 1.5s linear infinite; }
              .tg-r1  { animation: tg-ring  2.8s ease-in-out infinite; }
              .tg-r2  { animation: tg-ring2 2.8s ease-in-out infinite 0.4s; }
            `}</style>
          </defs>

          {/* Grid background */}
          <rect width={VW} height={VH} fill="url(#tg-grid)" />

          {/* ── Edges ── base (dim shadow) */}
          {EDGES.map((e, i) => (
            <path
              key={`b${i}`}
              d={getPath(e.from, e.to)}
              fill="none"
              stroke={
                e.upcoming
                  ? "hsl(38 95% 58% / 0.10)"
                  : "hsl(190 100% 50% / 0.10)"
              }
              strokeWidth="2.5"
            />
          ))}

          {/* ── Edges ── animated flow */}
          {EDGES.map((e, i) => (
            <path
              key={`f${i}`}
              d={getPath(e.from, e.to)}
              fill="none"
              stroke={e.upcoming ? "url(#tg-eg-up)" : "url(#tg-eg-std)"}
              strokeWidth="2"
              className={e.upcoming ? "tg-efu" : "tg-ef"}
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}

          {/* ── Nodes ── */}
          {NODES.map((node) => {
            const isCurrent = node.type === "current";
            const isUpcoming = node.type === "upcoming";

            const stroke = isUpcoming
              ? "hsl(38 95% 60%)"
              : isCurrent
              ? "hsl(190 100% 65%)"
              : "hsl(190 100% 50%)";
            const dotFill = isUpcoming ? "hsl(38 95% 60%)" : "hsl(190 100% 50%)";
            const yearsColor = isUpcoming ? "hsl(38 95% 62%)" : "hsl(190 100% 52%)";
            const filter = isUpcoming ? "url(#tg-glow-a)" : "url(#tg-glow-c)";

            // Label anchors
            const above = {
              main: node.cy - node.r - 13,
              sub: node.cy - node.r - 27,
              years: node.cy - node.r - 41,
            };
            const below = {
              main: node.cy + node.r + 20,
              sub: node.cy + node.r + 34,
              years: node.cy + node.r + 48,
            };
            const lbl = node.labelDir === "above" ? above : below;

            return (
              <g key={node.id}>
                {/* Pulsing rings – current node only */}
                {isCurrent && (
                  <>
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={42}
                      fill="none"
                      stroke="hsl(190 100% 50%)"
                      strokeWidth="1.5"
                      className="tg-r1"
                      filter="url(#tg-glow-cs)"
                    />
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={52}
                      fill="none"
                      stroke="hsl(190 100% 50%)"
                      strokeWidth="0.8"
                      className="tg-r2"
                      filter="url(#tg-glow-cs)"
                    />
                  </>
                )}

                {/* Soft area glow */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r + 8}
                  fill={
                    isUpcoming
                      ? "hsl(38 95% 60% / 0.07)"
                      : "hsl(190 100% 50% / 0.07)"
                  }
                  filter={filter}
                />

                {/* Main circle */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill="hsl(240 10% 6%)"
                  stroke={stroke}
                  strokeWidth={isCurrent ? 2.5 : 1.5}
                  filter={filter}
                />

                {/* Inner dot */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={isCurrent ? 7 : 4}
                  fill={dotFill}
                  filter={filter}
                />

                {/* Labels */}
                <text
                  x={node.cx}
                  y={lbl.main}
                  textAnchor="middle"
                  fill="hsl(0 0% 95%)"
                  fontSize={isCurrent ? "13" : "12"}
                  fontWeight="600"
                  fontFamily="'JetBrains Mono', 'Fira Code', monospace"
                >
                  {node.label}
                </text>
                <text
                  x={node.cx}
                  y={lbl.sub}
                  textAnchor="middle"
                  fill="hsl(240 5% 58%)"
                  fontSize="10"
                  fontFamily="'JetBrains Mono', 'Fira Code', monospace"
                >
                  {node.sublabel}
                </text>
                <text
                  x={node.cx}
                  y={lbl.years}
                  textAnchor="middle"
                  fill={yearsColor}
                  fontSize="9"
                  opacity="0.85"
                  fontFamily="'JetBrains Mono', 'Fira Code', monospace"
                >
                  {node.years}
                </text>

                {/* CURRENT badge – below the circle */}
                {isCurrent && (
                  <g>
                    <rect
                      x={node.cx - 34}
                      y={node.cy + node.r + 8}
                      width="68"
                      height="16"
                      rx="3"
                      fill="hsl(190 100% 50% / 0.08)"
                      stroke="hsl(190 100% 50% / 0.35)"
                      strokeWidth="0.5"
                    />
                    <text
                      x={node.cx}
                      y={node.cy + node.r + 20}
                      textAnchor="middle"
                      fill="hsl(190 100% 62%)"
                      fontSize="8"
                      fontWeight="700"
                      letterSpacing="1.5"
                      fontFamily="'JetBrains Mono', 'Fira Code', monospace"
                    >
                      CURRENT
                    </text>
                  </g>
                )}

                {/* UPCOMING badge – above the circle */}
                {isUpcoming && (
                  <g>
                    <rect
                      x={node.cx - 40}
                      y={node.cy - node.r - 26}
                      width="80"
                      height="16"
                      rx="3"
                      fill="hsl(38 95% 58% / 0.10)"
                      stroke="hsl(38 95% 58% / 0.40)"
                      strokeWidth="0.5"
                    />
                    <text
                      x={node.cx}
                      y={node.cy - node.r - 14}
                      textAnchor="middle"
                      fill="hsl(38 95% 65%)"
                      fontSize="8"
                      fontWeight="700"
                      letterSpacing="1.2"
                      fontFamily="'JetBrains Mono', 'Fira Code', monospace"
                    >
                      UPCOMING ✈
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
