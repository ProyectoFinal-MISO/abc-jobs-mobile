import { PersonalSkill } from "../user/technical/personal-skill";
import { ProgrammingLanguageData } from "../user/technical/programming-languages";
import { Status } from "./status";
import { Team } from "./team";


export class Project{

    constructor(
        public projectName: string,
        public teams: Team[],
        public status: Status,
        public description: string,
        public personalSkills: PersonalSkill[],
        public technicalSkills: ProgrammingLanguageData[]

    ){}

}