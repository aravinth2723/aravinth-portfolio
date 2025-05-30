import { Component, Input, Signal } from '@angular/core';
import { DeviceType } from '../../../interfaces/device-type';

interface ContactList {
  title: String;
  content: String;
  link: String;
  icon: String;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  @Input() deviceType!: Signal<DeviceType>;
  readonly contactList: ContactList[] = [
    {
      title: 'Email',
      content: 'aravinth2721@gmail.com',
      link: 'mailTo:aravinth2721@gmail.com',
      icon: 'fa-solid fa-envelope',
    },
    {
      title: 'Phone',
      content: '+91 63856 86150',
      link: 'wa.me/6385686150',
      icon: 'fa-solid fa-phone',
    },
    {
      title: 'Instagram',
      content: 'sivan_attu',
      link: 'https://www.instagram.com/sivan_attu?igsh=bjk3NjNmb2g2cHZ4',
      icon: 'fa-brands fa-instagram',
    },
    {
      title: 'Linkedin',
      content: 'Aravinth S',
      link: 'https://www.linkedin.com/in/aravinth27',
      icon: 'fa-brands fa-linkedin-in',
    },
  ];
}
