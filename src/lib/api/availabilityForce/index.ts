import mockViewings from '../../../mockData/viewings.json';

export type Viewing = {
  id: string;
  companyName: string;
  viewingDate: string;
};

export const getViewings = async (): Promise<Viewing[]> => mockViewings;
