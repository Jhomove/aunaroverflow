import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class QuestionService{
    private questionsUrl: string;
    questions: Question[];
    constructor(private http: HttpClient){
        this.questionsUrl = urljoin(environment.apiUrl, 'questions');
    }

    getQuestions() {
        return this.http.get(this.questionsUrl);
    }

    // getQuestions() : Promise<void | Question[]>{
    //     // console.log("url",this.questionsUrl);
    //     // return this.http.get(this.questionsUrl)
    //     //             .toPromise()
    //     //             .then(response => console.log("response",response))//response as Question[])
    //     //             .catch(this.handleError);
    // }

    getQuestion(id): Promise<void | Question> {
        const url = urljoin(this.questionsUrl, id);
        return this.http.get(url)
                    .toPromise()
                    .then(response => response as Question)
                    .catch(this.handleError);
    }

    handleError(error: any){
        const errMsg = error.message ? error.message : 
                        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
    }
}