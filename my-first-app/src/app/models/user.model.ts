export interface UserModel {
  name: string;
  age: number;
  gender?: 'male' | 'famale' | 'non-binary';
}
export interface ImgModel {
  src: string;
  alt: string;
}
