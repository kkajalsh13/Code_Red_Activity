import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  correct:any =  Array(10).fill(false)
  wrong:any =  Array(10).fill(false)
  Answer = false

  input1:string =""
  input2:string =""
  input3:string =""
  input4:string =""
  input5:string =""
  input6:string =""
  input7:string =""
  input8:string =""
  input9:string =""
  input10:string =""

  reset(){
    window.location.reload()
  }
  submit(){
    this.Answer = true
    if(this.input1.toLowerCase() == "us dollar"){
      this.correct[0] = true;
      (document.getElementById("L1") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[0] = true;
      (document.getElementById("L1") as HTMLElement).style.color = "red"
    }

    if(this.input2.toLowerCase() == "euro"){
      this.correct[1] = true;
      (document.getElementById("L2") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[1] = true;
      (document.getElementById("L2") as HTMLElement).style.color = "red"
    }
    if(this.input3.toLowerCase() == "new zealand dollar"){
      this.correct[2] = true;
      (document.getElementById("L3") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[2] = true;
      (document.getElementById("L3") as HTMLElement).style.color = "red"
    }
    if(this.input4.toLowerCase() == "chilean peso"){
      this.correct[3] = true;
      (document.getElementById("L4") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[3] = true;
      (document.getElementById("L4") as HTMLElement).style.color = "red"
    }

    if(this.input5.toLowerCase() == "thai baht"){
      this.correct[4] = true;
      (document.getElementById("L5") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[4] = true;
      (document.getElementById("L5") as HTMLElement).style.color = "red"
    }

    if(this.input6.toLowerCase() == "malaysian ringgit"){
      this.correct[5] = true;
      (document.getElementById("L6") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[5] = true;
      (document.getElementById("L6") as HTMLElement).style.color = "red"
    }

    if(this.input7.toLowerCase() == "kenyan shilling"){
      this.correct[6] = true;
      (document.getElementById("L7") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[6] = true;
      (document.getElementById("L7") as HTMLElement).style.color = "red"
    }

    if(this.input8.toLowerCase() == "israeli shekel"){
      this.correct[7] = true;
      (document.getElementById("L8") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[7] = true;
      (document.getElementById("L8") as HTMLElement).style.color = "red"
    }

    if(this.input9.toLowerCase() == "saudi arabian riyal"){
      this.correct[8] = true;
      (document.getElementById("L9") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[8] = true;
      (document.getElementById("L9") as HTMLElement).style.color = "red"
    }

    if(this.input10.toLowerCase() == "south african rand"){
      this.correct[9] = true;
      (document.getElementById("L10") as HTMLElement).style.color = "rgb(0, 188, 6)"
    }
    else{
      this.wrong[9] = true;
      (document.getElementById("L10") as HTMLElement).style.color = "red"
    }


  }
  showAnswer(){
    this.input1 ="us dollar"

    this.input2 ="euro"

    this.input3 = "new zealand dollar"

    this.input4 = "chilean peso"

    this.input5 = "thai baht"

    this.input6 = "malaysian ringgit"

    this.input7 = "kenyan shilling"

    this.input8 = "israeli shekel"

    this.input9 = "saudi arabian riyal"

    this.input10 = "south african rand"
  }
  

}
