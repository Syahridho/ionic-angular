import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from './../../shared/mahasiswa';
import { MahasiswaService } from './../../shared/mahasiswa.service';
@Component({
  selector: 'app-home',
  templateUrl: 'item-mahasiswa.page.html',
  styleUrls: ['item-mahasiswa.page.scss'],
})
export class ItemMahasiswaPage implements OnInit {
  Bookings: any = [];
  constructor(private aptService: MahasiswaService) {}
  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe((res) => {
      this.Bookings = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Mahasiswa);
      });
    });
  }
  fetchBookings() {
    this.aptService
      .getBookingList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }
  deleteBooking(id: any) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id);
    }
  }
}
