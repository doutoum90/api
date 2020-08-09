import * as mongoosee from 'mongoose';

export const etudiantSchema = new mongoosee.Schema({
    nom: String,
    prenom1: String,
    prenom2: String,
    age: Number,
    dateNaissance: Date,
    fraisSubsistance: Number,
    note: Number,
});

export interface Etudiant {
    nom: String;
    prenom1: String;
    prenom2: String;
    age: number;
    dateNaissance: Date;
    fraisSubsistance: number;
    note: number;
}

export interface EtudiantModel extends Etudiant, mongoosee.Document {}