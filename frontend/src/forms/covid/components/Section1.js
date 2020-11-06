import React from "react";
import { Grid, Checkbox, FormControlLabel } from "@material-ui/core";

const Section1 = (props) => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <p
          style={{
            marginTop: 0,
            marginBottom: 20,
            fontStyle: "italic",
            fontSize: 22,
          }}
        >
          In the past 48 hours have you had, or are you currently experiencing:
        </p>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.cough}
            control={
              <Checkbox
                checked={props.state.cough}
                color="primary"
                onChange={props.onCheck}
                name="cough"
              />
            }
            label="New or worsening cough"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.fever}
            control={
              <Checkbox
                checked={props.state.fever}
                color="primary"
                onChange={props.onCheck}
                name="fever"
              />
            }
            label="Fever greater than 38 C (i.e. chills, sweats)"
            labelPlacement="end"
          />
        </Grid>

        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.nosimp}
            control={
              <Checkbox
                checked={props.state.nosimp}
                color="primary"
                onChange={props.onCheck}
                name="nosimp"
              />
            }
            label="Patient does not have a worsening cough or fever greater than 38 C."
            labelPlacement="end"
          />
        </Grid>

        <p
          style={{
            marginTop: 0,
            marginBottom: 20,
            fontStyle: "italic",
            fontSize: 22,
            marginTop:30,
            
          }}
        >
          OR <br/><br/>
          Have you had two or more of the following symptoms (new or worsening):
        </p>

       

        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.throat}
            control={
              <Checkbox
                checked={props.state.throat}
                color="primary"
                onChange={props.onCheck}
                name="throat"
              />
            }
            label="Sore throat"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.headache}
            control={
              <Checkbox
                checked={props.state.headache}
                color="primary"
                onChange={props.onCheck}
                name="headache"
              />
            }
            label="Headache"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.nose}
            control={
              <Checkbox
                checked={props.state.nose}
                color="primary"
                onChange={props.onCheck}
                name="nose"
              />
            }
            label="Runny nose"
            labelPlacement="end"
          />
        </Grid>
        {/* <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.sneeze}
            control={
              <Checkbox
                checked={props.state.sneeze}
                color="primary"
                onChange={props.onCheck}
                name="sneeze"
              />
            }
            label="Sneezing"
            labelPlacement="end"
          />
        </Grid> */}
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.breath}
            control={
              <Checkbox
                checked={props.state.breath}
                color="primary"
                onChange={props.onCheck}
                name="breath"
              />
            }
            label="Shortness of breath"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.nosimp2}
            control={
              <Checkbox
                checked={props.state.nosimp2}
                color="primary"
                onChange={props.onCheck}
                name="nosimp2"
              />
            }
            label="Patient does not have a sore throat, headache, runny nose or shortness of breath"
            labelPlacement="end"
          />
        </Grid>

        <p
          style={{
            marginTop: 0,
            marginBottom: 20,
            fontStyle: "italic",
            fontSize: 22,
            marginTop:"30px"
          }}
        >
          If you meet the above screening criteria, please call 811 to arrange
          Covid-19 testing and also notify our office.
        </p>
        <p
          style={{
            marginTop: 0,
            marginBottom: 20,
            fontStyle: "italic",
            fontSize: 22,
          }}
        >
          If you are under self-isolation requirements:
        </p>

        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.waitingresults}
            control={
              <Checkbox
                checked={props.state.waitingresults}
                color="primary"
                onChange={props.onCheck}
                name="waitingresults"
              />
            }
            label="Are you waiting for Covid-19 test results?"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.testedpositive}
            control={
              <Checkbox
                checked={props.state.testedpositive}
                color="primary"
                onChange={props.onCheck}
                name="testedpositive"
              />
            }
            label="Have you tested positive for Covid-19?"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.hadcontact}
            control={
              <Checkbox
                checked={props.state.hadcontact}
                color="primary"
                onChange={props.onCheck}
                name="hadcontact"
              />
            }
            label="Have you had close contact with someone who has or is suspected to have Covid-19?"
            labelPlacement="end"
          />
        </Grid>

        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.travelled}
            control={
              <Checkbox
                checked={props.state.travelled}
                color="primary"
                onChange={props.onCheck}
                name="travelled"
              />
            }
            label="Have you travelled outside of Atlantic Canada within the last 14 days?"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.requirements}
            control={
              <Checkbox
                checked={props.state.requirements}
                color="primary"
                onChange={props.onCheck}
                name="requirements"
              />
            }
            label="Patient is not under self-isolation requirements"
            labelPlacement="end"
          />
        </Grid>
        {/* <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.smellTaste}
            control={
              <Checkbox
                checked={props.state.smellTaste}
                color="primary"
                onChange={props.onCheck}
                name="smellTaste"
              />
            }
            label="Loss of sense of smell or taste"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.breath}
            control={
              <Checkbox
                checked={props.state.breath}
                color="primary"
                onChange={props.onCheck}
                name="breath"
              />
            }
            label="New or worsening shortness of breath"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.aches}
            control={
              <Checkbox
                checked={props.state.aches}
                color="primary"
                onChange={props.onCheck}
                name="aches"
              />
            }
            label="Muscle aches"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.fatique}
            control={
              <Checkbox
                checked={props.state.fatique}
                color="primary"
                onChange={props.onCheck}
                name="fatique"
              />
            }
            label="Unusual fatigue"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.lesions}
            control={
              <Checkbox
                checked={props.state.lesions}
                color="primary"
                onChange={props.onCheck}
                name="lesions"
              />
            }
            label="Red, purple, bluish lesions on the feet, toes or fingers without clear cause"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.diarrhea}
            control={
              <Checkbox
                checked={props.state.diarrhea}
                color="primary"
                onChange={props.onCheck}
                name="diarrhea"
              />
            }
            label="Diarrhea"
            labelPlacement="end"
          />
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Section1;
