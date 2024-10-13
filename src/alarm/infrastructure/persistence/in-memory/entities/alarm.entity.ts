import AlarmSeverity from "src/alarm/domain/value-objects/alarm-severity";

export class AlarmEntity {
    
    id: string;

    name: string;

    severity: AlarmSeverity
}