import AlarmSeverity, { AlarmSeverityEnum } from "src/alarm/domain/value-objects/alarm-severity";

export class CreateAlarmCommand {
    constructor(
        public readonly name: string,
        public readonly severity: AlarmSeverityEnum,
    ) {}
}