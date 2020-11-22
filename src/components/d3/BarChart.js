import * as React from "react"
import bar from "./bar";
import {useEffect, useRef, useState} from "react";

export default (props) => {
  const ref = useRef(null)
  const [updateRef, setUpdateRef] = useState({updater: null})

  useEffect(() => {
    if(props.data) {
      if (!updateRef.updater) {
        const fn = bar(ref.current, props.data)
        setUpdateRef({updater: fn})
      } else {
        updateRef.updater(props.data)
      }
    }
  }, [props.data])

  return <div ref={ref} />
}