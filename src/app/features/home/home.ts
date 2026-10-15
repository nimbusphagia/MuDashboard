import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from '../../shared/layouts/main-layout/main-layout';

@Component({
  imports: [Navbar, RouterOutlet, MainLayout],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
