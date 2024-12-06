/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Delete } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  findAll() {
    return this.workspacesService.findAll();
  }

  @Get('/active')
  getActiveWorkspaces(){
    return this.workspacesService.GetActiveWorkspaces();
  }
  @Get('/inactive')
  getInactiveWorkspaces(){
    return this.workspacesService.GetInactiveWorkspaces();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workspacesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workspacesService.remove(+id);
  }
}
