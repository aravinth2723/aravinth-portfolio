import {
  Component,
  HostBinding,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Responsive } from './services/responsive';
import { Subject, takeUntil } from 'rxjs';
import { DeviceType } from './interfaces/device-type';

@Component({
  selector: 'app-root',
  imports: [],
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
