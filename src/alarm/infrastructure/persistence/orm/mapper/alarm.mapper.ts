import { Alarm } from "src/alarm/domain/alarm";
import AlarmSeverity, { AlarmSeverityEnum } from "src/alarm/domain/value-objects/alarm-severity";
import { AlarmEntity } from "src/alarm/infrastructure/persistence/orm/entities/alarm.entity";

class AlarmMapper {
    static toDomain(entity: AlarmEntity): Alarm {
        return new Alarm(entity.id, entity.name, new AlarmSeverity(entity.severity as AlarmSeverityEnum));
    }
    
    static toEntity(domain: Alarm): AlarmEntity {
        const entity = new AlarmEntity();
        entity.id = domain.id;
        entity.name = domain.name;
        entity.severity = domain.severity+"";
        return entity;
    }
    
}

export default AlarmMapper;