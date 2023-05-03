import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule],
  providers: [ServiceService],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
