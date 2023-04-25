import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "src/entities/student";
import { Repository } from "typeorm";
import { SaveStudentCommand } from "../impl/save-student.command";

@CommandHandler(SaveStudentCommand)
export class SaveStudentHandler implements ICommandHandler<SaveStudentCommand> {

    constructor(
        @InjectRepository(Student) private studentRepo: Repository<Student>,
      ) {}
    async execute(command: SaveStudentCommand) {
        var student = new Student();
        student.card_id = command.card_id;
        student.student_id = command.student_id;
        student.name = command.name;
        await this.studentRepo.insert(student);
    }
}
