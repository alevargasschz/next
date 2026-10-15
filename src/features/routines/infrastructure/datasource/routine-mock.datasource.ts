import { CreateRoutineRequestDTO, RoutineResponseDTO } from "../dtos/routine-dto";

export class RoutineMockDatasource {
    private routines: RoutineResponseDTO[] = [
        {
            id: 1,
            name: "Rutina 1",
            description: "Descripción de la rutina 1"
        },
        {
            id: 2,
            name: "Rutina 2",
            description: "Descripción de la rutina 2"
        },
        {
            id: 3,
            name: "Rutina 3",
            description: "Descripción de la rutina 3"
        }
    ];

    async fetchRoutines(): Promise<RoutineResponseDTO[]> {
        return [...this.routines];
    }

    createRoutines(routine: CreateRoutineRequestDTO): Promise<RoutineResponseDTO> {
        const nextID = this.routines.length + 1;
        const newRoutine: RoutineResponseDTO = {
            id: nextID,
            name: routine.name,
            description: routine.description ?? "Descripción no especificada"
        };
        this.routines.push(newRoutine);
        return Promise.resolve(newRoutine);
    }
}