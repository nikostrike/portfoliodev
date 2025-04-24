import { Component } from '@angular/core';
import { TerminalIconComponent } from '../../shared/icons/terminal-icon/terminal-icon.component';
import { WorkIconComponent } from '../../shared/icons/work-icon/work-icon.component';

@Component({
  selector: 'app-projects',
  imports: [ TerminalIconComponent, WorkIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
