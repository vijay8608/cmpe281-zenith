class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="cart" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
