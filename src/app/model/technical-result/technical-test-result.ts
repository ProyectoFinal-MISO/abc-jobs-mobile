import { TestStatus } from "../test-status";

export class TechnicalTestResult{

    constructor(
        public testType: string,
        public companyName: string,
        public status: TestStatus,
        public score: number,
        public observations: string
    ){}

}