import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Demos } from '@pagerland/themes/src/Landing/containers';

const DemosContainer = props => {
  const { demos } = useStaticQuery(graphql`
    query {
      demos: allFile(filter: { relativeDirectory: { eq: "demos" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 360, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const getDemoImage = imageName =>
    demos.edges.find(edge => edge.node.childImageSharp.fluid.originalName === imageName)?.node
      .childImageSharp.fluid;

  return (
    <Demos
      {...props}
      previews={[
        {
          isNew: false,
          title: 'Mobile app 1',
          ImgProps: {
            as: Img,
            fluid: getDemoImage('mobile-app-1.png'),
          },
          slug: 'mobile-app',
        },
        {
          isNew: false,
          title: 'Mobile app 2',
          ImgProps: {
            as: Img,
            fluid: getDemoImage('mobile-app-2.png'),
          },
          slug: 'mobile-app-2',
        },
        {
          isNew: false,
          title: 'Web app',
          ImgProps: {
            as: Img,
            fluid: getDemoImage('web-app.png'),
          },
          slug: 'web-app',
        },
        {
          isNew: true,
          title: 'Startup',
          ImgProps: {
            as: Img,
            fluid: getDemoImage('startup.png'),
          },
          slug: 'startup',
        },
        {
          isNew: true,
          title: 'Real Estate',
          ImgProps: {
            as: Img,
            fluid: getDemoImage('real-estate.png'),
          },
          slug: 'real-estate',
        },
        {
          placeholder: true,
          title: 'Business',
        },
      ]}
    />
  );
};

export default DemosContainer;
