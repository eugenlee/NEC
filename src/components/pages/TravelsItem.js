import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TravelsItem extends Component {
    render() {
        return (
            this.props.continents.map((continent) => (
                <div>
                    <div className="row">
                    <span className="col-sm-12" id="continents">{ continent.continent }</span>
                    </div>

                    <div className="row">
                        <img className="col-sm-3" src={ continent.image } alt="square"></img>
                        <img className="col-sm-3" src={ continent.image } alt="square"></img>
                        <img className="col-sm-3" src={ continent.image } alt="square"></img>
                        <img className="col-sm-3" src={ continent.image } alt="square"></img>
                    </div>
                </div>
            ))
        );
    }
}

TravelsItem.propTypes = {
    continents: PropTypes.object.isRequired
}

export default TravelsItem;