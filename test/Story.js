import React from 'react-native';

import Story from '../Components/Story.ios';
import { describe } from 'mocha';
import { expect } from 'chai';
import { it } from 'mocha';
import { shallow } from 'enzyme';

const {
  Text,
  Image,
} = React;

const demoStory = {
  content: {
    name: 'My test Story',
    relations: [{
      content: {
        href: 'http://awesomehref.com',
      },
      primaryType: 'bbc.mobile.news.collection'
    }]
  }
};

describe('Story', () => {
  it('should render', () => {
    const wrapper = shallow(<Story story={demoStory} />);
    expect(wrapper.length).to.equal(1);
  });

  it ('should have the right name', () => {
    const wrapper = shallow(<Story story={demoStory} />);
    expect(wrapper).to.contain(<Text>My test Story</Text>);
  });

  it ('should have the right url', () => {
    const wrapper = shallow(<Story story={demoStory} />);
    expect(wrapper).to.contain(<Image source={"bbc.mobile.news.collection"} />);
  });
});
