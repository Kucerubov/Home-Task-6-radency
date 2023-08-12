import {Injectable} from '@nestjs/common';
import {Note} from "./notes.model";
import {InjectModel} from "@nestjs/sequelize";
import { v4 as uuidv4 } from 'uuid';
import {NewNoteType, NotesCreationAttrs} from "../helper/types";

@Injectable()
export class NotesService {
    constructor(@InjectModel(Note) private noteRepository: typeof Note) {}
    private transformToNotesCreationAttrs(newNote: NewNoteType): NotesCreationAttrs {
        return {
            id: uuidv4(),
            ...newNote
        };
    }

    async addNote(newNote: NewNoteType) {
        const noteCreationAttrs = this.transformToNotesCreationAttrs(newNote);
        return await this.noteRepository.create(noteCreationAttrs);
    }

    async getAllNote() {
        return await this.noteRepository.findAll();
    }

    async deleteNote(id: string) {
        const noteToDelete = await this.noteRepository.findByPk(id);
        if (!noteToDelete) {
            return null;
        }
        return await noteToDelete.destroy();
    }

    async getStats(){
        const categoryData: { [category: string]: { active: number; archived: number } } = {};
        const data: Note[] = await this.noteRepository.findAll();

        data.forEach(note => {
            const category = note.category;
            if (!categoryData[category]) {
                categoryData[category] = { active: 0, archived: 0 };
            }

            if (!note.archived) {
                categoryData[category].active++;
            } else {
                categoryData[category].archived++;
            }
        });

        return Object.keys(categoryData).map(category => ({
            category,
            activeCount: categoryData[category].active,
            archivedCount: categoryData[category].archived
        }));
    }


    async getNoteById(id: string) {
        return await this.noteRepository.findByPk(id);
    }

    async editNote(id: string, data: NewNoteType) {
        const updatedNote = await Note.findByPk(id);
        if (!updatedNote) {
            return null;
        }
        await updatedNote.update(data);
        return updatedNote;
    }

}
