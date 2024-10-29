import { Injectable } from '@nestjs/common';
import { CreateCombatDto } from './dto/create-combat.dto';
import { UpdateCombatDto } from './dto/update-combat.dto';

@Injectable()
export class CombatsService {
  create(createCombatDto: CreateCombatDto) {
    return 'This action adds a new combat';
  }

  findAll() {
    return `This action returns all combats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} combat`;
  }

  update(id: number, updateCombatDto: UpdateCombatDto) {
    return `This action updates a #${id} combat`;
  }

  remove(id: number) {
    return `This action removes a #${id} combat`;
  }
}
