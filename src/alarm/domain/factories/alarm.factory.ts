import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Alarm } from "src/alarm/domain/alarm";
import AlarmSeverity from "src/alarm/domain/value-objects/alarm-severity";


@Injectable()
export class AlarmFactory {
    create(name: string, severity: AlarmSeverity): Alarm {
        const id = randomUUID();
        return new Alarm(id, name, severity)
    }
}