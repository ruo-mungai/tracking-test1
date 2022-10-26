import React from 'react'

function Members({project}) {
  return (
    <div>
      {project.members.map((member) => (
        <div key={member.id}>{member.name}</div>
      ))}
    </div>
  );
}

export default Members