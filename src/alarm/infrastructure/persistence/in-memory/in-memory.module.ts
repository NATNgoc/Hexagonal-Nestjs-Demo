import { Module } from '@nestjs/common';
import { AlarmRepository } from 'src/alarm/application/ports/outbounds/alarm.repository';
import { InMemoryAlarmRepository } from 'src/alarm/infrastructure/persistence/in-memory/repositories/in-memory.alarm.repository';

@Module({
    providers: [{
        provide: AlarmRepository,
        useClass: InMemoryAlarmRepository,
    }],
    exports: [AlarmRepository]
})
export class InMemoryModule {

}
