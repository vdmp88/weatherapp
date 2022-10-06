export type GetCitiesParams = {
  offset: number;
  limit: number;
  countryIds: string | number;
};

export type City = {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  latitude: number;
  longitude: number;
  population: number;
};

type CityPagination = {
  href: string;
  rel: string;
};

type CityMetaData = {
  currentOffset: number;
  totalCount: number;
};

export type CityData = {
  data: City[];
  links: CityPagination[];
  metadata: CityMetaData;
};
