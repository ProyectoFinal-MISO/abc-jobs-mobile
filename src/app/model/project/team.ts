import { TechnicalUser } from "../user/technical/technical";
import { Participant } from "./participant";

export class Team{

    constructor(
        public teamName: string,
        public participants: Participant[],
        public technicalResourcesAssociated: TechnicalUser[],
    ){}

}