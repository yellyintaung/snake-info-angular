import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  selectedSnake :any;
  constructor(private snakeService: SnakeService) { 
  }

  snakeList = this.snakeService.snakeList;

  ngOnInit(): void {
  }

  goToDetail(snake:any){
    this.selectedSnake = snake;
  }

  deleteSnake(data:any){
    var index = this.snakeList.indexOf(data);
    this.snakeList.splice(index,1);
  }

}
