import React from "react";
import axios from "axios";
import Grid from "../functions/Grid";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.getDetails();
  }
  state = {
    details: null,
  };
  getDetails = async () => {
    try {
      const data = await axios.get("http://localhost:4000/getInfo");
      await this.setState({
        details: data,
      });
      console.log(this.state.details.data);
    } catch (e) {
      console.log("error");
    }
  };
  render() {
    return (
      <div style={{ backgroundColor: "#F5E6CF" }}>
        <div>
          {this.state.details &&
            this.state.details.data.map((data) => {
              return <Grid borrower={data[0]} lender={data[1]} />;
            })}
        </div>
      </div>
    );
  }
}
export default MainPage;
