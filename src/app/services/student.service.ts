import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student: Student = {
    "studentCode": "6199999999",
    "firstNameThai": "เนสซี่",
    "lastNameThai": "นะจ๊ะ",
    "firstNameEng": "Nessy",
    "lastNameEng": "Naja",
    "facultyCode": "01",
    "facultyNameThai": "คณะนิติศาสตร์",
    "facultyNameEng": "Law Faculty",
    "majorCode": "01",
    "majorNameThai": "สาขานิติศาสตร์",
    "majorNameEng": "Law Major",
  };

  constructor() { }

  getStudent(): Student {
    return this.student;
  }


}
