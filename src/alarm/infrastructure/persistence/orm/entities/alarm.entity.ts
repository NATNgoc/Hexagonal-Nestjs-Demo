import AlarmSeverity from 'src/alarm/domain/value-objects/alarm-severity';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';


@Entity('alarms')
export class AlarmEntity {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    severity: string
}