import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
`


const Iconos = ({ wc, estacionamiento, habitaciones }) => {

    const iconos = useStaticQuery(graphql`
        query {
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"} }) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `)

    const imagenesIconos = iconos.iconos.edges

    return (
        <ListadoIconos>
            <li>
                <img src={imagenesIconos[2].node.publicURL} alt="icono wc"/>
                {wc}
            </li>
            <li>
                <img src={imagenesIconos[1].node.publicURL} alt="icono estacionamiento"/>
                {estacionamiento}
            </li>
            <li>
                <img src={imagenesIconos[0].node.publicURL} alt="icono habitaciones"/>
                {habitaciones}
            </li>
        </ListadoIconos>
    );
}
 
export default Iconos;