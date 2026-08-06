import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import profilePhoto from "./assets/profile-photo.jpg";
import Reveal from "./components/Reveal";
import {
  PROFILE,
  CONTACT,
  EDUCATION,
  SKILLS,
  COMPANIES,
  PROJECTS,
  CERTS,
  NOW,
  SECTIONS,
} from "./data";

function Stars({ n }: { n: number }) {
  return (
    <span className="whitespace-nowrap" aria-label={`${n} out of 5`}>
      {"★".repeat(n)}
      <span className="opacity-30">{"★".repeat(5 - n)}</span>
    </span>
  );
}

function SectionTitle({ no, title }: { no: string; title: string }) {
  return (
    <h2 className="title-bar font-mono text-sm md:text-base">
      <span className="hash">{no}.</span>
      <span className="font-bold tracking-wide">{title}</span>
      <span className="ml-auto hidden sm:inline text-ink-faint">/* {title.toLowerCase()} */</span>
    </h2>
  );
}

function LeaderRow({
  label,
  value,
  strong = false,
  href,
}: {
  label: string;
  value: React.ReactNode;
  strong?: boolean;
  href?: string;
}) {
  return (
    <div className="leader py-1">
      <span className={`leader-label ${strong ? "" : "text-ink-soft"}`}>{label}</span>
      <span className="leader-fill" />
      <span className={`leader-value ${strong ? "" : "font-normal"}`}>
        {href ? (
          <a className="ink-link" href={href} target="_blank" rel="noreferrer">
            {value} ↗
          </a>
        ) : (
          value
        )}
      </span>
    </div>
  );
}

function CutLine({ label = "cut here" }: { label?: string }) {
  return (
    <div className="cut-line no-print">
      <span>✂ {label} ✂</span>
    </div>
  );
}

function Stamp({ text, stampClass = "" }: { text: string; stampClass?: string }) {
  return <span className={`stamp ${stampClass}`}>{text}</span>;
}

