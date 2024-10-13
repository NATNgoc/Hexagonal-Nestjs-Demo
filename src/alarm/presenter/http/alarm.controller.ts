import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { AlarmService } from 'src/alarm/application/alarm.service';
import { CreateAlarmCommand } from 'src/alarm/application/commands/create-alarm.command';

@ApiTags('alarms')
@Controller('alarm')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new alarm' })
  @ApiBody({ type: CreateAlarmDto })
  @ApiResponse({ status: 201, description: 'The alarm has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmService.create(new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity));
  }

  @Get()
  @ApiOperation({ summary: 'Get all alarms' })
  @ApiResponse({ status: 200, description: 'Return all alarms.' })
  findAll() {
    return this.alarmService.findAll();
  }

  
}
