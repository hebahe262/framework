import { Component, HostListener  } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  Bscroll:boolean = false;
  @HostListener('window:scroll',[])
  isScroll()
  {
    if(scrollY>0){
      this.Bscroll= true;
    }else{
      this.Bscroll= false;
    }

}

}
