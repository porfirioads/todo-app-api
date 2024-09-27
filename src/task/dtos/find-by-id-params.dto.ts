import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class FindByIdParamsDto {
  @ApiProperty({
    description: 'Item ID',
    example: 1,
  })
  @IsNumberString()
  id: number;
}
