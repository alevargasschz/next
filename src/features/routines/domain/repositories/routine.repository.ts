import { Routine } from "../entities/routines";

export interface CreateRoutineParams {
    name: string;
    description?: string;
}

export interface IRoutinesRepository {
    create(routine: CreateRoutineParams): Promise<Routine>;
    findById(id: number): Promise<Routine | null>;
    findAll(): Promise<Routine[]>;
    update(routine: Routine): Promise<Routine>;
    delete(id: number): Promise<void>;
}