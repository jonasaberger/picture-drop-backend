/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Workspaces } from './entities/workspaces.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspaces) private workspaceRepository: Repository<Workspaces>,
  ) {}

  async findAll() : Promise<Workspaces[]>{
    return await this.workspaceRepository.find();
  }

  async findOne(id: string) {
    return await this.workspaceRepository.find();
  }

  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }
}
