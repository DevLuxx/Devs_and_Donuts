import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DonutInterface } from '../models/donut-interface';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {
  private donutUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';

  constructor(private http: HttpClient) { }

  getDonuts(): Observable<DonutInterface[]> {
    return this.http.get<{results:DonutInterface[]}>(this.donutUrl).pipe(map((response: { results: DonutInterface[] }) => response.results));
  }
}
