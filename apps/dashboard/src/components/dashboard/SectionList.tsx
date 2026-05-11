import type { MockHomePageSection } from "@/data/mockHomePageSections";

type SectionListProps = {
  sections: MockHomePageSection[];
  selectedSectionId: string;
  onSelect: (sectionId: string) => void;
};

export function SectionList({ sections, selectedSectionId, onSelect }: SectionListProps) {
  const sorted = [...sections].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="space-y-2">
      {sorted.map((section) => {
        const isSelected = section.id === selectedSectionId;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onSelect(section.id)}
            className={`w-full rounded-xl border p-3 text-left transition ${
              isSelected
                ? "border-[var(--dashboard-accent)] bg-[var(--dashboard-accent-soft)]"
                : "border-[var(--dashboard-border)] bg-[var(--dashboard-surface)] hover:bg-zinc-50"
            }`}
          >
            <p className="text-sm font-semibold text-[var(--dashboard-text)]">{section.label}</p>
            <p className="mt-1 text-xs text-[var(--dashboard-muted)]">{section.type}</p>
            <p className="mt-2 text-[11px] text-[var(--dashboard-muted)]">
              {section.isVisible ? "Visible" : "Hidden"}
            </p>
          </button>
        );
      })}
    </div>
  );
}
