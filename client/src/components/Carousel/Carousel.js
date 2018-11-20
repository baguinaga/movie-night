import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

class myCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={this._handleClick.bind(this)}>Randomize</button>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img src='images/album-1.png' alt='Album one' />
          </div>
          <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
          <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
          <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
          <img src='images/album-5.png' alt='Album five' data-action="http://www.bbc.co.uk"/>
          <img src='images/album-6.png' alt='Album six' data-action="https://medium.com"/>
          <img src='images/album-7.png' alt='Album seven' data-action="http://www.google.com"/>
          <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
          <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
          <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
          <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};

ReactDOM.render(
  <Container></Container>,
  document.querySelector('.example_4')
);