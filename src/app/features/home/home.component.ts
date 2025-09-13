import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('carouselSlides') carouselSlides!: ElementRef;
  @ViewChild('carouselPrev') carouselPrev!: ElementRef;
  @ViewChild('carouselNext') carouselNext!: ElementRef;
  private currentSlide = 0;
  private slideWidth = 0;
  private totalSlides = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.slideWidth = this.carouselSlides.nativeElement.clientWidth / 5; // 5 slides visible at a time
    this.totalSlides = this.carouselSlides.nativeElement.children.length;
    this.updateSlidePosition();
    this.updateButtonVisibility();
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlidePosition();
      this.updateButtonVisibility();
    }
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 5) { // 5 slides visible at a time
      this.currentSlide++;
      this.updateSlidePosition();
      this.updateButtonVisibility();
    }
  }

  private updateSlidePosition() {
    if (this.carouselSlides && this.carouselSlides.nativeElement) {
      this.carouselSlides.nativeElement.style.transform = `translateX(-${this.currentSlide * this.slideWidth}px)`;
    }
  }

  private updateButtonVisibility() {
    if (this.carouselPrev && this.carouselNext) {
      this.renderer.setStyle(this.carouselPrev.nativeElement, 'opacity', this.currentSlide === 0 ? '0' : '1');
      this.renderer.setStyle(this.carouselPrev.nativeElement, 'pointer-events', this.currentSlide === 0 ? 'none' : 'auto');
      this.renderer.setStyle(this.carouselNext.nativeElement, 'opacity', this.currentSlide >= this.totalSlides - 5 ? '0' : '1');
      this.renderer.setStyle(this.carouselNext.nativeElement, 'pointer-events', this.currentSlide >= this.totalSlides - 5 ? 'none' : 'auto');
    }
  }
}