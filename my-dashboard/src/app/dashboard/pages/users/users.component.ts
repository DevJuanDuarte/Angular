import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  public userServices = inject(UsersService)
}
