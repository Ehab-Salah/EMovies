import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from "./Components/headers/headers.component";
import { HomeComponent } from "./Components/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeadersComponent, HomeComponent,HttpClientModule]
})
export class AppComponent {
  title = 'movies';
}
