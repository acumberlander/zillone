import React from 'react';
import './listingForm.scss';

class ListingForm extends React.Component {
  render() {
    return (
      <div className="listingForm col">
        <h2>Add New Listing:</h2>
        <form>
          <div className="form-group">
            <label for="address">Address</label>
            <input 
              type="text"
              className="form-control"
              id="address"
              aria-describedby="emailHelp"
              placeholder="123 Main Street Nashville, TN 37215"
            />
          </div>
          <button className="btn btn-danger">
            Save Listing
          </button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
