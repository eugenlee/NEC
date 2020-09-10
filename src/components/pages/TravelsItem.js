import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TravelsItem extends Component {
    getContinents(continent)  {
        return this.props.travels.map((travel) => (
            travel.continent === continent ?
            <div className="col-sm-3 mb-4" key={ travel.city }>
                <a href={ travel.link } target="_blank" rel="noopener noreferrer"><img src={ process.env.PUBLIC_URL + travel.image } style={{ height:"240px", width:"100%" }} alt={ travel.city }></img></a>
                <span id="cities">{ travel.city }</span>
                <span id="countries">{ travel.country }</span>
            </div>
            : ''
        ))
    }

    render() {
        return (
            <div>
                <span id="continents"> Asia/Oceania </span>
                <span className="row">
                    { this.getContinents('Asia/Oceania') }
                </span>

                <span id="continents"> The Americas </span>
                <span className="row">
                    { this.getContinents('The Americas') }
                </span>

                <span id="continents"> Europe </span>
                <span className="row">
                    { this.getContinents('Europe') }
                </span>

                <span id="continents"> Africa/Middle East </span>
                <span className="row">
                    { this.getContinents('Africa/Middle East') }
                </span>
            </div>
        );
    }
}

TravelsItem.propTypes = {
    travels: PropTypes.array.isRequired
}

export default TravelsItem;
