import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withVideo} from './with-video';

Enzyme.configure({
  adapter: new Adapter()
});

const Player = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

Player.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

it(`Video starts playing when updated with isActive-prop set true`, () => {
  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(
      <PlayerWrapped
        videoSettings={{
          src: `source.mp4`,
          poster: `image.jpg`,
          isMute: true,
          width: `280`,
          height: `175`,
        }}
        isActive={true}
      />
  );

  window.HTMLMediaElement.prototype.play = () => {};

  const {_videoRef} = wrapper.instance();
  jest.spyOn(_videoRef.current, `play`);

  wrapper.instance().componentDidUpdate();

  expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
});
