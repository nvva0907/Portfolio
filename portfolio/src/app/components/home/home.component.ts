import { Component, AfterViewInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  musicUrl: SafeResourceUrl;
  currentTime: number = 0;
  duration: number = 0;
  playpause: string = 'fa-solid fa-circle-play fa-xl';
  openmenu: boolean = false;
  @Input() showProgress: boolean = false;

  constructor(private sanitizer: DomSanitizer) {
    const musicPath = '../../../assets/mp3/one_upon_a_time.mp3';
    this.musicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(musicPath);
  }
  ngAfterViewInit(): void {
    this.scrollToElement('home');
  }

  scrollToElement(elementId: string) {
    const element = document.querySelector(`#${elementId}`);

    this.openmenu = false;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  playMusic() {
    const audioPlayer = document.getElementById(
      'music-player'
    ) as HTMLAudioElement;
    if (audioPlayer.paused) {
      this.playpause = 'fa-solid fa-circle-pause fa-beat fa-xl';
      audioPlayer.play();
    } else {
      this.playpause = 'fa-solid fa-circle-play fa-xl';
      audioPlayer.pause();
    }
  }
  updateCurrentTime(event: Event) {
    const target = event.target as HTMLAudioElement;
    this.currentTime = target.currentTime;
  }
  updateDuration(event: Event) {
    const target = event.target as HTMLAudioElement;
    this.duration = target.duration;
  }

  openMenu() {
    this.openmenu = true;
  }
  closeMenu() {
    this.openmenu = false;
  }
}
