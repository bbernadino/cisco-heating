import React, { createContext, useContext, useState } from "react";
import BuildIcon from '@material-ui/icons/Build';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import FireplaceIcon from '@material-ui/icons/Fireplace';

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app
export const StateProvider = (props) => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Service and Repair',
      icon: <BuildIcon />,
      description: 
        'Residential repairs, installs, and new construction. Authorized York and Day and Night Dealer.'
    },
    {
      id: 2,
      title: 'Air Conditioning',
      icon: <AcUnitIcon />,
      description: 
        'Free estimates on new systems. Wide Variety of Air Conditioning systems and utilities.'
    },
    {
      id: 3,
      title: 'Furnace and Heating',
      icon: <FireplaceIcon />,
      description: 
        'Installs on furnaces and fireplaces. On call repairs tune ups and free new system estimates.'
    }
  ]);

  return (
    <StateContext.Provider value={[services, setServices]}>
      {props.children}
    </StateContext.Provider>
  );
};

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);