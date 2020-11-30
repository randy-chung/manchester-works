/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { PureFeed } from './Feed';

storiesOf('Feed', module).add('default', () => <PureFeed feedEvents={[]} />);
