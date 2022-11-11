import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(
    private http: HttpClient
  ) { }

  getResourcesFromPath = (path: string, language: string): Promise<any> => {
    let resourcesMapToReturn: any = {};
    return new Promise<any>((resolve, reject) => {
      this.http.get(path).subscribe(result => {
        let data = JSON.parse(JSON.stringify(result));
        for (let index = 0; index < data.length; index++) {
          if (data[index][language] != "") {
            resourcesMapToReturn[data[index]["key"]] = data[index][language];
          }
        }
        if (resourcesMapToReturn) {
          resolve(resourcesMapToReturn);
        }
        else {
          reject(null);
        }
      });
    });
  }
}
