'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return <p>Hi</p>;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      <p>Like</p>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(App), domContainer);