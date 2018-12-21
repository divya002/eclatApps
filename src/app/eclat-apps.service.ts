import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EclatAppsService {
  path='https://us1.prisma.sh/mrugrajsinh-vansadia-797f28/ReactNativeTask/dev'

  constructor(private http: HttpClient) { }
  getUser(postData) {
    return this.http.post<any>(this.path, postData);
    }
}

