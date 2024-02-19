import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FamousPeopleInterface } from '../models/famous-people-Interface';

@Injectable({
  providedIn: 'root'
})
export class HalloffameService {
  private hallOfFameUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http: HttpClient) { }

  getHallOfFame(): Observable<FamousPeopleInterface[]> {
    return this.http.get<{complete:FamousPeopleInterface[]}>(this.hallOfFameUrl).pipe(map((response: { complete: FamousPeopleInterface[] }) => response.complete));
  }
}
