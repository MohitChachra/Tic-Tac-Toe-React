(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),c=(n(14),n(2)),s=n(3),u=n(1),l=n(5),h=n(4),d=(n(15),n(8)),f=(n(16),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).handleClick=t.handleClick.bind(Object(u.a)(t)),t}return Object(s.a)(n,[{key:"handleClick",value:function(){var t=this.props.id.split("-"),e=Object(d.a)(t,2),n=e[0],a=e[1];this.props.updateBoard(n,a)}},{key:"render",value:function(){return r.a.createElement("div",{onClick:this.handleClick,className:"box"},this.props.value)}}]),n}(r.a.Component)),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n),t=e.call(this);for(var a=[],r=0;r<3;r++)a.push(["","",""]);return t.state={board:a,turn:0,winner:"p"},t.updateBoard=t.updateBoard.bind(Object(u.a)(t)),t}return Object(s.a)(n,[{key:"updateBoard",value:function(t,e){var n=this,a=this.state.board;if(""===a[t][e]&&"p"===this.state.winner){var r=this.state.turn;0===this.state.turn?(a[t][e]="O",r=1):(a[t][e]="X",r=0),this.setState({board:a,turn:r},(function(){n.setState({winner:n.checkWinner(n.state.board)})}))}}},{key:"checkWinner",value:function(t){for(var e=0;e<3;e++){if(t[0][e]===t[1][e]&&t[1][e]===t[2][e]&&""!==t[0][e]&&""!==t[1][e]&&""!==t[2][e])return 1===this.state.turn?"O":"X";if(t[e][0]===t[e][1]&&t[e][1]===t[e][2]&&""!==t[e][0]&&""!==t[e][1]&&""!==t[e][2])return 1===this.state.turn?"O":"X"}if(t[0][0]===t[1][1]&&t[1][1]===t[2][2]&&""!==t[0][0]&&""!==t[1][1]&&""!==t[2][2])return 1===this.state.turn?"O":"X";if(t[0][2]===t[1][1]&&t[1][1]===t[2][0]&&""!==t[0][2]&&""!==t[1][1]&&""!==t[2][0])return 1===this.state.turn?"O":"X";for(var n=0,a=0;a<3;a++)for(var r=0;r<3;r++)""!==t[a][r]&&n++;return 9==n?"none":"p"}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"board"},"p"===this.state.winner?r.a.createElement("h1",null,"Tic-Tac-Toe"):r.a.createElement("h1",null,"Winner is ",this.state.winner),r.a.createElement("div",{className:"box_container"},this.state.board.map((function(e,n){return e.map((function(e,a){return r.a.createElement(f,{value:e,key:"".concat(n,"-").concat(a),id:"".concat(n,"-").concat(a),updateBoard:t.updateBoard})}))}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8ecd9cfb.chunk.js.map