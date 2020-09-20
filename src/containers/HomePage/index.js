import React from "react";
import styled, { css } from "react-emotion";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { connect } from "react-redux";

import {
  selectHomePageState,
  selectDataLoadedState,
  isErrorLoadingData,
  selectOkrsData,
  selectCategories,
  selectFilteredOkrs,
} from "../../selectors";
import Loader from "../../components/Loader";
import { getOkrs } from "./actions";
import DropDown from "../../components/DropDown";
import Objective from "../../components/Objective";
import { get } from "../../utils/helpers";
import ObjectiveInfoPopup from "../../components/ObjectiveInfoPopup";
const Container = styled("div")`
  width: 100%;
`;
const ContentWrap = styled("div")`
  display: flex;
  flex-direction: column;
`;
const DropDownWrap = styled("div")`
  justify-content: center;
  width: 100%;
  display: flex;
  margin: 1rem 0;
`;
const OKRWrap = styled("div")`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDownIndex: 0,
      objectiveInfo: {
        open: false,
        info: {
          category: "Company",
          title: "Exceed Net Promoter Score (NPS) of over 8.0",
          metricName: "NPS",
          metricStart: "0",
          metricTarget: "8",
        },
      },
    };
  }

  componentDidMount() {
    this.props.dispatch(getOkrs());
  }
  onSelectItem = (index) => {
    this.setState({
      activeDropDownIndex: index,
    });
  };
  displayObjectives = () => {
    const { selectFilteredOkrs = () => {}, categories } = this.props;
    const { activeDropDownIndex } = this.state;
    const category = categories[activeDropDownIndex] || "";
    const filteredOkrs = selectFilteredOkrs(category);
    return filteredOkrs.map((okr, index) => {
      const title = get(okr, "parent.title", "");
      const childObjectives = get(okr, "childObjectives", []);
      return (
        <Objective
          key={`${title}-parent`}
          title={title}
          childObjectives={childObjectives}
          id={index + 1}
          showObjectiveInfo={this.showObjectiveInfo}
        />
      );
    });
  };
  showObjectiveInfo = (info) => {
    this.setState({
      objectiveInfo: {
        open: true,
        info,
      },
    });
  };
  closeObjectiveInfo = () => {
    this.setState({
      objectiveInfo: {
        ...this.state.objectiveInfo,
        open: false,
      },
    });
  };
  render() {
    const {
      isdataLoaded,
      errorInLoadingData = false,
      categories = [],
    } = this.props;
    const { activeDropDownIndex, objectiveInfo } = this.state;

    return (
      <Container>
        <Header {...this.props} />
        {errorInLoadingData ? (
          <Error errorText="Something went wrong" />
        ) : !isdataLoaded ? (
          <Loader />
        ) : (
          <ContentWrap>
            <DropDownWrap>
              <DropDown
                listItems={categories}
                activeItem={activeDropDownIndex}
                onSelect={this.onSelectItem}
              />
            </DropDownWrap>
            <OKRWrap>{this.displayObjectives()}</OKRWrap>
          </ContentWrap>
        )}
        {objectiveInfo.open && (
          <ObjectiveInfoPopup
            info={objectiveInfo.info}
            close={this.closeObjectiveInfo}
          />
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
    okrData: selectOkrsData(state),
    categories: selectCategories(state),
    selectFilteredOkrs: (category) => selectFilteredOkrs(category)(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
HomePage.propTypes = {
  route: PropTypes.object,
  isdataLoaded: PropTypes.bool,
  errorInLoadingData: PropTypes.bool,
  selectFilteredOkrs: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
