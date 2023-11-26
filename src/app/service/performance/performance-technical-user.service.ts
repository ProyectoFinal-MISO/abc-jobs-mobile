import { Injectable } from '@angular/core';
import { PerformanceResults } from 'src/app/model/performance/performance-results';

@Injectable({
  providedIn: 'root'
})
export class PerformanceTechnicalUserService {

  private performanceResults: PerformanceResults[] = [];

  constructor() {
    this.createDefaultPerformanceResults();
  }

  private createDefaultPerformanceResults(): void {

    const performanceResultCompanyA = new PerformanceResults(
      'Company A',
      '123456789',
      '3',
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyA);

    const performanceResultCompanyB = new PerformanceResults(
      'Company B',
      '123456789',
      '4',
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyB);

    const performanceResultCompanyC = new PerformanceResults(
      'Company C',
      '123456789',
      '1',
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyC);

    const performanceResultCompanyD = new PerformanceResults(
      'Company D',
      '123456789',
      '2',
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyD);

    const performanceResultCompanyE = new PerformanceResults(
      'Company E',
      '123456789',
      '1',
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyE);

  }

  createPerformanceResults(newPerformance: PerformanceResults): { success: boolean, error?: string }{
    console.log(this.performanceResults)
    this.performanceResults.push(newPerformance);
    return { success: true };
  }

  getPerformanceResultsByTechnicalId(technicalId: string): PerformanceResults[] {
    return this.performanceResults.filter(result => result.technicalIdentifier === technicalId);
  }

}
