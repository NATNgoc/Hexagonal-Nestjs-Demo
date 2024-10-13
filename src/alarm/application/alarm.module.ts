import { DynamicModule, Module, Type } from '@nestjs/common';
import { AlarmService } from './alarm.service';
import { AlarmController } from 'src/alarm/presenter/http/alarm.controller';
import { AlarmFactory } from 'src/alarm/domain/factories/alarm.factory';



@Module({
  controllers: [AlarmController],
  providers: [AlarmService, AlarmFactory],
})
export class AlarmModule {
  static withInfrashtructure(infrastructureModule: Type | DynamicModule) {
    return {
      module: AlarmModule,
      imports: [infrastructureModule]
    };
  }
}
