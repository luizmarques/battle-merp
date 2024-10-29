import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArmoriesModule } from './armories/armories.module';
import { CharactersModule } from './characters/characters.module';
import { CombatsModule } from './combats/combats.module';
import { DicesModule } from './dices/dices.module';
import { MonstersModule } from './monsters/monsters.module';
import { PrismaService } from './prisma/prisma.service';
import { WeaponsModule } from './weapons/weapons.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env', '.env.dev'],

  }), MonstersModule, CombatsModule, DicesModule, WeaponsModule, ArmoriesModule, CharactersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }


