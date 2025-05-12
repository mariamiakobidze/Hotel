import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllRooms() {
    return this.http.get("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
  }

  filterRooms(body:any) {
    return this.http.post("https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered", body)
  }

gethotels(){
  return this.http.get("https://hotelbooking.stepprojects.ge/api/Hotels/")
}

    baseBookedUrl: string = "https://hotelbooking.stepprojects.ge/api/Booking"


    getRooms() {
       return this.http.get("https://hotelbooking.stepprojects.ge/api/Booking")
    }

    postRoom(data:any) {
        return this.http.post("https://hotelbooking.stepprojects.ge/api/Booking", data)
    }

    deleteRoom(id: any){
        return this.http.delete("https://hotelbooking.stepprojects.ge/api/Booking" + "/" + id, {responseType: "text"})
    }
}



