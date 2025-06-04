import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 prodotti = [
    {
      titolo: 'Cuffie Flick BT',
      descrizione: 'Design ergonomico e suono potente con connessione Bluetooth stabile. Perfette per l’uso quotidiano.',
      immagine: 'https://www.sbsmobile.com/cdn/shop/files/MHHEADFLICKBTB_PAN_1.jpg?v=1742378045&width=800',
      bottone: 'Scopri di più'
    },
    {
      titolo: 'HeadPure Wireless',
      descrizione: 'Cuffie wireless eleganti con audio nitido e bassi profondi. Ideali per chi ama la musica in movimento.',
      immagine: 'https://jaz-music.com/cdn/shop/files/TEJZHEADPUREBTW_PAN_1.jpg?v=1704203853&width=1024',
      bottone: 'Scopri di più'
    },
    {
      titolo: 'Cuffie Bluetooth Pro',
      descrizione: 'Tecnologia avanzata e materiali di qualità per un’esperienza sonora premium in qualsiasi contesto.',
      immagine: 'https://shop.cozzolinosrl.it/wp-content/uploads/2021/01/Cuffie-Bluethoot_SSS.jpg',
      bottone: 'Scopri di più'
    }
  ];
}
