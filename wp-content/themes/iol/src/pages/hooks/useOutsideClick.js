import React, {useRef, useEffect} from 'react'

export function useOutsudeClick(ref,callback) {
      useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
                         if (typeof callback == 'function') {
                                   callback(event.target)
                              }
				}
			}
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside)
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside)
			}
		}, [ref])
}