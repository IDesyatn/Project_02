export interface ICRUD {
  create: (query: string) => void;
  read: (query: string, params: object) => JSON;
  update: (query: string) => void;
  delete: (query: string) => void;
}
