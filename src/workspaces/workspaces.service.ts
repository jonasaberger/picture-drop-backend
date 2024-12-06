/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Workspaces } from './entities/workspaces.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from 'rxjs';
import { Like } from 'typeorm';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspaces) private workspaceRepository: Repository<Workspaces>,
  ) {}

  async findAll() : Promise<Workspaces[]>{
    return await this.workspaceRepository.find();
  }
  async GetActiveWorkspaces(): Promise<Workspaces[]> {
    try {
      return await this.workspaceRepository
        .createQueryBuilder('workspace')
        .where('workspace.SubscriptionStatus = :status1 OR workspace.SubscriptionStatus = :status2', {
          status1: 'Active',
          status2: 'SessionPending',
        })
        .getMany();
    } catch (error) {
      console.error('Fehler bei der Abfrage von aktiven Workspaces:', error);
      throw new Error('Fehler bei der Abfrage von aktiven Workspaces');
    }
  }

  async GetInactiveWorkspaces(): Promise<Workspaces[]> {
    try {
      return await this.workspaceRepository
        .createQueryBuilder('workspace')
        .where('workspace.SubscriptionStatus = :status1 OR workspace.SubscriptionStatus = :status2', {
          status1: 'Canceled',
          status2: 'Unpaid',
        })
        .getMany();
    } catch (error) {
      console.error('Fehler bei der Abfrage von aktiven Workspaces:', error);
      throw new Error('Fehler bei der Abfrage von aktiven Workspaces');
    }
  }

  
  

  findOne(id: number) {
    return `This action returns a #${id} workspace`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }
}
