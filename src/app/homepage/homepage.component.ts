import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { DesignTechComponent } from "./design-tech/design-tech.component";
@Component({
  selector: 'app-homepage',
  imports: [
    ProductsComponent,
    DesignTechComponent
],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
