"use client";

import { useMemo, useState } from "react";
import type { BwSectionDefinition, BwSectionInstance } from "@baru-web/platform-core";
import { GeneratedField } from "@/components/forms/GeneratedField";

type SectionEditorProps = {
  section: BwSectionInstance;
  sectionDefinition: BwSectionDefinition<import("zod").ZodTypeAny>;
};

export function SectionEditor({ section, sectionDefinition }: SectionEditorProps) {
  const [draft, setDraft] = useState<Record<string, unknown>>(
    (section.data as Record<string, unknown>) ?? {},
  );

  const visibleFields = useMemo(() => sectionDefinition.fields ?? [], [sectionDefinition.fields]);

  return (
    <section className="rounded-2xl border border-[var(--dashboard-border)] bg-[var(--dashboard-surface)] p-5 shadow-sm">
      <header className="mb-4 border-b border-[var(--dashboard-border)] pb-4">
        <h2 className="text-xl font-semibold text-[var(--dashboard-text)]">{sectionDefinition.label}</h2>
        <p className="mt-1 text-sm text-[var(--dashboard-muted)]">Type: {section.type}</p>
      </header>

      <div className="space-y-4">
        {visibleFields.map((field) => (
          <label key={field.name} className="dashboard-label">
            {field.label}
            {field.helperText ? (
              <span className="mt-1 block text-xs font-normal text-[var(--dashboard-muted)]">
                {field.helperText}
              </span>
            ) : null}
            <div className="mt-2">
              <GeneratedField
                field={field}
                value={draft[field.name]}
                onChange={(nextValue) =>
                  setDraft((previous) => ({
                    ...previous,
                    [field.name]: nextValue,
                  }))
                }
              />
            </div>
          </label>
        ))}
      </div>

      <div className="mt-6">
        <button
          type="button"
          disabled
          className="rounded-xl bg-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700"
        >
          Save changes (mock)
        </button>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--dashboard-muted)]">
          Draft JSON preview
        </p>
        <pre className="max-h-80 overflow-auto rounded-xl bg-zinc-950 p-4 text-xs text-zinc-50">
          {JSON.stringify(draft, null, 2)}
        </pre>
      </div>
    </section>
  );
}
