import { Injectable } from '@angular/core';
import { Project } from 'src/app/model/project/project';
import { Status } from 'src/app/model/project/status';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [];

  constructor() { }

  getProjectsForTechnicalUser(technicalUserId: string): Project[] {
    const projectsForTechnicalUser: Project[] = [];

    this.projects.forEach(project => {
      project.teams.forEach(team => {
        if (team.technicalResourcesAssociated.some(resource => resource.id === technicalUserId)) {
          // El usuario técnico está asociado al equipo
          const projectCopy = { ...project, teams: [team] };
          projectsForTechnicalUser.push(projectCopy);
        }
      });
    });

    return projectsForTechnicalUser;
  }

  // Método mejorado para asociar un usuario técnico a un proyecto
  addTechnicalUserToProject(companyName: string, projectName: string, teamName: string, technicalUserId: string): string {
    const project = this.projects.find(p =>
      p.companyName === companyName && p.projectName === projectName
    );

    if (!project) {
      return "Error: Proyecto no encontrado.";
    }

    const existingTeam = project.teams.find(t => t.teamName === teamName);

    if (existingTeam) {
      // Validar si el usuario ya está asociado al equipo
      if (existingTeam.technicalResourcesAssociated.some(resource => resource.id === technicalUserId)) {
        return "Error: Este usuario ya está asociado a este equipo.";
      }

      // Validar si el usuario ya está asignado a otro equipo en el mismo proyecto
      if (project.teams.some(t => t !== existingTeam && t.technicalResourcesAssociated.some(resource => resource.id === technicalUserId))) {
        return "Error: Este usuario ya fue asignado a otro equipo en este proyecto.";
      }

      // Agregar el usuario al equipo existente
      existingTeam.technicalResourcesAssociated.push({ id: technicalUserId });
      return "Success: Usuario agregado correctamente al equipo.";
    } else {
      return "Error: Equipo no encontrado en el proyecto.";
    }
  }

}
