import { Module } from '@nestjs/common';
import { ArmoriesService } from './armories.service';
import { ArmoriesController } from './armories.controller';

@Module({
  controllers: [ArmoriesController],
  providers: [ArmoriesService],
})
export class ArmoriesModule {}
