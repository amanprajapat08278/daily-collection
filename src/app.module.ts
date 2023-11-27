import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_URL } from './modules/common/provider/database.providers';

@Module({
  imports: [MongooseModule.forRoot(DATABASE_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
