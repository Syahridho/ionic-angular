import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MahasiswaService } from './../../shared/mahasiswa.service';
@Component({
  selector: 'app-create-mahasiswa',
  templateUrl: './create-mahasiswa.page.html',
  styleUrls: ['./create-mahasiswa.page.scss'],
})
export class CreateMahasiswaPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private aptService: MahasiswaService,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit() {
    this.bookingForm = this.fb.group({
      nim: [''],
      name: [''],
      jurusan: [''],
    });
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      return this.aptService
        .createBooking(this.bookingForm.value)
        .then((res) => {
          console.log(res);
          this.bookingForm.reset();
          this.router.navigate(['/login']);
        })
        .catch((error) => console.log(error));
    }
  }
}
