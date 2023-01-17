import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Toggle of header component
   * @type {boolean}
   * @memberof HeaderComponent
   */
  toggle: boolean;
  /**
   * Creates an instance of HeaderComponent.
   * @memberof HeaderComponent
   */
  constructor() { }

  /**
   * on init
   * @memberof HeaderComponent
   */
  ngOnInit(): void {
  }

}
