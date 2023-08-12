export interface NotesCreationAttrs {
    id: string,
    name: string,
    created: string;
    category: string,
    content: string,
    dates: string,
    archived: boolean
}

export interface NewNoteType {
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string | null;
    archived: boolean;
}