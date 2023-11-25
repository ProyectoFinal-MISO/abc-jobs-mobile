import { UserType } from "../user-type";
import { AdditionalData } from "./additional-data";

export class TechnicalUser {
    constructor(
        public email: string,
        public username: string,
        public password: string,
        public name: string,
        public lastName: string,
        public userType: UserType,
        public identificationType: string,
        public identification: string,
        public birthdate: string,
        public genre: string,
        public phone: string,
        public mobile: string,
        public country: string,
        public state: string,
        public city: string,
        public address: string,
        public additionalData: AdditionalData,
        public personalSkills: any[],
        public academicData: any[],
        public professionalData: any[],
        public programmingLanguages: any[],
        public languages: any[]
      ) {}

}