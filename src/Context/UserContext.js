import { useToast } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import projects_info from "@/Asset/projects_info";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const toast = useToast();
  const [deleteProject, setDeleteProject] = useState(projects_info);
  const [pinnedProject, setPinnedProject] = useState([]);
  const [currentProject, setCurrentProject] = useState([]);
  const [isLaunchPadOpen, setLaunchPadOpen] = useState(true);
  const [isWorkspacesOpen, setWorkspacesOpen] = useState(true);
  const [isPinnedOpen, setPinnedOpen] = useState(true);

  const toggleLaunchPad = () => setLaunchPadOpen(!isLaunchPadOpen);
  const toggleWorkspaces = () => setWorkspacesOpen(!isWorkspacesOpen);
  const togglePinned = () => setPinnedOpen(!isPinnedOpen);

  const handleMenu = (project) => {
    setCurrentProject(project);
  };

  const pinProject = (project) => {
    if (pinnedProject.length < 3) {
      setPinnedProject((prev) => [...prev, project]);
      toast({
        title: "Project pinned successfully",
        status: "success",
        duration: "2000",
      });
    } else {
      toast({
        title: "Maximum 3 projects can be pinned",
        status: "error",
        duration: "2000",
      });
    }
  };

  const unPinProject = (project) => {
    setPinnedProject((prev) => prev.filter((p) => p !== project));
    toast({
      title: "Project UnPinned successfully",
      status: "success",
      duration: "2000",
    });
  };

  const dltProject = (projectId) => {
    setDeleteProject((prev) =>
      prev.filter((projectdata) => projectdata.id !== projectId)
    );
    setPinnedProject((prev) =>
      prev.filter((project) => project.id !== projectId)
    );

    toast({
      title: "Project Deleted ",
      status: "success",
      duration: "2000",
    });
  };

  const contextValue = {
    handleMenu,
    pinProject,
    pinnedProject,
    unPinProject,
    dltProject,
    deleteProject,
    isLaunchPadOpen,
    toggleLaunchPad,
    isWorkspacesOpen,
    toggleWorkspaces,
    isPinnedOpen,
    togglePinned,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {" "}
      {props.children}{" "}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

/*    








    let updatedProjects = [...deleteProject];
    let index = updatedProjects.findIndex((project) => project.id === id);
    if (index !== -1) {
      updatedProjects.splice(index, 1);
      setDeleteProject(updatedProjects);
    }



    const updated = deleteProject.filter((project) => {
      return project.id !== id;
    });
    setDeleteProject(updated);

    console.log(id + "deleted");
 */
