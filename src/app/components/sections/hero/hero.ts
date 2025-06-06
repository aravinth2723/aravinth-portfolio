import { Component, inject, Input, Signal } from '@angular/core';
import { DeviceType } from '../../../interfaces/device-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() deviceType!: Signal<DeviceType>;
  private router = inject(Router);

  openPDF() {
    const pdfUrl = './assets/docs/simple-professional-resume.pdf';
    window.open(pdfUrl, '_blank');
  }

  downArrowBtn(section: string) {
    this.router.navigate([''], { fragment: section });
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
