import { Injectable } from "@nestjs/common";
import { Alarm } from "src/alarm/domain/alarm";

@Injectable()
export abstract class AlarmRepository {
  abstract findAll(): Promise<Alarm[]>;
  abstract save(alarm: Alarm): Promise<Alarm>;
}