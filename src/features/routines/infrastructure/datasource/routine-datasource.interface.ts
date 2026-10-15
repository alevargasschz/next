import { CreateRoutineRequestDTO, RoutineResponseDTO, UpdateRoutineRequestDTO } from "../dtos/routine-dto";

export interface IRoutinesDatasource {
    fetchAllRoutines(): Promise<RoutineResponseDTO[]>;
    fetchRoutineById(id: number): Promise<RoutineResponseDTO | null>;
    createRoutine(routine: CreateRoutineRequestDTO): Promise<RoutineResponseDTO>;
    updateRoutine(routine: UpdateRoutineRequestDTO): Promise<RoutineResponseDTO>;
    deleteRoutine(id: number): Promise<void>;
}