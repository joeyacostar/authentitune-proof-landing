import RightsChecker from "./rights-checker";

export default function Home() {
  const waitlistAction = process.env.NEXT_PUBLIC_WAITLIST_ACTION_URL;
  const fallbackMailto =
    "mailto:waitlist@authentitune.pro?subject=AuthentiTune%20Proof%20Waitlist";

  return (
    <div className="min-h-screen bg-[color:var(--sand)] text-[color:var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--sand)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="text-lg font-semibold uppercase tracking-[0.2em]"
          >
            AuthentiTune Proof
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a className="transition hover:text-[color:var(--copper)]" href="#how">
              How it works
            </a>
            <a
              className="transition hover:text-[color:var(--copper)]"
              href="#included"
            >
              What&apos;s included
            </a>
            <a
              className="transition hover:text-[color:var(--copper)]"
              href="#checker"
            >
              Rights checker
            </a>
            <a
              className="transition hover:text-[color:var(--copper)]"
              href="#platform"
            >
              Platform checks
            </a>
            <a className="transition hover:text-[color:var(--copper)]" href="#faq">
              FAQ
            </a>
            <a
              className="transition hover:text-[color:var(--copper)]"
              href="#pricing"
            >
              Pricing
            </a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-full bg-[color:var(--ink)] px-4 py-2 text-sm font-semibold text-[color:var(--sand)] transition hover:bg-black/80"
          >
            Join the waitlist
          </a>
        </div>
        <div className="flex items-center gap-4 overflow-x-auto border-t border-black/10 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] md:hidden">
          <a className="whitespace-nowrap" href="#how">
            How it works
          </a>
          <a className="whitespace-nowrap" href="#included">
            What&apos;s included
          </a>
          <a className="whitespace-nowrap" href="#checker">
            Rights checker
          </a>
          <a className="whitespace-nowrap" href="#platform">
            Platform checks
          </a>
          <a className="whitespace-nowrap" href="#faq">
            FAQ
          </a>
          <a className="whitespace-nowrap" href="#pricing">
            Pricing
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
                AI disclosure + provenance
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-[color:var(--ink)] md:text-6xl md:leading-tight">
                <span className="font-[var(--font-display)]">
                  Before you click &apos;I own the rights,&apos; know what
                  you&apos;re claiming.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-black/70 md:text-xl">
                Generate a Rights &amp; Claims Pack for AI-assisted releases:
                generator terms snapshot, distributor warranty checklist,
                disclosure snippets, and a signed provenance receipt.
              </p>
              <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-4 text-sm text-black/70">
                <p>
                  Most distributors don&apos;t ask &quot;is this AI?&quot; They
                  ask you to certify you own the rights. If your generator plan
                  doesn&apos;t allow commercial distribution, that checkbox can
                  be wrong.
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--moss)]">
                  Not legal advice.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--sand)] transition hover:bg-black/80"
                >
                  Join the waitlist
                </a>
                <a
                  href="#included"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--ink)]/20 px-6 py-3 text-sm font-semibold transition hover:border-[color:var(--ink)]/60"
                >
                  See what&apos;s inside
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-6 top-6 h-24 w-24 rounded-3xl border border-black/10 bg-white/70 shadow-lg backdrop-blur" />
              <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--moss)]">
                  Release pack snapshot
                </p>
                <h2 className="mt-4 text-2xl font-semibold">
                  Rights snapshot, disclosures, and checks in one file set.
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-black/10 bg-[color:var(--cloud)] p-4">
                    <p className="text-sm font-semibold">Rights Snapshot</p>
                    <p className="text-xs text-black/60">
                      Generator plan, date, and claims coverage.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-[color:var(--cloud)] p-4">
                    <p className="text-sm font-semibold">Warranty Checklist</p>
                    <p className="text-xs text-black/60">
                      Distributor terms translated into actions.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-[color:var(--cloud)] p-4">
                    <p className="text-sm font-semibold">Verification Link</p>
                    <p className="text-xs text-black/60">
                      Proofs ready for audit or takedown.
                    </p>
                  </div>
                </div>
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
                  From declaration to release-ready proof.
                </h2>
              </div>
              <p className="max-w-md text-base text-black/70">
                A lightweight flow that captures what matters and produces
                audit-ready documentation.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "Answer a 3-6 minute questionnaire",
                "Upload your final master (optional in v1)",
                "Download your Release Pack",
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

        <section id="included" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  What&apos;s included
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Your Release Pack, ready to ship.
                </h2>
                <p className="mt-4 text-base text-black/70">
                  Every release comes with a clearly structured bundle that
                  maps generator rights to distributor claims while preserving
                  provenance and disclosures.
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-lg">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--copper)]">
                  Rights &amp; Claims Pack
                </h3>
                <ul className="mt-6 space-y-4 text-base font-medium">
                  {[
                    "Generator Rights Snapshot (tool + plan + creation date)",
                    "Distributor Warranty Translator (what you're actually certifying)",
                    "Copy/paste disclosure snippets (credits + liner notes)",
                    "Provenance receipt (hash + timestamp + signature)",
                    "Verification link for your release",
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

        <section id="checker" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  Free Rights Checker (Beta): Suno -&gt; DistroKid
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Sanity-check your rights claims before you upload.
                </h2>
                <p className="mt-4 text-base text-black/70">
                  Answer a few inputs and see if your claim could conflict with
                  generator terms or distributor warranties.
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-lg">
                <RightsChecker />
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  Platform-aware checks
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Keep disclosures aligned wherever you release.
                </h2>
                <p className="mt-4 text-base text-black/70">
                  Platforms are tightening rules around spam, impersonation, and
                  AI labeling. AuthentiTune Proof helps you keep disclosures
                  consistent and auditable across releases.
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-[color:var(--cloud)] p-6">
                <p className="text-sm font-semibold">
                  Get alerted to mismatches before you upload.
                </p>
                <ul className="mt-4 space-y-3 text-sm text-black/70">
                  <li>Flagging inconsistent credits or AI usage statements.</li>
                  <li>Highlighting missing attribution fields per platform.</li>
                  <li>Keeping proofs consistent between DSPs.</li>
                </ul>
              </div>
            </div>
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
                  The quick answers.
                </h2>
              </div>
              <p className="max-w-md text-base text-black/70">
                Clear, concise answers for releases using AI-assisted workflows.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "Does this change my audio?",
                  answer: "No. It generates documentation + disclosures.",
                },
                { question: "Is this legal advice?", answer: "No." },
                {
                  question: "Can I delete my audio?",
                  answer: "Yes (we can store only the hash/receipt).",
                },
                {
                  question: "Who is this for?",
                  answer:
                    "Indie artists, producers, and small labels shipping AI-assisted music.",
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

        <section id="pricing" className="border-t border-black/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                  Pricing
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Start with a single pack or scale up.
                </h2>
              </div>
              <p className="max-w-md text-base text-black/70">
                Early access options for creators, studios, and labels.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Beta Pack",
                  price: "$9 / track",
                  detail: "Concierge delivery",
                },
                {
                  name: "Creator",
                  price: "$19 / month",
                  detail: "Includes 3 packs",
                },
                {
                  name: "Studio/Label",
                  price: "$99 / month",
                  detail: "Early access + priority",
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--copper)]">
                    {plan.name}
                  </p>
                  <p className="mt-4 text-3xl font-semibold">{plan.price}</p>
                  <p className="mt-2 text-sm text-black/70">{plan.detail}</p>
                  <a
                    href="#waitlist"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-semibold text-[color:var(--sand)] transition hover:bg-black/80"
                  >
                    Get a Beta Pack
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="border-t border-black/10 bg-[color:var(--cloud)] py-16"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              Final CTA
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Build your Release Pack before you ship.
            </h2>
            <p className="mt-4 text-base text-black/70">
              Prove your process, protect your catalog, and keep platform
              disclosures aligned across every release.
            </p>
            <form
              className="mx-auto mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2"
              action={waitlistAction ?? fallbackMailto}
              method="post"
            >
              <input
                className="w-full rounded-full border border-black/20 bg-white px-5 py-3 text-sm focus:border-[color:var(--copper)] focus:outline-none sm:col-span-2"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <select
                className="w-full rounded-full border border-black/20 bg-white px-5 py-3 text-sm focus:border-[color:var(--copper)] focus:outline-none"
                name="distributor"
              >
                <option value="">Distributor / platform (optional)</option>
                <option value="DistroKid">DistroKid</option>
                <option value="TuneCore">TuneCore</option>
                <option value="CD Baby">CD Baby</option>
                <option value="Spotify">Spotify</option>
                <option value="Apple Music">Apple Music</option>
                <option value="Other">Other</option>
              </select>
              <select
                className="w-full rounded-full border border-black/20 bg-white px-5 py-3 text-sm focus:border-[color:var(--copper)] focus:outline-none"
                name="ai_tool"
              >
                <option value="">AI tool (optional)</option>
                <option value="Suno">Suno</option>
                <option value="Udio">Udio</option>
                <option value="Other">Other</option>
              </select>
              <select
                className="w-full rounded-full border border-black/20 bg-white px-5 py-3 text-sm focus:border-[color:var(--copper)] focus:outline-none"
                name="ai_usage"
              >
                <option value="">AI usage (optional)</option>
                <option value="Assisted">Assisted</option>
                <option value="Generated">Generated</option>
              </select>
              <select
                className="w-full rounded-full border border-black/20 bg-white px-5 py-3 text-sm focus:border-[color:var(--copper)] focus:outline-none"
                name="primary_risk"
              >
                <option value="">Primary risk (optional)</option>
                <option value="Rights claim uncertainty">
                  Rights claim uncertainty
                </option>
                <option value="Takedown fear">Takedown fear</option>
                <option value="Impersonation">Impersonation</option>
                <option value="Spam/flagging">Spam/flagging</option>
                <option value="Other">Other</option>
              </select>
              <button
                className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--sand)] transition hover:bg-black/80 sm:col-span-2"
                type="submit"
              >
                Join the waitlist
              </button>
            </form>
            {!waitlistAction ? (
              <p className="mt-3 text-xs text-black/60">
                Form submits via email until the waitlist endpoint is live.
              </p>
            ) : null}
            <p className="mt-6 text-xs text-black/60">
              Not legal advice. You remain responsible for rights and
              disclosures.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
          <p>(c) {new Date().getFullYear()} AuthentiTune Proof. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-black" href="#how">
              How it works
            </a>
            <a className="hover:text-black" href="#included">
              What&apos;s included
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
