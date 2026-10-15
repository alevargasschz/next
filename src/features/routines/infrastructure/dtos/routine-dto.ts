export interface RoutineResponseDTO {
    id: number;
    name: string;
    description?: string;
}

export interface CreateRoutineRequestDTO {
    name: string;
    description?: string;
    userId: number;
}

export interface UpdateRoutineRequestDTO {
    id: number;
    name?: string;
    description?: string;
}