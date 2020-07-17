import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import {withVideo} from './with-video';

const MockComponent = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

const MockComponentWithVideo = withVideo(MockComponent);

it(`withVideo should render correctly`, () => {
  const tree = renderer.create(
      <MockComponentWithVideo
        videoSettings={{
          src: `source.mp4`,
          poster: `image.jpg`,
          isMute: true,
          width: `280`,
          height: `175`,
        }}
        isActive={true}
      />, {
        createNodeMock() {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
