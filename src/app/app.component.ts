import { Component, OnInit } from '@angular/core';
import { LoaderService } from './core/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loader: boolean;
  constructor(private readonly loaderService: LoaderService) {

  }

  ngOnInit() {
    this.loaderService.loader.subscribe((state) => {
      setTimeout(() => {
        this.loader = state;
      }, 0);
    });
  }
}

