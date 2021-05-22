import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import { AiFillLeftCircle } from "@react-icons/all-files/ai/AiFillLeftCircle"
import { AiFillRightCircle } from "@react-icons/all-files/ai/AiFillRightCircle"

const Navigation = styled.nav`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  svg {
    font-size: 250%;
  }

  a {
    vertical-align: middle;
    display: flex;
    align-items: center;
  }
`

const Title = styled.span`
  margin: 0 0.5rem;
`

const Left = styled.aside`
  width: 40%;
  text-align: left;

  a {
    justify-content: flex-start;
  }
`

const Right = styled.aside`
  width: 40%;
  text-align: right;

  a {
    justify-content: flex-end;
  }
`

const Excerpt = styled.div``

const ArticleNavigationDetailed = ({ previous, next }) => {
  return (
    <Navigation>
      <Left>
        <Anchor to={previous.slug} title={previous.title} className="bland">
          <AiFillLeftCircle />
          <span></span>
          <Title>{previous.title}</Title>
        </Anchor>
        <Excerpt>{previous.excerpt}</Excerpt>
      </Left>
      <Right>
        <Anchor to={next.slug} title={next.title} className="bland">
          <Title>{next.title}</Title>
          <AiFillRightCircle />
        </Anchor>
        <Excerpt>{next.excerpt}</Excerpt>
      </Right>
    </Navigation>
  )
}

export default ArticleNavigationDetailed

const shapeOfArticle = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

ArticleNavigationDetailed.propTypes = {
  previous: PropTypes.shape(shapeOfArticle).isRequired,
  next: PropTypes.shape(shapeOfArticle).isRequired,
}
