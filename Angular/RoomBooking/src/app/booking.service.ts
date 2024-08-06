import { Injectable } from '@angular/core';
import { Booking } from './model/booking';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  url:string;
  booking: Booking;
  roomArr:Booking[];

  constructor(private http: HttpClient) { 
    this.url="http://localhost:3000/bookings";
    this.booking=new Booking();
    this.roomArr=[];
  }

  insertRoom(booking : Booking){
    this.http.post<Booking>(this.url,booking).subscribe();
    
  
   return "Room Details Added "
  }

  updateRoom(booking: Booking){
    this.http.put<Booking>(this.url+"/"+booking.id , booking).subscribe();
    
  
   return "Room Details Updated"
  }
  deleteRoom(roomId: number){
    this.http.delete<Booking>(this.url+"/"+roomId).subscribe();
    return "Room Details Deleted"
  }

  findRoom(roomId: number){
    this.http.get<Booking>(this.url+"/"+roomId).subscribe(data => this.booking=data);
    return this.booking;
  }
   findAllRoom(){
    this.http.get<Booking[]>(this.url).subscribe(data=>this.roomArr=data);
    return this.roomArr;
   }
}
