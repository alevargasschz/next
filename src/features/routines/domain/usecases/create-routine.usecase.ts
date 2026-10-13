import { Routine } from "../entities/routines";
import { CreateRoutineParams, IRoutinesRepository } from "../repositories/routine.repository";

export class CreateRoutineUseCase {
    constructor(private readonly routinesRepository: IRoutinesRepository) { }

    async execute(routine: CreateRoutineParams): Promise<Routine> {
        return await this.routinesRepository.create(routine);
    }
}