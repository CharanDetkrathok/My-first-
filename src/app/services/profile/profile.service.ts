import { Injectable } from '@angular/core';
import { StudentProfile } from './profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private studentProfile: StudentProfile = {
    studentCode: "",
    studentFirstNameThai: "",
    studentFirstNameEng: "",
    studentLastNameThai: "",
    studentLastNameEng: "",
    studentFacultyCode: "",
    studentFacultyThai: "",
    studentFacultyEng: "",
    studentMajorCode: "",
    studentMajorThai: "",
    studentMajorEng: "",
    studentPhone: "",
    studentEmail: "",
    studentStatus: "",
    studentBirthday: "",
  };

  constructor() { }

  getStudentProfile(): StudentProfile {
    let studentProfileResponse: StudentProfile = {
      studentCode: "6099999999",
      studentFirstNameThai: "ราม",
      studentFirstNameEng: "Ram",
      studentLastNameThai: "คำแหง",
      studentLastNameEng: "Khamhaeng",
      studentFacultyCode: "01",
      studentFacultyThai: "คณะนิติศาสตร์",
      studentFacultyEng: "Law faculty",
      studentMajorCode: "01",
      studentMajorThai: "สาขานิติศาสตร์",
      studentMajorEng: "Law major",
      studentPhone: "0912345678",
      studentEmail: "6099999999@rumail.ru.ac.th",
      studentStatus: "A",
      studentBirthday: "01/01/1992",
    }
    return studentProfileResponse;
  }
}
