import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CombatsService } from './combats.service';
import { CreateCombatDto } from './dto/create-combat.dto';
import { UpdateCombatDto } from './dto/update-combat.dto';

@Controller('combats')
export class CombatsController {
  constructor(private readonly combatsService: CombatsService) {}

  @Post()
  create(@Body() createCombatDto: CreateCombatDto) {
    return this.combatsService.create(createCombatDto);
  }

  @Get()
  findAll() {
    return this.combatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.combatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCombatDto: UpdateCombatDto) {
    return this.combatsService.update(+id, updateCombatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.combatsService.remove(+id);
  }
}
