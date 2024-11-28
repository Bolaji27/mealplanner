import {format} from "date-fns";
import React from 'react'

export default function () {
  const today = Date();
const formated = format(today, "do 'of' MMM, yyy")
  return (
    <div>
 {  formated}
    </div>
  )
}


