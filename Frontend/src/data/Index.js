// src/pages/services/data/index.js

import { webDevelopmentData } from './WebDevelopment';
// import { aiDevelopmentData } from './aiDevelopment';
// import { cloudSolutionsData } from './cloudSolutions';
// import { mobileDevelopmentData } from './mobileDevelopment';
// import { uiUxDesignData } from './uiUxDesign';
// import { apiIntegrationData } from './apiIntegration';

// Export all services data
export const servicesData = [
  webDevelopmentData,
  // aiDevelopmentData,
  // cloudSolutionsData,
  // mobileDevelopmentData,
  // uiUxDesignData,
  // apiIntegrationData
];

// Helper functions
export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id);
};

export const getAllServices = () => {
  return servicesData;
};

// Export individual data for direct use
export {
  webDevelopmentData,
  // aiDevelopmentData,
  // cloudSolutionsData,
  // mobileDevelopmentData,
  // uiUxDesignData,
  // apiIntegrationData
};