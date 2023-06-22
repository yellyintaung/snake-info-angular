import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-snake-detail',
  templateUrl: './snake-detail.component.html',
  styleUrls: ['./snake-detail.component.css']
})
export class SnakeDetailComponent implements OnInit {
  // @Input() snake:any;
  @Output() snakeDelete = new EventEmitter();
  snake :any;
  snakeId : any;

 
  constructor(private activatedRoute: ActivatedRoute, private snakeService: SnakeService) { 
    // console.log(this.activatedRoute.snapshot.params['id']);
    this.snakeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.snake = this.snakeService.snakeList.find(x => x.id == this.snakeId);
  }


  ngOnInit(): void {
  }

  deleteItem(data:any){
    this.snakeDelete.emit(data);
  }
}
