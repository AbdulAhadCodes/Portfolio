import React from "react";

const Project = ({ properties }) => {
  return (
    <div href="" className="project">
      <a href={properties.link} target="_blank">
      {properties.imgSrc && <img src={properties.imgSrc} alt="" />}
      <div>
        <h5 className="projectTitle">
          {properties.companyName && <span>{properties.companyName}</span>}

          {properties.name && (
            <> 
                {properties.name}
                <i className="ri-external-link-line"></i>
            </>
          )}
        </h5>
        <p className="projectDesc">
          {properties.desc} <br />
          {properties.duration && <span>{properties.duration}</span>}
        </p>
      </div>
      </a>
    </div>
  );
};

export default Project;
