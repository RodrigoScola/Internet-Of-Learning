import { useEffect, useState } from "react";

export function useDisclosure(initialProps = {
     defaultIsOpen : false
}) {
     const [isOpen, setOpen] = useState(initialProps.defaultIsOpen);
     useEffect(() => {
     },[isOpen])
     const onOpen = () => {
     return     setOpen(true);
     }
     const onClose = () => {
     return  setOpen(false)
     }
     const ontoggle = () => {
      return  setOpen(curr => !curr);
     }
     return {isOpen, onClose, onOpen, ontoggle}
}