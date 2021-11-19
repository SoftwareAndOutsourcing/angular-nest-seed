import { ApiProperty } from '@nestjs/swagger';

import { Cat } from '../../../../shared/types';

export class CreateCatDto implements Cat {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
