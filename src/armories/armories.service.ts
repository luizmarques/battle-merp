import { Injectable } from '@nestjs/common';
import { CreateArmoryDto } from './dto/create-armory.dto';
import { UpdateArmoryDto } from './dto/update-armory.dto';

@Injectable()
export class ArmoriesService {
  create(createArmoryDto: CreateArmoryDto) {
    return 'This action adds a new armory';
  }

  findAll() {
    return `This action returns all armories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} armory`;
  }

  update(id: number, updateArmoryDto: UpdateArmoryDto) {
    return `This action updates a #${id} armory`;
  }

  remove(id: number) {
    return `This action removes a #${id} armory`;
  }
}
