import { PartialType } from '@nestjs/mapped-types';
import { CreateArmoryDto } from './create-armory.dto';

export class UpdateArmoryDto extends PartialType(CreateArmoryDto) {}
