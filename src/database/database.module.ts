/* eslint-disable */
//src/database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {User} from '../users/entities/user.entity'
import { Workspaces } from 'src/workspaces/entities/workspaces.entity';
import {Voucher} from '../vouchers/entities/voucher.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [User,Workspaces, Voucher],

        synchronize: false, // Be cautious about using synchronize in production
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}