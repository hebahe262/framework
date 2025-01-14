import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 

mtinput(event:Event, lable:HTMLLabelElement){

  let blackBox = event.target as HTMLInputElement ;
 
    if(blackBox.value ==""){ 
      lable.classList.remove("ani");
    }else{
      lable.classList.add("ani");
    }

}



}
