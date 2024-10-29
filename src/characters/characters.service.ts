import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharactersService {
  constructor(private prismaService: PrismaService) {}
  
  create(createCharacterDto: CreateCharacterDto) {
    return this.prismaService.character.create({
      data: {
        ...createCharacterDto,
        createdBy: 'defaultUser', // replace with actual value
        updatedBy: 'defaultUser'  // replace with actual value
      }
    });
  }

  findAll() {
    return this.prismaService.character.findMany()
  }

  findOne(id: number) {
    return this.prismaService.character.findUnique({
      where: {id}
    })
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return this.prismaService.character.update({
      where: {id: id},
      data:  {
        ...updateCharacterDto,
        updatedBy: 'defaultUser'  // replace with actual value
      }
    })
  }

  remove(id: number) {
    return this.prismaService.character.delete({
      where: {id}
    })
  }
}
