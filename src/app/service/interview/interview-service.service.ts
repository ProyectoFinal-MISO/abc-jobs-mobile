import { Injectable } from '@angular/core';
import { Interview } from 'src/app/model/interview/interview';
import { TestStatus } from 'src/app/model/test-status';

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

  getInterviewsByEmployeeIdForTest(employeeId: string): any[] {
    return this.entrevistas.filter(
      entrevista => entrevista.employeeId === employeeId && entrevista.status === TestStatus.Finished
    );
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
  
    if (index !== -1 && this.entrevistas[index].status === TestStatus.Qualified) {
      this.entrevistas.splice(index, 1);
      this.entrevistasConResultados.push(entrevista);
      return { success: true };
    }
  
    return { success: false, error: "The interview is not Qualified." };
  }


  getInterviewsWithResultsByEmployeeUserId(employeeUserId: string): any[] {
    return this.entrevistasConResultados.filter(entrevista => entrevista.employeeId === employeeUserId);
  }

  getInterviewsWithResultsByTechnicalUserId(technicalUserId: string): any[] {
    return this.entrevistasConResultados.filter(entrevista => entrevista.guest === technicalUserId);
  }

  getLastThreeInterviewsByEmployeeId(employeeId: string): any[] {
    const interviews = this.getInterviewsByEmployeeId(employeeId);
    return interviews.slice(-3);
  }

  getLastThreeFinishedInterviewsByEmployeeId(employeeId: string): any[] {
    const interviews = this.getInterviewsByEmployeeIdForTest(employeeId);
    return interviews.slice(-3);
  }

  getLastInterviewsByTechnicalUserId(technicalUserId: string): any[] {
    const interviews = this.getInterviewsByTechnicalUserId(technicalUserId);
    return interviews.slice(-3);
  }

  getLastThreeInterviewsWithResultsByEmployeeUserId(employeeUserId: string): any[] {
    const interviews = this.getInterviewsWithResultsByEmployeeUserId(employeeUserId);
    return interviews.slice(-3);
  }

  getLastThreeInterviewsWithResultsByTechnicalUserId(technicalUserId: string): any[] {
    const interviews = this.getInterviewsWithResultsByTechnicalUserId(technicalUserId);
    return interviews.slice(-3);
  }

}
