import React, { useState } from "react";
import Image from "next/image";

function Project({ project }) {
  const [text, setText] = useState(400);
  return (
    <div className="project">
      <div className="project-left">
        <Image
          src={"/" + project.image}
          width={1024}
          height={768}
          alt={`${project.name} image`}
        />
      </div>
      <div className="project-right">
        <h3>{project.name}</h3>
        <h5>{project.type}</h5>
        <p className="project-description">
          {project.description.slice(0, text)}
          {project.description.length > text ? (
            <button
              className="see-more-btn"
              onClick={() => {
                setText((prev) => prev + 2000);
              }}
            >
              See more...
            </button>
          ) : null}
        </p>

        <a className="menu-btn" href={project.liveLink} rel="nofollow">
          Live View
        </a>
        <a className="menu-btn" href={project.liveLink} rel="nofollow">
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Project;
