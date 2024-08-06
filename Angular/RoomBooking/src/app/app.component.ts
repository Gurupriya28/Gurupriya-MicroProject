import { Component } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './model/booking';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoomBooking';

  booking: Booking;
  result:string;
  roomArr:Booking[];
  flag:boolean;

  constructor(private service : BookingService){
   this.booking=new Booking();
   this.result="";
   this.roomArr=[];
   this.flag=false;
  }

  insertRoom(data : any){
   this.booking.id=data.roomId;
   this.booking.roomType=data.roomType;
   this.booking.bookedby=data.bookedby;
   this.booking.bookedon=data.bookedon;
   this.booking.duration=data.duration;
   this.booking.amount=data.amount;
   this.result=this.service.insertRoom(this.booking);
   // alert(data.empId+" "+data.empName+" "+data.empSalary);

  }

  updateRoom(data : any){
    this.booking.id=data.roomId;
    this.booking.roomType=data.roomType;
    this.booking.bookedby=data.bookedby;
    this.booking.bookedon=data.bookedon;
    this.booking.duration=data.duration;
    this.booking.amount=data.amount;
   this.result=this.service.updateRoom(this.booking);
   

  }
  deleteRoom(data:any){
   this.result=this.service.deleteRoom(data.roomId);
  }
  findRoom(data:any){
   this.booking=this.service.findRoom(data.roomId);
   this.result=this.booking.id+" " + this.booking.roomType + " " + this.booking.bookedby + " " + this.booking.bookedon
   + " " + this.booking.duration + " " + this.booking.amount;
  }
  findAllRoom(){
   this.roomArr=this.service.findAllRoom();
   this.flag=true;
 }
}
