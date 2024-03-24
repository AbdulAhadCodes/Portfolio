import React from "react";
import skillset from "../db/skillset";




const Skills = () => {
  return (
    <div className="projects">
      <h3>Skills</h3>

      <div className="skills-list">
        {skillset.map((skill) => (
          <div key={skill.id} className="skill-item">
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
