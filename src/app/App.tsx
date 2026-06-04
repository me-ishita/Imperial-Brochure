/* MARKER-MAKE-KIT-INVOKED */
import { useState, useEffect } from "react";
import { MetallicCard } from "./components/MetallicCard";
import { SectionLabel } from "./components/SectionLabel";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import imperialLogo from "../imports/image.png";

const NAV_ITEMS = [
  { label: "Why Partner", id: "why-partner" },
  { label: "Strategic Objectives", id: "objectives" },
  { label: "What Imperial Brings", id: "imperial-brings" },
  { label: "What FS Brings", id: "fs-brings" },
  { label: "Flagship Components", id: "flagship" },
  { label: "Talent Pipeline", id: "talent" },
  { label: "Climate Solutions", id: "climate" },
  { label: "Governance", id: "governance" },
  { label: "Roadmap", id: "roadmap" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(item.id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--background)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* ── Sticky Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(8,13,26,0.92)"
            : "rgba(8,13,26,0.6)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(201,169,110,0.15)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0,0,0,0.5)"
            : "none",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 flex items-center justify-between"
          style={{ height: "64px" }}
        >
          {/* Logo area */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <ImageWithFallback
              src={imperialLogo}
              alt="Imperial College London"
              className="object-contain rounded-sm"
              style={{ width: "36px", height: "36px" }}
            />
          </div>

          {/* Nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-1.5 rounded-md transition-all duration-200"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.06em",
                  fontFamily: "Inter, sans-serif",
                  color:
                    activeSection === item.id
                      ? "var(--gold)"
                      : "var(--muted-foreground)",
                  background:
                    activeSection === item.id
                      ? "rgba(201,169,110,0.08)"
                      : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: "64px" }}
      >
        {/* Background gradient orbs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,169,110,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(74,127,165,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <SectionLabel>
            Strategic Partnership Brochure
          </SectionLabel>
          <h1
            className="mb-6"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#e8e4d9",
              letterSpacing: "-0.01em",
            }}
          >
            Imperial College London
            <br />
            <span style={{ color: "var(--gold)" }}>
              &amp; Financial Services
            </span>
          </h1>
          <p
            className="mb-10 mx-auto"
            style={{
              fontFamily: "Crimson Pro, Georgia, serif",
              fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)",
              fontWeight: 300,
              color: "#8a99b3",
              maxWidth: "620px",
              lineHeight: 1.75,
              fontStyle: "italic",
            }}
          >
            Partnering to develop the next generation of
            financial leaders, scale climate solutions, and
            accelerate the transition to a net&#8209;zero global
            economy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div
              className="px-4 py-2 rounded-full"
              style={{
                border: "1px solid rgba(201,169,110,0.3)",
                color: "var(--muted-foreground)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Prepared for: Financial Services Organisation
            </div>
            <div
              className="px-4 py-2 rounded-full"
              style={{
                border: "1px solid rgba(201,169,110,0.3)",
                color: "var(--muted-foreground)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              June 2026
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted-foreground)",
            }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)",
            }}
          />
        </div>
      </header>

      {/* ── Main content ── */}
      <main
        className="max-w-7xl mx-auto px-6 pb-24"
        style={{ paddingTop: "6rem" }}
      >
        {/* Section: Why Partner */}
        <section
          id="why-partner"
          className="mb-28 scroll-mt-20"
        >
          <SectionLabel>
            Why Imperial &amp; Financial Services
          </SectionLabel>
          <h2
            className="mb-6"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8e4d9",
              fontWeight: 500,
            }}
          >
            A convergence of research, capital, and talent
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            <MetallicCard
              className="lg:col-span-3 p-8"
              goldAccent
            >
              <p
                style={{
                  fontFamily: "Crimson Pro, Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 300,
                  color: "#c5bfb0",
                  lineHeight: 1.8,
                }}
              >
                Imperial College London is ranked{" "}
                <strong
                  style={{
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  #2 in the world
                </strong>{" "}
                and{" "}
                <strong
                  style={{
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  #1 in Europe and the UK
                </strong>
                , while global financial institutions are
                leading the mobilisation of capital for climate
                and digital transformation.
              </p>
              <p
                className="mt-4"
                style={{
                  fontFamily: "Crimson Pro, Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 300,
                  color: "#8a99b3",
                  lineHeight: 1.8,
                }}
              >
                Together, Imperial and a leading financial
                services organisation connect world‑class
                research, global capital and entrepreneurial
                talent to solve the most pressing challenges in
                financial services.
              </p>
            </MetallicCard>

            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              {[
                {
                  icon: "◆",
                  label:
                    "Climate change and transition finance",
                },
                {
                  icon: "◆",
                  label: "Sustainable and impact investing",
                },
                {
                  icon: "◆",
                  label:
                    "Digital assets, open banking and payments innovation",
                },
                {
                  icon: "◆",
                  label:
                    "AI, data science and quantum technologies for risk, trading and fraud",
                },
              ].map((item) => (
                <MetallicCard
                  key={item.label}
                  className="p-4"
                  steelAccent
                >
                  <div className="flex items-start gap-3">
                    <span
                      style={{
                        color: "var(--steel, #4a7fa5)",
                        fontSize: "0.5rem",
                        marginTop: "0.45rem",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#c5bfb0",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                </MetallicCard>
              ))}
            </div>
          </div>

          <MetallicCard className="p-6">
            <p
              style={{
                fontSize: "0.88rem",
                color: "#8a99b3",
                lineHeight: 1.75,
              }}
            >
              This partnership builds on Imperial's climate and
              innovation commitments with the financial sector,
              including cleantech accelerators and climate
              innovation programmes under global climate
              solutions initiatives.
            </p>
          </MetallicCard>
        </section>

        {/* Section: Strategic Objectives */}
        <section id="objectives" className="mb-28 scroll-mt-20">
          <SectionLabel>Strategic Objectives</SectionLabel>
          <h2
            className="mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8e4d9",
              fontWeight: 500,
            }}
          >
            Three pillars aligning research with business
            priorities
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: "0.9rem",
              color: "#8a99b3",
              maxWidth: "620px",
              lineHeight: 1.75,
            }}
          >
            The partnership is designed around three strategic
            pillars that align Imperial's research and talent
            with financial institutions' business priorities and
            sustainability agendas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title:
                  "Climate & Sustainable Finance Innovation",
                body: "Scale early‑stage ventures that mitigate or adapt to climate change, building on Imperial's climate innovation platforms and the financial sector's climate programmes. Develop new products and structures in sustainable finance, from green bonds to transition finance instruments, supported by research from the Grantham Institute and Imperial's finance faculty.",
                gold: true,
              },
              {
                num: "02",
                title: "Future‑ready Financial Talent",
                body: "Create a privileged talent pipeline into Imperial's premier MSc programmes in Finance, FinTech, Risk Management, Investment & Wealth Management, Quantitative Finance and Machine Learning & Finance. Co‑design executive and professional programmes to upskill leaders globally in sustainable finance, climate risk, digital assets and AI in financial services.",
                gold: false,
              },
              {
                num: "03",
                title: "Thought Leadership & Policy Impact",
                body: "Position Imperial and financial sector partners as co‑authors of agenda‑setting research on climate risk, ESG data, digital assets and AI in finance. Convene global dialogues with policymakers, regulators, investors and startups through joint summits, roundtables and white papers in London.",
                gold: false,
              },
            ].map((pillar) => (
              <MetallicCard
                key={pillar.num}
                className="p-7"
                goldAccent={pillar.gold}
                steelAccent={!pillar.gold}
              >
                <div
                  className="mb-5"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "2.8rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: pillar.gold
                      ? "rgba(201,169,110,0.18)"
                      : "rgba(74,127,165,0.18)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {pillar.num}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: pillar.gold
                      ? "var(--gold)"
                      : "#7ab3d0",
                    lineHeight: 1.35,
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#8a99b3",
                    lineHeight: 1.8,
                  }}
                >
                  {pillar.body}
                </p>
              </MetallicCard>
            ))}
          </div>
        </section>

        {/* Section: What Imperial Brings */}
        <section
          id="imperial-brings"
          className="mb-28 scroll-mt-20"
        >
          <SectionLabel>What Imperial Brings</SectionLabel>
          <h2
            className="mb-10"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8e4d9",
              fontWeight: 500,
            }}
          >
            World‑class research, climate leadership &amp;
            digital finance
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Academic Excellence */}
            <MetallicCard className="p-8" goldAccent>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.2rem",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                Academic Excellence &amp; Global Reputation
              </h3>
              <p
                className="mb-4"
                style={{
                  fontSize: "0.85rem",
                  color: "#8a99b3",
                  lineHeight: 1.8,
                }}
              >
                Imperial College London is Europe's top
                university and #2 globally, with leading
                positions in finance, data science and AI. Its
                track record of Nobel Prizes, Fields Medals and
                Fellows of the Royal Society highlights deep
                quantitative and scientific strength.
              </p>
              <p
                className="mb-3"
                style={{
                  fontSize: "0.8rem",
                  color: "#6a7a8f",
                  lineHeight: 1.7,
                }}
              >
                Imperial's Business School and Faculty of
                Engineering lead in:
              </p>
              <ul className="space-y-1.5">
                {[
                  "Finance and financial engineering",
                  "Financial technology and digital payments",
                  "Machine learning and data science",
                  "Climate science and climate finance",
                  "Mathematics of risk and derivatives",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                    style={{
                      fontSize: "0.82rem",
                      color: "#c5bfb0",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--gold)",
                        marginTop: "0.35rem",
                        fontSize: "0.45rem",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </MetallicCard>

            {/* Climate & Sustainability */}
            <MetallicCard className="p-8" steelAccent>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.2rem",
                  color: "#7ab3d0",
                  fontWeight: 600,
                }}
              >
                Climate &amp; Sustainability Leadership
              </h3>
              <p
                className="mb-4"
                style={{
                  fontSize: "0.85rem",
                  color: "#8a99b3",
                  lineHeight: 1.8,
                }}
              >
                Through the Grantham Institute and new Schools
                of Convergence Science, Imperial sits at the
                frontier of climate science, energy systems and
                sustainable finance. Partnerships with financial
                institutions have enabled cleantech accelerators
                and climate innovation centres, backing{" "}
                <strong style={{ color: "#e8e4d9" }}>
                  100+ climate‑focused ventures
                </strong>
                .
              </p>
              <p
                className="mb-3"
                style={{
                  fontSize: "0.8rem",
                  color: "#6a7a8f",
                  lineHeight: 1.7,
                }}
              >
                Key capabilities for financial services
                partners:
              </p>
              <ul className="space-y-1.5">
                {[
                  "Climate risk modelling",
                  "ESG data frameworks",
                  "Green and sustainability‑linked bond insights",
                  "Regulatory alignment and net‑zero transition planning",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                    style={{
                      fontSize: "0.82rem",
                      color: "#c5bfb0",
                    }}
                  >
                    <span
                      style={{
                        color: "#7ab3d0",
                        marginTop: "0.35rem",
                        fontSize: "0.45rem",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </MetallicCard>

            {/* AI & Digital */}
            <MetallicCard className="lg:col-span-2 p-8">
              <h3
                className="mb-2"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.2rem",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                AI, Data &amp; Digital Finance Strength
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#8a99b3",
                      lineHeight: 1.8,
                    }}
                  >
                    Imperial's FinTech Lab, Data Science
                    Institute and Mathematics of Finance Group
                    work on blockchain and DeFi, digital assets,
                    RegTech, AI/ML for trading and risk, and
                    quantum computing for optimisation. These
                    clusters generate impactful research,
                    fintech spin‑outs and practical
                    collaborations with financial institutions.
                  </p>
                </div>
                <div>
                  <p
                    className="mb-3"
                    style={{
                      fontSize: "0.8rem",
                      color: "#6a7a8f",
                      lineHeight: 1.7,
                    }}
                  >
                    Partners gain access to:
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "Emerging methodologies in AI‑driven credit, market and fraud models",
                      "Smart contract security and tokenisation",
                      "Quantum‑inspired optimisation",
                      "Cyber resilience for digital finance platforms",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2"
                        style={{
                          fontSize: "0.82rem",
                          color: "#c5bfb0",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--gold)",
                            marginTop: "0.35rem",
                            fontSize: "0.45rem",
                            flexShrink: 0,
                          }}
                        >
                          ◆
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MetallicCard>
          </div>
        </section>

        {/* Section: What Financial Services Brings */}
        <section id="fs-brings" className="mb-28 scroll-mt-20">
          <SectionLabel>
            What Financial Services Brings
          </SectionLabel>
          <h2
            className="mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8e4d9",
              fontWeight: 500,
            }}
          >
            Global scale, capital &amp; market reach
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: "0.9rem",
              color: "#8a99b3",
              maxWidth: "600px",
              lineHeight: 1.75,
            }}
          >
            Global financial institutions provide scale, capital
            and multi‑market presence that move Imperial's
            research and innovation from lab to market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Global Platform & Client Access",
                body: "Corporate, institutional and wealth networks across Asia, the Middle East, Europe and the Americas give Imperial‑backed solutions a pathway to rapid adoption and impact.",
                gold: true,
              },
              {
                title:
                  "Climate & Sustainable Finance Commitments",
                body: "Leading financial services institutions commit significant philanthropic and commercial capital to climate solutions through multi‑year partnerships. Collaborations with Imperial enable this capital and expertise to be channelled into UK‑based innovation with global relevance.",
                gold: false,
              },
              {
                title: "Talent Development at Scale",
                body: "Financial institutions' experience in delivering bespoke fintech and sustainability education programmes with top universities positions them as strong partners for high‑impact learning journeys.",
                gold: false,
              },
              {
                title: "Use‑cases, Data & Deployment",
                body: "Partners can provide real data, pilot environments and feedback loops across retail, corporate, markets and wealth businesses, ensuring research addresses material business and regulatory challenges.",
                gold: true,
              },
            ].map((item) => (
              <MetallicCard
                key={item.title}
                className="p-7"
                goldAccent={item.gold}
                steelAccent={!item.gold}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: item.gold
                      ? "var(--gold)"
                      : "#7ab3d0",
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#8a99b3",
                    lineHeight: 1.8,
                  }}
                >
                  {item.body}
                </p>
              </MetallicCard>
            ))}
          </div>
        </section>

        {/* Section: Flagship Partnership Components */}
        <section id="flagship" className="mb-28 scroll-mt-20">
          <SectionLabel>
            Flagship Partnership Components
          </SectionLabel>
          <h2
            className="mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8e4d9",
              fontWeight: 500,
            }}
          >
            A modular portfolio of initiatives
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: "0.9rem",
              color: "#8a99b3",
              maxWidth: "620px",
              lineHeight: 1.75,
            }}
          >
            A modular portfolio of initiatives allows the
            partnership to be tuned to strategic priorities and
            target geographies. The final mix can be tuned to
            each partner's priorities across wealth, markets,
            retail and wholesale, and across regions such as the
            UK, Asia and MENA.
          </p>

          <MetallicCard className="overflow-hidden" goldAccent>
            <div
              className="grid"
              style={{ gridTemplateColumns: "1fr 2fr" }}
            >
              {/* Header row */}
              <div
                className="px-6 py-4"
                style={{
                  borderBottom:
                    "1px solid rgba(201,169,110,0.15)",
                  background: "rgba(201,169,110,0.06)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Pillar
                </span>
              </div>
              <div
                className="px-6 py-4"
                style={{
                  borderBottom:
                    "1px solid rgba(201,169,110,0.15)",
                  background: "rgba(201,169,110,0.06)",
                  borderLeft:
                    "1px solid rgba(201,169,110,0.12)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Illustrative Initiative
                </span>
              </div>

              {/* Rows */}
              {[
                {
                  pillar: "Climate & Cleantech",
                  initiative:
                    "Imperial–Financial Services Greenhouse: accelerator for climate and nature‑positive startups.",
                },
                {
                  pillar: "Sustainable Finance",
                  initiative:
                    "Joint Sustainable Finance & Investing executive programme for financial sector leaders.",
                },
                {
                  pillar: "Climate Risk & Analytics",
                  initiative:
                    "Co‑developed climate stress‑testing and transition risk models for key portfolios.",
                },
                {
                  pillar: "AI & FinTech Innovation",
                  initiative:
                    "Joint research projects on AI in trading, risk and fraud; lab‑based pilots with financial firms.",
                },
                {
                  pillar: "Talent & Recruitment",
                  initiative:
                    "Preferred recruitment partnership across Imperial's finance and data MSc programmes.",
                },
                {
                  pillar: "Thought Leadership",
                  initiative:
                    "Annual Imperial–Financial Services Sustainable Finance & Innovation Summit in London.",
                },
              ].map((row, i) => (
                <div key={row.pillar} className="contents">
                  <div
                    className="px-6 py-5"
                    style={{
                      borderBottom:
                        i < 5
                          ? "1px solid rgba(201,169,110,0.08)"
                          : "none",
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : "rgba(201,169,110,0.02)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#e8e4d9",
                      }}
                    >
                      {row.pillar}
                    </span>
                  </div>
                  <div
                    className="px-6 py-5"
                    style={{
                      borderBottom:
                        i < 5
                          ? "1px solid rgba(201,169,110,0.08)"
                          : "none",
                      borderLeft:
                        "1px solid rgba(201,169,110,0.12)",
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : "rgba(201,169,110,0.02)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "#8a99b3",
                        lineHeight: 1.7,
                      }}
                    >
                      {row.initiative}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </MetallicCard>
        </section>

        {/* Section: Talent Pipeline */}
        <section id="talent" className="mb-28 scroll-mt-20">
          <SectionLabel>
            Talent Pipeline &amp; Executive Education
          </SectionLabel>
          <h2
            className="mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8e4d9",
              fontWeight: 500,
            }}
          >
            High‑calibre graduates &amp; bespoke learning
            solutions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <MetallicCard
              className="lg:col-span-2 p-8"
              goldAccent
            >
              <p
                className="mb-4"
                style={{
                  fontSize: "0.9rem",
                  color: "#8a99b3",
                  lineHeight: 1.85,
                }}
              >
                Imperial Business School graduates several
                hundred specialists each year across Finance,
                FinTech, Quantitative Finance, Risk Management,
                Investment & Wealth Management, and Machine
                Learning & Finance, with{" "}
                <strong style={{ color: "#e8e4d9" }}>
                  employability rates above 90%
                </strong>{" "}
                within six months and alumni in leading
                financial institutions worldwide.
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#8a99b3",
                  lineHeight: 1.85,
                }}
              >
                Imperial Executive Education can jointly develop
                online and blended programmes that equip leaders
                with skills in fintech, AI, sustainable finance
                and climate risk, building on its experience in
                global sustainable finance programmes.
              </p>
            </MetallicCard>

            <MetallicCard
              className="p-7 flex flex-col justify-center"
              steelAccent
            >
              <div className="text-center mb-6">
                <div
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: "#7ab3d0",
                    lineHeight: 1,
                  }}
                >
                  90%+
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#6a7a8f",
                    letterSpacing: "0.08em",
                    marginTop: "0.25rem",
                  }}
                >
                  EMPLOYABILITY WITHIN 6 MONTHS
                </div>
              </div>
              <div
                style={{
                  height: "1px",
                  background: "rgba(74,127,165,0.2)",
                  margin: "0 0 1.25rem",
                }}
              />
              <div className="space-y-2">
                {[
                  "Finance",
                  "FinTech",
                  "Quantitative Finance",
                  "Risk Management",
                  "Investment & Wealth Management",
                  "ML & Finance",
                ].map((prog) => (
                  <div
                    key={prog}
                    className="px-3 py-1.5 rounded"
                    style={{
                      background: "rgba(74,127,165,0.07)",
                      fontSize: "0.75rem",
                      color: "#7ab3d0",
                      letterSpacing: "0.04em",
                    }}
                  >
                    MSc {prog}
                  </div>
                ))}
              </div>
            </MetallicCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Structured Recruitment",
                body: "Secure structured recruitment relationships for internships, analyst and associate roles across Imperial's talent pipeline.",
              },
              {
                title: "Co‑designed Capstone Projects",
                body: "Co‑design case studies and capstone projects based on real climate, digital and regulatory challenges your firm faces.",
              },
              {
                title: "Scholarships & Prizes",
                body: "Offer sponsored scholarships and prizes in sustainable finance, digital assets and climate innovation to attract top talent.",
              },
            ].map((item) => (
              <MetallicCard key={item.title} className="p-6">
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "0.95rem",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#8a99b3",
                    lineHeight: 1.75,
                  }}
                >
                  {item.body}
                </p>
              </MetallicCard>
            ))}
          </div>
        </section>

        {/* Section: Climate Solutions */}
        <section id="climate" className="mb-28 scroll-mt-20">
          <SectionLabel>
            Climate Solutions &amp; Impact
          </SectionLabel>
          <h2
            className="mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8e4d9",
              fontWeight: 500,
            }}
          >
            From research to commercial scale
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetallicCard className="p-8" steelAccent>
              <p
                className="mb-4"
                style={{
                  fontSize: "0.9rem",
                  color: "#8a99b3",
                  lineHeight: 1.85,
                }}
              >
                Philanthropic funding and strategic partnerships
                from financial institutions have enabled
                Imperial to launch cleantech innovation
                programmes that support UK startups with grants,
                workspace, mentoring and commercialisation
                support, targeting technologies with measurable
                climate impact.
              </p>
              <div
                className="mt-6 p-5 rounded-xl"
                style={{
                  background: "rgba(74,127,165,0.06)",
                  border: "1px solid rgba(74,127,165,0.15)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "#7ab3d0",
                      lineHeight: 1,
                    }}
                  >
                    100+
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#6a7a8f",
                      lineHeight: 1.5,
                    }}
                  >
                    climate‑focused ventures
                    <br />
                    backed to date
                  </div>
                </div>
              </div>
            </MetallicCard>

            <MetallicCard className="p-8" goldAccent>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.05rem",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                An expanded model could:
              </h3>
              <ul className="space-y-3">
                {[
                  "Scale the number of ventures supported",
                  "Deepen access to sector experts and clients",
                  "Develop impact measurement frameworks for avoided emissions and co‑benefits",
                  "Explore sustainable finance instruments linking institutional capital directly to Imperial‑backed ventures",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span
                      style={{
                        color: "var(--gold)",
                        marginTop: "0.4rem",
                        fontSize: "0.45rem",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#c5bfb0",
                        lineHeight: 1.75,
                      }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </MetallicCard>
          </div>
        </section>

        {/* Section: Governance */}
        <section id="governance" className="mb-28 scroll-mt-20">
          <SectionLabel>
            Governance &amp; Engagement Model
          </SectionLabel>
          <h2
            className="mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8e4d9",
              fontWeight: 500,
            }}
          >
            Clear governance ensures focus, accountability &amp;
            measurable outcomes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              {
                title: "Strategic Steering Committee",
                body: "Senior leaders from Imperial and the partner financial institution meet twice per year to set priorities, approve flagship initiatives and review impact metrics.",
                gold: true,
              },
              {
                title: "Thematic Working Groups",
                body: "Cross‑functional teams focus on Sustainable Finance & Climate Risk, AI & Digital Finance, Talent & Executive Education, and Innovation & Ventures.",
                gold: false,
              },
              {
                title: "Dedicated Partnership Office",
                body: "A coordination team at Imperial provides a single front door into academic departments, labs and talent pools, ensuring speed and clarity of engagement.",
                gold: true,
              },
            ].map((item) => (
              <MetallicCard
                key={item.title}
                className="p-7"
                goldAccent={item.gold}
                steelAccent={!item.gold}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.05rem",
                    color: item.gold
                      ? "var(--gold)"
                      : "#7ab3d0",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#8a99b3",
                    lineHeight: 1.8,
                  }}
                >
                  {item.body}
                </p>
              </MetallicCard>
            ))}
          </div>

          <MetallicCard className="p-7">
            <h3
              className="mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1rem",
                color: "var(--gold)",
                fontWeight: 600,
              }}
            >
              Shared Scorecard — outcomes tracked include:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                "Ventures supported",
                "Employees trained",
                "Joint publications",
                "Pilots launched",
                "Capital mobilised",
              ].map((metric) => (
                <div
                  key={metric}
                  className="rounded-lg p-3 text-center"
                  style={{
                    background: "rgba(201,169,110,0.06)",
                    border: "1px solid rgba(201,169,110,0.12)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#c5bfb0",
                      lineHeight: 1.5,
                      display: "block",
                    }}
                  >
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </MetallicCard>
        </section>

        {/* Section: Roadmap */}
        <section id="roadmap" className="mb-16 scroll-mt-20">
          <SectionLabel>Next Steps &amp; Roadmap</SectionLabel>
          <h2
            className="mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8e4d9",
              fontWeight: 500,
            }}
          >
            A phased roadmap from concept to scaled impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                phase: "Phase 1",
                period: "0–3 months",
                label: "Design",
                items: [
                  "Align on objectives, governance, priority themes and target geographies",
                  "Finalise initial flagship initiatives such as an accelerator cohort, executive programme and pilot projects",
                ],
                gold: true,
              },
              {
                phase: "Phase 2",
                period: "3–12 months",
                label: "Launch",
                items: [
                  "Launch the first joint accelerator cohort and executive programme",
                  "Announce the partnership publicly with a Sustainable Finance & Innovation Forum in London",
                ],
                gold: false,
              },
              {
                phase: "Phase 3",
                period: "Year 2–3",
                label: "Scale",
                items: [
                  "Extend the partnership to additional markets and business lines",
                  "Deepen regulatory and policy engagement",
                  "Launch second‑generation products and research projects",
                ],
                gold: true,
              },
            ].map((phase, i) => (
              <MetallicCard
                key={phase.phase}
                className="p-7 relative overflow-visible"
                goldAccent={phase.gold}
                steelAccent={!phase.gold}
              >
                {/* Timeline connector */}
                {i < 2 && (
                  <div
                    className="hidden md:block absolute top-10 -right-3 z-10 w-6 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(201,169,110,0.4), rgba(201,169,110,0.1))",
                    }}
                  />
                )}
                <div className="flex items-start gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: phase.gold
                        ? "rgba(201,169,110,0.12)"
                        : "rgba(74,127,165,0.12)",
                      border: phase.gold
                        ? "1px solid rgba(201,169,110,0.3)"
                        : "1px solid rgba(74,127,165,0.3)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: phase.gold
                          ? "var(--gold)"
                          : "#7ab3d0",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: phase.gold
                          ? "var(--gold)"
                          : "#7ab3d0",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {phase.phase} — {phase.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#6a7a8f",
                      }}
                    >
                      {phase.period}
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5"
                    >
                      <span
                        style={{
                          color: phase.gold
                            ? "var(--gold)"
                            : "#7ab3d0",
                          marginTop: "0.4rem",
                          fontSize: "0.4rem",
                          flexShrink: 0,
                        }}
                      >
                        ◆
                      </span>
                      <p
                        style={{
                          fontSize: "0.83rem",
                          color: "#8a99b3",
                          lineHeight: 1.75,
                        }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </MetallicCard>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        className="relative"
        style={{
          borderTop: "1px solid rgba(201,169,110,0.15)",
          background: "rgba(201,169,110,0.02)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded flex items-center justify-center"
              style={{ background: "var(--gold)" }}
            >
              <div className="flex items-center gap-3 flex-shrink-0">
                <ImageWithFallback
                  src={imperialLogo}
                  alt="Imperial College London"
                  className="object-contain rounded-sm"
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                color: "#6a7a8f",
                letterSpacing: "0.08em",
              }}
            >
              Imperial College London × Financial Services —
              Strategic Partnership Brochure 2026
            </span>
          </div>
          <div
            style={{ fontSize: "0.72rem", color: "#4a5568" }}
          >
            Prepared June 2026 — Confidential
          </div>
        </div>
      </footer>
    </div>
  );
}