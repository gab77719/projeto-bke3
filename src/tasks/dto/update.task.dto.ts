import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateTaskDto {
    @IsOptional()
    @IsString({ message: "O nome da tarefa deve ser uma string" })
    @MinLength(5, { message: "O nome da tarefa deve conter pelo menos 5 caracteres" })
    readonly name?: string;

    @IsOptional()
    @IsString({ message: "A descrição da tarefa deve ser uma string" })
    @MinLength(10, { message: "A descrição da tarefa deve conter pelo menos 10 caracteres" })
    readonly description?: string;

    @IsOptional()
    @IsBoolean()
    readonly completed?: boolean;
}