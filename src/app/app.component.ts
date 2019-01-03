import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  basic = new Math();

  submit() {
    console.log("submitted");
  }
}

class Math {
  counter = 0;
}
