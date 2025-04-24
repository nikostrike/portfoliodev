import { Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { GithubIconComponent } from '../../shared/icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from '../../shared/icons/linkedin-icon/linkedin-icon.component';
import { GmailIconComponent } from '../../shared/icons/gmail-icon/gmail-icon.component';

@Component({
  selector: 'app-aboutme',
  imports: [BadgeComponent, GithubIconComponent, LinkedinIconComponent, GmailIconComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {

}
