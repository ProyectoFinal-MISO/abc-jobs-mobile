import { UserType } from "../user-type";

export class Employee {
    constructor(
      public email: string,
      public password: string,
      public name: string,
      public lastName: string,
      public userType: UserType,
      public identificationType: string,
      public identification: string,
      public phone: string,
      public mobile: string,
      public country: string,
      public state: string,
      public city: string,
      public address: string
    ) {}
  }