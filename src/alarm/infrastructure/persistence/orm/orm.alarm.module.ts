import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmRepository } from 'src/alarm/application/ports/outbounds/alarm.repository';
import { AlarmEntity } from 'src/alarm/infrastructure/persistence/orm/entities/alarm.entity';
import { OrmAlarmRepository } from 'src/alarm/infrastructure/persistence/orm/repositories/orm.alarm.repository';


@Module({
    imports: [TypeOrmModule.forFeature([AlarmEntity])],
    providers: [
        {
            provide: AlarmRepository,
            useClass: OrmAlarmRepository
        }
    ],
    exports: [AlarmRepository]
})
export class OrmAlarmModule {}