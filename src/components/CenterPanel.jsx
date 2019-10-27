import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CenterPanel extends Component {
  doClick = e => {
    alert("hola " + e);
  };

  render() {
    return (
      <div className="text-secondary" style={{ textAlign: "left" }}>
        {/* <button className="btn btn-dark" onClick={this.doClick}>
          Click
        </button> */}
        <div className="row">
          <div className="col-sm-3 col-md-6">
            Bacon ipsum dolor amet drumstick alcatra hamburger tail capicola
            frankfurter. Capicola chuck boudin sausage, buffalo porchetta
            kielbasa ground round tri-tip prosciutto leberkas tail biltong
            frankfurter.
          </div>
          <div className="col-sm-3 col-md-6">
            Ribeye rump cupim landjaeger boudin, shankle ham spare ribs tri-tip
            filet mignon short ribs pancetta hamburger pastrami. Chuck tail
            prosciutto, picanha turkey pork chop ham swine rump jowl jerky
            sausage pork belly beef ribs.
          </div>
        </div>
        Hamburger shoulder ham brisket andouille pork doner bresaola, pork belly
        pig boudin fatback capicola. Corned beef shoulder ground round pork
        belly tri-tip swine meatball frankfurter. T-bone short loin flank,
        prosciutto chuck pig fatback short ribs boudin. T-bone rump tenderloin
        meatball beef sirloin, flank corned beef. Beef fatback biltong short
        ribs andouille flank. Ham hock tri-tip fatback turducken cow beef t-bone
        picanha pork belly drumstick short ribs sirloin.
        <br />
        <center>
          <Button onClick={this.doClick}>hello button</Button>
        </center>
      </div>
    );
  }
}

export default CenterPanel;
