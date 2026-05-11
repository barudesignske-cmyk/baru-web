"use client";

import type { BwFieldDefinition } from "@baru-web/platform-core";

type GeneratedFieldProps = {
  field: BwFieldDefinition;
  value: unknown;
  onChange: (value: unknown) => void;
};

function asText(value: unknown) {
  return typeof value === "string" ? value : "";
}

function asNumber(value: unknown) {
  return typeof value === "number" ? value : 0;
}

function asBoolean(value: unknown) {
  return typeof value === "boolean" ? value : false;
}

function updateObject(base: unknown, patch: Record<string, unknown>) {
  return { ...(typeof base === "object" && base !== null ? (base as Record<string, unknown>) : {}), ...patch };
}

function defaultRepeaterItem(fields: BwFieldDefinition[] = []) {
  const item: Record<string, unknown> = {};
  for (const f of fields) {
    if (f.type === "boolean") item[f.name] = false;
    else if (f.type === "number") item[f.name] = 0;
    else if (f.type === "repeater") item[f.name] = [];
    else item[f.name] = "";
  }
  return item;
}

function NestedInput({
  field,
  value,
  onChange,
}: {
  field: BwFieldDefinition;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  switch (field.type) {
    case "textarea":
    case "rich_text":
      return (
        <textarea
          className="dashboard-input min-h-20"
          value={asText(value)}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
        />
      );
    case "number":
      return (
        <input
          type="number"
          className="dashboard-input"
          value={asNumber(value)}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      );
    case "boolean":
      return (
        <input
          type="checkbox"
          checked={asBoolean(value)}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4"
        />
      );
    case "select":
      return (
        <select
          className="dashboard-input"
          value={asText(value)}
          onChange={(e) => onChange(e.target.value)}
        >
          {(field.options ?? []).map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    default:
      return (
        <input
          type="text"
          className="dashboard-input"
          value={asText(value)}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
        />
      );
  }
}

export function GeneratedField({ field, value, onChange }: GeneratedFieldProps) {
  if (field.type === "button" || field.type === "link") {
    const current = (typeof value === "object" && value !== null ? value : {}) as Record<string, unknown>;

    return (
      <div className="space-y-3 rounded-xl border border-[var(--dashboard-border)] p-3">
        <div className="grid gap-3 md:grid-cols-2">
          <label className="dashboard-label">
            Label
            <input
              className="dashboard-input"
              value={asText(current.label)}
              onChange={(e) => onChange(updateObject(current, { label: e.target.value }))}
            />
          </label>
          <label className="dashboard-label">
            Link
            <input
              className="dashboard-input"
              value={asText(current.href)}
              onChange={(e) => onChange(updateObject(current, { href: e.target.value }))}
            />
          </label>
        </div>
        {field.type === "button" ? (
          <label className="dashboard-label">
            Variant
            <select
              className="dashboard-input"
              value={asText(current.variant) || "primary"}
              onChange={(e) => onChange(updateObject(current, { variant: e.target.value }))}
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="outline">Outline</option>
              <option value="ghost">Ghost</option>
            </select>
          </label>
        ) : null}
      </div>
    );
  }

  if (field.type === "image") {
    const current = (typeof value === "object" && value !== null ? value : {}) as Record<string, unknown>;
    return (
      <div className="space-y-3 rounded-xl border border-[var(--dashboard-border)] p-3">
        <label className="dashboard-label">
          Image path
          <input
            className="dashboard-input"
            value={asText(current.src)}
            onChange={(e) => onChange(updateObject(current, { src: e.target.value }))}
          />
        </label>
        <label className="dashboard-label">
          Alt text
          <input
            className="dashboard-input"
            value={asText(current.alt)}
            onChange={(e) => onChange(updateObject(current, { alt: e.target.value }))}
          />
        </label>
      </div>
    );
  }

  if (field.type === "repeater") {
    const itemFields = field.fields ?? [];
    const current = Array.isArray(value) ? value : [];

    return (
      <div className="space-y-3 rounded-xl border border-[var(--dashboard-border)] p-3">
        {current.map((item, index) => {
          const row = (typeof item === "object" && item !== null ? item : {}) as Record<string, unknown>;
          return (
            <div key={`${field.name}-${index}`} className="space-y-3 rounded-lg border border-[var(--dashboard-border)] bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-zinc-700">Item {index + 1}</p>
                <button
                  type="button"
                  className="text-xs text-red-600"
                  onClick={() => onChange(current.filter((_, i) => i !== index))}
                >
                  Remove
                </button>
              </div>

              {itemFields.length > 0 ? (
                <div className="grid gap-3">
                  {itemFields.map((nestedField) => (
                    <label key={`${field.name}-${index}-${nestedField.name}`} className="dashboard-label">
                      {nestedField.label}
                      <NestedInput
                        field={nestedField}
                        value={row[nestedField.name]}
                        onChange={(nextValue) => {
                          const updated = [...current];
                          updated[index] = { ...row, [nestedField.name]: nextValue };
                          onChange(updated);
                        }}
                      />
                    </label>
                  ))}
                </div>
              ) : (
                <pre className="rounded bg-zinc-100 p-2 text-xs">{JSON.stringify(item, null, 2)}</pre>
              )}
            </div>
          );
        })}

        <button
          type="button"
          className="rounded-lg border border-[var(--dashboard-border)] px-3 py-2 text-xs font-semibold text-zinc-700"
          onClick={() => onChange([...current, defaultRepeaterItem(itemFields)])}
        >
          Add item
        </button>
      </div>
    );
  }

  return <NestedInput field={field} value={value} onChange={onChange} />;
}
