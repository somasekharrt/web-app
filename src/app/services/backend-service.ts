
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './backend-service.html',
  styleUrls: ['../app.component.css']
})
export class BackendServiceComponent {

   constructor( private http: HttpClient) {}
  getDataFromBackend(): Observable<any> {
  return this.http.get('http://localhost:9003/backendCall');
}
}
