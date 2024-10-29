import { Test, TestingModule } from '@nestjs/testing';
import { ArmoriesService } from './armories.service';

describe('ArmoriesService', () => {
  let service: ArmoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmoriesService],
    }).compile();

    service = module.get<ArmoriesService>(ArmoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
