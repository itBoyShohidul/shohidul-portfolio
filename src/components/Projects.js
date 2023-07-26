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
    if(projects.length >0)
      {projects.slice(0, load).map((project, index) => {
        return <Project key={index} project={project} />;
      }else{
        return <h3>Loading...</h3>
      }
                                  )}
    </div>
  );
}

export default Projects;
