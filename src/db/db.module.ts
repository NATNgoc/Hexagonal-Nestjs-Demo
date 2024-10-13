import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({})
export class DbModule {
    static forRoot(driver: 'orm' | 'in-memory') {
        const imports = driver === 'orm' 
        ? [
            TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost', 
                port: 5432,
                username: 'admin',
                password: 'admin',
                database: 'postgres',
                autoLoadEntities: true,
                synchronize: true
            })
        ]
        : []
        return {
            module: DbModule,
            imports
        }
    }
}
