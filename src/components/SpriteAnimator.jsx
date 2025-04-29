import React from "react";
import PropTypes from "prop-types";
import { useSprite } from "./useSprite"; // ✅ Make sure path is correct

const noop = () => {};

const SpriteAnimator = ({
  className,
  width,
  height,
  sprite,
  scale = 1,
  direction = "horizontal",
  shouldAnimate = true,
  loop = true,
  startFrame = 0,
  fps = 60,
  stopLastFrame,
  onError = noop,
  onLoad = noop,
  onEnd = noop,
  frameCount,
  wrapAfter,
  frame,
  reset,
}) => {
  const style = useSprite({
    startFrame,
    sprite,
    width,
    height,
    direction,
    onError,
    onLoad,
    onEnd,
    frameCount,
    fps,
    shouldAnimate,
    stopLastFrame,
    reset,
    frame,
    scale,
    wrapAfter,
  });

  return (
    <div
      className={className}
      style={{
        ...style,
        overflow: "hidden",
        display: "inline-block",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
  };
  

SpriteAnimator.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  sprite: PropTypes.string.isRequired,
  scale: PropTypes.number,
  direction: PropTypes.string,
  shouldAnimate: PropTypes.bool,
  loop: PropTypes.bool,
  startFrame: PropTypes.number,
  fps: PropTypes.number,
  stopLastFrame: PropTypes.bool,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onEnd: PropTypes.func,
  frameCount: PropTypes.number,
  wrapAfter: PropTypes.number,
  frame: PropTypes.number,
  reset: PropTypes.bool,
};

export default SpriteAnimator;
