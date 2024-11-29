/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module'
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { VouchersModule } from './vouchers/vouchers.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { SubmissionItemsModule } from './submission-items/submission-items.module';

@Module({
  imports: [UsersModule, DatabaseModule, VouchersModule, WorkspacesModule, SubmissionItemsModule],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    VouchersModule,
    WorkspacesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


