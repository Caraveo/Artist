import React from 'react';
import FooterPage from '../components/FooterPage';

const Diary = () => {
  const content = [
    "The Diary is a collection of personal reflections, artistic explorations, and behind-the-scenes glimpses into my creative process. Through this space, I share the journey of artistic development and the inspiration behind my work.",
    "Each entry offers insights into the challenges and triumphs of artistic creation, from initial concept to final execution. The Diary serves as both a personal record and a resource for those interested in understanding the artistic process.",
    "Topics range from technical discussions about artistic techniques to personal reflections on the role of art in contemporary society. Regular updates provide fresh perspectives and ongoing documentation of artistic evolution.",
    "Join me on this journey of artistic exploration and discovery. The Diary is updated regularly with new entries and insights into the creative process."
  ];

  return <FooterPage title="Diary" content={content} />;
};

export default Diary; 