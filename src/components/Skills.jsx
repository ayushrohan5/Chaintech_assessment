import React from 'react';


const skills = [
  { type: 'UX Design', percent: 97, description: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users." },
  { type: 'UI Design', percent: 97, description: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users." },
  { type: 'UX Design', percent: 97, description: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users." },
  { type: 'UX Design', percent: 97, description: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users." },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="progress-circle">
              <svg width="80" height="80">
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="#333"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 34}
                  strokeDashoffset={2 * Math.PI * 34 * (1 - skill.percent / 100)}
                  style={{ transition: 'stroke-dashoffset 0.5s' }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0" x2="80" y1="80" y2="0">
                    <stop offset="0%" stopColor="#ff6363" />
                    <stop offset="100%" stopColor="#fede5d" />
                  </linearGradient>
                </defs>
                <text
                  x="40"
                  y="46"
                  textAnchor="middle"
                  fontSize="20"
                  fontWeight="bold"
                  fill="#fff"
                >{skill.percent}%</text>
              </svg>
            </div>
            <div className="skill-info">
              <h3>{skill.type}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
