import { Injectable } from '@angular/core';
import { PerformanceResults } from 'src/app/model/performance/performance-results';
import { TestStatus } from 'src/app/model/test-status';

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
      TestStatus.Qualified,
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyA);

    const performanceResultCompanyAnewUser = new PerformanceResults(
      'Company A',
      '1018511141',
      '3',
      TestStatus.Qualified,
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyAnewUser);

    const performanceResultCompanyB = new PerformanceResults(
      'Company B',
      '123456789',
      '4',
      TestStatus.Qualified,
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyB);

    const performanceResultCompanyBnewUser = new PerformanceResults(
      'Company B',
      '123456789',
      '4',
      TestStatus.Qualified,
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyBnewUser);

    const performanceResultCompanyC = new PerformanceResults(
      'Company C',
      '123456789',
      '1',
      TestStatus.Qualified,
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyC);

    const performanceResultCompanyD = new PerformanceResults(
      'Company D',
      '123456789',
      '2',
      TestStatus.Qualified,
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyD);

    const performanceResultCompanyE = new PerformanceResults(
      'Company E',
      '123456789',
      '1',
      TestStatus.Qualified,
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyE);

    const performanceResultCompanyF = new PerformanceResults(
      'Company F',
      '123456789',
      '5',
      TestStatus.Qualified,
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyF);

    const performanceResultCompanyG = new PerformanceResults(
      'Company G',
      '123456789',
      '5',
      TestStatus.Qualified,
      'Fake Description of performance Results'
    );
    this.createPerformanceResults(performanceResultCompanyG);

  }

  createPerformanceResults(newPerformance: PerformanceResults): { success: boolean, error?: string }{
    console.log(this.performanceResults)
    this.performanceResults.push(newPerformance);
    return { success: true };
  }

  getPerformanceResultsByTechnicalId(technicalId: string): PerformanceResults[] {
    return this.performanceResults.filter(result => result.technicalIdentifier === technicalId);
  }

  getLatestPerformanceResultsByTechnicalId(technicalId: string, count: number = 3): PerformanceResults[] {
    const resultsByTechnicalId = this.getPerformanceResultsByTechnicalId(technicalId);
    const reversedResults = resultsByTechnicalId.reverse();
    return reversedResults.slice(0, count);
  }

}
