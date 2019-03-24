import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <p className="has-text-centered"><a className="button is-large is-primary" href="#contact">Get started</a></p>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content" id="whatWeDo">             
                <h3>Drill Bits &amp; Pieces</h3>
                <h3>Why Choose Us</h3>
                <p>You could save thousands of dollars a year on drill bits by using our services!</p>
                <h3 id="whoWeAre">About Us</h3>
                <p>We are based in Auckland, provide spot weld drill bits sharpening service on site at your location in Auckland region.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-12">
                  <div className="content">
                    <h3>Contact us</h3>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-6">
                  <iframe id="contact" src="https://docs.google.com/forms/d/e/1FAIpQLSe-BGX_L-btTdU9_4jyOnHSdqjs1v5r0OQc6S7ObQdmrusfAw/viewform?embedded=true" width="100%" height="1039" frameborder="0" marginheight="0" marginwidth="0" title="Contact" style={{height: '1039px'}}>Loading...</iframe>
                </div>
                <div className="column is-6">
                  <div className="content">
                    <h3>Mail Order</h3>
                    <p>You can post your items if preferable. Please be sure to wrap your items nicely and include all of your contact information.</p>
                    <h3>Get in touch</h3>
                    <p>Mobile: 027 304 6811</p>
                    <p>Email: <a href="mailto:marilyns.ltd@gmail.com">marilyns.ltd@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
