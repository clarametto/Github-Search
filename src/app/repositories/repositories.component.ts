import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Repo } from '../repo';
import { GitService } from '../git.service';
import { User } from '../user';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  providers: [GitService],
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  Users!: User;
  Repos: Repo[] = [];
  constructor(public userHttpService: GitService) {}

  ngOnInit() {
    this.searchGit('clarametto');
  }
  searchGit(searchTerm: string) {
    this.userHttpService.searchGits(searchTerm).then(
      (success) => {
        this.Users = this.userHttpService.Users;
      },
      (error) => {
        console.log(error);
      }
    );
    this.userHttpService.searchRepos(searchTerm).then((success) => {
      this.Repos = this.userHttpService.Repos;
    });
  }
}
