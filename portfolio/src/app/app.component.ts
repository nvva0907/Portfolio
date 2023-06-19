import { Component, AfterViewInit, HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  isScrolling: boolean = false;
  showProgres: boolean = true;
  constructor() {}

  ngAfterViewInit(): void {
    this.scrollToElement('home');
  }

  scrollToElement(elementId: string) {
    const element = document.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolling = true;

    setTimeout(() => {
      this.isScrolling = false;
    }, 200); // Thay đổi giá trị timeout nếu cần thiết
  }

  closeProgess() {
    this.showProgres = false;
  }

  openProgess() {
    this.showProgres = true;
  }
}
