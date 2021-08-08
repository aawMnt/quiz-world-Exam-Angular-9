import { ExamResultAdminView } from './../../../ExamobjClass/exam-result-admin-view';
import { ExamresultserviceService } from './../../../Services/examresultservice.service';
import { ExamUserResult } from './../../../ExamobjClass/exam-user-result';
import { QuestionServiceService } from './../../../Services/question-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT, LocationStrategy } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit {

  startQuiz;
  marskGot = 0;
  cAns = 0;
  attemt = 0;
  percentage = 0;
  isSubmit = false;

  // ****************************************************grade validation******************************************************
  a = false;
  iq = null;
  icon = null;
  iconColor = "#18ffff";
  textColor = "";
  g;
  // ***********************************************************************************************************************

  //timer
  timer: any;

  //reload disable
  elem: any;

  // for active router
  maxmarks;
  title;
  qid = 0;

  // ***************************************************Paginations*********************************************************

  currentPage = 1;
  itemsPerPage = 5;

  // ****************************************************send result backend*************************************************************

  result: ExamUserResult = new ExamUserResult();
  adminResult: ExamResultAdminView = new ExamResultAdminView();
  user;

  // ********************************************************************************************************************************

  constructor(private locationS: LocationStrategy,
    private _active: ActivatedRoute, private qService: QuestionServiceService, private _r: Router,
    @Inject(DOCUMENT) private document: any, private _result: ExamresultserviceService) { }

  ngOnInit(): void {

    this.dontBaack();
    this.qid = this._active.snapshot.params.id;
    this.maxmarks = this._active.snapshot.params.maxMarks;
    this.title = this._active.snapshot.params.title;
    this.loadQuestions();
    this.fullScrenEnable();
    //  this.disableReload();
    this.user = JSON.parse(localStorage.getItem('user'))

    // console.log(this.startQuiz)
  }

  // ***********************************************disable Back button**************************************************************
  dontBaack() {
    history.pushState(null, null, location.href);
    this.locationS.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }
  // ******************************************************Load quiz*******************************************************************
  loadQuestions() {
    this.qService.getQuestionsOfQuizForStart(this.qid).subscribe((data: any) => {
      // console.log(data[0].id);
      this.startQuiz = data;
      // console.log(data);
      this.timer = this.startQuiz.length * 1 * 60;

      // *********************************** question checked********************************************************************
      // add given ans in this.startQuiz Array 
      this.startQuiz.forEach(e => {
        e['givenAns'] = '';
      });
      // ********************************************************************************************************************************

      this.timerStart();

    }, (err) => {
      Swal.fire("Error", 'Something is Wrong', 'error');
    });
  }
  // ***************************************************Submit quiz****************************************************************
  submitQuiz() {

    Swal.fire({

      title: 'Do you want to submit Quiz?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      icon: 'warning',
    }).then((result) => {

      if (result.isConfirmed) {
        this.evalQuiz();
        this.fullScrenDisable();
        this.submitResult();
      }

    });




  }

  // *****************************************************EvalQuiz*******************************************************************
  evalQuiz() {

    this.isSubmit = true;

    this.startQuiz.forEach(e => {

      if (e.givenAns == e.ans) {
        this.cAns++
        let markSingal = this.startQuiz[0].quiz.maxMarks / this.startQuiz.length;
        let per = parseFloat(Number(this.cAns / this.startQuiz.length * 100).toFixed(2));
        this.percentage = per;
        this.marskGot += markSingal;

      }


      if (e.givenAns.trim() != '') {
        this.attemt++
      }


      if (this.percentage == 100) {
        this.a = true;
        this.g = "A+"
        this.iconColor = "#1b5e20";
        this.icon = "sentiment_very_satisfied";
        this.textColor = "#1b5e20";
        this.iq = "is very superior intelligence";

      }
      if (this.percentage <= 80) {
        this.g = "A"
        this.a = true;
        this.iconColor = "#2e7d32";
        this.icon = "sentiment_very_satisfied";
        this.textColor = "#2e7d32";
        this.iq = "very high";
      }
      if (this.percentage <= 60) {
        this.a = true;
        this.g = "B"
        this.iconColor = "#388e3c";
        this.icon = "sentiment_satisfied_alt";
        this.textColor = "#388e3c";
        this.iq = "Above-average intelligence";
      }
      if (this.percentage <= 40) {
        this.a = true;
        this.g = "C"
        this.iconColor = "#afb42b";
        this.icon = "sentiment_satisfied";
        this.textColor = "#afb42b";
        this.iq = "Average intelligence";
      }

      if (this.percentage <= 10) {
        this.a = true;
        this.g = "C-"
        this.iconColor = "red";
        this.icon = "sentiment_dissatisfied";
        this.textColor = "red";
        this.iq = "Low-average intelligence";
      }


      if (this.percentage == 0) {
        this.a = true;
        this.g = "F"
        this.iconColor = "red";
        this.icon = "sentiment_very_dissatisfied";
        this.textColor = "red";
        this.iq = "Extremely low intelligence";
      }



    });

    // console.log("ok" + this.cAns);
    // console.log("mks" + this.marskGot);
    // console.log(this.attemt);
  }


  // **********************************************************Home button*******************************************************


  home() {
    this._r.navigate(['/userDashboard/0']);
  }

  // ******************************************************Timer************************************************************************
  timerStart() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.evalQuiz();
        this.submitResult();
        this.fullScrenDisable();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);

  }

  // ************************************************format time************************************************************************
  formatTimetoMin() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60
    return `${mm} min : ${ss} sec`;
  }

  // *******************************************************full screen enable********************************************************** 
  fullScrenEnable() {

    this.elem = document.documentElement;
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen()

      // this.document.exitFullscreen().disabled = true;

    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();

    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();

    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
      this.document.msExitFullscreen().remove();
    }


  }

  // ***************************************************************full screen disable******************************************
  fullScrenDisable() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen()
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }


  // *************************************************Print Page***************************************************************
  print() {
    window.print()
  }

  // *************************************************submit result***************************************************************


  submitResult() {

    //for user
    this.result.totalMarks = this.maxmarks;
    this.result.marksGot = this.marskGot;
    this.result.correctAns = this.cAns;
    this.result.percentage = this.percentage;
    this.result.attempt = this.attemt;
    this.result.title = this.title;
    this.result.users.id = this.user.id;

    // console.log(this.result);

    this._result.userExamResult(this.result).subscribe(data => {
      // console.log(data);
    })

    //for admin
    this.adminResult.totalMarks = this.maxmarks;
    this.adminResult.marksGot = this.marskGot;
    this.adminResult.correctAns = this.cAns;
    this.adminResult.percentage = this.percentage;
    this.adminResult.attempt = this.attemt;
    this.adminResult.title = this.title;
    this.adminResult.users.id = this.user.id;

    this._result.adminPostResults(this.adminResult).subscribe(adminData => {

      // console.log(adminData);
    })


    //  console.log(this.result);
    // console.log(this.user.id);



  }

}


