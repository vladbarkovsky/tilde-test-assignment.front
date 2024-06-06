import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgbCollapse, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgbCollapse, NgbDropdownModule],
})
export class AppComponent {
  navbarCollapsed: boolean = true;
}