function App() {
  const [feed, setFeed] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      const sec = SECTIONS.find((s) => String(s.no) === e.key);
      if (!sec) return;
      document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`desk ${feed ? "feed-mode" : ""}`}>
      <a href="#about" className="skip-link">Skip to content</a>

      {/* Section nav (desktop, on the desk) */}
      <nav className="no-print fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2 text-[11px] font-mono text-paper/70">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="border border-paper/30 px-2 py-1 hover:bg-stamp hover:border-stamp hover:text-paper transition-colors"
            title={`Jump to ${s.name} (press ${s.no})`}
          >
            {s.no}
          </a>
        ))}
        <span className="text-paper/40 mt-2 pl-1">KEYS 1–8</span>
      </nav>

      {/* Print + layout buttons */}
      <div className="no-print fixed right-4 bottom-4 z-50 flex flex-col gap-2 items-end">
        <button
          onClick={() => setFeed((f) => !f)}
          className="stamp !border-ink !text-ink bg-paper/90 px-3 py-1.5 text-[11px] hover:bg-stamp hover:!border-stamp hover:!text-paper transition-colors"
          title="Toggle between a single receipt and continuous-feed dot-matrix paper"
        >
          {feed ? "◉ CONTINUOUS FEED" : "◌ SINGLE RECEIPT"}
        </button>
        <button
          onClick={() => window.print()}
          className="stamp stamp-stamp !border-ink !text-paper bg-ink px-4 py-2 text-xs hover:!border-stamp hover:!bg-stamp transition-colors"
        >
          PRINT / SAVE PDF
        </button>
      </div>

      {/* Tape strip above receipt */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-ink text-paper/85 font-mono text-[11px] tracking-[0.3em] overflow-hidden py-1.5">
        <div className="tape-track">
          {[0, 1].map((k) => (
            <span key={k} className="shrink-0 pr-8">
              ★ SHIPPING MANIFEST · JOSHUA ORO · SYSTEM DEVELOPER · DAVAO CITY PH ★ SHIPPING MANIFEST · JOSHUA ORO · SYSTEM DEVELOPER · DAVAO CITY PH
            </span>
          ))}
        </div>
      </div>

      <main className="receipt receipt-zigzag-bottom mt-10 font-mono text-sm text-ink">
        {/* print-head scan line + continuous-feed tractor strips */}
        <div className="scan-line no-print" aria-hidden="true" />
        <div className="feed-strip left" aria-hidden="true" />
        <div className="feed-strip right" aria-hidden="true" />

        {/* Print-only receipt header (Ctrl+P / Save as PDF) */}
        <div className="print-only mb-4">
          <p className="text-center font-bold tracking-[0.25em] text-sm">
            JOSHUA ORO · SYSTEM DEVELOPER
          </p>
          <p className="text-center text-xs text-ink-soft">
            SHIPPING MANIFEST — 4TH YEAR BSIT · HOLY CROSS OF DAVAO COLLEGE · PRINTED {today}
          </p>
          <div className="mt-3 border-t-2 border-dashed border-ink/50 text-center">
            <span className="relative -top-2.5 bg-paper px-2 text-[10px] tracking-[0.2em] text-ink-faint">
              ✂ SHIPPING MANIFEST ✂
            </span>
          </div>
        </div>

        {/* ============ HEADER / SHIPPING LABEL ============ */}
        <header className="relative px-6 pt-8 pb-5 md:px-10">
          <div className="flex items-center justify-between text-[11px] tracking-[0.25em] text-ink-soft mb-6">
            <span>THERMAL SHIPPING MANIFEST</span>
            <span className="flicker">RECEIPT·001</span>
          </div>

          <div className="flex items-start gap-5">
            <div className="min-w-0">
              <p className="text-[11px] tracking-[0.3em] text-ink-soft mb-1">CONSIGNEE /</p>
              <h1 className="font-display text-4xl sm:text-6xl leading-[0.95]">
                JOSHUA
                <br />
                ORO
              </h1>
              <div className="mt-3 flex flex-wrap gap-2 items-center">
                <Stamp text="SYSTEM DEV" stampClass="stamp-stamp" />
                <span className="text-ink-soft text-xs tracking-widest">4TH YEAR · BSIT</span>
              </div>
            </div>
            <div className="ml-auto shrink-0 punch relative">
              <div className="w-20 h-24 sm:w-24 sm:h-28 border-2 border-dashed border-ink/60 p-1 bg-paper-2">
                <img
                  src={profilePhoto}
                  alt="Portrait of Joshua Oro"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <span className="marginalia-note hidden md:block">attach photo</span>
            </div>
          </div>

          <p className="mt-5 text-ink-soft text-xs leading-relaxed max-w-[46ch]">
            {PROFILE.tagline}
          </p>

          {/* FROM / TO */}
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-xs border-t border-ink/40 pt-4">
            <div>
              <p className="tracking-[0.25em] text-ink-faint mb-1">FROM</p>
              <p className="font-bold">JOSHUA ORO</p>
              <p className="text-ink-soft">{CONTACT.location}</p>
            </div>
            <div>
              <p className="tracking-[0.25em] text-ink-faint mb-1">TO</p>
              <p className="font-bold">YOUR TEAM</p>
              <p className="text-ink-soft">OPEN · INTERNSHIP / JR. DEV</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-ink/40 pt-4">
            <div className="min-w-0">
              <div className="barcode" role="img" aria-label="Barcode" />
              <p className="text-[10px] tracking-[0.35em] text-ink-faint mt-1">
                {PROFILE.name.replace(/\s/g, "")}·2026·{CONTACT.email.split("@")[0].toUpperCase()}
              </p>
            </div>
            <div className="sm:ml-auto sm:text-right text-[11px] text-ink-soft leading-relaxed">
              <p className="tracking-[0.25em] text-ink-faint">PRINTED</p>
              <p>{today}</p>
              <p className="mt-1">SHEET 1 / 1</p>
            </div>
          </div>
        </header>

        <CutLine label="peel to separate header" />

        {/* ============ 01 · ABOUT ============ */}
        <section id="about" className="relative px-6 md:px-10 py-6 scroll-mt-14">
          <Reveal>
            <SectionTitle no="01" title="ORDER DETAILS · ABOUT THE SHIPPER" />
            <p className="leading-relaxed text-ink-soft">
              Joshua is a 4th-year Information Technology student at{" "}
              <a className="ink-link" href="https://www.hcdc.edu.ph" target="_blank" rel="noreferrer">Holy Cross of Davao College</a>{" "}
              specializing in <strong className="text-ink">System Development</strong>. Through coursework, hands-on
              projects and a 4-day industry immersion in Cebu &amp; Bohol, he's built full-stack apps, an Android
              client, and documented it all in code. Ships small, learns fast, tests before he merges.
            </p>
            <div className="mt-4 marginalia">
              ⚠ handle with care — ships working features, not just files
            </div>
          </Reveal>
        </section>

        {/* ============ 02 · EDUCATION ============ */}
        <section id="education" className="relative px-6 md:px-10 py-6 scroll-mt-14">
          <Reveal>
            <SectionTitle no="02" title="EDUCATION" />
            {EDUCATION.map((e) => (
              <LeaderRow key={e.label} label={e.label} value={e.value} strong={e.label === "DEGREE"} />
            ))}
          </Reveal>
        </section>

        {/* ============ 03 · SKILLS ============ */}
        <section id="skills" className="relative px-6 md:px-10 py-6 scroll-mt-14">
          <Reveal>
            <SectionTitle no="03" title="TECHNICAL SKILLS · ITEMIZED" />
            <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
              {SKILLS.map((group) => (
                <div key={group.cat}>
                  <p className="text-[11px] tracking-[0.25em] text-stamp font-bold mb-1">
                    {group.cat}
                  </p>
                  {group.items.map((it) => (
                    <div className="leader py-0.5" key={it.n}>
                      <span className="leader-label">{it.n}</span>
                      <span className="leader-fill" />
                      <span className="leader-value font-normal text-ink-soft">
                        <Stars n={it.s} />
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-ink-faint">
              * self-assessed comfort level; ★ = familiarity, not certification.
            </p>
          </Reveal>
        </section>

        <CutLine label="continue on next section" />

        {/* ============ 04 · EXPOSURE ============ */}
        <section id="exposure" className="relative px-6 md:px-10 py-6 scroll-mt-14">
          <Reveal>
            <SectionTitle no="04" title="INDUSTRY EXPOSURE" />
            <p className="mb-4 text-ink-soft text-xs">
              Cebu–Bohol Educational Tour · Nov 19–22 2025 · {COMPANIES.length} companies, 4 days, 2 islands.
            </p>
            <div className="space-y-2">
              {COMPANIES.map((c) => (
                <div key={c.name} className="flex items-baseline gap-3">
                  <span className="shrink-0 text-stamp font-bold text-xs w-14">DAY {c.day}</span>
                  <div className="border-l-2 border-ink/30 pl-3 min-w-0">
                    <p className="font-bold leading-snug">{c.name}</p>
                    <p className="text-xs text-ink-soft">{c.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ============ 05 · PROJECTS ============ */}
        <section id="projects" className="relative px-6 md:px-10 py-6 scroll-mt-14">
          <Reveal>
            <SectionTitle no="05" title="SHIPMENT MANIFEST · PROJECTS" />
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ink-link block no-underline"
                >
                  <div className="shift border border-ink/40 p-4 hover:border-ink relative">
                    {p.featured && (
                      <span className="stamp absolute -top-5 right-4 !py-1 !text-[10px] stamp-stamp no-print">
                        FEATURED
                      </span>
                    )}
                    <div className="flex items-baseline gap-3">
                      <span className="text-stamp font-bold text-xs">{p.id}</span>
                      <span className="font-bold text-base">{p.name}</span>
                      <span className="ml-auto text-[10px] tracking-[0.2em] text-ink-faint">
                        {p.type}
                      </span>
                    </div>
                    <p className="mt-1 text-ink-soft text-xs">{p.desc}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="bg-ink text-paper text-[10px] px-1.5 py-0.5 tracking-wide">
                          {s}
                        </span>
                      ))}
                      <span className="ml-auto text-linkblue underline decoration-dotted text-[10px] self-center">
                        open manifest →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        <CutLine label="fragile · this way up" />

        {/* ============ 06 · CERTS ============ */}
        <section id="certs" className="relative px-6 md:px-10 py-6 scroll-mt-14">
          <Reveal>
            <SectionTitle no="06" title="CERTIFICATES · ENCLOSED" />
            <div className="space-y-3">
              {CERTS.map((c) => (
                <div key={c.name} className="border border-ink/30 p-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-bold">{c.name}</span>
                    <span className="ml-auto text-ink-faint text-xs whitespace-nowrap">{c.date}</span>
                  </div>
                  <p className="text-xs text-ink-soft mt-0.5">{c.issuer}</p>
                  <p className="text-[11px] text-ink-faint mt-0.5">{c.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ============ 07 · NOW ============ */}
        <section id="now" className="relative px-6 md:px-10 py-6 scroll-mt-14 bg-paper-2">
          <Reveal>
            <SectionTitle no="07" title="CURRENT STATUS · NOW" />
            <div className="space-y-2">
              {NOW.map((n) => (
                <LeaderRow key={n.label} label={n.label} value={n.value} href={n.href} />
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Stamp text="AVAILABLE FOR OJT" />
            </div>
          </Reveal>
        </section>

        <CutLine label="receipt validated" />

        {/* ============ 08 · CONTACT ============ */}
        <section id="contact" className="relative px-6 md:px-10 py-6 scroll-mt-14">
          <Reveal>
            <SectionTitle no="08" title="PAYMENT DETAILS → CONTACT" />
            <div className="space-y-2">
              <div className="leader">
                <span className="leader-label">EMAIL</span>
                <span className="leader-fill" />
                <a className="leader-value ink-link font-normal" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </div>
              <div className="leader">
                <span className="leader-label">PHONE</span>
                <span className="leader-fill" />
                <span className="leader-value">{CONTACT.phone}</span>
              </div>
              <div className="leader">
                <span className="leader-label">BASE</span>
                <span className="leader-fill" />
                <span className="leader-value font-normal">{CONTACT.location}</span>
              </div>
              <div className="leader">
                <span className="leader-label">GITHUB</span>
                <span className="leader-fill" />
                <a className="leader-value ink-link font-normal" href={CONTACT.github} target="_blank" rel="noreferrer">
                  github.com/joshyroww
                </a>
              </div>
              <div className="leader">
                <span className="leader-label">FACEBOOK</span>
                <span className="leader-fill" />
                <a className="leader-value ink-link font-normal" href={CONTACT.facebook} target="_blank" rel="noreferrer">
                  fb.com/Joshy.Roro
                </a>
              </div>
            </div>

            {/* QR + barcode footer */}
            <div className="mt-6 flex flex-col sm:flex-row gap-5 items-center border-t border-ink/40 pt-5">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 border border-ink/30">
                  <QRCodeSVG
                    value={CONTACT.github}
                    size={88}
                    level="M"
                    fgColor="#1b1a17"
                    bgColor="#ffffff"
                    aria-label="QR code linking to GitHub"
                  />
                </div>
                <div className="text-[11px] text-ink-soft leading-relaxed max-w-[180px]">
                  <p className="tracking-[0.2em] text-ink-faint">SCAN ME</p>
                  <p>GitHub → code, repos &amp; this manifest.</p>
                  <p className="mt-1 text-ink-faint">No app needed. Ink only.</p>
                </div>
              </div>
              <div className="sm:ml-auto sm:text-right">
                <div className="barcode-sm sm:ml-auto" role="img" aria-label="Barcode" />
                <p className="text-[10px] tracking-[0.3em] text-ink-faint mt-1">
                  END·OF·RECEIPT·{String(Math.floor(Math.random() * 9000) + 1000)}
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="relative px-6 md:px-10 py-6 border-t border-ink/40 text-center">
          <p className="text-[11px] text-ink-faint tracking-[0.2em]">
            ————— END OF MANIFEST · THANK YOU FOR YOUR TIME —————
          </p>
          <p className="mt-2 text-xs text-ink-soft">
            © {new Date().getFullYear()} JOSHUA ORO · made with ink &amp; React in Davao City
          </p>
          <p className="mt-1 text-[11px] text-ink-faint no-print">
            tip: press <kbd className="border border-ink/40 px-1">1</kbd>–<kbd className="border border-ink/40 px-1">8</kbd> to jump between sections
          </p>
        </footer>

        {/* Print-only receipt footer (Ctrl+P easter egg) */}
        <div className="print-only mt-6 border-t-2 border-dashed border-ink/40 pt-4 text-center">
          <p className="text-[11px] tracking-[0.25em] text-ink-soft">✦ END OF RECEIPT ✦</p>
          <p className="mt-2 text-[10px] tracking-[0.2em] text-ink-faint">
            JOSHUA ORO · {CONTACT.email} · {CONTACT.phone}
          </p>
          <div className="mt-4 border-t-2 border-dashed border-ink/50 text-center">
            <span className="relative -top-2.5 bg-paper px-2 text-[10px] tracking-[0.2em] text-ink-faint">
              ✂ CUT HERE · KEEP FOR REFERENCE ✂
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
