import { IdeaService } from './../../services/idea.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/services/idea.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})
export class IdeaListPage implements OnInit {

  public ideas: Observable<Idea[]>;

  constructor(
    private ideaService: IdeaService
  ) { }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
    console.log('hhhh:',this.ideas)
  }

}
