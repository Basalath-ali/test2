import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Offcanvas, Button } from 'react-bootstrap';

function LocationSection({ setLocationSearch, locationSearch, locationName, locationRestaurants }) {
  // State to control the offcanvas visibility
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Handlers for offcanvas visibility
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleSearchChange = (e) => {
    setLocationSearch(e.target.value);
  };

  const handleLocationClick = (placeId) => {
    locationRestaurants(placeId);
    handleClose(); // Close offcanvas on selecting a location
  };

  return (
    <div  >
      <Button className='m-4' variant="danger" onClick={handleShow}>
         Locations
      </Button>

      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Locations</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          < input style={{ boxShadow: "5px 8px 5px whitesmoke"}}
            onChange={handleSearchChange}
            value={locationSearch}
            placeholder="Search location"
            className="form-control mb-3"
          />
          <ol>
            {locationName?.map((item, i) => (
              <li
                key={item.place_id }
                className="list-item"
                onClick={() => handleLocationClick(item.place_id)}
                style={{ cursor: 'pointer', padding: '5px 0',fontWeight:"bold" }}
              >
                {item?.description}
              </li>
            ))}
          </ol>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

LocationSection.propTypes = {
  setLocationSearch: PropTypes.func.isRequired,
  locationSearch: PropTypes.string.isRequired,
  locationName: PropTypes.arrayOf(
    PropTypes.shape({
      place_id: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  locationRestaurants: PropTypes.func.isRequired,
};

export default LocationSection;
