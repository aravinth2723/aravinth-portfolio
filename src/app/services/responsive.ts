import { inject, Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Responsive {
  private isMobileSubject = new BehaviorSubject<boolean>(false);
  private isTabletSubject = new BehaviorSubject<boolean>(false);
  private isWebSubject = new BehaviorSubject<boolean>(false);

  isMobile$ = this.isMobileSubject.asObservable();
  isTablet$ = this.isTabletSubject.asObservable();
  isWeb$ = this.isWebSubject.asObservable();

  private breakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.breakpointObserver
      .observe([
        '(max-width: 767px)', // Mobile
        '(min-width: 768px) and (max-width: 1279px)', // Tablet
        '(min-width: 1280px)', // Web
      ])
      .subscribe((result) => {
        const isMobile = result.breakpoints['(max-width: 767px)'];
        const isTablet =
          result.breakpoints['(min-width: 768px) and (max-width: 1279px)'];
        const isWeb = result.breakpoints['(min-width: 1280px)'];

        this.isMobileSubject.next(!!isMobile);
        this.isTabletSubject.next(!!isTablet);
        this.isWebSubject.next(!!isWeb);
      });
  }
}
