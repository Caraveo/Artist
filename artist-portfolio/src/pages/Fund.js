import React from 'react';
import FooterPage from '../components/FooterPage';

const Fund = () => {
  const content = [
    "The Fund initiative supports emerging artists and creative projects that push the boundaries of artistic expression. Through this program, we provide resources and opportunities for artists to develop their work and reach new audiences.",
    "We believe in the power of art to transform communities and inspire change. The Fund focuses on projects that explore innovative approaches to artistic expression and engage with contemporary social issues.",
    "Support comes in various forms, including financial grants, studio space, mentorship opportunities, and exhibition platforms. We work closely with selected artists to ensure their projects have the resources needed to succeed.",
    "To learn more about the Fund or to apply for support, please contact us through the email listed in the About section. We're always looking for new projects to support and new ways to foster artistic innovation."
  ];

  return <FooterPage title="Fund" content={content} />;
};

export default Fund; 