import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { NotesService } from './notes.service';
import {CreateNoteDto} from "../helper/noteDTO";


@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @Post()
    create(@Body(new ValidationPipe()) newNote: CreateNoteDto) {
        return this.notesService.addNote(newNote);
    }

    @Patch('/:id')
    editNote(@Param('id') id: string, @Body(new ValidationPipe()) newNote: CreateNoteDto) {
        return this.notesService.editNote(id, newNote);
    }

    @Get('/stats')
    getStatsNode() {
        return this.notesService.getStats();
    }

    @Get()
    getAll() {
        return this.notesService.getAllNote();
    }

    @Delete('/:id')
    deleteNote(@Param('id') id: string) {
        return this.notesService.deleteNote(id);
    }

    @Get('/:id')
    getNoteById(@Param('id') id: string) {
        return this.notesService.getNoteById(id);
    }
}
