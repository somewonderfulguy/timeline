import { ComponentProps, ElementRef, forwardRef } from 'react';
import * as SliderRadix from '@radix-ui/react-slider';

import classNames from '~utils/classNames';

import styles from './Slider.module.css';

const Slider = forwardRef<
  ElementRef<typeof SliderRadix.Root>,
  ComponentProps<typeof SliderRadix.Root>
>((props, ref) => (
  <SliderRadix.Root
    defaultValue={[5]}
    max={10}
    step={1}
    {...props}
    className={classNames(styles.sliderRoot, props.className)}
    ref={ref}
  >
    <SliderRadix.Track className={styles.sliderTrack}>
      <SliderRadix.Range className={styles.sliderRange} />
    </SliderRadix.Track>
    <SliderRadix.Thumb className={styles.sliderThumb} aria-label="Volume" />
  </SliderRadix.Root>
));

export default Slider;
