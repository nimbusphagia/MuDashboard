import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideChartColumn,
  LucideClipboardClock,
  LucidePackageSearch,
  LucidePlayingCardsFan,
  LucideSettings,
} from '@lucide/angular';

@Component({
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideClipboardClock,
    LucideChartColumn,
    LucidePackageSearch,
    LucideSettings,
    LucidePlayingCardsFan,
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {}
