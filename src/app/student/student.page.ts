import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../services/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  student: Student;

  studentCode: string;
  firstNameThai: string;
  lastNameThai: string;
  firstNameEng: string;
  lastNameEng: string;
  facultyCode: string;
  facultyNameThai: string;
  facultyNameEng: string;
  majorCode: string;
  majorNameThai: string;
  majorNameEng: string;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {

    this.student = this.studentService.getStudent()

    this.studentCode = this.student.studentCode;
    this.firstNameThai = this.student.firstNameThai;
    this.lastNameThai = this.student.lastNameThai;
    this.firstNameEng = this.student.firstNameEng;
    this.lastNameEng = this.student.lastNameEng;
    this.facultyCode = this.student.facultyCode;
    this.facultyNameThai = this.student.facultyNameThai;
    this.facultyNameEng = this.student.facultyNameEng;
    this.majorCode = this.student.majorCode;
    this.majorNameThai = this.student.majorNameThai;
    this.majorNameEng = this.student.majorNameEng;
    
    console.log(this.student);
  }

}
