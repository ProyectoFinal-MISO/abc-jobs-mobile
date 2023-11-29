import { TestStatus } from "../test-status";
import { TechnicalTestResult } from "./technical-test-result";
import { TechnicalTestType } from "./technical-test-type";

export class TechnicalTest{

    constructor(
        public id: number,
        public employeeId: string,
        public testType: TechnicalTestType,
        public companyName: string,
        public technicalResource: string,
        public status: TestStatus,
        public testResult: TechnicalTestResult
    ){}

}