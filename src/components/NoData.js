import React from 'react';
import styled from '@emotion/styled';

const NoData = ({ parentProps, parentState, parentMethods }) =>
  parentProps.noDataRenderer ? (
    parentProps.noDataRenderer(parentProps, parentState, parentMethods)
  ) : (
    <NoDataComponent>
      { parentProps.noDataLabel }
    </NoDataComponent>
  );

NoData.propTypes = {};

const NoDataComponent = styled.div`
  padding: 10px;
  text-align: center;
  color: deepskyblue;
`;

export default NoData;
