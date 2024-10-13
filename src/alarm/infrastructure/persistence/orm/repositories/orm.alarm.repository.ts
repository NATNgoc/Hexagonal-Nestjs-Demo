import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AlarmRepository } from "src/alarm/application/ports/outbounds/alarm.repository";
import { Alarm } from "src/alarm/domain/alarm";
import { AlarmEntity } from "src/alarm/infrastructure/persistence/orm/entities/alarm.entity";
import AlarmMapper from "src/alarm/infrastructure/persistence/orm/mapper/alarm.mapper";
import { Repository } from "typeorm";

@Injectable()
export class OrmAlarmRepository implements AlarmRepository {
    constructor(
        @InjectRepository(AlarmEntity)
        private readonly alarmRepository: Repository<AlarmEntity>) {
    }

    findAll(): Promise<Alarm[]> {
        return this.alarmRepository.find().then(alarms => alarms.map(alarm => {
            return AlarmMapper.toDomain(alarm);
        }));
    }
    save(alarm: Alarm): Promise<Alarm> {
        return this.alarmRepository.save(AlarmMapper.toEntity(alarm)).then(AlarmMapper.toDomain);
    }
    
}