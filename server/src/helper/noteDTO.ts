import { IsString, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNoteDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    created: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsString()
    content: string;

    @IsString()
    @IsOptional()
    dates: string;

    @IsBoolean()
    archived: boolean;
}