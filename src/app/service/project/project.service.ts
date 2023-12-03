import { Injectable } from '@angular/core';
import { Company } from 'src/app/model/project/company';
import { Participant } from 'src/app/model/project/participant';
import { Project } from 'src/app/model/project/project';
import { Status } from 'src/app/model/project/status';
import { Team } from 'src/app/model/project/team';
import { PersonalSkill } from 'src/app/model/user/technical/personal-skill';
import { ProgrammingLanguageData } from 'src/app/model/user/technical/programming-languages';
import { TechnicalUser } from 'src/app/model/user/technical/technical';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private companies: Company[] = [];

  constructor() {
    this.initializeFakeData();
    console.log("COMPANIES:", this.companies)
  }

  private initializeFakeData(): void {
    const companyNames = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'];

    for (const companyName of companyNames) {
      const projects: Project[] = this.generateFakeProjects();
      const company = new Company(companyName, projects);
      this.companies.push(company);
    }
  }

  private getRandomName(): string {
    const names = ['John', 'Jane', 'Michael', 'Emma', 'Robert', 'Olivia', 'William', 'Ava'];
    return names[Math.floor(Math.random() * names.length)];
  }

  private getRandomLastName(): string {
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson'];
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  }

  private getRandomRole(): string {
    const roles = ['Engineer', 'Designer', 'Developer', 'Manager', 'Analyst'];
    return roles[Math.floor(Math.random() * roles.length)];
  }

  private getRandomTeamName(): string {
    const teamNames = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];
    return teamNames[Math.floor(Math.random() * teamNames.length)];
  }

  private getRandomSkills(): string {
    const teamNames = ['TeamWork', 'Communication', 'Discipline', 'Leadership', 'Adaptability'];
    return teamNames[Math.floor(Math.random() * teamNames.length)];
  }

  private getRandomProgrammingLanguages(): string {
    const teamNames = ['Java', 'Python', 'Typescript', 'Go', 'Javascript'];
    return teamNames[Math.floor(Math.random() * teamNames.length)];
  }

  private generateFakeSkills(): PersonalSkill[] {
    const skills: PersonalSkill[] = [];
  
    for (let i = 1; i <= 2; i++) {
      const skillName = this.getRandomSkills();
      const skillScore = this.getRandomScore();
      const skill = new PersonalSkill(skillName, skillScore);
      skills.push(skill);
    }
  
    return skills;
  }
  
  private generateFakeLanguages(): ProgrammingLanguageData[] {
    const languages: ProgrammingLanguageData[] = [];
  
    for (let i = 1; i <= 2; i++) {
      const languageName = this.getRandomProgrammingLanguages();
      const languageScore = this.getRandomScore();
      const language = new ProgrammingLanguageData(languageName, languageScore);
      languages.push(language);
    }
  
    return languages;
  }
  
  private getRandomScore(): string {
    return (Math.floor(Math.random() * 5) + 1).toString();
  }

  private generateFakeProjects(): Project[] {
    const projects: Project[] = [];

    for (let i = 1; i <= 3; i++) {
      const projectName = `Project ${i}`;
      const project = new Project(
        projectName,
        this.generateFakeTeams(),
        Status.Active,
        `Description about the Project ${i}`,
        this.generateFakeSkills(),
        this.generateFakeLanguages()
      );
      projects.push(project);
    }

    const projectFinish = new Project(
      'Project Finish',
      this.generateFakeTeams(),
      Status.Finished,
      'Description about the Project',
      this.generateFakeSkills(),
      this.generateFakeLanguages()
    );

    projects.push(projectFinish);
    return projects;
  }

  private generateFakeTeams(): Team[] {
    const teams: Team[] = [];

    for (let i = 1; i <= 3; i++) {
      const teamName = this.getRandomTeamName();
      const participants: Participant[] = this.generateFakeParticipants();
      const team = new Team(teamName, participants, []);
      teams.push(team);
    }

    return teams;
  }

  private generateFakeParticipants(): Participant[] {
    const participants: Participant[] = [];

    for (let i = 1; i <= 3; i++) {
      const participant = new Participant(
        this.getRandomName(),
        this.getRandomLastName(),
        this.getRandomRole(),
        this.generateFakeSkills(),
        this.generateFakeLanguages()
      );
      participants.push(participant);
    }

    return participants;
  }

  getAllCompanies(): Company[] {
    const activeCompanies: Company[] = [];

    this.companies.forEach(company => {
      const activeProjects = company.projects.filter(project => project.status === Status.Active);

      if (activeProjects.length > 0) {
        const companyCopy = { ...company, projects: activeProjects };
        activeCompanies.push(companyCopy);
      }
    });

    return activeCompanies;
  }

  getProjectsForTechnicalUser(technicalUserId: string): Project[] {
    const projectsForTechnicalUser: Project[] = [];

    this.companies.forEach(company => {
      company.projects.forEach(project => {
        project.teams.forEach(team => {
          if (team.technicalResourcesAssociated.some(resource => resource.identification === technicalUserId)) {
            const projectCopy = { ...project, teams: [team] };
            projectsForTechnicalUser.push(projectCopy);
          }
        });
      });
    });

    return projectsForTechnicalUser;
  }

  addTechnicalUserToProject(companyName: string, projectName: string, teamName: string, technicalUser: TechnicalUser): { success: boolean, error?: string } {
    console.log(this.companies)
    const company = this.companies.filter(c => c.companyName === companyName)[0];  

    if (!company) {
      return { success: false, error: "Company not found." };
    }
  
    const project = company.projects.filter(p => p.projectName === projectName)[0]; 
  
    if (!project) {
      return { success: false, error: "Project not found." };
    }
  
    const existingTeam = project.teams.filter(t => t.teamName === teamName)[0];
  
    if (existingTeam) {
      if (existingTeam.technicalResourcesAssociated.some(resource => resource.identification === technicalUser.identification)) {
        return { success: false, error: "This user is already associated with this team." };
      }
  
      if (project.teams.some(t => t !== existingTeam && t.technicalResourcesAssociated.some(resource => resource.identification === technicalUser.identification))) {
        return { success: false, error: "This user has already been assigned to another team in this project." };
      }
  
      existingTeam.technicalResourcesAssociated.push(technicalUser);
      return { success: true };
    } else {
      return { success: false, error: "Team not found in this project" };
    }
  }

}
