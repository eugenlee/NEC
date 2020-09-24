import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GuidesItem extends Component {
    render() {

        return (
            <div className="row align-items-start text-center">
            {this.props.guides.map((guide) => (
                <div className="col-sm-4 mb-4" key={ guide.secondText }>
                    <a href={ guide.articleLink }><img src={ process.env.PUBLIC_URL + guide.imgLink } style={{ height:"352px", width:"100%" }} alt={ guide.firstText }></img></a>
                    <span className="first-text">{ guide.firstText }</span>
                    <span className="second-text"><a href={ guide.articleLink }>{ guide.secondText }</a></span>
                    <span>
                        { guide.spanBody }
                    </span>
                </div>
            ))}
            </div>
        );
    }
}

GuidesItem.propTypes = {
    guides: PropTypes.array.isRequired
}

export default GuidesItem;