import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
  Renderer2,
  Signal,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceType } from '../../../../interfaces/device-type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  imports: [FontAwesomeModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  @Input() deviceType!: Signal<DeviceType>;
  @Output() dataChanged = new EventEmitter<string>();
  readonly navLinks: string[] = ['home', 'about', 'education', 'contact'];
  readonly closeIcon = faXmark;
  activeSection = signal<string | null>(null);

  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    location.hash = 'home';
  }

  ngOnInit() {
    this.activateRoute.fragment.subscribe((fragment: string | null) => {
      this.activeSection.set(fragment);
      this.scrollToActiveRoute(fragment);
    });
  }

  toggleNav(section: string) {
    if (section != 'out') {
      this.router.navigate([''], { fragment: section });
    }
    this.dataChanged.emit('out');
  }

  private scrollToActiveRoute(section: string | null): void {
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
