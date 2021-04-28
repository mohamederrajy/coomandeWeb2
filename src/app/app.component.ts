import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = false;
  dark = false;
  isCollapsed = false;
}
