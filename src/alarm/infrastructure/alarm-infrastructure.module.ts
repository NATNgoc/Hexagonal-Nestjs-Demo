import { Module } from "@nestjs/common";
import { InMemoryModule } from "src/alarm/infrastructure/persistence/in-memory/in-memory.module";
import { OrmAlarmModule } from "src/alarm/infrastructure/persistence/orm/orm.alarm.module";

@Module({})
export class AlarmInfrastructureModule {
    static use(driver: 'orm' | 'in-memory') {
        const persitenceModule = driver === 'orm' ? OrmAlarmModule : InMemoryModule;
        return {
            module: AlarmInfrastructureModule,
            imports: [persitenceModule],
            exports: [persitenceModule]
        }
    }
}