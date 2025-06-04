import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { DesignTechComponent } from "./design-tech/design-tech.component";
import { ReviewsComponent } from "./reviews/reviews.component";
@Component({
  selector: 'app-homepage',
  imports: [
    ProductsComponent,
    DesignTechComponent,
    ReviewsComponent
],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
