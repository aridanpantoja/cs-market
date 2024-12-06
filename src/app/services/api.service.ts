import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CharmProps } from '../models/charm'
import { RarityProps } from '../models/rarity'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getCharms(): Observable<CharmProps[]> {
    return this.http.get<CharmProps[]>(`${this.apiUrl}/charms`)
  }

  createCharm(charm: CharmProps): Observable<CharmProps> {
    return this.http.post<CharmProps>(`${this.apiUrl}/charms`, charm)
  }

  getRarities(): Observable<RarityProps[]> {
    return this.http.get<RarityProps[]>(`${this.apiUrl}/rarities`)
  }
}
