import * as React from 'react';
import * as Styles from './Icon.style';
import { IIconProps, Toggle } from '../../models';
import { mergeStyles } from '../../utils';

export class Icon extends React.Component<IIconProps> {
  constructor(props: IIconProps) {
    super(props);
  }

  public render() {
    const currentStyle = this.props.state === Toggle.on ? this.props.onStateStyle : this.props.offStateStyle;

    return (
      <div id="icon" style={mergeStyles(Styles.iconStyle)}></div>
    )
  }
}
