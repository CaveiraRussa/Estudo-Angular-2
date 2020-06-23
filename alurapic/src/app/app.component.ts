import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://ovicio.com.br/wp-content/uploads/2019/06/20190609-cyberpunk-02-1200x675.jpg',
      description: 'Keano'
    },
    {
      url: 'https://i.pinimg.com/originals/a9/a2/79/a9a279ae61cd00eb2b3a4978a62a5ad5.jpg',
      description: 'Pai'
    }
  ];
}
 