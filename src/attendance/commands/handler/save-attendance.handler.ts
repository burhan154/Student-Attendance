import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Attendance } from "src/entities/attendance";
import { Repository } from "typeorm";
import { SaveAttendanceCommand } from "../impl/save-attendance.command";

@CommandHandler(SaveAttendanceCommand)
export class SaveAttendanceHandler implements ICommandHandler<SaveAttendanceCommand> {

    constructor(
        @InjectRepository(Attendance) private attendanceRepo: Repository<Attendance>,
      ) {}
    async execute(command: SaveAttendanceCommand) {
        var attendance = new Attendance();
        attendance.card_id = command.card_id;
        attendance.date = command.date;
        attendance.reader_id = command.reader_id;
        await this.attendanceRepo.insert(attendance);
    }
}
