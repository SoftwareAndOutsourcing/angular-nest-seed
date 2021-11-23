import { Column, Model, Table } from 'sequelize-typescript';

import { Dog as DogInterface } from '../../../../shared/types';

@Table
export class Dog extends Model implements DogInterface {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
