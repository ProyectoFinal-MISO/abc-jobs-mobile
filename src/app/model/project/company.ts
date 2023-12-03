import { Project } from "./project";

export class Company{

    constructor(
        public companyName: string,
        public projects: Project[]
    ){}

}