import React, { Children } from "react"
import { useDisclosure } from "../../hooks/useDisclosure"

export const Tooltip = ({ position = "right", textColor = "black", color = "gray", children, text = "" }) => {
	return (
		<div className="tp">
			{text}
			<span className={` tp-text_${position} bg-${color} ${textColor}  zoom-in`}>{children}</span>
		</div>
	)
}
