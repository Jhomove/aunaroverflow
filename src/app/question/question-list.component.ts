import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';

    // const q = new Question(
    //     '¿Cómo reutilizo un componente Android?',
    //     'Miren, esta es mi pregunta....',
    //     new Date(),
    //     'none'
    // );

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styles: [`
        i{
            font-size: 48px;
        }
        i.help {
            width: 48px !important;
            height: 48px !important;
            padding: 0 !important;
            font-size: 48px !important;

        }
        .add-question{
            position: fixed;
            bottom: 30px;
            right: 30px;
            font-size: 24px;
        }
    `],
    providers: [QuestionService]
})

export class QuestionListComponent implements OnInit{//método que pinta las preguntas
    constructor(private questionService: QuestionService){}
    // questions: Question[];//=array(10).fill(q);
    loading = true;

    ngOnInit(){
        this.getQuestions();
        // this.questionService
        //     .getQuestions()
        //     .then((questions: Question[]) =>{
        //         this.questions = questions;
        //     });
        //     console.log("questions",this.questions);
    }

    getQuestions(){
        this.questionService.getQuestions()
            .subscribe(res=> {
                this.questionService.questions = res as Question[];
                this.loading = false;
                console.log("res--->",res);
            })
    }
}