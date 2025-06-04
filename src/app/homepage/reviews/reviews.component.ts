import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reviews',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
testimonials = [
  {
    name: 'Elon Musk',
    role: 'CEO, SpaceX',
    text: 'These headphones are out of this world—literally. I use them on SpaceX flights to zone out before launch. Incredible soundstage and build quality.',
    image: 'review/elon.webp'
  },
  {
    name: 'Bill Gates',
    role: 'Co-founder, Microsoft',
    text: 'The clarity and comfort are phenomenal. Whether it’s music, podcasts, or audiobooks, these headphones make every sound feel alive. A true joy.',
    image: 'review/bill.webp'
  },
 {
  name: 'Sun Tzu',
  role: 'Military Strategist & Philosopher',
  text: 'True victory begins with clarity—these headphones deliver exactly that. Every note is precise, every moment focused. Sound, like strategy, is an art.',
  image: 'review/suntzu.jpg'
}
];

}
