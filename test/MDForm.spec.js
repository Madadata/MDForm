import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { shallow } from 'enzyme';
import { createRenderer } from 'react-addons-test-utils';
import MDForm from 'src/MDForm';

expect.extend(expectJSX);

describe('MDForm', () => {

  describe('behaviors with minimum props', () => {

    const fields = [{ fieldName: 'username', displayName: 'Username' }];
    const buttons = [{ text: 'Login' }];

    let wrapper;

    before(() => {
      wrapper = shallow(<MDForm fields={fields} buttons={buttons} />);
    });

    it('should have # as form action and POST method', () => {
      const form = wrapper.find('form');
      expect(form.props().method).toBe('POST');
      expect(form.props().action).toBe('#');
    });

    it('should render a basic form', () => {
      expect(wrapper.childAt(0).type()).toBe('form');
    })

    it('should have an input field', () => {
      const inputsGroup = wrapper.find('form > div').first();
      const onlyInput = inputsGroup.childAt(0);
      const label = onlyInput.childAt(0);
      const input = onlyInput.childAt(1);

      expect(inputsGroup.length).toEqual(1);
      expect(label.type()).toBe('label');
      expect(input.type()).toBe('input');
      expect(input.props().type).toBe('text');
    });

    it('should have an button field', () => {
      const buttonsGroup = wrapper.find('form > div').last();
      const onlyButton = buttonsGroup.childAt(0);
      expect(buttonsGroup.children().length).toEqual(1);
      expect(onlyButton.childAt(0).text()).toBe('Login');
    })

  });

  describe('behaviors with url and method', () => {

    let wrapper;
    let form;
    let inputsGroup;
    let buttonsGroup;
    let clicked = false;

    const fields = [
      {
        fieldName: 'username',
        displayName: '用户名',
        placeholder: '用户名',
        type: 'text',
      },
      {
        fieldName: 'password',
        displayName: '密码',
        placeholder: '密码',
        type: 'password',
      },
    ];

    const buttons = [
      {
        text: '提交',
        type: 'submit',
        onClick: () => {
          clicked = true;
        }
      },
      {
        text: '未注册',
        type: 'button',
        redirect: '##',
      },
    ];

    before(() => {
      wrapper = shallow(
        <MDForm
          fields={fields}
          buttons={buttons}
          url="##"
          method="GET"
        />
    );
      form = wrapper.find('form');
      inputsGroup = form.children().first();
      buttonsGroup = form.children().last();
    })

    it('should have url as its action and GET as its methos', () => {
      expect(form.props().method).toBe('GET');
      expect(form.props().action).toBe('##');
    });

    it('should render proper number of inputs and buttons', () => {
      expect(inputsGroup.children().length).toEqual(2);
      expect(buttonsGroup.children().length).toEqual(2);
    });

    it('should render proper type of input', () => {
      const passwordInput =  inputsGroup.children().last();
      expect(passwordInput.children().last().props().type).toBe('password');
    });

    it('should call onClick method if clicked', () => {
      const button = wrapper.find('MDButton').first();
      button.simulate('click');
      expect(clicked).toBe(true);
    });

  });

});
