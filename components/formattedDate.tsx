"use client"
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
  classes?: string,
  fromDate: Date 
};
export function FormattedTime ({classes, fromDate}: FormattedTimeProps) {
 const todayDate = new Date();
const formattee = format(todayDate, "do, MMM, yyy");


  return (
    <div className={classes}>
     {fromDate? format(fromDate, "do, MMM, yyy"): formattee}
    </div>
  )
}
