export interface AIResponse {
  imageUrl: string | null;
  loading: boolean;
  error: string | null;
}

export enum GeneratorType {
  CAP = 'CAP',
  BONK = 'BONK'
}

export interface NavItem {
  label: string;
  id: string;
}
