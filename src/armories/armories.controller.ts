import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArmoriesService } from './armories.service';
import { CreateArmoryDto } from './dto/create-armory.dto';
import { UpdateArmoryDto } from './dto/update-armory.dto';

@Controller('armories')
export class ArmoriesController {
  constructor(private readonly armoriesService: ArmoriesService) {}

  @Post()
  create(@Body() createArmoryDto: CreateArmoryDto) {
    return this.armoriesService.create(createArmoryDto);
  }

  @Get()
  findAll() {
    return this.armoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArmoryDto: UpdateArmoryDto) {
    return this.armoriesService.update(+id, updateArmoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armoriesService.remove(+id);
  }
}
