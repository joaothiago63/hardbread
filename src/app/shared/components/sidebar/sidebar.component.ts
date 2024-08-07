import { Component, inject } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { RouterLink } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  contents: ContentSidebar[] = []

  route = inject(Router)

  firstRoute: string | undefined;

  ngOnInit() {

    this.contents = [{
      label: 'Propostas',
      icon: 'pi pi-box',
      path: 'proposal'
    },
    {
      label: 'Empresas',
      icon: 'pi pi-shopping-bag',
      path: 'company'
    }]
  }

  ngAfterViewInit() {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.firstRoute = event.url.substring(1);                        
      }
    });
  }
}

export interface ContentSidebar {
  label: string,
  icon: string,
  path: string
}
