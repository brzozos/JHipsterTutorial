import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: '8af3e019-8a11-4b70-b296-2a074a5954f7',
  login: '7Uu@AYjtD\\~y9W\\.V\\02qIS9\\KGQo\\RKM',
};

export const sampleWithPartialData: IUser = {
  id: '2d3a8d59-dee3-4c2e-a751-b2e7b78399c6',
  login: 'dUkl',
};

export const sampleWithFullData: IUser = {
  id: 'fd60381d-e45c-43a4-9ede-0644e7244613',
  login: 'fLATqK@d7E',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
