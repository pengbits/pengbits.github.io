"use client";

import { useMemo, useState, useTransition } from "react";
import { Button, Flex, Spinner } from "@chakra-ui/react";
import { Project } from "@/types/Project";
import { ProjectGrid } from "./ProjectGrid";
import { projects_list_below_priority } from "@/data/projects";

type Props = {
  initialProjects: Project[];
  belowPriority: number; // threshold for fetching remaining
};

export const ProjectGridWithLoadMore = ({ initialProjects, belowPriority }: Props) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  
  const hasMore = useMemo(() => {
    const projectIds = new Set(projects.map((p) => p.id));
    return projects_list_below_priority(belowPriority).some((p) => !projectIds.has(p.id));
  }, [projects, belowPriority]);
  
  const [isPending, startTransition] = useTransition();

  const existingIds = useMemo(() => new Set(projects.map((p) => p.id)), [projects]);

  const onLoadMore = () => {
    startTransition(async () => {
      // Compute remaining projects locally from static data (fully static-friendly)
      const more: Project[] = projects_list_below_priority(belowPriority);

      // Dedup by id defensively
      const merged: Project[] = [...projects];
      for (const p of more) {
        if (!existingIds.has(p.id)) {
          merged.push(p);
          existingIds.add(p.id);
        }
      }

      setProjects(merged);
    });
  };

  return (
    <>
      <ProjectGrid projects={projects} />
      {hasMore && (
        <Flex justifyContent="center" mt="4">
          <Button onClick={onLoadMore} disabled={isPending} aria-busy={isPending}>
            {isPending ? (
              <>
                <Spinner size="sm" mr="2" /> Loading...
              </>
            ) : (
              "Load more"
            )}
          </Button>
        </Flex>
      )}
    </>
  );
};


