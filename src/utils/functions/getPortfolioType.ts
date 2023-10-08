import { Type } from '../../types/portfolio';

export const getPortfolioType = (type: Type): string => {
  if (type === 'design') return 'Design';
  if (type === 'prototype') return 'Protótipo';
  if (type === 'web') return 'Aplicativo Web';
  if (type === 'mobile') return 'Aplicativo Mobile';

  return '-';
};
