import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../../models/project';
import { faLink,faPlay } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';

import { NgxGalleryOptions, NgxGalleryComponent } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [
    './projects.component.scss',
    '../about-me/about-me.component.scss',
  ],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('gallery') gallery: NgxGalleryComponent;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  projects: Project[] = new Array<Project>(3);
  numbers: number[] = new Array<number>(3);
  projectExample = {} as Project;

  linkIcon = faLink;
  imagesIcon = faImages;
  playIcon = faPlay;
  constructor() {}

  ngOnInit(): void {
    this.projectExample.name = 'Restaurant service';
    this.projectExample.description =
      'App designed for restaurant service. It helps with organisation in restaurant for employees and also manager. ';
    this.projectExample.photos = [
      'kpz_stats.png',
      'kpz_room_editor.png',
      'kpz_tables.png',
      'kpz_order.png',
      'kpz_current_order.png',
    ];
    this.projectExample.link =
      'https://github.com/mateuszKrawczak/kpz-restaurant-frontend';
    this.projects[0] = this.projectExample;
    this.projects[1] = {
      name: 'Easy quisy',
      description:
        'This is a quiz app which helps you check your real knowledge. Quiz has six categories with three difficulty levels with really tough questions.',
      photos: [
        'EQ_home_screen.png',
        'EQ_kategorie_screen.png',
        'EQ_pytanie_screen.png',
      ],
      link: 'https://github.com/mateuszKrawczak/EducationalApp',
    };
    this.projects[2] = {
      name: 'City site',
      description:
        'This is a simple website about London City. On this site you can check famous attractions and monuments or check current weather in London.',
      photos: ['site_main.png', 'site_weather.png', 'site_map.png'],
      link: 'https://github.com/mateuszKrawczak/Website',
    };

    this.galleryOptions = [
      {
        image: false,
        thumbnails: false,
        width: '0px',
        height: '0px',
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewArrows: true,
      },
      {
        breakpoint: 500,
        width: '300px',
        height: '300px',
        thumbnailsColumns: 3,
      },
      { breakpoint: 300, width: '100%', height: '200px', thumbnailsColumns: 2 },
    ];
  }

  showGallery(index) {
    this.loadPhotos(index);
    setTimeout(() => {
      this.gallery.openPreview(0);
    }, 0);
  }
  loadPhotos(index) {
    if (index != 0) {
      this.galleryImages = [
        {
          big: 'assets/' + this.projects[index].photos[0],
        },
        {
          big: 'assets/' + this.projects[index].photos[1],
        },
        {
          big: 'assets/' + this.projects[index].photos[2],
        },
      ];
    } else {
      this.galleryImages = [
        {
          big: 'assets/' + this.projects[index].photos[0],
        },
        {
          big: 'assets/' + this.projects[index].photos[1],
        },
        {
          big: 'assets/' + this.projects[index].photos[2],
        },
        {
          big: 'assets/' + this.projects[index].photos[3],
        },
        {
          big: 'assets/' + this.projects[index].photos[4],
        },
      ];
    }
  }
}
