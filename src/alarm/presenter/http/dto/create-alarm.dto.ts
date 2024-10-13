import { IsEnum, IsNotEmpty } from "class-validator";
import { AlarmSeverityEnum } from "src/alarm/domain/value-objects/alarm-severity";

export class CreateAlarmDto {
    @IsNotEmpty()
    name: string;

    @IsEnum(AlarmSeverityEnum)
    @IsNotEmpty()
    severity: AlarmSeverityEnum;   
}
