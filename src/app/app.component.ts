import { Component } from '@angular/core';
import {EclatAppsService} from './eclat-apps.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eclatApps';
 // even=true;
  userShowData=[];
 // first=10;
  //skip=0;
  postData={
    "query":"query{\n  imagePostsConnection(orderBy:name_ASC,first:10,skip:0){\n    aggregate{\n      count\n    }\n    edges{\n      node{\n        image\n        name\n      }\n    }\n    pageInfo{\n      hasNextPage\n    }\n  }\n}"
  };
  getData(postData){
    this.eclatAppsService.getUser(postData).subscribe((res)=>{
     
      this.userShowData=res.data.imagePostsConnection.edges;
      // if(this.userShowData.length/2)
      //   this.even==true;
      // else
      // this.even=false;
      console.log(this.userShowData);
    });
  }
  getNextUser(){
    //first and skipp should be dynamic and incemented by 10 on every click,not able to understand post body.
    this.postData={
      "query":"query{\n  imagePostsConnection(orderBy:name_ASC,first:10,skip:10){\n    aggregate{\n      count\n    }\n    edges{\n      node{\n        image\n        name\n      }\n    }\n    pageInfo{\n      hasNextPage\n    }\n  }\n}"
    };
    this.getData(this.postData);
  }
  constructor(private eclatAppsService:EclatAppsService){}
  ngAfterViewInit(){
    this.getData(this.postData);
  }
}
