import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlarmModule } from 'src/alarm/application/alarm.module';
import { AlarmInfrastructureModule } from 'src/alarm/infrastructure/alarm-infrastructure.module';
import { DbModule } from 'src/db/db.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static register(options: 'orm' | 'in-memory') {
    return {
      module: AppModule,
      imports: [
        DbModule.forRoot(options),
        AlarmModule.withInfrashtructure(
          AlarmInfrastructureModule.use(options)
        )
        
      ]
    }
  }
}
