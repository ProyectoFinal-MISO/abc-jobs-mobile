import { Injectable } from '@angular/core';
import { TechnicalTest } from 'src/app/model/technical-test/technical-test';
import { TechnicalTestResult } from 'src/app/model/technical-test/technical-test-result';
import { TechnicalTestType } from 'src/app/model/technical-test/technical-test-type';
import { TestStatus } from 'src/app/model/test-status';

@Injectable({
  providedIn: 'root'
})
export class TechnicalTestService {

  public technicalTests: TechnicalTest[] = []; 

  public technicalTestWithResults: TechnicalTest[] = [];

  constructor() { 
    this.createDefaultTechnicalTests();
  }

  private createDefaultTechnicalTests(): void {

    for (let i = 1; i <= 3; i++) {
      const technicalTestA = new TechnicalTest(
        i,
        "1234567890",
        TechnicalTestType.BackTest,
        "Company A",
        "1234567890",
        TestStatus.Created,
        new TechnicalTestResult(0, '')
      );

      this.technicalTests.push(technicalTestA);
    }

    for (let i = 4; i <= 6; i++) {
      const technicalTestB = new TechnicalTest(
        i,
        "123456789",
        TechnicalTestType.DataBaseTest,
        "Company B",
        "123456789",
        TestStatus.Created,
        new TechnicalTestResult(0, '')
      );

      this.technicalTests.push(technicalTestB);
    }

    for (let i = 7; i <= 10; i++) {
      const technicalTestC = new TechnicalTest(
        i,
        "123456789",
        TechnicalTestType.FrontMovileTest,
        "Company B",
        "1018511141",
        TestStatus.Created,
        new TechnicalTestResult(0, '')
      );

      this.technicalTests.push(technicalTestC);
    }
    console.log(this.technicalTests);
  }

  getTechnicalTestCreatedByEmployeeId(employeeId: string): any[] {
    return this.technicalTests.filter(technicalTest => technicalTest.employeeId === employeeId);
  }

  getTechnicalTestByTechnicalUserId(technicalUserId: string): any[] {
    return this.technicalTests.filter(technicalTest => technicalTest.technicalResource === technicalUserId);
  }

  getDistinctUserIds(): string[] {
    const userIdsSet = new Set<string>();

    this.technicalTests.forEach(technicalTest => {
      userIdsSet.add(technicalTest.technicalResource);
    });

    return Array.from(userIdsSet);
  }

  createTechnicalTestWithResult(technicalTest: TechnicalTest): { success: boolean, error?: string } {
    const index = this.technicalTests.findIndex(item => item.id === technicalTest.id);
    if (index !== -1) {
      this.technicalTests.splice(index, 1);
      this.technicalTestWithResults.push(technicalTest);
    }
    return { success: true };
  }


  getTechnicalTestWithResultsByEmployeeUserId(employeeUserId: string): any[] {
    return this.technicalTestWithResults.filter(technicalTest => technicalTest.employeeId === employeeUserId);
  }

  getTechnicalTestWithResultsByTechnicalUserId(technicalUserId: string): any[] {
    return this.technicalTestWithResults.filter(technicalTest => technicalTest.technicalResource === technicalUserId);
  }


}
