import { Module } from '@nestjs/common';
import { EtudiantsController } from './etudiants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { etudiantSchema } from './etudiants.model';
import { EtudiantsService } from './etudiants.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'etudiants', schema: etudiantSchema}])],
  controllers: [EtudiantsController],
  providers: [EtudiantsService]
})
export class EtudiantsModule {}
