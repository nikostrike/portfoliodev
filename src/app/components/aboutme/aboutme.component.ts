import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';
import { GithubIconComponent } from '../../shared/icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from '../../shared/icons/linkedin-icon/linkedin-icon.component';
import { GmailIconComponent } from '../../shared/icons/gmail-icon/gmail-icon.component';

@Component({
  selector: 'app-aboutme',
  imports: [ CommonModule, BadgeComponent, GithubIconComponent, LinkedinIconComponent, GmailIconComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  greetings = ['Hola', 'Hi', 'Bonjour', 'Hallo', 'Ciao', 'こんにちは', '안녕하세요', '你好'];
  currentGreeting = '';
  greetingLetters: string[] = [];

  ngOnInit() {
    this.animateGreeting();
  }

  animateGreeting() {
    const greeting = this.greetings[0];
    this.currentGreeting = greeting;
    this.greetingLetters = greeting.split('');

    const maxDelay = this.greetingLetters.length * 100; // delay acumulado
    const bounceDuration = 1000; // duración de bounce
    const totalAnimationTime = maxDelay + bounceDuration;

    setTimeout(() => {
      // rota saludo y vuelve a animar
      this.greetings.push(this.greetings.shift()!);
      this.animateGreeting();
    }, totalAnimationTime);
  }
}
