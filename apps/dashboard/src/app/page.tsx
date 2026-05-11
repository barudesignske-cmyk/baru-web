"use client";

import { useMemo, useState } from "react";
import { bwSectionDefinitionMap } from "@baru-web/platform-core";
import { SectionEditor } from "@/components/dashboard/SectionEditor";
import { SectionList } from "@/components/dashboard/SectionList";
import { mockHomePageSections } from "@/data/mockHomePageSections";

export default function DashboardHomePage() {
  const [selectedSectionId, setSelectedSectionId] = useState(mockHomePageSections[0]?.id ?? "");

  const selectedSection = useMemo(
    () => mockHomePageSections.find((section) => section.id === selectedSectionId),
    [selectedSectionId],
  );

  const selectedDefinition = selectedSection
    ? bwSectionDefinitionMap[selectedSection.type as keyof typeof bwSectionDefinitionMap]
    : undefined;

  return (
    <div className="dashboard-shell">
      <header className="dashboard-topbar">
        <h1 className="text-2xl font-semibold text-[var(--dashboard-text)]">Baru Web Dashboard</h1>
        <p className="text-sm text-[var(--dashboard-muted)]">RFL Homepage Editor Prototype</p>
      </header>

      <div className="dashboard-grid">
        <aside className="dashboard-sidebar">
          <div className="mb-4 rounded-xl border border-[var(--dashboard-border)] bg-[var(--dashboard-surface)] p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--dashboard-muted)]">Page</p>
            <p className="mt-1 text-sm font-semibold text-[var(--dashboard-text)]">Home</p>
          </div>

          <h2 className="mb-2 text-sm font-semibold text-[var(--dashboard-text)]">Sections</h2>
          <SectionList
            sections={mockHomePageSections}
            selectedSectionId={selectedSectionId}
            onSelect={setSelectedSectionId}
          />
        </aside>

        <main className="dashboard-main">
          {!selectedSection ? (
            <div className="rounded-2xl border border-[var(--dashboard-border)] bg-[var(--dashboard-surface)] p-6">
              <p className="text-sm text-[var(--dashboard-muted)]">No section selected.</p>
            </div>
          ) : !selectedDefinition ? (
            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
              <p className="text-sm text-amber-800">
                Missing section definition for type: <strong>{selectedSection.type}</strong>
              </p>
            </div>
          ) : (
            <SectionEditor section={selectedSection} sectionDefinition={selectedDefinition} />
          )}
        </main>
      </div>
    </div>
  );
}
