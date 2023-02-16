/*! For license information please see main.ff733956826e0f866b2c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/gsap/index.js"),a=s("./app/classes/Component.js"),i=s("./node_modules/lodash/each.js"),l=s.n(i),o=s("./app/utils/text.js");class r extends a.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,o.split)({element:this.elements.title,expression:"<br>"}),(0,o.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,console.log(this.element,this.elements),this.createLoader()}createLoader(){l()(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length++;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=n.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"6f6a9d3597cbb4c5f599"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mZjczMzk1NjgyNmUwZjg2NmIyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFFBT2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJdENDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksVUFHZEYsRUFBQUEsRUFBQUEsT0FBTSxDQUNKUixRQUFTUyxLQUFLUixTQUFTQyxNQUN2QlEsV0FBWSxTQUdkRCxLQUFLUixTQUFTVSxXQUNaRixLQUFLUixTQUFTQyxNQUFNSyxpQkFBaUIsYUFFdkNFLEtBQUtHLE9BQVMsRUFFZEMsUUFBUUMsSUFBSUwsS0FBS1QsUUFBU1MsS0FBS1IsVUFFL0JRLEtBQUtNLGVBR1BBLGVBQ0VDLEdBQUFBLENBQUtQLEtBQUtSLFNBQVNJLFFBQVNMLElBQzFCQSxFQUFRaUIsT0FBVUMsR0FBTVQsS0FBS1UsY0FBY25CLEdBQzNDQSxFQUFRb0IsSUFBTXBCLEVBQVFxQixhQUFhLGVBSXZDRixjQUFjRyxHQUNaYixLQUFLRyxTQUVMLE1BQU1XLEVBQVVkLEtBQUtHLE9BQVNILEtBQUtSLFNBQVNJLE9BQU9PLE9BRW5ESCxLQUFLUixTQUFTRyxXQUFXb0IsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSCxNQUVuQyxJQUFaQSxHQUNGZCxLQUFLa0IsV0FJVEEsV0FDRSxPQUFPLElBQUlDLFNBQVNDLElBR2xCcEIsS0FBS3FCLFdBQWFDLEVBQUFBLFFBQUFBLFNBQWMsQ0FDOUJDLE1BQU8sSUFHVHZCLEtBQUtxQixXQUFXRyxHQUFHeEIsS0FBS1IsU0FBU1UsV0FBWSxDQUMzQ3VCLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FHTDVCLEtBQUtxQixXQUFXRyxHQUNkeEIsS0FBS1IsU0FBU0csV0FDZCxDQUNFOEIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxRQUVMLFNBR0Y1QixLQUFLcUIsV0FBV0csR0FBR3hCLEtBQUtULFFBQVMsQ0FDL0JrQyxTQUFVLElBQ1ZDLEtBQU0sV0FDTkcsT0FBUSxFQUNSQyxnQkFBaUIsYUFDaEIsT0FFSDlCLEtBQUtxQixXQUFXVSxNQUFNdEIsSUFDcEJULEtBQUtnQyxLQUFLLG1CQUtoQkMsVUFDRWpDLEtBQUtULFFBQVEyQyxXQUFXQyxZQUFZbkMsS0FBS1QsMEJDbEc3QzZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIjtcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5cbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJcIixcbiAgICAgICAgbnVtYmVyVGV4dDogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIixcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcbiAgICB9KTtcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9XG4gICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIik7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsIHRoaXMuZWxlbWVudHMpO1xuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZUxvYWRlcigpIHtcbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5vbmxvYWQgPSAoXykgPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Bc3NldExvYWRlZChpbWFnZSkge1xuICAgIHRoaXMubGVuZ3RoKys7XG5cbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGg7XG5cbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYDtcblxuICAgIGlmIChwZXJjZW50ID09PSAxKSB7XG4gICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkZWQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAvLyB0aGlzLmVtaXQoXCJjb21wbGV0ZWRcIik7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8oXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCxcbiAgICAgICAge1xuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgICB5OiBcIjEwMCVcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCItPTEuNFwiXG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgIHNjYWxlWTogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMTAwJSAxMDAlJ1xuICAgICAgfSwgJy09MScpO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbCgoXykgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZWRcIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZmNmE5ZDM1OTdjYmI0YzVmNTk5XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzcGxpdCIsInRoaXMiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVMb2FkZXIiLCJlYWNoIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsIkdTQVAiLCJkZWxheSIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic3RhZ2dlciIsInkiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJjYWxsIiwiZW1pdCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=