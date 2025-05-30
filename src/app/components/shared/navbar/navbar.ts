import {
  Component,
  inject,
  Input,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { DeviceType } from '../../../interfaces/device-type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  @Input() deviceType!: Signal<DeviceType>;
  readonly navLinks: string[] = ['home', 'about', 'education', 'contact'];
  isSideNav: Boolean = false;
  activeSection = signal<string | null>(null);

  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    location.hash = 'home';
  }

  ngOnInit(): void {
    this.activateRoute.fragment.subscribe((fragment: string | null) => {
      this.activeSection.set(fragment);
      this.scrollToActiveRoute(fragment);
    });
  }

  toggleNav(section: string) {
    this.isSideNav = !this.isSideNav;
    this.router.navigate([''], { fragment: section });
  }

  private scrollToActiveRoute(section: string | null): void {
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
