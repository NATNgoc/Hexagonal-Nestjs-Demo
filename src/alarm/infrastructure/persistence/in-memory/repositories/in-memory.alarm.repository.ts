
import { Injectable } from "@nestjs/common";
import { AlarmRepository } from "src/alarm/application/ports/outbounds/alarm.repository";
import { Alarm } from "src/alarm/domain/alarm";
import AlarmMapper from "../mapper/alarm.mapper";

@Injectable()
export class InMemoryAlarmRepository implements AlarmRepository {
    alrams: Alarm[] = [];

    async findAll(): Promise<Alarm[]> {
        return this.alrams.map(alarm => {
            return AlarmMapper.toDomain(alarm);
        });
    }
    async save(alarm: Alarm): Promise<Alarm> {
        this.alrams.push(AlarmMapper.toEntity(alarm));
        return alarm;
    }
    
}