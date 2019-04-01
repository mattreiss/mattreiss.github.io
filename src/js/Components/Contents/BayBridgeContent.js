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
          function mainLoop(fileList, outputDir, options) {
            var fileCount = 0;
            var i = fileList.length - 1;
            var j = i - options.stackLength;
            if (j < 0) j = 0;
            while (j >= 0) {
              switch (options.effect) {
                case "commet":
                default: applyCommetEffect(options, j, i);
              }
              fileCount++;
              saveJpg(outputDir, fileCount);
              var nextI = i - options.displacement;
              while (i > nextI) {
                activeDocument.layers[i].visible = false;
                i--;
                j--;
              }
            }
          }
        `}</pre>
      </div>
    );
  }
}

export default withRouter(BayBridgeContent);
