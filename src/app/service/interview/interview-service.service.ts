import { Injectable } from '@angular/core';
import { Interview } from 'src/app/model/interview/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  
  public entrevistas: Interview[] = [
    {
      employeeId: '123456789',
      title: 'Test',
      description: 'test',
      companyName: 'Company A',
      guest: '123456789',
      startDay: "02/05/2021, 17:21:00",
      endDay: "02/05/2021, 17:30:00",
      place: 'Virtual',
      link: 'link',
      result: []
    },
    {
      employeeId: '123456789',
      title: 'Test',
      description: 'test',
      companyName: 'Company A',
      guest: '123456789',
      startDay: "02/05/2021, 17:21:00",
      endDay: "02/05/2021, 17:30:00",
      place: 'Virtual',
      link: 'link',
      result: []
    },
    {
      employeeId: '123456789',
      title: 'Test',
      description: 'test',
      companyName: 'Company A',
      guest: '123456789',
      startDay: "02/05/2021, 17:21:00",
      endDay: "02/05/2021, 17:30:00",
      place: 'Virtual',
      link: 'link',
      result: []
    },
    {
      employeeId: '123456789',
      title: 'Test',
      description: 'test',
      companyName: 'Company A',
      guest: '1018511141',
      startDay: "02/05/2021, 17:21:00",
      endDay: "02/05/2021, 17:30:00",
      place: 'Virtual',
      link: 'link',
      result: []
    },
    {
      employeeId: '123456789',
      title: 'Test',
      description: 'test',
      companyName: 'Company A',
      guest: '1018511141',
      startDay: "02/05/2021, 17:21:00",
      endDay: "02/05/2021, 17:30:00",
      place: 'Virtual',
      link: 'link',
      result: []
    }

  ]; 

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
    this.entrevistas =interviews;
  }

}
