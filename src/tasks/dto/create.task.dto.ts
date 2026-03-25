import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString({ message: "O nome da tarefa deve ser uma string" })
    @MinLength(5, { message: "O nome da tarefa deve conter pelo menos 5 caracteres" })
    @IsNotEmpty({ message: "O nome da tarefa é obrigatório" })
    readonly name: string;
    @IsString({ message: "A descrição da tarefa deve ser uma string" })
    @MinLength(10, { message: "A descrição da tarefa deve conter pelo menos 10 caracteres" })
    @IsNotEmpty({ message: "A descrição da tarefa é obrigatória" })
    readonly description: string;
}