import { Component } from '@angular/core';

interface EducationLists {
  title: string;
  name: string;
  year: string;
  marks: string;
  place: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  education: EducationLists[] = [
    {
      title: 'Imayam Arts & Science College',
      name: 'Master of Science in Computer Science (M.Sc. CS)',
      year: 'Jul 2022 - Apr 2024',
      marks: '6.97 CGPA',
      place: 'Kannanur, Tiruchirappalli',
    },
    {
      title: 'Imayam Arts & Science College',
      name: 'Bachelor of Computer Applications (BCA)',
      year: 'Jul 2019 - Apr 2022',
      marks: '7.53 CGPA',
      place: 'Kannanur, Tiruchirappalli',
    },
    {
      title: 'State Board',
      name: 'Higher Secondary Certificate (HSC)',
      year: 'Jun 2017 - Mar 2019',
      marks: '45%',
      place: 'B.Mettur, Tiruchirappalli',
    },
    {
      title: 'Jeyanthinather Marine Technology Institute',
      name: 'Marine Diesel Mechanic (MDM)',
      year: 'Jun 2016 - Jun 2017',
      marks: '75%',
      place: 'Thisaiyanvilai, Tirunelveli',
    },
    {
      title: 'State Board',
      name: 'Secondary School Leaving Certificate (SSLC)',
      year: 'Jun 2015 - Mar 2016',
      marks: '82.6%',
      place: 'B.Mettur, Tiruchirappalli',
    },
  ];
}
