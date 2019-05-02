import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { MainActions } from '../../Redux/Actions';
import * as Forms from '../Forms';

class FormNavigator extends Component {
  state = {
    step: 0
  }

  onNextStep = () => {
    let step = this.state.step + 1;
    this.setState({step})
  }

  onLastStep = () => {
    let step = this.state.step - 1;
    this.setState({step})
  }

  renderForm() {
    switch (this.state.step) {
      default:
      case 0: return <Forms.DirectoryForm
        {...this.props.main}
        onNextStep={this.onNextStep}
        onLastStep={this.onLastStep}
        onChangeDirectory={this.props.list}/>;
      case 1: return <Forms.StackerForm
        {...this.props.main}
        onNextStep={this.onNextStep}
        onLastStep={this.onLastStep}/>;
    }
  }

  render() {
    return (
      <div>
        <Stepper activeStep={this.state.step} alternativeLabel>
          {['Select a Folder or Image', 'Choose Options'].map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {this.renderForm()}
        <div>
          <Button
            disabled={this.state.step === 0}
            onClick={this.onLastStep}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={this.onNextStep}>
            Next
          </Button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  let { directory, folders, files } = state.main
  return {
    main: { directory, folders, files }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    run: (command, args) => dispatch(MainActions.run(command, args)),
    list: (directory) => dispatch(MainActions.list(directory))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormNavigator)
