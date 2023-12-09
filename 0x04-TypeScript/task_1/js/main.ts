/**
 * These two attributes below should only be modifiable
 * when a `Teacher` is first initialized:
 * - firstName(string)
 * - lastName(string)
 * This attribute should always be defined:
 * - fullTimeEmployee(boolean)
 * This attribute is optional:
 * - yearsOfExperience(number)
 * This attribute should always be defined:
 * - location(string)
 * Add the possibility to add any attribute to the Object like
 * `contract(boolean)` without specifying the name of the attribute.
 */

export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key:string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassI {
  new (firstName: string, lastName: string): StudentClassII;
}

export interface StudentClassII {
  workOnHomework(): string;
  displayName(): string;
}

export const StudentClass: StudentClassI = class implements StudentClassII {
  firstName;
  lastName;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
