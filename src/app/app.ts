import {
  Component,
  HostBinding,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Responsive } from './services/responsive';
import { DeviceType } from './interfaces/device-type';
import { Navbar } from './components/shared/navbar/navbar';
import { Hero } from './components/sections/hero/hero';
import { About } from './components/sections/about/about';
import { Education } from './components/sections/education/education';
import { Contact } from './components/sections/contact/contact';
import { Footer } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Contact, Education, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  private responsiveService = inject(Responsive);
  private destroy$ = new Subject<void>();

  // Reactive signal for device type
  readonly deviceType = signal<DeviceType>({
    mobile: false,
    tablet: false,
    web: false,
  });

  // Bind the class device based
  @HostBinding('class')
  get applyDeviceClass(): string {
    const type = this.deviceType();
    if (type.mobile) return 'mobile';
    if (type.tablet) return 'tablet';
    if (type.web) return 'web';
    return '';
  }

  ngOnInit(): void {
    this.responsiveService.isMobile$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isMobile) => {
        if (isMobile) this.setDeviceType('mobile');
      });

    this.responsiveService.isTablet$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isTablet) => {
        if (isTablet) this.setDeviceType('tablet');
      });

    this.responsiveService.isWeb$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isWeb) => {
        if (isWeb) this.setDeviceType('web');
      });
  }

  private setDeviceType(type: keyof DeviceType) {
    this.deviceType.set({
      mobile: type === 'mobile',
      tablet: type === 'tablet',
      web: type === 'web',
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
