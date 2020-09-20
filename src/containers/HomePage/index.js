import React from "react";
import styled, { css } from "react-emotion";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { connect } from "react-redux";
import {
  selectHomePageState,
  selectDataLoadedState,
  isErrorLoadingData,
} from "../../selectors";
import Loader from "../../components/Loader";
const Container = styled("div")`
  width: 100%;
`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    console.log("Ths.props", this.props);
    const { isdataLoaded, errorInLoadingData } = this.props;
    return (
      <Container>
        <Header {...this.props} />
        {errorInLoadingData ? (
          <Error errorText="Something went wrong" />
        ) : !isdataLoaded ? (
          <Loader />
        ) : (
          <div></div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    homePage: selectHomePageState(state),
    isdataLoaded: selectDataLoadedState(state),
    errorInLoadingData: isErrorLoadingData(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
HomePage.propTypes = {
  route: PropTypes.object,
  isdataLoaded: PropTypes.bool,
  errorInLoadingData: PropTypes.bool,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
