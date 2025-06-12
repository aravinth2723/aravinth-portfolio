import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { Menu } from './menu/menu';
import { DeviceType } from '../../../interfaces/device-type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { slideInOut, slideUpDown } from '../../../common/animations/slide';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Menu, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  animations: [slideInOut, slideUpDown],
})
export class Navbar implements OnInit, OnDestroy {
  @Input() deviceType!: Signal<DeviceType>;

  menuState: 'in' | 'out' = 'out';
  readonly menuIcon = faBars;
  isScroll = signal(false);
  private scrollTimeout: any;

  @HostBinding('class.scrolled') get isScrolled(): boolean {
    return window.scrollY > 0;
  }

  @HostBinding('class.scrolling') get scrolling(): boolean {
    return this.isScroll();
  }

  ngOnInit(): void {
    this.applyResizeRules();
  }

  toggleMenu(active: string | null): void {
    this.menuState = active ? 'out' : 'in';
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.menuState === 'out' || this.deviceType().web) {
      this.updateScrollState();
      this.debounceScrollStop();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.applyResizeRules();
  }

  private updateScrollState(): void {
    this.isScroll.set(window.scrollY > 0);
  }

  private debounceScrollStop(): void {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => this.isScroll.set(false), 800);
  }

  private applyResizeRules(): void {
    if (this.deviceType().web) {
      this.menuState = 'out';
      this.isScroll.set(false);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.scrollTimeout);
  }
}
