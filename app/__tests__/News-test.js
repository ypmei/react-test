jest.unmock('../News');

import React from 'react'
import ReactDOM from 'react-dom'
import { assert, expect } from 'chai'
import TestUtils,{ReactComponentTreeDevtool} from 'react-addons-test-utils'
import { shallow, render, mount } from 'enzyme'
import News from '../News'

function shallowRender(Component, props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component {...props} />);
  return renderer.getRenderOutput();
}

describe("title",function(){
	const app = shallowRender(News);
	it("title应该是Count",function(){
		expect(app.props.children[0].type).to.equal('h1');
		expect(app.props.children[0].props.children).to.equal('Count');
	})
	it("测试className应该是red",function(){
		expect(app.props.children[1].props.className.indexOf('red')).to.equal(0);
	})
})

describe("DOM Render",function(){
	it("测试删除按钮",function(){
		const app = TestUtils.renderIntoDocument(<News/>);
		let items = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
		let itemLen = items.length;

		let appDom = ReactDOM.findDOMNode(app)
		// let deleteButton = TestUtils.findRenderedDOMComponentWithTag(app, 'button');
		let deleteButton = appDom.querySelector('button');
		TestUtils.Simulate.click(deleteButton);

		let afterItems = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
		expect(afterItems.length).to.equal(itemLen-1);
	})
})

describe("enzyme 测试 title",function(){
	it("title应该是Count",function(){
		const app = shallow(<News />);
		expect(app.find('h1').at(0).text()).to.equal('Count');
		expect(app.find('h1').first().text()).to.equal('Count');
	})

	it("li应该是2",function(){
		const app = render(<News />);
		expect(app.find('li').length).to.equal(2);
	})

	it("测试删除按钮",function(){
		const app = mount(<News />);
		let liLen = app.find('li').length;
		let deleteButton = app.find('button');
		deleteButton.simulate('click');
		expect(app.find('li').length).to.equal(liLen-1);
	})
})