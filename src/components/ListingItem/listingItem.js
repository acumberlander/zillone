import React from 'react';
import PropTypes from 'prop-types';

import listingShape from '../../Helpers/Data/propz/listingShape';
import formatPrice from '../../Helpers/formatPrice';
import authRequests from '../../Helpers/Data/authRequests';

import './listingItem.scss';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
    deleteSingleListing: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleListing, listing } = this.props;
    deleteSingleListing(listing.id);
  }

  render() {
    const { listing } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (listing.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn btn-default" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };
    return (
      <li className="listing-item text-center">
        <span className="col-7">{listing.address}</span>
        <span className="col-3">{formatPrice(listing.price)}</span>
        {makeButtons()}
      </li>
    );
  }
}

export default ListingItem;