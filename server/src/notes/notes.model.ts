import { Column, Model, Table, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import {NotesCreationAttrs} from "../helper/types";

@Table({ tableName: 'notes' })
export class Note extends Model<Note, NotesCreationAttrs> {

    @Column({ type: DataTypes.STRING(50), unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataTypes.STRING(50), allowNull: false })
    name: string;

    @Column({ type: DataTypes.STRING(50), allowNull: false })
    category: string;

    @Column({ type: DataTypes.TEXT, allowNull: true })
    content: string;

    @Column({ type: DataTypes.STRING(50), allowNull: true })
    dates: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: false })
    archived: boolean;

    @CreatedAt
    @Column({ type: DataTypes.DATE, field: 'created', allowNull: true })
    createdAt: Date;

    @UpdatedAt
    @Column({ type: DataTypes.DATE, field: 'updated', allowNull: true })
    updatedAt: Date;
}
