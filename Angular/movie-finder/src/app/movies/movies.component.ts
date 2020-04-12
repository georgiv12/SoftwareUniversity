import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { Movies } from '../models/movies';

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  popular: Movies;
  theaters: Movies;
  kids: Movies;
  drama:Movies;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getPopular().subscribe((data) => {
      this.popular = data;
    });
    this.moviesService.theaters.subscribe((data) => {
      this.theaters = data;
    });
    this.moviesService.getKids().subscribe((data) => {
      this.kids = data;
    });
    this.moviesService.getDrama().subscribe((data) => {
      this.drama = data;
    });
  }
}
