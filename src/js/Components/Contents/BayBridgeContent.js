import React, { Component } from 'react';
import { withRouter } from 'react-router';

// import { Posts } from '../../Constants';
// import Theme from '../../Themes';
// import { ImageView } from '../Views';

class BayBridgeContent extends Component {
  render() {
    return (
      <div>
        <p>
          Here is a Javascript program I wrote to create this timelapse.
        </p>
        <pre className="prettyprint">{`
          /**
Create an array of indecies to stack, e.g [{i,j},{i,j},{i,j}]
**/
function createStackArray(fileList, options) {
  var growthList = [];
  var constantList = [];
  var decayList = [];
  var hasGrowth = "13".indexOf(options.stackGrowth) != -1;
  var hasDecay = "23".indexOf(options.stackGrowth) != -1;
  var hasOverlap = hasGrowth && hasDecay && fileList.length < (options.stackLength * 3);
  var growEvery = 2;
  if (hasOverlap) {
    alert("Warning: The stack length of " + options.stackLength + " is not obtainable with only " + fileList.length + " files. The rate of change will be increased.");
    // options.displacement++;
    growEvery = 3;
  }
  var start = fileList.length - 1;
  var end = 0;
  if (hasGrowth) {
    var i = start;
    var j = i - 1;
    var count = 0;
    while (i - j < options.stackLength && j >= 0) {
      growthList.push({i:i,j:j})
      j -= options.displacement;
      count++;
      if (count % growEvery == 0) i--;
    }
    start = i;
    if (j == 0) {
      alert("Warning: The stack length of " + options.stackLength + " is not obtainable with only " + fileList.length + " files");
      return growthList;
    }
  }
  if (hasDecay) {
    var j = end;
    var i = j + 1;
    var count = 0;
    while (i - j <= options.stackLength && i < fileList.length) {
      decayList.push({i:i,j:j})
      i += options.displacement;
      count++;
      if (count % growEvery == 0) j++;
    }
    end = (count % growEvery != 0) ? j + 1 : j;
    if (i == fileList.length) {
      alert("Warning: The stack length of " + options.stackLength + " is not obtainable with only " + fileList.length + " files");
      return decayList;
    }
  }
  var i = start;
  var j = i - options.stackLength;
  if (j < end) {
    end = 0;
    decayList = [];
    alert("Warning: The stack length of " + options.stackLength + " is not obtainable for growth and decay with only " + fileList.length + " files. Result will only have growth.");
  }
  while (j >= end) {
    constantList.push({i:i,j:j});
    i -= options.displacement;
    j -= options.displacement;
  }
  return growthList.concat(constantList).concat(decayList.reverse());
}
        `}</pre>
      </div>
    );
  }
}

export default withRouter(BayBridgeContent);
