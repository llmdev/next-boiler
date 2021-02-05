import { StoryFn } from '@storybook/addons'
import GlobalStyles from '../src/styles/global';

export default (storyFn: StoryFn ) => (
    <>
    <GlobalStyles />
        {storyFn()}
    </>
)