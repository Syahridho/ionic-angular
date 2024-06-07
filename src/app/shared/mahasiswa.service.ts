import { Injectable } from '@angular/core';
import { Mahasiswa } from './mahasiswa';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class MahasiswaService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: Mahasiswa) {
    return this.bookingListRef.push({
      nim: apt.nim,
      name: apt.name,
      jurusan: apt.jurusan,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/mahasiswa/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/mahasiswa');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id: any, apt: Mahasiswa) {
    return this.bookingRef.update({
      nim: apt.nim,
      name: apt.name,
      jurusan: apt.jurusan,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/mahasiswa/' + id);
    this.bookingRef.remove();
  }
}
