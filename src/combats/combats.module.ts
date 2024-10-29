import { Module } from '@nestjs/common';
import { CombatsService } from './combats.service';
import { CombatsController } from './combats.controller';

@Module({
  controllers: [CombatsController],
  providers: [CombatsService],
})
export class CombatsModule {}
