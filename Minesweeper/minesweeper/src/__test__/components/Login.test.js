import React from 'react';
import { mount } from 'enzyme';
import Login from '../../pages/Login';



describe('<Login />', ()=> {
   

    test('Login: Must change state when getting data by inputs: email/ surname.', () => {
        const wrapper = mount(<Login/>);
       

        let email = wrapper.find('#email');
        let password = wrapper.find('#password');

        email.simulate('change', {
            target: {
                value: 'pepe@gmail.com'
            }
        });
        password.simulate('change', {
        target: {
            value: 'pepe123'
            }
        });
      

        email = wrapper.find('#email');
        expect(email.prop('value')).toEqual('pepe@gmail.com');
        
        password = wrapper.find('#password');
        expect(password.prop('value')).toEqual('pepe123');
       
    });

    test('Login: Must send data by Button onClick event.', () => {
        const wrapper = mount(<Login />);
        // console.log(wrapper.debug())
        expect(wrapper.find('onClick')).toEqual({});
    });

})