import { Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from 'src/alarm/application/commands/create-alarm.command';
import { AlarmRepository } from 'src/alarm/application/ports/outbounds/alarm.repository';
import { Alarm } from 'src/alarm/domain/alarm';
import { AlarmFactory } from 'src/alarm/domain/factories/alarm.factory';
import AlarmSeverity from 'src/alarm/domain/value-objects/alarm-severity';
import { CreateAlarmDto } from 'src/alarm/presenter/http/dto/create-alarm.dto';


@Injectable()
export class AlarmService {
  constructor(
    private readonly alarmFactory: AlarmFactory,
    private readonly alarmRepository: AlarmRepository,
  ) {
    
  }

  async create(createAlarmDommand: CreateAlarmCommand) {
    const alarm = this.alarmFactory.create(createAlarmDommand.name, new AlarmSeverity(createAlarmDommand.severity));
    return await this.alarmRepository.save(alarm);
  }

  async findAll() {
    return await this.alarmRepository.findAll();
  }

}
