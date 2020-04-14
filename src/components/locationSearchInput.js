import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Icon } from 'react-materialize'; 


function LocationSearchInput (props) {

  const { handleChange, address, type, icon } = props


  const handleSelect = address => {
    let formatted_address = ""

    geocodeByAddress(address)
      .then(results => {
        formatted_address = results[0].formatted_address
        return getLatLng(results[0])
      })
      
      .then(latLng => handleChange(formatted_address,type,latLng))
      .catch(error => console.error('Error', error));
  };

  return (
      <>
      <div className="auto-complete-wrapper-div">
        <Icon>{icon}</Icon>
        <PlacesAutocomplete
          value={address}
          onChange={(v) => handleChange(v,type)}
          onSelect={handleSelect}
        >
      
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: `${type.charAt(0).toUpperCase() + type.substring(1)} Location ...`,
                className: 'form-control auto-complete-input',
                "data-type": type
              })}
          
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                  
                const style = suggestion.active
                  ? { backgroundColor: '#ccc', cursor: 'pointer' }
                  : { backgroundColor: '#fff', cursor: 'pointer' };
                
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })} 
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
      </>
    );
}

export default LocationSearchInput