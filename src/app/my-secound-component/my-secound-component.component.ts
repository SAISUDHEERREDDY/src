import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import data from '../../assets/data.json';
@Component({
  selector: 'app-my-secound-component', 
  standalone: true,
  templateUrl: './my-secound-component.component.html',
  styleUrls: ['./my-secound-component.component.css'],
  providers: [NgbModalConfig, NgbModal],
  imports: [DecimalPipe, NgFor, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
})
export class MySecoundComponentComponent {
  employsRecords:any ={};
  page = 1;
	pageSize = 4;
  searchText:string;
constructor(config: NgbModalConfig, private modalService: NgbModal, private http: HttpClient){
  this.getAllEmploys();
  this.searchText = "";
}


  getAllEmploys(){
    this.http.get('../../assets/data.json').subscribe((res) => {
      this.employsRecords = res;
      console.log('--- result :: ',  this.employsRecords);
    });
    
  }
refresh(){
 this.getAllEmploys();
}
search(event: Event): void {
  const searchTerm = (event.target as HTMLInputElement).value;
  this.employsRecords.Employees.search(searchTerm);
}
}
