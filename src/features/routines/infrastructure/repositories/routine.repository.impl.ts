import { Routine } from "../../domain/entities/routines";
import { CreateRoutineParams, IRoutinesRepository } from "../../domain/repositories/routine.repository";
import { IRoutinesDatasource } from "../datasource/routine-datasource.interface";

export class RoutineRepositoryImpl implements IRoutinesRepository {
    constructor(private readonly datasource: IRoutinesDatasource) { }
    
    create(routine: CreateRoutineParams): Promise<Routine> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Routine | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Routine[]> {
        throw new Error("Method not implemented.");
    }
    update(routine: Routine): Promise<Routine> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}