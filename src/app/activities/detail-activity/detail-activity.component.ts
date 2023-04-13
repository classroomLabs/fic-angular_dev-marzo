import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivitiesService } from 'src/app/core/activities.service';
import { UtilService } from 'src/app/core/util.service';
import { Activity } from 'src/app/data/activity.type';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css'],
})
export class DetailActivityComponent {
  //activity: Activity = ACTIVITY_EMPTY;
  activity$: Observable<Activity>;

  constructor(
    activatedRoute: ActivatedRoute,
    utilService: UtilService,
    activitiesService: ActivitiesService
  ) {
    const slug: string = utilService.getParam(activatedRoute);
    // this.activity = activitiesService.getBySlug(slug);
    this.activity$ = activitiesService.getBySlug$(slug);
  }
}
