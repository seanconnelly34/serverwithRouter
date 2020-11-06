import React from "react";
import { Grid } from "@material-ui/core";

const paraStyle = {
    fontSize:"16px"
} 

const Para2 = () => {
  return (
    <Grid item xs={12} sm={12}>
      <p style={paraStyle}>
      I confirm that the information on this form is truthful and accurate. 
     </p>

     <p style={paraStyle}>
I understand that Landings Surgical Centre implements all of the necessary practices to ensure the health and safety of patients, physicians and staff during the Covid-19 pandemic. 
</p>
<p style={paraStyle}>
I understand that Nova Scotia Health: Public Health has asked individuals to maintain physical distancing at 2 metres (6 feet) due to Covid-19 and it is not always possible to maintain this distance while receiving care at Landings Surgical Centre. 
</p>
<p style={paraStyle}>
1. There is a risk that I could be exposed to severe acute respiratory syndrome coronavirus 2, the virus responsible for COVID-19 (hereinafter referred to as “COVID 19”) while attending at the Facility to receive the Services. I accept and acknowledge that I could be exposed to COVID 19 through the following means (this list is not exhaustive): 
      </p>

 
<ol style={paraStyle}>
    <li>
My physical presence at the Facility;  
</li>
<li>
My interactions with other patients or members of the public who are present at the Facility at the time of my attendance;  
</li>
<li>
My interactions with staff, agents and other health care professionals at the Facility; and  
</li>
<li>
The physical touching of any equipment or fixtures in the Facility.  
</li>
 </ol>
 <p style={paraStyle}>
 While receiving services, the Service Provider may need to be physically closer to me than the recommended social distancing guidelines in order to assess and/or treat me.  
<br/>
I acknowledge that I have read and fully understand the risks as described above. I acknowledge and confirm that I am willing to accept these risks as a condition of attending at the Facility to receive the Services from the Service Provider.  
 </p>
 <p style={paraStyle}>I knowingly and willingly consent to receive care at Landings Surgical Centre during the Covid-19 pandemic.</p>
    </Grid>
  );
};
export default Para2;
