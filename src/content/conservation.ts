import data from "../../conservation.json";

export type ConservationOrg = {
  name: string;
  link: string;
  details: string;
};

export type ConservationRegion = {
  region: string;
  timing: string;
  organizations: ConservationOrg[];
};

export const conservation: ConservationRegion[] = data.regions;
