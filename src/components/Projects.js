import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "./Project";

function Projects({ category, load }) {
  const [projects, setProjects] = useState([]);
  const getProject = process.env.NEXT_PUBLIC_GET_PROJECT + category;

  useEffect(() => {
    axios
      .get(getProject)
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, [getProject]);

  return (
    <div>
      {projects.length > 0 ? (
        projects.slice(0, load).map((project, index) => {
          return <Project key={index} project={project} />;
        })
      ) : (
        <h3 style={{ margin: "10px 0" }}>Project not found!</h3>
      )}
    </div>
  );
}

export default Projects;
