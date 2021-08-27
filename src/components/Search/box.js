import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus, toggle }) => (
    <form className={`relative ${className}`}>
      <input
        className="py-4 bg-color-2 placeholder-search-neutral-1 text-search-neutral-2 text-3xl lg:text-7xl border-b border-search-neutral-1 w-screen outline-none pl-4"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
        onKeyUp={(e) => {
          if (e.key === "Escape") {
            toggle()
          }
        }}
      />
    </form>
  ),
)
