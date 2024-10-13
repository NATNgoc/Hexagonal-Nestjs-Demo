import AlarmSeverity from "src/alarm/domain/value-objects/alarm-severity";


export class Alarm {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly severity: AlarmSeverity,
    ) {}
}