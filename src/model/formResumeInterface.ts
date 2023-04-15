export interface FormResumeInterface {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  cpf: string;
  birthDate: string;
  gender: GenderEnum;
  expertise: string;
  id: string;
}

export enum GenderEnum {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other',
}
