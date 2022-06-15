import React from 'react';
import { Transition as BaseTransition, TransitionEvents } from '@headlessui/react';
import { TwStyle } from 'twin.macro';

type TransitionProps = {
  enter?: TwStyle;
  enterFrom?: TwStyle;
  enterTo?: TwStyle;
  entered?: TwStyle;
  leave?: TwStyle;
  leaveFrom?: TwStyle;
  leaveTo?: TwStyle;
  children: React.ReactNode;
  show?: boolean;
  as?: React.ElementType;
  appear?: boolean;
  unmount?: boolean;
} & TransitionEvents;

export default function Transition({
  enter,
  enterFrom,
  enterTo,
  entered,
  leave,
  leaveFrom,
  leaveTo,
  beforeEnter,
  afterEnter,
  beforeLeave,
  afterLeave,
  children,
  show,
  as,
  appear,
  unmount,
}: TransitionProps) {
  return (
    <BaseTransition
      enter="enter"
      enterFrom="enter-from"
      enterTo="enter-to"
      entered="entered"
      leave="leave"
      leaveFrom="leave-from"
      leaveTo="leave-to"
      css={{
        '&.enter': enter,
        '&.enter-from': enterFrom,
        '&.enter-to': enterTo,
        '&.entered': entered,
        '&.leave': leave,
        '&.leave-from': leaveFrom,
        '&.leave-to': leaveTo,
      }}
      beforeEnter={beforeEnter}
      afterEnter={afterEnter}
      beforeLeave={beforeLeave}
      afterLeave={afterLeave}
      show={show}
      as={as}
      appear={appear}
      unmount={unmount}
    >
      {children}
    </BaseTransition>
  );
}

Transition.Child = function TransitionChild({
  enter,
  enterFrom,
  enterTo,
  entered,
  leave,
  leaveFrom,
  leaveTo,
  beforeEnter,
  afterEnter,
  beforeLeave,
  afterLeave,
  children,
  show,
  as,
  appear,
  unmount,
}: TransitionProps) {
  return (
    <BaseTransition.Child
      enter="enter"
      enterFrom="enter-from"
      enterTo="enter-to"
      entered="entered"
      leave="leave"
      leaveFrom="leave-from"
      leaveTo="leave-to"
      css={{
        '&.enter': enter,
        '&.enter-from': enterFrom,
        '&.enter-to': enterTo,
        '&.entered': entered,
        '&.leave': leave,
        '&.leave-from': leaveFrom,
        '&.leave-to': leaveTo,
      }}
      beforeEnter={beforeEnter}
      afterEnter={afterEnter}
      beforeLeave={beforeLeave}
      afterLeave={afterLeave}
      show={show}
      as={as}
      appear={appear}
      unmount={unmount}
    >
      {children}
    </BaseTransition.Child>
  );
};
