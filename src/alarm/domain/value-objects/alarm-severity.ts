import { Injectable } from "@nestjs/common";

@Injectable()
export default class AlarmSeverity {
    constructor(private readonly value: AlarmSeverityEnum) {
        this.value = value;
    }
    
    equals(severity: AlarmSeverity): boolean {
        return this.value === severity.value;
    }
}

export enum AlarmSeverityEnum {
    CRITICAL= 'CRITICAL',
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
}

