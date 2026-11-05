import { Component, input } from '@angular/core';
import { TimelineEvent } from '../../models/time-line-event';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  event = input<TimelineEvent>();
}
