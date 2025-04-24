import { Component } from '@angular/core';
import { AboutmeComponent } from "../aboutme/aboutme.component";
import { ProjectsComponent } from "../projects/projects.component";
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from '../skills/skills.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [CommonModule, AboutmeComponent, ProjectsComponent, EducationComponent, SkillsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
