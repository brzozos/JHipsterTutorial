import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '04e92f06-fcc7-4567-b0f3-2f628903da4c',
};

export const sampleWithPartialData: IAuthority = {
  name: '130d4ba0-bc64-4dae-a860-db1afe6f3aca',
};

export const sampleWithFullData: IAuthority = {
  name: '4a918694-60cf-4e99-8090-74cf2a27254e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
