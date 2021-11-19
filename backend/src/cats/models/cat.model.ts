import { Column, Model, Table } from 'sequelize-typescript';

import { Cat as CatInterface } from '../../../../shared/types';

@Table
export class Cat extends Model implements CatInterface {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
