import React from 'react';
import "./scss/index.scss";
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



export const Shop = () => {
    
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
      });
    
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const { gilad, jason, antoine } = state;
     console.log(state);
  
  return (
    <div className='shop_section'>
       <div className='nested_shop_Section'>
           <div className='banner_section'>
           <h1>Shop</h1>
           </div>
           <div className='content_shop'>
            <div className='filter_section'>
                <div className='collection'>
                <p>FILTER BY COLLECTION</p>
                  <ul>
                     <li>
                     <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          </FormGroup>
                     </li>
                  </ul>
                </div>
                <div className='collection'>
                <p>FILTER BY COLOR</p>
                </div>
            </div>
           </div>
       </div>
    </div>
  )
};
