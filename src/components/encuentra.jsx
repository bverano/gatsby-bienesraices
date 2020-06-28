import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import HeroCSS from '../css/hero.module.css'

const ImageBackground = styled(BackgroundImage)`
    height: 300px;
`

const Encuentra = () => {
    
    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file (relativePath: {eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid( maxWidth: 1500 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <ImageBackground
            Tag="section"
            fluid={imagen.sharp.fluid}
            fadeIn="soft"
        >
            <div className={HeroCSS.imagenbg}>
                <h3 className={HeroCSS.titulo}>Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </div>
        </ImageBackground>
    );
}
 
export default Encuentra;