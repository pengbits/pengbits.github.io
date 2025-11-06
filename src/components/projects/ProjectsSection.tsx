"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectGridWithLoadMore } from "@/components/projects/ProjectGridWithLoadMore";
import { projects_list_min_priority } from "@/data/projects";

export const ProjectsSection = () => {
  const searchParams = useSearchParams();
  const allProjects = useMemo(() => {
    const value = searchParams.get("allProjects");
    return value === "1" || value === "true";
  }, [searchParams]);

  const minPriority = allProjects ? 0 : 200;
  const initial = projects_list_min_priority(minPriority);

  if (allProjects) {
    return <ProjectGrid projects={initial} />;
  }
  return (
    <ProjectGridWithLoadMore
      initialProjects={initial}
      belowPriority={200}
    />
  );
};


