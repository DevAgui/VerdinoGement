import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment-model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
 
  private _assignments: Assignment[] = [
    {
      id: 1,
      personId: 1,
      taskId: 1,
    },
    {
      id: 2,
      personId: 2,
      taskId: 2,
    },
    {
      id: 3,
      personId: 3,
      taskId: 3,
    }

  ]
  id: number = this._assignments.length + 1;
  getAssignments() {
    return this._assignments;
  }

  getAssignmentsById(id: number): Assignment {
    return this._assignments[id];
  }

  addAssignment(assignment: Assignment) {
    assignment.id = this.id++;
    this._assignments.push(assignment);
  }
  constructor() { }
  updateAssignment(assignments: Assignment) {
    console.log(this._assignments.find(p => p.id == assignments.id));

    var assign = this._assignments.find(p => p.id == assignments.id);
    if (assignments) {
      assign.personId = assignments.personId;
      assign.taskId = assignments.taskId;

    }
  }

  deleteAssignmentById(id: number) {
    this._assignments = this._assignments.filter(p => p.id != id);
  }
}
