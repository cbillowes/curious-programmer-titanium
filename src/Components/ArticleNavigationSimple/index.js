import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Anchor from "../Anchor"
import { AiFillLeftCircle } from "@react-icons/all-files/ai/AiFillLeftCircle"
import { AiFillRightCircle } from "@react-icons/all-files/ai/AiFillRightCircle"

const Navigation = styled.nav`
  width: 75%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    font-size: 250%;
  }

  a {
    vertical-align: middle;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

const Title = styled.span`
  margin: 0 0.5rem;
`

const Left = styled.aside`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Right = styled.aside`
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ArticleNavigationSimple = ({ previous, next }) => {
  return (
    <Navigation>
      <Left>
        <Anchor to={previous.slug} title={previous.title} className="bland">
          <AiFillLeftCircle />
          <Title>{previous.title}</Title>
        </Anchor>
      </Left>
      <Right>
        <Anchor to={next.slug} title={next.title} className="bland">
          <Title>{next.title}</Title>
          <AiFillRightCircle />
        </Anchor>
      </Right>
    </Navigation>
  )
}

export default ArticleNavigationSimple

const shapeOfArticle = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

ArticleNavigationSimple.propTypes = {
  previous: PropTypes.shape(shapeOfArticle).isRequired,
  next: PropTypes.shape(shapeOfArticle).isRequired,
}
