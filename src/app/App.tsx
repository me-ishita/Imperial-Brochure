/* MARKER-MAKE-KIT-INVOKED */
import { useState, useEffect } from "react";
import { MetallicCard } from "./components/MetallicCard";
import { SectionLabel } from "./components/SectionLabel";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  SG,
  US,
  IN,
  GH,
} from "country-flag-icons/react/1x1";
import imperialLogo from "../assets/image.png";
import imperialHero from "../assets/Imperial-College.png";

const NAV_ITEMS = [
  { label: "Global Standing", id: "global-standing" },
  { label: "Entrepreneurial Core", id: "entrepreneurial-core" },
  { label: "Our Community", id: "our-community" },
  { label: "Strategic Objectives", id: "objectives" },
  { label: "What Imperial Brings", id: "imperial-brings" },
  { label: "Flagship Components", id: "flagship" },
  { label: "Governance", id: "governance" },
  { label: "Roadmap", id: "roadmap" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// White-gold gradient text style
const whiteGoldText = {
  background: "linear-gradient(135deg, #fffbe6 0%, #f5d97a 30%, #c9a96e 60%, #fffbe6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#ffffff", fontFamily: "Inter, sans-serif" }}>

      {/* ── Sticky Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.25)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: "64px" }}>
          <div className="flex items-center gap-3 flex-shrink-0">
            <ImageWithFallback src={imperialLogo} alt="Imperial College London" className="object-contain rounded-sm" style={{ width: "36px", height: "36px" }} />
          </div>
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
                  color: activeSection === item.id ? "#d4a017" : "#1e2a3a",
                  background: activeSection === item.id ? "rgba(201,169,110,0.10)" : "transparent",
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

      {/* ── Hero Image ── */}
      <header className="relative overflow-hidden" style={{ paddingTop: "64px" }}>
        <ImageWithFallback src={imperialHero} alt="Imperial College London" className="w-full h-auto object-cover" style={{ width: "100%", display: "block" }} />
      </header>

      {/* ── Main content ── */}
      <main className="max-w-7xl mx-auto px-6 pb-24" style={{ paddingTop: "6rem" }}>

        {/* ══ Section: Welcome to Imperial ══ */}
        <section id="welcome" className="mb-20 scroll-mt-20">
          <SectionLabel>Welcome to Imperial</SectionLabel>
          <h2 className="mb-6" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#080d1a", fontWeight: 500 }}>
            Where scientific imagination leads to world‑changing impact
          </h2>

          <MetallicCard className="p-8 mb-8" goldAccent>
            <p className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 300, color: "#ffffff", lineHeight: 1.85 }}>
              We are a world-leading university for science, technology, engineering, medicine and business, where scientific imagination leads to world-changing impact. Founded in 1907 with a mission to be useful, Imperial has spent more than a century turning discovery into practical progress for society.
            </p>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 300, color: "#ffffff", lineHeight: 1.85 }}>
              Across our London campuses and international network, Imperial brings together exceptional teaching, world-class facilities and collaborative working to unlock scientific imagination. The university's story is one of passion, dedication and the relentless pursuit of knowledge.
            </p>
          </MetallicCard>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              {
                stat: "2nd in the world",
                label: "QS World University Rankings 2026",
                gold: true,
              },
              {
                stat: "1st in UK & Europe",
                label: "Leading university in the region",
                gold: false,
              },
              {
                stat: "14 Nobel Prize winners",
                label: "Recognizing groundbreaking research",
                gold: true,
              },
              {
                stat: "Gold TEF 2023",
                label: "Teaching Excellence Framework",
                gold: false,
              },
            ].map((item) => (
              <MetallicCard
                key={item.stat}
                className="p-7 text-center"
                goldAccent={item.gold}
                steelAccent={!item.gold}
              >
                <div
                  className="mb-3"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: item.gold ? "var(--gold)" : "#7ab3d0",
                    lineHeight: 1.15,
                  }}
                >
                  {item.stat}
                </div>

                <div
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "Playfair Display, serif",
                    color: "#ffffff",
                    lineHeight: 1.6,
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.label}
                </div>
              </MetallicCard>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                stat: "University of the Year",
                label: "For Graduate Employment 2026",
                gold: true,
              },
              {
                stat: "£1.1B Research Income",
                label:
                  "2024/25 Academic Year — world-leading research institution",
                gold: false,
              },
            ].map((item) => (
              <MetallicCard
                key={item.stat}
                className="p-7 text-center"
                goldAccent={item.gold}
                steelAccent={!item.gold}
              >
                <div
                  className="mb-3"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: item.gold ? "var(--gold)" : "#7ab3d0",
                    lineHeight: 1.15,
                  }}
                >
                  {item.stat}
                </div>

                <div
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "Playfair Display, serif",
                    color: "#ffffff",
                    lineHeight: 1.6,
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.label}
                </div>
              </MetallicCard>
            ))}
          </div>
        </section>

        {/* ══ STEM Statement Banner ══ */}
        <section className="mb-20">
          <MetallicCard className="overflow-hidden" goldAccent>
            <div
              className="relative p-10 md:p-14"
              style={{
                background: "linear-gradient(135deg, #0d1426 0%, #12193a 40%, #0d1120 100%)",
                borderTop: "2px solid rgba(201,169,110,0.5)",
              }}
            >
              {/* Decorative corner accent */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "120px", height: "120px", background: "radial-gradient(ellipse at top left, rgba(201,169,110,0.12), transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "180px", height: "180px", background: "radial-gradient(ellipse at bottom right, rgba(201,169,110,0.08), transparent 70%)", pointerEvents: "none" }} />

              <div className="relative text-center max-w-4xl mx-auto">
                {/* STEM badge */}
                <div className="inline-flex items-center gap-3 mb-8">
                  <div style={{ height: "1px", width: "48px", background: "linear-gradient(90deg, transparent, #c9a96e)" }} />
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "Inter, sans-serif", color: "#c9a96e", fontWeight: 700 }}>
                    A STEM University
                  </span>
                  <div style={{ height: "1px", width: "48px", background: "linear-gradient(90deg, #c9a96e, transparent)" }} />
                </div>

                <h2
                  className="mb-6"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    ...whiteGoldText,
                  }}
                >
                  Imperial was created to be a 'useful university'
                </h2>

                <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 300, color: "#ffffff", lineHeight: 1.85, marginBottom: "2.5rem" }}>
                  Imperial College London is a world-leading institution renowned for focusing exclusively on science, technology, engineering, medicine, and business — a university built for impact from its very founding.
                </p>

                {/* STEM breakdown */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { letter: "S", word: "Science", desc: "Pioneering discovery" },
                    { letter: "T", word: "Technology", desc: "Innovation at scale" },
                    { letter: "E", word: "Engineering", desc: "Real-world solutions" },
                    { letter: "M", word: "Mathematics", desc: "Analytical rigour" },
                  ].map((item) => (
                    <div
                      key={item.letter}
                      className="rounded-xl p-5 text-center"
                      style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.18)" }}
                    >
                      <div style={{ fontFamily: "Playfair Display, serif", fontSize: "2.2rem", fontWeight: 700, ...whiteGoldText, lineHeight: 1, marginBottom: "0.4rem" }}>
                        {item.letter}
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--gold)", marginBottom: "0.25rem" }}>{item.word}</div>
                      <div style={{ fontSize: "0.72rem", fontFamily: "Playfair Display, serif", color: "#ffffff" }}>{item.desc}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-8" style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.7, fontStyle: "italic" }}>
                  STEM — Science, Technology, Engineering, and Mathematics — is the foundation upon which Imperial's global reputation has been built over more than a century.
                </p>
              </div>
            </div>
          </MetallicCard>
        </section>

        {/* ══ Section: The Imperial Difference ══ */}
        <section className="mb-28">
          <SectionLabel>The Imperial Difference</SectionLabel>
          <h2 className="mb-6" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#080d1a", fontWeight: 500 }}>
            Deliberately focused on shaping the future
          </h2>
          <MetallicCard className="p-8 mb-6" goldAccent>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 300, color: "#ffffff", lineHeight: 1.85 }}>
              Imperial is deliberately focused. Rather than trying to be all things to all students, it concentrates on the disciplines that are shaping the future economy and solving the world's most pressing problems:{" "}
              <strong style={{ color: "var(--gold)", fontWeight: 600 }}>science, engineering, medicine and business</strong>.
            </p>
          </MetallicCard>
          <MetallicCard className="p-8" steelAccent>
            <p style={{ fontSize: "0.95rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>
              That focus creates a distinct culture. Students learn among ambitious peers, with research-led teaching, strong technical rigour and close links between discovery, enterprise and employability. The result is an education that feels both elite and intensely practical.
            </p>
          </MetallicCard>
        </section>

        {/* ══ Section: Global Standing ══ */}
        <section id="global-standing" className="mb-28 scroll-mt-20">
          <SectionLabel>Global Standing</SectionLabel>
          <h2 className="mb-6" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#080d1a", fontWeight: 500 }}>
            World-class rankings that matter
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <MetallicCard className="p-7 text-center" goldAccent>
              <div className="mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1.15 }}>2nd</div>
              <div style={{ fontSize: "0.8rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.6, letterSpacing: "0.02em" }}>
                in the world<br /><span style={{ color: "#ffffff", fontSize: "0.75rem" }}>QS World University Rankings 2026</span>
              </div>
            </MetallicCard>
            <MetallicCard className="p-7 text-center" goldAccent>
              <div className="mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1.15 }}>8th</div>
              <div style={{ fontSize: "0.8rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.6, letterSpacing: "0.02em" }}>
                in the world<br /><span style={{ color: "#ffffff", fontSize: "0.75rem" }}>THE World University Rankings 2026</span>
              </div>
            </MetallicCard>
            <MetallicCard className="p-7 text-center" steelAccent>
              <div className="mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", fontWeight: 700, color: "#7ab3d0", lineHeight: 1.15 }}>7th</div>
              <div style={{ fontSize: "0.8rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.6, letterSpacing: "0.02em" }}>
                in the world<br /><span style={{ color: "#ffffff", fontSize: "0.75rem" }}>QS Sustainability Rankings 2026</span>
              </div>
            </MetallicCard>
          </div>
          <MetallicCard className="p-7">
            <p style={{ fontSize: "0.9rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>
              These rankings reflect more than reputation alone. They point to current excellence in teaching, research, sustainability and employer recognition, all of which strengthen the value of an Imperial degree internationally.
            </p>
          </MetallicCard>
        </section>

        {/* ══ Section: Research That Leads ══ */}
        <section className="mb-28">
          <SectionLabel>Research That Leads</SectionLabel>
          <h2 className="mb-6" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#080d1a", fontWeight: 500 }}>
            World-leading research excellence
          </h2>
          <MetallicCard className="p-8 mb-6" goldAccent>
            <p className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 300, color: "#ffffff", lineHeight: 1.85 }}>
              According to the <strong style={{ color: "var(--gold)", fontWeight: 600 }}>Research Excellence Framework 2021</strong>, Imperial has a greater proportion of world-leading 4-star research than any other UK university. The same results place Imperial <strong style={{ color: "var(--gold)", fontWeight: 600 }}>first in the UK for research outputs and research environment</strong>, and first for research impact among Russell Group universities.
            </p>
            <p style={{ fontSize: "0.95rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>
              Imperial was also built on a distinguished history of invention, from pioneering penicillin, holography and fibre optics to today's frontier work in climate, health, AI and advanced engineering. The institution's research culture is designed to solve major global challenges at pace and scale.
            </p>
          </MetallicCard>
        </section>

        {/* ══ Section: Built for Employability ══ */}
        <section className="mb-28">
          <SectionLabel>Built for Employability</SectionLabel>
          <h2 className="mb-6" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#080d1a", fontWeight: 500 }}>
            University of the Year for Graduate Employment
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <MetallicCard className="lg:col-span-3 p-8" steelAccent>
              <p className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 300, color: "#ffffff", lineHeight: 1.85 }}>
                Imperial was named <strong style={{ color: "#7ab3d0", fontWeight: 600 }}>University of the Year for Graduate Employment</strong> in The Times and The Sunday Times Good University Guide 2026. Its reputation page also highlights consistently strong graduate prospects and worldwide employer recognition.
              </p>
              <p style={{ fontSize: "0.95rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>
                Many Imperial courses are designed around analytical, numerical and problem-solving strengths, often using project work and real industry scenarios. That gives graduates a compelling route into science, technology, finance, consulting, healthcare and entrepreneurship.
              </p>
            </MetallicCard>
            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              {["Science", "Technology", "Finance", "Consulting", "Healthcare", "Entrepreneurship"].map((field) => (
                <MetallicCard key={field} className="p-4" goldAccent>
                  <div className="flex items-center justify-center">
                    <span style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", fontWeight: 500, letterSpacing: "0.02em" }}>{field}</span>
                  </div>
                </MetallicCard>
              ))}
            </div>
          </div>
        </section>

        {/* ══ Section: Entrepreneurial Core ══ */}
        <section id="entrepreneurial-core" className="mb-28 scroll-mt-20">
          <SectionLabel>Entrepreneurial Core</SectionLabel>
          <h2 className="mb-6" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            Europe's leading university for startup creation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <MetallicCard className="p-8" goldAccent>
              <p className="mb-6" style={{ fontSize: "0.95rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>
                Entrepreneurship is embedded in Imperial's identity rather than treated as a side activity. The Imperial Enterprise Lab, White City Incubator, Scale Space and related hubs help students, staff and alumni turn ideas into ventures, products and services.
              </p>
              <div className="p-5 rounded-xl" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)" }}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1.2, marginBottom: "0.5rem" }}>Europe's Leading</div>
                <div style={{ fontSize: "0.8rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.5 }}>
                  Large university for startup creation<br />
                  <span style={{ color: "#ffffff", fontSize: "0.75rem" }}>Redstone University Startup Index 2024</span>
                </div>
              </div>
            </MetallicCard>
            <MetallicCard className="p-8" steelAccent>
              <h3 className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: "#7ab3d0", fontWeight: 600 }}>Innovation Hubs</h3>
              <ul className="space-y-3">
                {["Imperial Enterprise Lab", "White City Incubator", "Scale Space", "FT Top 125 European Startup Hubs (2 locations)"].map((hub) => (
                  <li key={hub} className="flex items-start gap-3">
                    <span style={{ color: "#7ab3d0", fontSize: "0.45rem", marginTop: "0.5rem", flexShrink: 0 }}>◆</span>
                    <p style={{ fontSize: "0.9rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.75 }}>{hub}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5" style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.75, fontStyle: "italic" }}>
                This gives founders access to one of the most mature innovation ecosystems in Europe.
              </p>
            </MetallicCard>
          </div>
        </section>

        {/* ══ Section: Campuses ══ */}
        <section className="mb-28">
          <SectionLabel>White City and South Kensington</SectionLabel>
          <h2 className="mb-6" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            From the world's first innovation district to today's modern campus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MetallicCard className="p-8" goldAccent>
              <h3 className="mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", color: "var(--gold)", fontWeight: 600 }}>South Kensington — Albertopolis</h3>
              <p style={{ fontSize: "0.9rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>
                South Kensington sits in <strong style={{ color: "var(--gold)" }}>Albertopolis, the world's first innovation district</strong>. This historic campus provides a prestigious setting rich in scientific heritage and cultural institutions.
              </p>
            </MetallicCard>
            <MetallicCard className="p-8" steelAccent>
              <h3 className="mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", color: "#7ab3d0", fontWeight: 600 }}>White City — Modern Innovation Campus</h3>
              <p style={{ fontSize: "0.9rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>
                White City is a modern innovation campus built for collaboration, incubation and commercialisation. It includes laboratories, incubator space, prototyping facilities and collaboration areas that connect researchers, startups, corporates and investors.
              </p>
            </MetallicCard>
          </div>
          <MetallicCard className="p-7 mt-6">
            <p style={{ fontSize: "0.9rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85, textAlign: "center" }}>
              Students benefit from being placed inside a live ecosystem rather than a purely academic setting.
            </p>
          </MetallicCard>
        </section>

        {/* ══ Section: Our Students and Community ══ */}
        <section id="our-community" className="mb-28 scroll-mt-20">
          <SectionLabel>Our Students and Community</SectionLabel>
          <h2 className="mb-6" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            A global community of talent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {[
              { number: "23,248", label: "Students" },
              { number: "266,000", label: "Alumni worldwide" },
              { number: "8,783", label: "Staff" },
              { number: "110+", label: "Undergraduate courses" },
            ].map((stat, i) => (
              <MetallicCard key={stat.label} className="p-7 text-center" goldAccent={i % 2 === 0} steelAccent={i % 2 === 1}>
                <div className="mb-2" style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 700, color: i % 2 === 0 ? "var(--gold)" : "#7ab3d0", lineHeight: 1.15 }}>{stat.number}</div>
                <div style={{ fontSize: "0.8rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.6, letterSpacing: "0.02em" }}>{stat.label}</div>
              </MetallicCard>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MetallicCard className="p-8" steelAccent>
              <div className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 700, color: "#7ab3d0", lineHeight: 1.15 }}>200+</div>
              <p style={{ fontSize: "0.9rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>Masters courses across its range of campuses</p>
            </MetallicCard>
            <MetallicCard className="p-8" goldAccent>
              <div className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1.15 }}>£10M+</div>
              <p style={{ fontSize: "0.9rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>Imperial Bursary support for home students in 2024/25, reflecting a commitment to widening access and supporting talent</p>
            </MetallicCard>
            <MetallicCard className="p-8" steelAccent>
              <div className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 700, color: "#7ab3d0", lineHeight: 1.15 }}>£1.1B</div>
              <p style={{ fontSize: "0.9rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>Research Income in the 2024/25 Academic Year, underscoring Imperial's position as a world-leading research institution</p>
            </MetallicCard>
          </div>
        </section>

        {/* ══ Section: Why Students Choose Imperial ══ */}
        <section className="mb-28">
          <SectionLabel>Why Students Choose Imperial</SectionLabel>
          <h2 className="mb-8" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            Seven compelling differentiators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Specialist Excellence", desc: "Imperial focuses on science, engineering, medicine and business rather than broad generalism." },
              { title: "World-class Ranking", desc: "It is ranked 2nd globally and 1st in the UK and Europe by QS 2026." },
              { title: "Research Intensity", desc: "It leads the UK for the proportion of world-leading research in REF 2021." },
              { title: "Graduate Outcomes", desc: "It was named University of the Year for Graduate Employment in 2026." },
              { title: "Startup Ecosystem", desc: "Imperial offers an integrated platform through Enterprise Lab, White City Incubator and Scale Space." },
              { title: "Innovation District", desc: "South Kensington and White City connect students to research, industry and venture creation." },
              { title: "Mission-led Impact", desc: "Imperial was founded to be useful and continues to focus on scientific imagination with world-changing impact." },
              { title: "Global Community", desc: "With 266,000 alumni worldwide and students from over 140 countries, Imperial offers a truly international network." },
            ].map((item, i) => (
              <MetallicCard key={item.title} className="p-6" goldAccent={i % 3 === 0} steelAccent={i % 3 !== 0}>
                <h3 className="mb-2" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", color: i % 3 === 0 ? "var(--gold)" : "#7ab3d0", fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.75 }}>{item.desc}</p>
              </MetallicCard>
            ))}
          </div>
        </section>

        {/* ══ Section: Positioning Statement ══ */}
        <section className="mb-28">
          <SectionLabel>Positioning Statement</SectionLabel>
          <MetallicCard className="p-10" goldAccent>
            <p className="mb-5" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1.9, fontStyle: "italic" }}>
              Imperial is not simply a prestigious London university. It is a <strong style={{ color: "var(--gold)", fontWeight: 600 }}>specialist, globally ranked institution</strong> where rigorous academic excellence meets frontier research, entrepreneurial execution and practical relevance.
            </p>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 300, color: "#ffffff", lineHeight: 1.85 }}>
              For students comparing Imperial with other top universities, the distinction is clear: Imperial combines elite scientific reputation with a culture of impact, built for people who want not only to study the future, but to <strong style={{ color: "var(--gold)", fontWeight: 600 }}>shape it</strong>.
            </p>
          </MetallicCard>
        </section>

        {/* ══ Section: Strategic Objectives ══ */}
        <section id="objectives" className="mb-28 scroll-mt-20">
          <SectionLabel>Strategic Objectives</SectionLabel>
          <h2 className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            Three pillars aligning research with business priorities
          </h2>
          <p className="mb-10" style={{ fontSize: "0.9rem", color: "#4a5a6e", maxWidth: "620px", lineHeight: 1.75 }}>
            The partnership is designed around three strategic pillars that align Imperial's research and talent with financial institutions' business priorities and sustainability agendas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Climate & Sustainable Finance Innovation", body: "Scale early‑stage ventures that mitigate or adapt to climate change, building on Imperial's climate innovation platforms and the financial sector's climate programmes. Develop new products and structures in sustainable finance, from green bonds to transition finance instruments, supported by research from the Grantham Institute and Imperial's finance faculty.", gold: true },
              { num: "02", title: "Future‑ready Financial Talent", body: "Create a privileged talent pipeline into Imperial's premier MSc programmes in Finance, FinTech, Risk Management, Investment & Wealth Management, Quantitative Finance and Machine Learning & Finance. Co‑design executive and professional programmes to upskill leaders globally in sustainable finance, climate risk, digital assets and AI in financial services.", gold: false },
              { num: "03", title: "Thought Leadership & Policy Impact", body: "Position Imperial and financial sector partners as co‑authors of agenda‑setting research on climate risk, ESG data, digital assets and AI in finance. Convene global dialogues with policymakers, regulators, investors and startups through joint summits, roundtables and white papers in London.", gold: false },
            ].map((pillar) => (
              <MetallicCard key={pillar.num} className="p-7" goldAccent={pillar.gold} steelAccent={!pillar.gold}>
                <div className="mb-5" style={{ fontFamily: "Playfair Display, serif", fontSize: "2.8rem", fontWeight: 700, lineHeight: 1, color: pillar.gold ? "rgba(201,169,110,0.18)" : "rgba(74,127,165,0.18)", letterSpacing: "-0.02em" }}>{pillar.num}</div>
                <h3 className="mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 600, color: pillar.gold ? "var(--gold)" : "#7ab3d0", lineHeight: 1.35 }}>{pillar.title}</h3>
                <p style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.8 }}>{pillar.body}</p>
              </MetallicCard>
            ))}
          </div>
        </section>

        {/* ══ Section: What Imperial Brings ══ */}
        <section id="imperial-brings" className="mb-28 scroll-mt-20">
          <SectionLabel>What Imperial Brings</SectionLabel>
          <h2 className="mb-10" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            World‑class research, climate leadership &amp; digital finance
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetallicCard className="p-8" goldAccent>
              <h3 className="mb-2" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", color: "var(--gold)", fontWeight: 600 }}>Academic Excellence &amp; Global Reputation</h3>
              <p className="mb-4" style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.8 }}>Imperial College London is Europe's top university and #2 globally, with leading positions in finance, data science and AI. Its track record of Nobel Prizes, Fields Medals and Fellows of the Royal Society highlights deep quantitative and scientific strength.</p>
              <p className="mb-3" style={{ fontSize: "0.8rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.7 }}>Imperial's Business School and Faculty of Engineering lead in:</p>
              <ul className="space-y-1.5">
                {["Finance and financial engineering", "Financial technology and digital payments", "Machine learning and data science", "Climate science and climate finance", "Mathematics of risk and derivatives"].map((item) => (
                  <li key={item} className="flex items-start gap-2" style={{ fontSize: "0.82rem", fontFamily: "Playfair Display, serif", color: "#ffffff" }}>
                    <span style={{ color: "var(--gold)", marginTop: "0.35rem", fontSize: "0.45rem", flexShrink: 0 }}>◆</span>{item}
                  </li>
                ))}
              </ul>
            </MetallicCard>
            <MetallicCard className="p-8" steelAccent>
              <h3 className="mb-2" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", color: "#7ab3d0", fontWeight: 600 }}>Climate &amp; Sustainability Leadership</h3>
              <p className="mb-4" style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.8 }}>Through the Grantham Institute and new Schools of Convergence Science, Imperial sits at the frontier of climate science, energy systems and sustainable finance. Partnerships with financial institutions have enabled cleantech accelerators and climate innovation centres, backing <strong style={{ color: "var(--gold)" }}>100+ climate‑focused ventures</strong>.</p>
              <p className="mb-3" style={{ fontSize: "0.8rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.7 }}>Key capabilities for financial services partners:</p>
              <ul className="space-y-1.5">
                {["Climate risk modelling", "ESG data frameworks", "Green and sustainability‑linked bond insights", "Regulatory alignment and net‑zero transition planning"].map((item) => (
                  <li key={item} className="flex items-start gap-2" style={{ fontSize: "0.82rem", fontFamily: "Playfair Display, serif", color: "#ffffff" }}>
                    <span style={{ color: "#7ab3d0", marginTop: "0.35rem", fontSize: "0.45rem", flexShrink: 0 }}>◆</span>{item}
                  </li>
                ))}
              </ul>
            </MetallicCard>
            <MetallicCard className="lg:col-span-2 p-8">
              <h3 className="mb-2" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", color: "var(--gold)", fontWeight: 600 }}>AI, Data &amp; Digital Finance Strength</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.8 }}>Imperial's FinTech Lab, Data Science Institute and Mathematics of Finance Group work on blockchain and DeFi, digital assets, RegTech, AI/ML for trading and risk, and quantum computing for optimisation. These clusters generate impactful research, fintech spin‑outs and practical collaborations with financial institutions.</p>
                </div>
                <div>
                  <p className="mb-3" style={{ fontSize: "0.8rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.7 }}>Partners gain access to:</p>
                  <ul className="space-y-1.5">
                    {["Emerging methodologies in AI‑driven credit, market and fraud models", "Smart contract security and tokenisation", "Quantum‑inspired optimisation", "Cyber resilience for digital finance platforms"].map((item) => (
                      <li key={item} className="flex items-start gap-2" style={{ fontSize: "0.82rem", fontFamily: "Playfair Display, serif", color: "#ffffff" }}>
                        <span style={{ color: "var(--gold)", marginTop: "0.35rem", fontSize: "0.45rem", flexShrink: 0 }}>◆</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MetallicCard>
          </div>
        </section>

        {/* ══ Section: Flagship Partnership Components ══ */}
        <section id="flagship" className="mb-28 scroll-mt-20">
          <SectionLabel>Flagship Partnership Components</SectionLabel>
          <h2 className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            A modular portfolio of initiatives
          </h2>
          <p className="mb-10" style={{ fontSize: "0.9rem", color: "#4a5a6e", maxWidth: "620px", lineHeight: 1.75 }}>
            A modular portfolio of initiatives allows the partnership to be tuned to strategic priorities and target geographies. The final mix can be tuned to each partner's priorities across wealth, markets, retail and wholesale, and across regions such as the UK, Asia and MENA.
          </p>
          <MetallicCard className="overflow-hidden" goldAccent>
            <div className="grid" style={{ gridTemplateColumns: "1fr 2fr" }}>
              <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(201,169,110,0.15)", background: "rgba(201,169,110,0.06)" }}>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "Inter, sans-serif" }}>Pillar</span>
              </div>
              <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(201,169,110,0.15)", background: "rgba(201,169,110,0.06)", borderLeft: "1px solid rgba(201,169,110,0.12)" }}>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "Inter, sans-serif" }}>Illustrative Initiative</span>
              </div>
              {[
                { pillar: "Climate & Cleantech", initiative: "Imperial–Financial Services Greenhouse: accelerator for climate and nature‑positive startups." },
                { pillar: "Sustainable Finance", initiative: "Joint Sustainable Finance & Investing executive programme for financial sector leaders." },
                { pillar: "Climate Risk & Analytics", initiative: "Co‑developed climate stress‑testing and transition risk models for key portfolios." },
                { pillar: "AI & FinTech Innovation", initiative: "Joint research projects on AI in trading, risk and fraud; lab‑based pilots with financial firms." },
                { pillar: "Talent & Recruitment", initiative: "Preferred recruitment partnership across Imperial's finance and data MSc programmes." },
                { pillar: "Thought Leadership", initiative: "Annual Imperial–Financial Services Sustainable Finance & Innovation Summit in London." },
              ].map((row, i) => (
                <div key={row.pillar} className="contents">
                  <div className="px-6 py-5" style={{ borderBottom: i < 5 ? "1px solid rgba(201,169,110,0.08)" : "none", background: i % 2 === 0 ? "transparent" : "rgba(201,169,110,0.02)" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--gold)" }}>{row.pillar}</span>
                  </div>
                  <div className="px-6 py-5" style={{ borderBottom: i < 5 ? "1px solid rgba(201,169,110,0.08)" : "none", borderLeft: "1px solid rgba(201,169,110,0.12)", background: i % 2 === 0 ? "transparent" : "rgba(201,169,110,0.02)" }}>
                    <span style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.7 }}>{row.initiative}</span>
                  </div>
                </div>
              ))}
            </div>
          </MetallicCard>
        </section>

        {/* ══ Section: Climate Solutions ══ */}
        <section id="climate" className="mb-28 scroll-mt-20">
          <SectionLabel>Climate Solutions &amp; Impact</SectionLabel>
          <h2 className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            From research to commercial scale
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetallicCard className="p-8" steelAccent>
              <p style={{ fontSize: "0.9rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.85 }}>
                Philanthropic funding and strategic partnerships from financial institutions have enabled Imperial to launch cleantech innovation programmes that support UK startups with grants, workspace, mentoring and commercialisation support, targeting technologies with measurable climate impact.
              </p>
              <div className="mt-6 p-5 rounded-xl" style={{ background: "rgba(74,127,165,0.06)", border: "1px solid rgba(74,127,165,0.15)" }}>
                <div className="flex items-center gap-3">
                  <div style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", fontWeight: 700, color: "#7ab3d0", lineHeight: 1 }}>100+</div>
                  <div style={{ fontSize: "0.8rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.5 }}>climate‑focused ventures<br />backed to date</div>
                </div>
              </div>
            </MetallicCard>
            <MetallicCard className="p-8" goldAccent>
              <h3 className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", color: "var(--gold)", fontWeight: 600 }}>An expanded model could:</h3>
              <ul className="space-y-3">
                {["Scale the number of ventures supported", "Deepen access to sector experts and clients", "Develop impact measurement frameworks for avoided emissions and co‑benefits", "Explore sustainable finance instruments linking institutional capital directly to Imperial‑backed ventures"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: "var(--gold)", marginTop: "0.4rem", fontSize: "0.45rem", flexShrink: 0 }}>◆</span>
                    <p style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.75 }}>{item}</p>
                  </li>
                ))}
              </ul>
            </MetallicCard>
          </div>
        </section>

        {/* ══ Section: Governance ══ */}
        <section id="governance" className="mb-28 scroll-mt-20">
          <SectionLabel>Governance &amp; Engagement Model</SectionLabel>
          <h2 className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            Clear governance ensures focus, accountability &amp; measurable outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { title: "Strategic Steering Committee", body: "Senior leaders from Imperial and the partner financial institution meet twice per year to set priorities, approve flagship initiatives and review impact metrics.", gold: true },
              { title: "Thematic Working Groups", body: "Cross‑functional teams focus on Sustainable Finance & Climate Risk, AI & Digital Finance, Talent & Executive Education, and Innovation & Ventures.", gold: false },
              { title: "Dedicated Partnership Office", body: "A coordination team at Imperial provides a single front door into academic departments, labs and talent pools, ensuring speed and clarity of engagement.", gold: true },
            ].map((item) => (
              <MetallicCard key={item.title} className="p-7" goldAccent={item.gold} steelAccent={!item.gold}>
                <h3 className="mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", color: item.gold ? "var(--gold)" : "#7ab3d0", fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.8 }}>{item.body}</p>
              </MetallicCard>
            ))}
          </div>
          <MetallicCard className="p-7">
            <h3 className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", color: "var(--gold)", fontWeight: 600 }}>Shared Scorecard — outcomes tracked include:</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {["Ventures supported", "Employees trained", "Joint publications", "Pilots launched", "Capital mobilised"].map((metric) => (
                <div key={metric} className="rounded-lg p-3 text-center" style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.12)" }}>
                  <span style={{ fontSize: "0.75rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.5, display: "block" }}>{metric}</span>
                </div>
              ))}
            </div>
          </MetallicCard>
        </section>

        {/* ══ Section: Roadmap ══ */}
        <section id="roadmap" className="mb-16 scroll-mt-20">
          <SectionLabel>Next Steps &amp; Roadmap</SectionLabel>
          <h2 className="mb-4" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f1f3d", fontWeight: 500 }}>
            A phased roadmap from concept to scaled impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: "Phase 1", period: "0–3 months", label: "Design", items: ["Align on objectives, governance, priority themes and target geographies", "Finalise initial flagship initiatives such as an accelerator cohort, executive programme and pilot projects"], gold: true },
              { phase: "Phase 2", period: "3–12 months", label: "Launch", items: ["Launch the first joint accelerator cohort and executive programme", "Announce the partnership publicly with a Sustainable Finance & Innovation Forum in London"], gold: false },
              { phase: "Phase 3", period: "Year 2–3", label: "Scale", items: ["Extend the partnership to additional markets and business lines", "Deepen regulatory and policy engagement", "Launch second‑generation products and research projects"], gold: true },
            ].map((phase, i) => (
              <MetallicCard key={phase.phase} className="p-7 relative overflow-visible" goldAccent={phase.gold} steelAccent={!phase.gold}>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 -right-3 z-10 w-6 h-px" style={{ background: "linear-gradient(90deg, rgba(201,169,110,0.4), rgba(201,169,110,0.1))" }} />
                )}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: phase.gold ? "rgba(201,169,110,0.12)" : "rgba(74,127,165,0.12)", border: phase.gold ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(74,127,165,0.3)" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: phase.gold ? "var(--gold)" : "#7ab3d0" }}>{i + 1}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: phase.gold ? "var(--gold)" : "#7ab3d0", fontFamily: "Inter, sans-serif" }}>{phase.phase} — {phase.label}</div>
                    <div style={{ fontSize: "0.75rem", fontFamily: "Playfair Display, serif", color: "#ffffff" }}>{phase.period}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span style={{ color: phase.gold ? "var(--gold)" : "#7ab3d0", marginTop: "0.4rem", fontSize: "0.4rem", flexShrink: 0 }}>◆</span>
                      <p style={{ fontSize: "0.83rem", fontFamily: "Playfair Display, serif", color: "#ffffff", lineHeight: 1.75 }}>{item}</p>
                    </li>
                  ))}
                </ul>
              </MetallicCard>
            ))}
          </div>
        </section>

        {/* ══ Section: Global Locations ══ */}
        <section className="mb-28">
          <SectionLabel>Locations</SectionLabel>

          <h2
            className="mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#080d1a",
              fontWeight: 500,
            }}
          >
            A global presence, locally embedded
          </h2>

          <p
            className="mb-10"
            style={{
              fontSize: "0.9rem",
              color: "#4a5a6e",
              maxWidth: "580px",
              lineHeight: 1.75,
            }}
          >
            Imperial's international offices extend its research, talent, and
            innovation networks across four strategic regions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                Flag: SG,
                country: "Singapore",
                theme: "gold",
                focus: "Engineering, Medicine & Technology",
                desc:
                  "Focuses on engineering, medicine, and technology partnerships, leveraging Singapore's position as Asia's premier innovation hub. Imperial's presence connects researchers and industry leaders across the Asia-Pacific region.",
                points: [
                  "Engineering and deep-tech collaborations",
                  "Medical research and healthcare innovation",
                  "Technology transfer and startup ecosystems",
                ],
              },
              {
                Flag: US,
                country: "United States",
                theme: "steel",
                focus: "Research & Corporate Engagement",
                desc:
                  "Facilitates research collaborations and corporate engagements across North America's leading universities, think tanks, and Fortune 500 companies, enabling bilateral knowledge exchange and talent mobility.",
                points: [
                  "Joint research programmes with US universities",
                  "Corporate partnerships and industry R&D",
                  "Alumni network engagement across key cities",
                ],
              },
              {
                Flag: IN,
                country: "India",
                theme: "gold",
                focus: "Government & Institutional Strategy",
                desc:
                  "A strategic hub designed to foster long-term collaborations with the Indian government, research institutes, and knowledge organisations. India represents one of Imperial's most significant emerging partnerships.",
                points: [
                  "Government and policy engagement",
                  "Research institute collaborations",
                  "Talent pipeline and academic exchange",
                ],
              },
              {
                Flag: GH,
                country: "Ghana",
                theme: "steel",
                focus: "African Innovation & Development",
                desc:
                  "Imperial's gateway to Sub-Saharan Africa, supporting sustainable development, clean energy research, and capacity building in partnership with Ghanaian universities and government institutions.",
                points: [
                  "Sustainable development and climate research",
                  "Clean energy and infrastructure innovation",
                  "Capacity building and academic partnerships",
                ],
              },
            ].map((loc) => {
              const Flag = loc.Flag;

              return (
                <MetallicCard
                  key={loc.country}
                  className="p-8"
                  goldAccent={loc.theme === "gold"}
                  steelAccent={loc.theme === "steel"}
                >
                  {/* Header */}
                  <div className="mb-5 flex items-center gap-4">
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                        border:
                          loc.theme === "gold"
                            ? "2px solid rgba(212,175,55,0.4)"
                            : "2px solid rgba(122,179,208,0.4)",
                        boxShadow:
                          loc.theme === "gold"
                            ? "0 0 18px rgba(212,175,55,0.25)"
                            : "0 0 18px rgba(122,179,208,0.25)",
                        background: "#0f172a",
                      }}
                    >
                      <Flag
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "Playfair Display, serif",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color:
                            loc.theme === "gold"
                              ? "var(--gold)"
                              : "#7ab3d0",
                          lineHeight: 1.3,
                        }}
                      >
                        {loc.country}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.72rem",
                          fontFamily: "Playfair Display, serif",
                          color: "#ffffff",
                          letterSpacing: "0.05em",
                          marginTop: "0.3rem",
                        }}
                      >
                        {loc.focus}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "0.88rem",
                      fontFamily: "Playfair Display, serif",
                      color: "#ffffff",
                      lineHeight: 1.8,
                    }}
                  >
                    {loc.desc}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2">
                    {loc.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          style={{
                            color:
                              loc.theme === "gold"
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
                            fontFamily: "Playfair Display, serif",
                            color: "#ffffff",
                            lineHeight: 1.7,
                          }}
                        >
                          {pt}
                        </p>
                      </li>
                    ))}
                  </ul>
                </MetallicCard>
              );
            })}
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="relative" style={{ borderTop: "1px solid rgba(201,169,110,0.15)", background: "rgba(201,169,110,0.02)" }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: "var(--gold)" }}>
              <div className="flex items-center gap-3 flex-shrink-0">
                <ImageWithFallback src={imperialLogo} alt="Imperial College London" className="object-contain rounded-sm" style={{ width: "36px", height: "36px" }} />
              </div>
            </div>
            <span style={{ fontSize: "0.75rem", color: "#6a7a8f", letterSpacing: "0.08em" }}>
              Imperial College London × Financial Services — Strategic Partnership Brochure 2026
            </span>
          </div>
          <div style={{ fontSize: "0.72rem", color: "#4a5568" }}>Prepared June 2026 — Confidential</div>
        </div>
      </footer>
    </div>
  );
}
