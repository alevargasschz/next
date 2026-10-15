export interface IRoutines {
    id: number;
    name: string;
    description: string;
}

export class Routine { 
    readonly id: number;
    readonly name: string;
    readonly description: string;

    constructor(routine: IRoutines) {
        this.id = routine.id;
        this.name = routine.name;
        this.description = routine.description ?? 'Descripcion no especificada';
    }

    validate(routine: IRoutines): boolean {
        if (routine.name.length < 10) {
            throw new Error('Routine name is too short.');
        }
        if (routine.name.length > 100) {
            throw new Error('Routine name is too long.');
        }
        if (routine.description.length > 500) {
            throw new Error('Routine description is too long.');
        }
        return true;
    }
}