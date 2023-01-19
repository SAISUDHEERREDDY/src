import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import data from '../../assets/data.json';

@Component({
  selector: 'app-my-first-component',

  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class MyFirstComponentComponent {
itemList:any = [];
employsRecords:any ={};
message:string | undefined;
isHidden:boolean = false;

constructor(config: NgbModalConfig, private modalService: NgbModal, private http: HttpClient){
  this.messageFun();
  config.backdrop = 'static';
	config.keyboard = false;

}



open(content:any) {
  this.modalService.open(content);
}

onClickHide(){
  this.isHidden = !this.isHidden
 this.messageFun();
 
}
messageFun(){
  if(!this.isHidden){
    this.message ="show"
  }else{
    this.message = "Hidden"
   
  }
}

click(){
  this.itemList.push('Hello');
  console.log(this.itemList);
}


onClick(){
  debugger;
  this.itemList.push('Sonu');
  console.log(this.itemList);
}

remove(index:number){
  debugger;
  this.itemList.forEach((element: number) => {
  
    this.itemList.splice(index);
  });
}



}
