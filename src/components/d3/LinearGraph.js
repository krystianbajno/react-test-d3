import * as React from "react"
import linear from "./linear";
import {useEffect, useRef, useState} from "react";


export default (props) => {
  const ref = useRef(null)
  const [updateRef, setUpdateRef] = useState({updater: null})

  useEffect(() => {
    if(props.data) {
      if (!updateRef.updater) {
        const fn = linear(ref.current, props.data)
        setUpdateRef({updater: fn})
      } else {
        updateRef.updater(props.data)
      }
    }
  }, [props.data])

  return <div ref={ref} />
}