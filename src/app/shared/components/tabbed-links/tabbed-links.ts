import { Component, computed, input, signal } from '@angular/core';
import { NamedRoute } from '../../models/nav';

@Component({
  imports: [],
  selector: 'app-tabbed-links',
  styleUrls: ['./tabbed-links.css', '../../../../styles.css'],
  templateUrl: './tabbed-links.html',
})
export class TabbedLinks {
  routes = input<NamedRoute[]>([]);

  selectedIndex = signal(0);
  selectedRoute = computed(() => this.routes()[this.selectedIndex()]);

  updateContent(routeIndex: number) {
    this.selectedIndex.set(routeIndex);
  }
}
