import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/servicios/bike.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public user :any;
  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProp(this.route.snapshot.params.id)
  }

  getAllProp(id: number){
    this.bikeService.getUser(id).subscribe(
      data => { this.user = data;
      },
    );
  }
}
