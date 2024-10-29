import { Test, TestingModule } from '@nestjs/testing';
import { ArmoriesController } from './armories.controller';
import { ArmoriesService } from './armories.service';

describe('ArmoriesController', () => {
  let controller: ArmoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmoriesController],
      providers: [ArmoriesService],
    }).compile();

    controller = module.get<ArmoriesController>(ArmoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
