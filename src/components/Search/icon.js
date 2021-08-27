import React from "react"
import PropTypes from "prop-types"
import { FiSearch as Search } from "@react-icons/all-files/fi/FiSearch"
import { IoCloseOutline as Close } from "@react-icons/all-files/io5/IoCloseOutline"

const CloseIcon = () => {
  return (
    <span className="flex relative">
      <span className="absolute text-sm" style={{ left: "1px", top: "1px" }}>
        <Close />
      </span>
      <Search />
    </span>
  )
}

export const SearchIcon = ({ show, toggle }) => {
  return (
    <div onClick={toggle} className="cursor-pointer">
      {!show && <Search />}
      {show && <CloseIcon />}
    </div>
  )
}

SearchIcon.propTypes = {
  toggle: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}
