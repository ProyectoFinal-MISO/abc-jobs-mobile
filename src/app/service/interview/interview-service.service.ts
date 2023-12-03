import { Injectable } from '@angular/core';
import { Interview } from 'src/app/model/interview/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  
  public entrevistas: Interview[] = []; 

  public entrevistasConResultados: Interview[] = [];

  constructor() {
  }

  createInterview(entrevista: Interview): { success: boolean, error?: string } {
    this.entrevistas.push(entrevista);
    return { success: true };
  }

  getInterviews():any[] {
    return this.entrevistas;
  }

  getInterviewsByEmployeeId(employeeId: string): any[] {
    return this.entrevistas.filter(entrevista => entrevista.employeeId === employeeId);
  }

  getInterviewsByTechnicalUserId(technicalUserId: string): any[] {
    return this.entrevistas.filter(entrevista => entrevista.guest === technicalUserId);
  }

  getDistinctUserIds(): string[] {
    const userIdsSet = new Set<string>();

    this.entrevistas.forEach(entrevista => {
      userIdsSet.add(entrevista.guest);
    });

    return Array.from(userIdsSet);
  }

  createInterviewWithResult(entrevista: Interview): { success: boolean, error?: string } {
    const index = this.entrevistas.findIndex(item => item.id === entrevista.id);
    if (index !== -1) {
      this.entrevistas.splice(index, 1);
      this.entrevistasConResultados.push(entrevista);
    }
    return { success: true };
  }


  getInterviewsWithResultsByEmployeeUserId(employeeUserId: string): any[] {
    return this.entrevistasConResultados.filter(entrevista => entrevista.employeeId === employeeUserId);
  }

  getInterviewsWithResultsByTechnicalUserId(technicalUserId: string): any[] {
    return this.entrevistasConResultados.filter(entrevista => entrevista.guest === technicalUserId);
  }

}
