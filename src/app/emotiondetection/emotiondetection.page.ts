import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-emotiondetection',
  templateUrl: './emotiondetection.page.html',
  styleUrls: ['./emotiondetection.page.scss'],
})
export class EmotiondetectionPage {
  public classifyData = null;

    constructor(private httpClient: HttpClient) {
    }

    public result;
    public articleDetails;
    public searcharticle;

    getarticleDetails() {
      console.log('hey hey' + this.searcharticle);
        this.httpClient.get('http://newsapi.org/v2/everything?q='+ this.searcharticle+'&from=2020-01-22&sortBy=publishedAt&apiKey=433ecbec0b7443ec8ee9f869db6122b2')
            .subscribe(data => {
                this.articleDetails = data;
            });
            console.log(this.searcharticle);  
    }

    classifyCheck(){
                this.httpClient.get('https://cors-anywhere.herokuapp.com/'+ 'https://api.uclassify.com/v1/uClassify/Sentiment/classify/?readKey=YGzIEYAJW6Q4&text=' + this.articleDetails.articles[0].title)
            .subscribe(data => {
                this.classifyData= data;
                // @ts-ignore
                if (data.negative < data.positive) {
                    this.result = 'Positive';
                    // @ts-ignore
                    this.progress = data.positive;
                }
                // @ts-ignore
                if (data.negative > data.positive) {
                    this.result = 'Negative';
                    // @ts-ignore
                    this.progress = data.negative;
                }
                console.log(data);
            });
    }


}