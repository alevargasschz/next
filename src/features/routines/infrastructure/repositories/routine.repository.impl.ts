import { Routine } from "../../domain/entities/routines";
import { CreateRoutineParams, IRoutinesRepository } from "../../domain/repositories/routine.repository";
import { IRoutinesDatasource } from "../datasource/routine-datasource.interface";
import { RoutineMapper } from "../mappers/routine-mapper";

export class RoutineRepositoryImpl implements IRoutinesRepository {
    constructor(private readonly datasource: IRoutinesDatasource) { }
    
    async create(routine: CreateRoutineParams): Promise<Routine> {
        const DTOToSend = RoutineMapper.toCreateDTO(
            new Routine({ ...routine, description: routine.description ?? "" })
        );
        const createdRoutine = await this.datasource.createRoutine(DTOToSend);
        return RoutineMapper.toDomain(createdRoutine);
    }
    findById(id: number): Promise<Routine | null> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<Routine[]> {
        const routines = await this.datasource.fetchAllRoutines();
        return routines.map(RoutineMapper.toDomain);
    }
    update(routine: Routine): Promise<Routine> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}