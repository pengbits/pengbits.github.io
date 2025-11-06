import { NextResponse } from "next/server";
import { projects_list_below_priority } from "@/data/projects";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const belowPriorityParam = url.searchParams.get("belowPriority");
  const excludeParam = url.searchParams.get("exclude");
  const limitParam = url.searchParams.get("limit");

  const belowPriority = Number.isFinite(Number(belowPriorityParam))
    ? Number(belowPriorityParam)
    : 200;

  // Start with window by priority (exclusive)
  let items = projects_list_below_priority(belowPriority);
  // Optional: exclude by ids (comma-separated)
  const excludeIds = (excludeParam || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (excludeIds.length) {
    const excludeSet = new Set(excludeIds);
    items = items.filter((p) => !excludeSet.has(p.id));
  }

  // Optional: limit
  const limit = Number.isFinite(Number(limitParam)) ? Number(limitParam) : undefined;
  if (typeof limit === "number" && limit >= 0) {
    items = items.slice(0, limit);
  }

  // Sort consistently with published list order if needed
  // Here we rely on source order; if needed, sort by priority desc then id asc.
  // items = items.sort((a, b) => (b.priority - a.priority) || a.id.localeCompare(b.id));

  return NextResponse.json(items);
}


