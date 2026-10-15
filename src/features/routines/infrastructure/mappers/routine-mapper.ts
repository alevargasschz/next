import { Routine } from '../../domain/entities/routines';
import {
  CreateRoutineRequestDTO,
  RoutineResponseDTO,
} from '../dtos/routine-dto';

export class RoutineMapper {
  static toDTO(routine: Routine): CreateRoutineRequestDTO {
    return {
      name: routine.name,
      description: routine.description,
      userId: 1,
    };
  }

  static toDomain(dto: RoutineResponseDTO): Routine {
    return new Routine({
      id: dto.id,
      name: dto.name,
      description: dto.description ?? 'Descripcion no especificada',
    });
  }
}
