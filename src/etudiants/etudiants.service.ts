import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EtudiantModel, Etudiant } from './etudiants.model';

@Injectable()
export class EtudiantsService {

    constructor(@InjectModel('etudiants') private readonly etudiantModel: Model<EtudiantModel>) { }

    async getAllEtudiants() {
        const etudiants = await this.etudiantModel.find().exec();
        return etudiants;
    }

    async getEtudiantBy(id: string) {
        const etudiant = await this.etudiantModel.findOne({ _id: id });
        return etudiant;
    }

    async deleteEtudiant(id: string) {
        const etudiant = await this.etudiantModel.findByIdAndDelete(id);
        return etudiant;
    }

    async updateEtudiant(id: string, etudiant) {
        const updatedEtudiant = await this.etudiantModel.findByIdAndUpdate(id, etudiant)
        return updatedEtudiant;
    }

    async createEtudiant(etudiant) {
        const etudiantModel = new this.etudiantModel({
            nom: etudiant.nom,
            prenom1: etudiant.prenom1,
            prenom2: etudiant.prenom2,
            age: etudiant.age,
            dateNaissance: etudiant.dateNaissance,
            fraisSubsistance: etudiant.fraisSubsistance,
            note: etudiant.note,
        })
        const etudiants = await etudiantModel.save();
        return etudiants;
    }
}
