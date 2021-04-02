import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../servicios/bike.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes:any; //variable ue contiene la lista de bikes
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.getAllBikes()
  }

  getAllBikes(){
    //llamamos al servicio de bikes que nos trae todo el listado del api rest 
    this.bikeService.getBikes().subscribe(
      data => { this.bikes = data},
      err => { console.log(err) },
      () => console.log('se cargaron las bikes :) '),
    );
  }

}
