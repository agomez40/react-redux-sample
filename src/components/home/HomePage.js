/**
 * Created by agomez on 13/09/16.
 */

import React from 'react';
import { Link } from 'react-router';

import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Pluralsight Administration"
                        subtitle="React, Redux and React Router in ES6 for ultra-responsive web apps."
                    />
                    <CardActions>
                        <FlatButton
                            label="Learn more"
                            containerElement={<Link to="about"/>}/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default HomePage;