import {format} from "date-fns";

import React from 'react'

export default function FormattedDate() {
  const today = Date();
const formated = format(today, "do 'of' MMM, yyy")
  return (
    <div>
 {  formated}
    </div>
  )
}
type FormattedTimeProps = {
  classes?: string; // Define classes as an optional string
};
export function FormattedTime ({classes}: FormattedTimeProps) {
 const todayDate = Date();
const formattee = format(todayDate, "do, MMM, yyy");
  return (
    <div className={classes}>
     {formattee}
    </div>
  )
}
