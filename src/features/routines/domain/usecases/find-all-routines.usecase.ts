import { Routine } from "../entities/routines";
import { IRoutinesRepository } from "../repositories/routine.repository";

export class FindAllRoutinesUseCase {
    constructor(private readonly routinesRepository: IRoutinesRepository) { }
    async execute(): Promise<Routine[]> {
        return await this.routinesRepository.findAll();
    }
}