import ProjectCard from "@/components/ProjectCard";
import { SimpleGrid } from "@chakra-ui/react";
import projects_info from "@/Asset/projects_info";
export default function Cancelled() {
  return (
    <SimpleGrid my="20px" columns={{ base: 1, md: 2, lg: 3 }} spacing="10px">
      {" "}
      {projects_info
        .filter((item) => item.category === "Cancelled")
        .map((item, i) => {
          return (
            <ProjectCard
              key={i}
              id={item.id}
              name={item.name}
              category={item.category}
              next_milestone={item.next_milestone}
            />
          );
        })}{" "}
    </SimpleGrid>
  );
}
