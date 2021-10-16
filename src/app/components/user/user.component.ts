import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Repo } from 'src/app/repo';
import { GitService } from 'src/app/git.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
