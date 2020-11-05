import Component from '../packages/button';

export default {
  title: 'Button',
};

// default task state
export const Default = () => ({
  Component,
  props: {
    variant: 'raised',
  },
  on: {
    click: () => alert('Clicked!')
  },
});
