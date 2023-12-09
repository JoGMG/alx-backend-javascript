/**
 * Create the `DirectorInterface` interface with the 3 expected methods:
 * - `workFromHome()` returning a string
 * - `getCoffeeBreak()` returning a string
 * - `workDirectorTasks()` returning a string
 * Create the `TeacherInterface` interface with the 3 expected methods:
 * - `workFromHome()` returning a string
 * - `getCoffeeBreak()` returning a string
 * - `workTeacherTasks()` returning a string
 * Create a class `Director` that will implement `DirectorInterface`
 * - `workFromHome` should return the string `Working from home`
 * - `getToWork` should return the string `Getting a coffee break`
 * - `workDirectorTasks` should return the string `Getting to director tasks`
 * Create a class `Teacher` that will implement `TeacherInterface`
 * - `workFromHome` should return the string `Cannot work from home`
 * - `getCoffeeBreak` should return the string `Cannot have a break`
 * - `workTeacherTasks` should return the string `Getting to work`
 * Create a function `createEmployee` with the following requirements:
 * - It can return either a `Director` or a `Teacher` instance
 * - It accepts 1 arguments:
 *   • `salary`(either number or string)
 * - if `salary` is a number and less than 500 - It should return a new
 *   `Teacher`. Otherwise it should return a `Director`
 */

export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(employee: (Director | Teacher)): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

export type Subjects = ('Math' | 'History');

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}
