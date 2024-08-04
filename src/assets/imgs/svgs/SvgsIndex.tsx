import React from 'react';
import Dashboard from './SvgsFiles/dashboard.svg';
import Media from './SvgsFiles/media.svg';
import More from './SvgsFiles/more.svg';
import Watch from './SvgsFiles/watch.svg';
import SearchBlack from './SvgsFiles/searchBlack.svg';
import CrossBlack from './SvgsFiles/cross.svg';

export const DashboardIcon = ({props, style}: any) => {
  return (
    <Dashboard width={props.width} height={props.height} style={{...style}} />
  );
};
export const MediaIcon = ({props, style}: any) => {
  return <Media width={props.width} height={props.height} style={{...style}} />;
};
export const MoreIcon = ({props, style}: any) => {
  return <More width={props.width} height={props.height} style={{...style}} />;
};
export const WatchIcon = ({props, style}: any) => {
  return <Watch width={props.width} height={props.height} style={{...style}} />;
};
export const SearchIconBlack = ({props, style}: any) => {
  return (
    <SearchBlack width={props.width} height={props.height} style={{...style}} />
  );
};
export const CrossIconBlack = ({props, style}: any) => {
  return (
    <CrossBlack width={props.width} height={props.height} style={{...style}} />
  );
};
