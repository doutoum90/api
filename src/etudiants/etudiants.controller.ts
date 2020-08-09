import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EtudiantsService } from './etudiants.service';

@Controller('etudiants')
export class EtudiantsController {
    constructor(private readonly etudiantServices: EtudiantsService) { }
    @Get()
    getEtudiants() {
        return this.etudiantServices.getAllEtudiants();
    }

    @Get(':id')
    getAllEtudiant(@Param('id') id: string) {
        return this.etudiantServices.getEtudiantBy(id);
    }

    @Post()
    async createEtudiant(@Body() etudiant) {
        const etudiantcree = this.etudiantServices.createEtudiant(etudiant);
        return etudiantcree;
    }

    @Delete(':id')
    deleteEtudiant(@Param(':id') id) {
        return this.etudiantServices.deleteEtudiant(id);
    }

    @Put(':id')
    updateEtudiant(@Param(':id') id, @Param() etudiant) {
        return this.etudiantServices.updateEtudiant(id, etudiant);
    }
}
