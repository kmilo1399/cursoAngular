import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {


mainMenu: {
  defaultOptions: Array<any>, accessLink: Array<any>
} = { defaultOptions: [], accessLink: [] }

customOptions: Array<any> = []

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'TU Biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites']
      }
    ] 
    
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Conciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista 1',
        router: ['/']
      },
      {
        name: 'Mi lista 2',
        router: ['/']
      },
      {
        name: 'Mi lista 3',
        router: ['/']
      },
      {
        name: 'Mi lista 4',
        router: ['/']
      }
    ]
  }
}
