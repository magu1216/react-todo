import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Button = styled.button `
color: crimson;
background-color: ${props => props.background}
`

export default Button;