import { Component, OnInit } from '@angular/core';
import { RadorService } from 'src/app/service/rador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private radorService : RadorService) { }

  radorData:any;

  ngOnInit(): void {
    this.radorData = this.radorService.myData();
  }

}
