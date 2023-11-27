import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_URL } from './modules/common/provider/env.providers';
import { UserModule } from './modules/user/user.module';
import { DB_CONNECTIONS_NAMES } from './modules/common/constants/db-connections-name';

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_URL, {
      connectionName: DB_CONNECTIONS_NAMES.PRIMARY,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
