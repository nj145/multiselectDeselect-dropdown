import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import MultiSelectAll from "./MultiSelectAll";

const Selection = () => {
  const initialValue = [{ label: "Uber", value: "5" }];

  const companyNames = [
    { label: "Amazon", value: "1" },
    { label: "Google", value: "2" },
    { label: "Netflix", value: "3" },
    { label: "Microsoft", value: "4" },
    { label: "Uber", value: "5" },
    { label: "Walmart", value: "6" },
    { label: "CVS", value: "7" }
  ];

  const getTextBoxInputValue = (input) => {
    return input.map((itm) => itm.label).join(";");
  };

  const [currentSelection, setCurrentSelection] = useState(
    getTextBoxInputValue(initialValue)
  );

  const handleSelectionChange = (result) => {
    const valueToSave = result.map((itm) => itm.label).join(";");
    setCurrentSelection(valueToSave);
  };

  return (
    <Grid container>
      <Grid item sx={{ p: 2 }}>
        <MultiSelectAll
          items={companyNames}
          selectAllLabel="Select All"
          value={initialValue}
          onChange={handleSelectionChange}
        />
      </Grid>
      <Grid item sx={{ p: 2 }}>
        <Typography>Selected items:</Typography>
        <TextField sx={{ width: "350px" }} value={currentSelection} />
      </Grid>
    </Grid>
  );
};

export default Selection;
