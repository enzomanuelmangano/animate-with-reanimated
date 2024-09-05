import { AntDesign } from '@expo/vector-icons';
import React from 'react';

import { withCustomBackIcon } from './with-custom-back-icon-hoc';

import IntroductionToReanimated from '../animations/00-introduction-to-reanimated/App';
import PanGestureHandlerBasics from '../animations/01-pan-gesture-handler-basics/App';
import InterpolateWithScrollView from '../animations/02-interpolate-with-scrollview/App';
import InterpolateColor from '../animations/03-interpolate-color/App';
import PinchGestureHandlerBasics from '../animations/04-pinch-gesture-handler-basics/App';
import DoubleTapGestureHandler from '../animations/05-double-tap-gesture-handler/App';
import ScrollBehaviorRecreatedWithPanGestureHandler from '../animations/06-scroll-behavior-with-pan-gesture/App';
import ColorPickerAnimation from '../animations/07-color-picker/App';
import CircularProgressBar from '../animations/08-circular-progress-bar/App';
import SwipeToDelete from '../animations/09-swipe-to-delete/App';
import RippleButton from '../animations/10-ripple-effect/App';
import MenuPerspective from '../animations/11-menu-perspective/App';
import SlidingCounter from '../animations/12-sliding-counter/App';
import ClockLoader from '../animations/13-clock-loader/App';
import LayoutAnimations from '../animations/14-layout-animations/App';
import AnimatedFlatList from '../animations/15-animated-flatlist/App';
import SmoothDropdown from '../animations/16-smooth-dropdown/App';
import CircularCarousel from '../animations/17-circular-carousel/App';
import SkeletonLoader from '../animations/18-skeleton-animation/App';
import SteddySegmentedControl from '../animations/19-segmented-control/App';
import ShakeAnimation from '../animations/20-shake-animation/App';
import AnimatedSplitButton from '../animations/21-animated-split-button/App';
import ExploreInterpolateWithStackedCards from '../animations/22-stacked-cards/App';
import CheckboxInteractions from '../animations/23-checkbox-interactions/App';
import StoryListUI from '../animations/24-story-list/App';
import PagerDots from '../animations/25-pager-dots/App';
import AnimatedBarChart from '../animations/26-animated-bar-chart/App';

import { Dimensions } from 'react-native';

const ICON_SIZE = 24;
const ICON_COLOR = 'black';
const DefaultIconProps = {
  size: ICON_SIZE,
  color: ICON_COLOR,
};

const { width: WindowWidth, height: WindowHeight } = Dimensions.get('window');

const Screens = [
  {
    name: 'Intro to Reanimated',
    route: 'IntroductionToReanimated',
    component: IntroductionToReanimated,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Pan Gesture Handler Basics',
    route: 'PanGestureHandlerBasics',
    component: PanGestureHandlerBasics,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Interpolate with ScrollView',
    route: 'InterpolateWithScrollView',
    component: InterpolateWithScrollView,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Interpolate Color',
    route: 'InterpolateColor',
    component: InterpolateColor,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Pinch Gesture Handler Basics',
    route: 'PinchGestureHandlerBasics',
    component: PinchGestureHandlerBasics,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Double Tap Gesture Handler',
    route: 'DoubleTapGestureHandler',
    component: DoubleTapGestureHandler,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Scroll Behavior with Pan Gesture Handler',
    route: 'ScrollBehaviorWithPanGestureHandler',
    component: ScrollBehaviorRecreatedWithPanGestureHandler,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Color Picker Animation',
    route: 'ColorPickerAnimation',
    component: ColorPickerAnimation,
    backIconDark: false,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Circular Progress Bar',
    route: 'CircularProgressBar',
    component: CircularProgressBar,
    backIconDark: false,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Swipe to Delete',
    route: 'SwipeToDelete',
    component: SwipeToDelete,
    iconMarginLeft: WindowWidth - 90,
    iconMarginTop: 12,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Ripple Button',
    route: 'RippleButton',
    component: RippleButton,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Menu Perspective',
    route: 'MenuPerspective',
    component: MenuPerspective,
    backIconDark: true,
    iconMarginLeft: WindowWidth - 90,
    iconMarginTop: -12,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Sliding Counter',
    route: 'SlidingCounter',
    component: SlidingCounter,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Clock Loader',
    route: 'ClockLoader',
    component: ClockLoader,
    backIconDark: false,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Layout Animations',
    route: 'LayoutAnimations',
    component: LayoutAnimations,
    backIconDark: false,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Animated FlatList',
    route: 'AnimatedFlatList',
    component: AnimatedFlatList,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Smooth Dropdown',
    route: 'SmoothDropdown',
    component: SmoothDropdown,
    backIconDark: false,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Circular Carousel',
    route: 'CircularCarousel',
    component: CircularCarousel,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Skeleton Loader',
    route: 'SkeletonLoader',
    component: SkeletonLoader,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Steddy Segmented Control',
    route: 'SteddySegmentedControl',
    component: SteddySegmentedControl,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Shake Animation',
    route: 'ShakeAnimation',
    component: ShakeAnimation,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Animated Split Button',
    route: 'AnimatedSplitButton',
    component: AnimatedSplitButton,
    backIconDark: false,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Explore Interpolate with Stacked Cards',
    route: 'ExploreInterpolateWithStackedCards',
    component: ExploreInterpolateWithStackedCards,
    backIconDark: true,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Checkbox Interactions',
    route: 'CheckboxInteractions',
    component: CheckboxInteractions,
    backIconDark: false,
    iconMarginTop: WindowHeight - 200,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Story List UI',
    route: 'StoryListUI',
    component: StoryListUI,
    backIconDark: false,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Pager Dots',
    route: 'PagerDots',
    component: PagerDots,
    backIconDark: false,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
  {
    name: 'Animated Bar Chart',
    route: 'AnimatedBarChart',
    component: AnimatedBarChart,
    backIconDark: false,
    icon: () => <AntDesign name="smileo" {...DefaultIconProps} />,
  },
].map((item, index) => {
  return {
    ...item,
    id: index,
    component: withCustomBackIcon({
      Component: item.component,
      backIconDark: item.backIconDark,
      iconMarginLeft: item.iconMarginLeft,
      iconMarginTop: item.iconMarginTop,
    }),
  };
});

export { Screens };
