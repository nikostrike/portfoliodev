import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalIconComponent } from '../../shared/icons/terminal-icon/terminal-icon.component';
import { WorkIconComponent } from '../../shared/icons/work-icon/work-icon.component';
import { PhotoIconComponent } from '../../shared/icons/photo-icon/photo-icon.component';

@Component({
  selector: 'app-projects',
  imports: [ CommonModule, TerminalIconComponent, WorkIconComponent, PhotoIconComponent, ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
