import { Component, OnInit } from '@angular/core';
import { StudentProfile } from '../services/profile/profile';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  studentProfile: StudentProfile;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.studentProfile = this.profileService.getStudentProfile();
    console.log(this.studentProfile);
  }

}
