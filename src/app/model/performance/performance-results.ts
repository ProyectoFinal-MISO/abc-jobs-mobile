import { TestStatus } from "../test-status";

export class PerformanceResults{

    constructor(
        public companyName: string,
        public technicalIdentifier: string,
        public score: string,
        public status: TestStatus,
        public observations: string,
    ){}

}