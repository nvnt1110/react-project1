import React from "react";

export default class DetailProduct extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor ~ props", props)
  }

  render = () => {
    const { match } = this.props;
    console.log("match", match)
    return (
      <div>
        <h1>{match.params.id}</h1>
      </div>
    );
  }
}
