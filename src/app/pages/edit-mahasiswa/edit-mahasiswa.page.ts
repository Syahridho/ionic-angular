import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MahasiswaService } from './../../shared/mahasiswa.service';
@Component({
  selector: 'app-edit-mahasiswa',
  templateUrl: './edit-mahasiswa.page.html',
  styleUrls: ['./edit-mahasiswa.page.scss'],
})
export class EditMahasiswaPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;
  constructor(
    private aptService: MahasiswaService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService
      .getBooking(this.id)
      .valueChanges()
      .subscribe((res) => {
        this.updateBookingForm.setValue(res);
      });
  }
  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      name: [''],
      nim: [''],
      jurusan: [''],
    });
    console.log(this.updateBookingForm.value);
  }
  updateForm() {
    this.aptService
      .updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }
}
