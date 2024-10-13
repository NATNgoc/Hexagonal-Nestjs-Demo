import { Test, TestingModule } from '@nestjs/testing';
import { AlarmService } from 'src/alarm/application/alarm.service';
import { AlarmController } from 'src/alarm/presenter/http/alarm.controller';


describe('AlarmController', () => {
  let controller: AlarmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlarmController],
      providers: [AlarmService],
    }).compile();

    controller = module.get<AlarmController>(AlarmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
