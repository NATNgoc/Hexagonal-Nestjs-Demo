import { Alarm } from "src/alarm/domain/alarm";
import { AlarmEntity } from "src/alarm/infrastructure/persistence/in-memory/entities/alarm.entity";

class AlarmMapper {
    static toDomain(entity: AlarmEntity): Alarm {
        return new Alarm(entity.id, entity.name, entity.severity);
    }
    
    static toEntity(domain: Alarm): AlarmEntity {
        const entity = new AlarmEntity();
        entity.id = domain.id;
        entity.name = domain.name;
        entity.severity = domain.severity;
        return entity;
    }
    
}

export default AlarmMapper;