import { Component, OnInit, Input } from '@angular/core';
import { WpI } from "../../@service/wp.interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: WpI ;

  constructor() { }

  ngOnInit(): void {
  }

}
