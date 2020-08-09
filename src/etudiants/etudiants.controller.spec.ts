import { Test, TestingModule } from '@nestjs/testing';
import { EtudiantsController } from './etudiants.controller';

describe('Etudiants Controller', () => {
  let controller: EtudiantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtudiantsController],
    }).compile();

    controller = module.get<EtudiantsController>(EtudiantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
