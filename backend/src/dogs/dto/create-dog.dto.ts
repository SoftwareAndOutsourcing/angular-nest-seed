import { ApiProperty } from '@nestjs/swagger';

import { Dog } from '../../../../shared/types';

export class CreateDogDto implements Dog {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
