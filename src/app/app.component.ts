
import { Component } from '@angular/core';
import { BackendServiceComponent } from './services/backend-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  providers: [BackendServiceComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  out: any;
  constructor(
     private backendService: BackendServiceComponent,
     private http: HttpClient) {}
  backendcall() {
  this.backendService.getDataFromBackend()
    .subscribe((response) => {
      console.log(response)
      this.out = response.response;
  }, (error) =>{
      console.log("error recieved");
  });
}




  // backendcall() {
  //   this.out = this.backendService.backendCall().subscribe( (response) => {
  //    // console.log(response);
  //     this.out = response.error.error.text;
  //     });

  //   //   this.http.get<any>('http://localhost:9003/backendCall').subscribe(data => {
  //   //     console.log(data);
  //   // });
  // }
}
