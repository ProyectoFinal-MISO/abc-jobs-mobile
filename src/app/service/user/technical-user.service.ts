import { Injectable } from '@angular/core';
import { AcademicData } from 'src/app/model/user/technical/academic-data';
import { AdditionalData } from 'src/app/model/user/technical/additional-data';
import { Language } from 'src/app/model/user/technical/language';
import { PersonalSkill } from 'src/app/model/user/technical/personal-skill';
import { ProfessionalData } from 'src/app/model/user/technical/professional-data';
import { ProgrammingLanguageData } from 'src/app/model/user/technical/programming-languages';
import { TechnicalUser } from 'src/app/model/user/technical/technical';
import { UserType } from 'src/app/model/user/user-type';

@Injectable({
  providedIn: 'root'
})
export class TechnicalUserService {

  public users: TechnicalUser[] = [];
  public userSession: TechnicalUser | null = null;

  constructor() {
    this.createDefaultUsers();
  }

  private createDefaultUsers(): void {

    const personalSkill1 = new PersonalSkill('Skill1', '3');
    const personalSkill2 = new PersonalSkill('Skill2', '5');

    const language1 = new Language('Language1', '5');
    const language2 = new Language('Language2', '4');

    const programmingLanguage1 = new ProgrammingLanguageData('Language1', '5');
    const programmingLanguage2 = new ProgrammingLanguageData('Language2', '4');

    const academicData1 = new AcademicData('School1', 'Title1', 'High School', '01/01/2020', '01/01/2024');
    const academicData2 = new AcademicData('School2', 'Title2', 'University', '01/01/2018', '01/01/2024');

    const professionalData1 = new ProfessionalData('JobTitle1', 'Company1', 'Details1', '01/01/2020', '01/01/2025');
    const professionalData2 = new ProfessionalData('JobTitle2', 'Company2', 'Details2', '01/01/2015', '01/01/2025');

    const personalSkillList: Array<PersonalSkill> = [personalSkill1, personalSkill2];
    const languageList: Array<Language> = [language1, language2];
    const programminglanguageList: Array<ProgrammingLanguageData> = [programmingLanguage1, programmingLanguage2];
    const academicDataList: Array<AcademicData> = [academicData1, academicData2];
    const professionalDataList: Array<ProfessionalData> = [professionalData1, professionalData2];

    const defaultTechnicalUser = new TechnicalUser(
      'test@test.com',
      'test@test.com',
      'test',
      'Jhon',
      'Doe',
      UserType.TechnicalResource,
      'CC',
      '123456789',
      '01/01/1999',
      'MALE', 
      '1234567890',
      '9876543210',
      'Colombia',
      'Bogota DC',
      'Bogota',
      'Calle 1 falsa 123',
      {
        driverLicense: 'EmployeeLicense',
        transferAvailability: 'YES',
        vehicle: 'EmployeeVehicle',
      },
      personalSkillList,
      academicDataList,
      professionalDataList,
      programminglanguageList,
      languageList
    );
    this.createUser(defaultTechnicalUser);
  }

  createUser(newUser: TechnicalUser): { success: boolean, error?: string } {
    const existingUser = this.users.find(
      user => user.identification === newUser.identification && user.email === newUser.email
    );

    if (existingUser) {
      return { success: false, error: 'User with the same identification and email already exists.' };
    }

    this.users.push(newUser);
    console.log(this.users)
    return { success: true };
  }

  updateUser(updatedUser: TechnicalUser): { success: boolean, error?: string } {
    const userIndex = this.users.findIndex(
      user => (
        user.identification === this.userSession?.identification &&
        user.email === this.userSession?.email &&
        user.password === this.userSession?.password
      )
    );
  
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
  
      this.userSession = { ...this.userSession, ...updatedUser };
  
      console.log(this.userSession);
      return { success: true };
    } else {
      return { success: false, error: 'User not found in the list.' };
    }
  }

  loginUser(email: string, password: string, userType: UserType): { success: boolean, user?: TechnicalUser, error?: string } {
    const user = this.users.find(u => u.email === email && u.password === password && u.userType ===userType);

    if (user) {
      this.userSession = user;
      console.log(this.userSession)
      return { success: true, user: user };
    } else {
      return { success: false, error: 'Invalid email or password.' };
    }
  }

  logout(): void {
    this.userSession = null;
    console.log(this.userSession)
  }

  deleteUser(id: string, email: string, password: string): { success: boolean, error?: string } {
    const index = this.users.findIndex(
      user => user.identification === id && user.email === email && user.password === password
    );

    if (index !== -1) {
      this.users.splice(index, 1);

      if (this.userSession && this.userSession.identification === id) {
        console.log(this.userSession)
        this.userSession = null;
      }

      console.log(this.users)
      return { success: true };
    } else {
      return { success: false, error: 'User not found or invalid credentials.' };
    }
  }

  getUserSession(): TechnicalUser | null {
    console.log(this.userSession)
    return this.userSession;
  }

  getUsersMap(): Map<string, string> {
    const usersMap = new Map<string, string>();

    this.users.forEach(user => {
      const fullName = `${user.name} ${user.lastName}`;
      usersMap.set(fullName, user.identification);
    });

    return usersMap;
  }


  getUsersMapByIds(userIds: string[]): Map<string, string> {
    const usersMap = new Map<string, string>();

    this.users
      .filter(user => userIds.includes(user.identification))
      .forEach(user => {
        const fullName = `${user.name} ${user.lastName}`;
        usersMap.set(fullName, user.identification);
      });

    return usersMap;
  }

  generateGuestsList(): { key: string, value: string }[] {
    const usersMap = this.getUsersMap();
  
    const guestsList = Array.from(usersMap).map(([key, value]) => ({
      key: key,
      value: value
    }));
  
    return guestsList;
  }

}
