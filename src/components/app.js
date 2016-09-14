/**
 * Created by agomez on 13/09/16.
 */

import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <Header />
                        {this.props.children}
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;