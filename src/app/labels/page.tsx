import Link from "next/link";

export const metadata = {
  title: "AuthentiTune Proof for Labels - AI Rights Due Diligence",
  description:
    "Screen AI-assisted submissions for rights-claim conflicts before they enter your catalog. Generate auditable intake receipts and standardized disclosure schedules.",
};

export default function LabelsPage() {
  const demoUrl =
    process.env.NEXT_PUBLIC_LABELS_DEMO_URL ??
    "mailto:labels@authentitune.pro?subject=AuthentiTune%20Label%20Pilot%20Demo";
  const intakeUrl =
    process.env.NEXT_PUBLIC_LABELS_INTAKE_URL ??
    "mailto:labels@authentitune.pro?subject=AuthentiTune%20Intake%20Form%20Request";

  const demoIsExternal = demoUrl.startsWith("http");
  const intakeIsExternal = intakeUrl.startsWith("http");

  return (
    <div className="min-h-screen bg-[color:var(--sand)] text-[color:var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--sand)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold uppercase tracking-[0.2em]"
          >
            AuthentiTune Proof
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a className="transition hover:text-[color:var(--copper)]" href="#how">
              How it works
            </a>
            <a
              className="transition hover:text-[color:var(--copper)]"
              href="#deliverables"
            >
              What you get
            </a>
            <a
              className="transition hover:text-[color:var(--copper)]"
              href="#pilot"
            >
              Pilot
            </a>
            <a
              className="transition hover:text-[color:var(--copper)]"
              href="#intake"
            >
              Intake fields
            </a>
            <a className="transition hover:text-[color:var(--copper)]" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            href={demoUrl}
            target={demoIsExternal ? "_blank" : undefined}
            rel={demoIsExternal ? "noopener noreferrer" : undefined}
            className="rounded-full bg-[color:var(--ink)] px-4 py-2 text-sm font-semibold text-[color:var(--sand)] transition hover:bg-black/80"
          >
            Book a 10-minute demo
          </a>
        </div>
        <div className="flex items-center gap-4 overflow-x-auto border-t border-black/10 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] md:hidden">
          <a className="whitespace-nowrap" href="#how">
            How it works
          </a>
          <a className="whitespace-nowrap" href="#deliverables">
            What you get
          </a>
          <a className="whitespace-nowrap" href="#pilot">
            Pilot
          </a>
          <a className="whitespace-nowrap" href="#intake">
            Intake fields
          </a>
          <a className="whitespace-nowrap" href="#faq">
            FAQ
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-10 top-10 h-48 w-48 rounded-full bg-[color:var(--glow)] blur-3xl opacity-70" />
          <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-[color:var(--copper)]/25 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                AI rights due diligence for labels
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-[color:var(--ink)] md:text-6xl md:leading-tight">
                <span className="font-[var(--font-display)]">
                  Screen AI-assisted submissions before they enter your catalog.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-black/70 md:text-xl">
                AuthentiTune Proof standardizes intake disclosures (tool + plan
                + timing), flags rights-claim conflicts, and produces an
                auditable receipt per track.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={demoUrl}
                  target={demoIsExternal ? "_blank" : undefined}
                  rel={demoIsExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--sand)] transition hover:bg-black/80"
                >
                  Book a 10-minute demo
                </a>
                <a
                  href="#intake"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--ink)]/20 px-6 py-3 text-sm font-semibold transition hover:border-[color:var(--ink)]/60"
                >
                  View required intake fields
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">
                Rights &amp; Claims Pack
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                Standardized intake receipts for every AI-assisted track.
              </h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-black/10 bg-[color:var(--cloud)] p-4">
                  <p className="text-sm font-semibold">Rights Snapshot</p>
                  <p className="text-xs text-black/60">
                    Tool, plan, and timing captured per submission.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[color:var(--cloud)] p-4">
                  <p className="text-sm font-semibold">Warranty Translator</p>
                  <p className="text-xs text-black/60">
                    The claims an artist is certifying, in plain terms.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[color:var(--cloud)] p-4">
                  <p className="text-sm font-semibold">Audit Receipt</p>
                  <p className="text-xs text-black/60">
                    Hash, timestamp, and signature for records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  The problem (risk, not vibes)
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Intake warranties can hide AI rights conflicts.
                </h2>
                <p className="mt-4 text-base text-black/70">
                  Distributor upload flows often rely on a single warranty like
                  &quot;I own the rights.&quot; If a generator plan or creation
                  timing limits commercial use, those claims can conflict with
                  distributor requirements and create downstream risk.
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[color:var(--moss)]">
                  Not legal advice. We help you document and standardize
                  disclosures.
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-lg">
                <p className="text-sm font-semibold">Why this matters</p>
                <ul className="mt-4 space-y-3 text-sm text-black/70">
                  <li>Rights warranties live on your label, not the artist.</li>
                  <li>
                    Missing plan or timing data makes risk hard to quantify.
                  </li>
                  <li>
                    Standardized disclosure schedules speed catalog decisions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  How it works
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  A repeatable intake flow for AI-assisted tracks.
                </h2>
              </div>
              <p className="max-w-md text-base text-black/70">
                Align artists, A&amp;R, and ops on a single disclosure standard.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "Send the artist an intake link (or run intake internally)",
                "We score Red/Yellow/Green based on disclosures + missing evidence",
                "You receive a Rights & Claims Pack for your records (PDF + JSON)",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--copper)]">
                    Step {index + 1}
                  </p>
                  <p className="mt-4 text-lg font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="deliverables" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  What you get
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Rights &amp; Claims Packs for every track.
                </h2>
                <p className="mt-4 text-base text-black/70">
                  Each submission includes a standardized bundle so your label
                  can audit rights claims and retain evidence over time.
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-lg">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--copper)]">
                  Deliverables
                </h3>
                <ul className="mt-6 space-y-4 text-base font-medium">
                  {[
                    "Generator rights snapshot (tool + plan + creation timing)",
                    "Distributor warranty translator (what the artist is certifying)",
                    "Risk flags (rights conflicts / missing evidence / identity risk / third-party materials)",
                    "Provenance receipt (hash + timestamp + signature; hash optional if no file provided)",
                    "Export bundle (PDF + JSON)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="list-disc list-inside rounded-2xl border border-black/10 bg-[color:var(--cloud)] p-4"
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="pilot" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  30-day pilot
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Launch a limited-scope diligence pilot.
                </h2>
                <p className="mt-4 text-base text-black/70">
                  Keep the process lightweight while we align on intake scope,
                  scoring, and export format.
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-lg">
                <ul className="space-y-3 text-sm text-black/70">
                  <li>Up to 50 submission audits/month</li>
                  <li>24-48h turnaround</li>
                  <li>PDF + JSON exports</li>
                  <li>One onboarding call</li>
                </ul>
                <a
                  href={demoUrl}
                  target={demoIsExternal ? "_blank" : undefined}
                  rel={demoIsExternal ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-semibold text-[color:var(--sand)] transition hover:bg-black/80"
                >
                  Book a 10-minute demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="intake" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  Required intake fields
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Capture consistent disclosures from every submission.
                </h2>
              </div>
              <a
                href={intakeUrl}
                target={intakeIsExternal ? "_blank" : undefined}
                rel={intakeIsExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--ink)]/20 px-5 py-2 text-sm font-semibold transition hover:border-[color:var(--ink)]/60"
              >
                Open intake form
              </a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Label / requester",
                  items: [
                    "Label name",
                    "Contact name",
                    "Email",
                    "Role (A&amp;R / Ops / Catalog / Legal / Other)",
                    "Expected monthly volume (approx)",
                  ],
                },
                {
                  title: "Track / submission",
                  items: [
                    "Artist name",
                    "Track title",
                    "Planned release date (or TBD)",
                    "Intended distributor (DistroKid / TuneCore / CD Baby / The Orchard / Other)",
                    "Link to audio (private link) OR upload (upload supported in later phase)",
                    "Collaborators + splits (names + percentages)",
                  ],
                },
                {
                  title: "AI usage (attestation)",
                  items: [
                    "Was AI used? (None / Assisted / Generated)",
                    "AI tool(s) used (Suno / Udio / Other)",
                    "Plan/tier at time of creation (Free/Basic vs Pro/Paid)",
                    "Created while subscribed/paid? (Yes/No/Unsure)",
                    "Creation date range (approx)",
                  ],
                },
                {
                  title: "Rights risk (attestation)",
                  items: [
                    "Any third-party samples/loops? (Yes/No/Unsure)",
                    "Any third-party lyrics/topline? (Yes/No/Unsure)",
                    "Any voice/identity mimic or impersonation? (Yes/No/Unsure)",
                    "Any existing exclusivity obligations? (Yes/No/Unsure)",
                  ],
                },
                {
                  title: "Evidence (optional uploads/links)",
                  items: [
                    "Proof of subscription/tier at creation (receipt/screenshot)",
                    "Licenses for any samples/loops (links/files)",
                    "Session files/stems availability (Yes/No)",
                  ],
                },
              ].map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-black/70">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-black/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-black/70">
              We score RED when commercial rights are likely in conflict with
              declared tool tier/timing; YELLOW when evidence is missing or
              third-party materials/identity risks exist; GREEN when disclosures
              are consistent and required evidence is present.
            </p>
          </div>
        </section>

        <section id="faq" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  FAQ
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Quick answers for label ops.
                </h2>
              </div>
              <p className="max-w-md text-base text-black/70">
                Built for catalog diligence, not detection theater.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "Do you do AI detection?",
                  answer:
                    "No. We standardize disclosures + evidence and flag missing/conflicting claims.",
                },
                { question: "Is this legal advice?", answer: "No." },
                {
                  question: "Can we use this for catalog acquisitions?",
                  answer: "Yes, this is designed for intake diligence.",
                },
                {
                  question: "Do you store audio?",
                  answer: "Optional; hashing only if provided.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-black/10 bg-white p-6"
                >
                  <h3 className="text-base font-semibold">{item.question}</h3>
                  <p className="mt-3 text-sm text-black/70">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
          <p>(c) {new Date().getFullYear()} AuthentiTune Proof. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-black" href="/">
              Home
            </Link>
            <a className="hover:text-black" href="#intake">
              Intake fields
            </a>
            <a className="hover:text-black" href="#faq">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
