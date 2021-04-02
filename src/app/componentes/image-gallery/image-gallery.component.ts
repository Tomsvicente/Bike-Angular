import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})

export class ImageGalleryComponent implements OnInit {
  public GaleriaScript : any;
  constructor() {
    
  }
  
  url = "../../../assets/js/GaleriaScript.js";
  ngOnInit(): void {
    this.GaleriaScript = new Promise(resolve => {
      console.log("resolviendo promesa..");
      this.loadScript();
    });
  }

  public loadScript(){
    console.log("preparando carga");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async= true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  
}
