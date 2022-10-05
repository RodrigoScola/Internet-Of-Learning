import { useEffect, useState } from "react"

export function useDisclosure(
	initialProps = {
		defaultIsOpen: false,
	}
) {
	const [isOpen, setOpen] = useState(initialProps.defaultIsOpen)
	useEffect(() => {}, [isOpen])
	const onOpen = () => {
		return setOpen(true)
	}
	const onClose = () => {
		return setOpen(false)
	}
	const ontoggle = () => {
		console.trace("who called")
		console.log("asfd")
		if (isOpen == true) {
			return setOpen(false)
		} else {
			return setOpen(true)
		}
	}
	return { isOpen, onClose, onOpen, ontoggle }
}
