const BestCuisine = 'Italian';

export const Cuisines = new Array(20).fill(BestCuisine).map((cuisine, i) => ({
  id: i,
  name: cuisine,
  selected: false,
}));

export const ACTIVE_COLOR = '#EF8E52';
export const INACTIVE_COLOR = '#B3B1B4';
