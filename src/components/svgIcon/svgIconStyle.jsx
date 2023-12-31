import styled from 'styled-components';

export const SvgIconContainer = styled.svg`
  width: ${props => props.size || '2rem'};
  height: ${props => props.height || '2rem'};
  fill: ${props => props.iconColor || '#ffffff'};
  stroke: ${props => props.iconStroke || '#000000'};
  transition-duration: 200ms;
  &:hover {
    stroke: ${props => props.hover || 'auto'};
  }
  &:hover {
    fill: ${props => props.fillHover || '#fff'};
  }
`;
