import { Component, OnInit, VERSION } from "@angular/core";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  private carpentinoPane: CupertinoPane;
  private cupertinoPaneSettings: CupertinoSettings = {
      parentElement: "body",
      breaks: {
        middle: { enabled: true, height: 200, bounce: true },
        bottom: { enabled: true, height: 80 }
      }
    };

  ngOnInit(): void {
    this.carpentinoPane = new CupertinoPane(".cupertino-pane", this.cupertinoPaneSettings);
  }

  showPane() {
    this.carpentinoPane.present({ animate: true });
  }

  destroyPane() {
    if (this.carpentinoPane.isPanePresented()) {
      this.carpentinoPane.destroy({ animate: true });
    }
  }
}
