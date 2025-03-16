import React from 'react';
import FooterPage from '../components/FooterPage';

const Papeles = () => {
  const content = [
    "The Papeles series explores the intersection of paper and artistic expression, creating unique works that challenge traditional notions of medium and form. Each piece in this collection represents a deep exploration of texture, movement, and artistic possibility.",
    "Through innovative techniques and careful attention to detail, the series transforms ordinary paper into extraordinary works of art. The collection includes both two-dimensional pieces and sculptural works that push the boundaries of what paper can achieve.",
    "The series draws inspiration from various artistic traditions while maintaining a contemporary perspective. Each piece tells its own story, inviting viewers to engage with the material in new and unexpected ways.",
    "The Papeles collection is an ongoing exploration of paper as a medium, with new works being added regularly. Each piece represents a unique moment in the ongoing dialogue between artist and material."
  ];

  return <FooterPage title="Papeles" content={content} />;
};

export default Papeles; 