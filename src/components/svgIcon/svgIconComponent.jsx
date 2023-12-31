/* eslint-disable react/prop-types */
import { SvgIconContainer } from './svgIconStyle';
import sprite from './sprite.svg';

export const SvgIcon = ({
  iconName,
  width,
  height,
  fill,
  stroke,
  hover,
  className,
  fillHover
}) => (
  <SvgIconContainer
    className={className}
    size={width}
    height={height}
    iconColor={fill}
    iconStroke={stroke}
    hover={hover}
    fillHover={fillHover}
  >
    <use xlinkHref={`${sprite}#${iconName}`} />
  </SvgIconContainer>
);
