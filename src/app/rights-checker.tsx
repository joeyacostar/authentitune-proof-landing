"use client";

import { useMemo, useState } from "react";

type Option = "yes" | "no";
type Plan = "free-basic" | "pro-premier";

const badgeStyles: Record<string, string> = {
  GREEN: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  YELLOW: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  RED: "bg-red-500/15 text-red-700 border-red-500/30",
};

export default function RightsChecker() {
  const [plan, setPlan] = useState<Plan>("free-basic");
  const [createdWhileSubscribed, setCreatedWhileSubscribed] =
    useState<Option>("no");
  const [distributeMonetized, setDistributeMonetized] =
    useState<Option>("no");
  const [impersonation, setImpersonation] = useState<Option>("no");
  const [samplesLyrics, setSamplesLyrics] = useState<Option>("no");

  const result = useMemo(() => {
    if (plan === "free-basic" && distributeMonetized === "yes") {
      return {
        label: "RED",
        message:
          "Free/Basic plan with monetized distribution likely conflicts with generator terms.",
      };
    }

    const hasYellowFlags =
      impersonation === "yes" ||
      samplesLyrics === "yes" ||
      createdWhileSubscribed === "no";

    if (
      plan === "pro-premier" &&
      createdWhileSubscribed === "yes" &&
      distributeMonetized === "yes" &&
      impersonation === "no" &&
      samplesLyrics === "no"
    ) {
      return {
        label: "GREEN",
        message:
          "Aligned on plan and distribution, with no flagged rights risks.",
      };
    }

    if (hasYellowFlags) {
      return {
        label: "YELLOW",
        message:
          "Potential rights or policy risks. Review tool terms and assets.",
      };
    }

    return {
      label: "YELLOW",
      message:
        "Incomplete alignment. Confirm plan, subscription timing, and distribution scope.",
    };
  }, [
    plan,
    createdWhileSubscribed,
    distributeMonetized,
    impersonation,
    samplesLyrics,
  ]);

  return (
    <div className="space-y-5">
      <div className="space-y-3 text-sm">
        <label className="flex flex-col gap-2">
          Suno plan
          <select
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm"
            value={plan}
            onChange={(event) => setPlan(event.target.value as Plan)}
          >
            <option value="free-basic">Free/Basic</option>
            <option value="pro-premier">Pro/Premier</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          Created while subscribed?
          <select
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm"
            value={createdWhileSubscribed}
            onChange={(event) =>
              setCreatedWhileSubscribed(event.target.value as Option)
            }
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          Distribute to monetized DSPs?
          <select
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm"
            value={distributeMonetized}
            onChange={(event) =>
              setDistributeMonetized(event.target.value as Option)
            }
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          Any impersonation / voice mimic?
          <select
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm"
            value={impersonation}
            onChange={(event) =>
              setImpersonation(event.target.value as Option)
            }
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          Any third-party samples/lyrics?
          <select
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm"
            value={samplesLyrics}
            onChange={(event) =>
              setSamplesLyrics(event.target.value as Option)
            }
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>
      </div>
      <div className="rounded-2xl border border-black/10 bg-[color:var(--cloud)] p-4">
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[result.label]}`}
        >
          {result.label}
        </span>
        <p className="mt-3 text-sm text-black/70">{result.message}</p>
        <p className="mt-3 text-xs text-black/60">
          Not legal advice. Check your tool terms and distributor policies.
        </p>
      </div>
    </div>
  );
}
