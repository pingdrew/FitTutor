import React from 'react';

const ProfessionalCard = ({ professional }) => {
  return (
    <div>
      <h3>{professional.name}</h3>
      <p>Specializations: {professional.specializations.join(', ')}</p>
      <p>Certifications: {professional.certifications.join(', ')}</p>
    </div>
  );
};

export default ProfessionalCard;
