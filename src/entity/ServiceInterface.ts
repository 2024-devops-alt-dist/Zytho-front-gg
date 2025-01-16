export interface ServiceInterface<T> {
  findAll: () => Promise<T[]>;
  create: (obj: T) => Promise<T>;
  update: (id: number, obj: T) => Promise<T>;
  deleteById: (id: number) => Promise<T>;
}
