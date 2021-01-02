import React, { useRef, useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const growDown = keyframes`
  0% {
    transform: scaleY(0)
  }
  80% {
    transform: scaleY(1.1)
  }
  100% {
    transform: scaleY(1)
  }
}
`

const List = styled.ul`
  list-style: none;
  background: #ffffff;
  padding-left: 0pt;
  border-radius: 5px;
  transition: all 0.4s ease;
  animation: ${growDown} 200ms ease-in-out forwards;
  transform-origin: ${(props) => `${props.origin} center`};
`

const ListItem = styled.li`
  border-bottom: 1px solid silver;
  padding: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const handleClick = (ref, setOpen, onClose, onSelect) => {
  const clickOut = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false)
      if (onClose) onClose()
    } else {
      if (onSelect) {
        onSelect(e.target.innerHTML)
        setOpen(false)
      }
    }
  }
  document.addEventListener('mousedown', clickOut)
  return () => {
    document.removeEventListener('mousedown', clickOut)
  }
}

const Dropdown = ({ open, items, onClose, onSelect, origin = 'bottom' }) => {
  const dropDownRef = useRef()
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  if (isOpen) handleClick(dropDownRef, setIsOpen, onClose, onSelect)

  return (
    <div ref={dropDownRef}>
      {isOpen ? (
        <List origin={origin}>
          {items.map((item, i) => {
            return <ListItem key={i}>{item}</ListItem>
          })}
        </List>
      ) : (
        <div />
      )}
    </div>
  )
}

export default Dropdown
