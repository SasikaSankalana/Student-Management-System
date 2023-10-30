import React from "react";
import { TextField, Button } from "@mui/material";

export default function Landingpage() {
  return (
    <div className="container min-h-screen min-w-full bg-cover bg-center bg-background px-40 py-16">
      <div className="bg-hero-pattern drop-shadow-2xl bg-cover h-[80vh] w-[80vw] rounded-xl grid grid-cols-2 gap-4 ">
        <div className="m-10 ">
          <div className="bg-cover justify-center h-20 w-14 my-5 mx-auto bg-logo"></div>
          <p className="text-2xl font-bold text-center ">
            SERANKDA <br />
            SEONDORY SCHOOL
          </p>
          <p className="text-xl cont text-center ">Student managment system</p>
          <form >
            <tr>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                size="small"
                margin="normal"
              />
            </tr>
            <tr>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
                margin="normal"
              />
            </tr>
            <Button variant="contained" margin="normal" sx={{ mt: 2, mb: 2 }}>
              Login
            </Button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
