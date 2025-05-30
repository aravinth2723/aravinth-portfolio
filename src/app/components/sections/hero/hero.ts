import { Component, Input, Signal } from '@angular/core';
import { DeviceType } from '../../../interfaces/device-type';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() deviceType!: Signal<DeviceType>;
}
