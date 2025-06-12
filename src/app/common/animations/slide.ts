import {
  trigger,
  state,
  style,
  transition,
  animate,
  AUTO_STYLE,
} from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  state(
    'in',
    style({
      transform: 'translate3d(0,0,0)',
    })
  ),
  state(
    'out',
    style({
      transform: 'translate3d(100%, 0, 0)',
    })
  ),
  transition('in => out', animate('400ms ease-in-out')),
  transition('out => in', animate('400ms ease-in-out')),
]);

export const slideUpDown = trigger('collapse', [
  state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
  state('true', style({ height: '0', visibility: 'hidden' })),
  transition('false => true', animate(300 + 'ms ease-in')),
  transition('true => false', animate(300 + 'ms ease-out')),
]);
