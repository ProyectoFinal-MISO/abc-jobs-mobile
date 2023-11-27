import { InterviewResult } from "./interview-result";

export class Interview{

    constructor(
        public id: number,
        public employeeId: string,
        public title: string,
        public description: string,
        public companyName: string,
        public guest: string,
        public startDay: string,
        public endDay: string,
        public place: string,
        public link: string,
        public result: InterviewResult
    ){}

}