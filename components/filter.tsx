// components/filter.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface FilterOption<T extends string> {
  id: T;
  label: string;
}

interface FilterProps<T extends string> {
  filters: FilterOption<T>[];
  paramKey?: string;
}

export function Filter<T extends string>({
  filters,
  paramKey = "type",
}: FilterProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const active = (searchParams.get(paramKey) as T) || filters[0].id;

  function handleClick(value: T) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramKey, value);
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex gap-2 mb-10 flex-wrap">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => handleClick(f.id)}
          className={`px-4 py-2 rounded-full text-sm border ${
            active === f.id ? "bg-primary text-white" : ""
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}