import React from 'react';
import FooterPage from '../components/FooterPage';

const Commission = () => {
  const content = [
    "I offer commissioned artwork services for individuals and organizations seeking unique, personalized pieces. Each commission is approached with careful attention to your vision and requirements.",
    "The commissioning process begins with a detailed consultation to understand your needs, preferences, and timeline. I work closely with clients throughout the creative process to ensure the final piece meets or exceeds expectations.",
    "My commissioned work spans various mediums and styles, from traditional portraits to contemporary abstract pieces. I'm experienced in both private and commercial commissions, including corporate collections and public installations.",
    "To discuss your commission project, please contact me through the contact form or email listed in the About section. I look forward to bringing your artistic vision to life."
  ];

  return <FooterPage title="Commission" content={content} />;
};

export default Commission; 