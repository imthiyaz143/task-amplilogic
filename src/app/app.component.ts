import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {
  title = 'Amplilogic-demo';
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  progressValue = 0; // Initial progress value
  showProgress!: boolean;
  showPopup = false; // Initially, the off-canvas popup is hidden



  constructor(private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    // Simulate progress over time (e.g., during data loading)

  }
  startProgress() {
    this.progressValue =0;

    this.showProgress = true; // Show the progress bar

    setTimeout(() => {
      this.loadProgress();

    })
  }

  loadProgress() {

    const interval = setInterval(() => {
      this.progressValue += 10;
      // Increase progress by 10%
      console.log(this.progressValue);

      if (this.progressValue >= 100) {
        this.snackBar.open('Sucess   Migration applied sucessfully','', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
      
        });
       setTimeout(()=>{

         // this.progressValue = 0;
        //  const btn = document.getElementById('offcanvas-btn');
        //  btn?.click();
         this.showProgress = false;
       },500);
       clearInterval(interval); // Stop when progress reaches 100%

      }
    }, 100); // Change this interval as needed
    // this.showProgress=false;
  }




  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds (2 seconds in this example)
    });

  }
}
