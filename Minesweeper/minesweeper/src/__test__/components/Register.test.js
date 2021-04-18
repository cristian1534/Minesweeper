import React from 'react';
import { mount } from 'enzyme';
import Register from '../../pages/Register';



describe('<Register />', ()=> {
   

    test('Register: Must change state when getting data by inputs: email/ surname.', () => {
        const wrapper = mount(<Register/>);
       
        let name = wrapper.find('#name');
        let surname = wrapper.find('#surname');
        let email = wrapper.find('#email');
        let password = wrapper.find('#password');

        name.simulate('change', {
            target: {
                value: 'Pepe'
            }
        });
        surname.simulate('change', {
            target: {
                value: 'Machuca'
            }
        });
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
      
        name = wrapper.find('#name');
        expect(name.prop('value')).toEqual('Pepe');

        surname = wrapper.find('#surname');
        expect(surname.prop('value')).toEqual('Machuca');
        
        email = wrapper.find('#email');
        expect(email.prop('value')).toEqual('pepe@gmail.com');
        
        password = wrapper.find('#password');
        expect(password.prop('value')).toEqual('pepe123');
       
    });

    test('Register: Must send data by Button onClick event.', () => {
        const wrapper = mount(<Register />);
        // console.log(wrapper.debug())
        expect(wrapper.find('onClick')).toEqual({});
    });

})