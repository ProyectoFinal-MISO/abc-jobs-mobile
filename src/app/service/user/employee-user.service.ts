import { Injectable } from '@angular/core';
import { Employee } from 'src/app/model/user/employee/employee';
import { UserType } from 'src/app/model/user/user-type';

@Injectable({
  providedIn: 'root'
})
export class EmployeeUserService {

  public users: Employee[] = [];
  public userSession: Employee | null = null;

  constructor() {
    this.createDefaultUsers();
  }

  private createDefaultUsers(): void {

    const defaultEmployeeUser = new Employee(
      'test@test.com',
      'test',
      'Jhon',
      'Doe',
      UserType.Employee,
      'CC',
      '123456789',
      '1234567890',
      '9876543210',
      'Colombia',
      'Bogota DC',
      'Bogota',
      'Calle 1 falsa 123'
    );
    this.createUser(defaultEmployeeUser);
  }

  createUser(newUser: Employee): { success: boolean, error?: string } {
    const existingUser = this.users.find(
      user => user.identification === newUser.identification && user.email === newUser.email
    );

    if (existingUser) {
      return { success: false, error: 'User with the same identification and email already exists.' };
    }

    console.log(this.users)
    this.users.push(newUser);
    return { success: true };
  }

  updateUser(updatedUser: Employee): { success: boolean, error?: string } {
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
  

  loginUser(email: string, password: string, userType: UserType): { success: boolean, user?: Employee, error?: string } {
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
    console.log(this.userSession);
  }

  deleteUser(id: string, email: string, password: string): { success: boolean, error?: string } {
    const index = this.users.findIndex(
      user => user.identification === id && user.email === email && user.password === password
    );

    if (index !== -1) {
      this.users.splice(index, 1);

      if (this.userSession && this.userSession.identification === id) {
        this.userSession = null;
      }

      console.log(this.users)
      return { success: true };
    } else {
      return { success: false, error: 'User not found or invalid credentials.' };
    }
  }

  getUserSession(): Employee | null {
    return this.userSession;
  }
}
