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
    console.log(this.entrevistas);
    return { success: true };
  }

  getInterviews():any[] {
    return this.entrevistas;
  }

  getInterviewsByEmployeeId(employeeId: string): any[] {
    console.log(this.entrevistas);
    return this.entrevistas.filter(entrevista => entrevista.employeeId === employeeId);
  }

  getInterviewsByTechnicalUserId(technicalUserId: string): any[] {
    console.log("usuario:",technicalUserId);
    return this.entrevistas.filter(entrevista => entrevista.guest === technicalUserId);
  }

  getDistinctUserIds(): string[] {
    const userIdsSet = new Set<string>();

    this.entrevistas.forEach(entrevista => {
      userIdsSet.add(entrevista.guest);
    });

    return Array.from(userIdsSet);
  }

  setInterviews(interviews: Interview[]): void {
    console.log(interviews);
    this.entrevistas =interviews;
  }

  setInterviewsWithResults(interviewsWithResults: Interview[]): void {
    console.log(interviewsWithResults);
    this.entrevistasConResultados = interviewsWithResults;
  }

  getInterviewsWithResultsByEmployeeUserId(employeeUserId: string): any[] {
    console.log(this.entrevistasConResultados);
    return this.entrevistasConResultados.filter(entrevista => entrevista.employeeId === employeeUserId);
  }

  getInterviewsWithResultsByTechnicalUserId(technicalUserId: string): any[] {
    console.log(this.entrevistasConResultados);
    return this.entrevistasConResultados.filter(entrevista => entrevista.guest === technicalUserId);
  }

}
