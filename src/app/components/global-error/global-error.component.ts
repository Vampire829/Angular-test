import { Component, OnInit } from '@angular/core';
import { ErrorServices } from 'src/app/services/error.services';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent implements OnInit {
constructor(public errorServices: ErrorServices){

}
  ngOnInit(): void {
   
  }
}
