/* eslint-disable*/
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubmissionItemsService } from './submission-items.service';

@Controller('submission-items')
export class SubmissionItemsController {
  constructor(private readonly submissionItemsService: SubmissionItemsService) {}

  @Get()
  findAll() {
    return this.submissionItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submissionItemsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.submissionItemsService.remove(+id);
  }
}
