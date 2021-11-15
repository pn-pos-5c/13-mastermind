import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataProviderService} from "../../services/data-provider.service";

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.scss']
})
export class AttemptComponent implements OnInit {
  @Input() availableColors: string[] = []
  @Output() colorChosen = new EventEmitter<string>();

  constructor(public dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
  }

  colorSelected(color: string) {
    this.colorChosen.emit(color);
  }
}
