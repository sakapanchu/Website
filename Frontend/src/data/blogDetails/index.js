import { blockchainRevolutionData } from "./blockchainRevolutionData";
import { greenTechInnovationData } from "./greenTechInnovationData";
import { quantumComputingBreakthroughData } from "./quantumComputingBreakthroughData";
import { metaverseEvolutionData } from "./metaverseEvolutionData";
import { autonomousVehiclesFutureData } from "./autonomousVehiclesFutureData";
import { marsMissionUpdateData } from "./marsMissionUpdateData";
import { futureOfAiData } from "./futureOfAiData";

export const blogDetailsData = [
  blockchainRevolutionData,
  greenTechInnovationData,
  quantumComputingBreakthroughData,
  metaverseEvolutionData,
  autonomousVehiclesFutureData,
  marsMissionUpdateData,
  futureOfAiData,
];

export const getBlogBySlug = (slug) => {
  return blogDetailsData.find((blog) => blog.slug === slug);
};

export const getBlogById = (id) => {
  return blogDetailsData.find((blog) => blog.id === id);
};

export const getAllBlogs = () => {
  return blogDetailsData;
};

export {
  blockchainRevolutionData,
  greenTechInnovationData,
  quantumComputingBreakthroughData,
  metaverseEvolutionData,
  autonomousVehiclesFutureData,
  marsMissionUpdateData,
  futureOfAiData,
};
