import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtudiantsModule } from './etudiants/etudiants.module';
import { MongooseModule } from '@nestjs/mongoose';


// 
@Module({
  imports: [
    EtudiantsModule, 
    MongooseModule.forRoot('mongodb+srv://admin:Moulacharmout1&@cluster0.vszkf.mongodb.net/<dbname>?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
