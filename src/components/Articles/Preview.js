import React from "react"
import PropTypes from "prop-types"
import Anchor from "../Anchor"
import Tags from "../Tags"
import Thumbnail from "../Thumbnail"
import Ribbon from "./Ribbon"

const Preview = ({
  index,
  number,
  slug,
  title,
  date,
  timeToRead,
  excerpt,
  tags,
  photo,
  credit,
  creditSource,
  creditLink,
  component,
}) => {
  const isEven = index % 2 === 0
  return (
    <div
      key={number}
      className={`relative mx-auto lg:w-7/12 xl:w-screen md:mt-12 md:mb-16 p-5 flex justify-center flex-col-reverse ${
        isEven ? "xl:flex-row-reverse" : "xl:flex-row"
      }`}
    >
      <div
        className={`xl:w-1/4 xl:mx-16 xl:${
          isEven ? "text-left" : "text-right"
        }`}
      >
        <h1 className="text-xl mt-8 xl:mt-0 md:text-2xl leading-loose font-semibold hover:text-color-1">
          <Anchor to={slug} title={title}>
            {title}
          </Anchor>
        </h1>
        <div className="leading-loose mb-4">
          <p className="text-neutral">
            {date} - Estimated {timeToRead} minute read
          </p>
          {excerpt}
        </div>
        <div
          className={`flex items-center flex-wrap ${
            isEven ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Anchor
            className={`bg-color-1 text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-green-600 ${
              isEven ? "mr-2" : "ml-4"
            }`}
            to={slug}
          >
            Read more
          </Anchor>
          <Tags tags={tags} />
        </div>
      </div>
      <div className="xl:w-1/4 relative">
        <Ribbon>{number}</Ribbon>
        <Thumbnail
          number={number}
          to={slug}
          alt={title}
          photo={photo}
          credit={credit}
          source={creditSource}
          link={creditLink}
          componentName={component}
        />
      </div>
    </div>
  )
}

Preview.propTypes = {
  index: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  tags: PropTypes.array,
  photo: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
  creditSource: PropTypes.string.isRequired,
  creditLink: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
}

export default Preview
