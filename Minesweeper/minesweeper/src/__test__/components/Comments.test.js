import React from 'react';
import { mount } from 'enzyme';
import Comments from '../../components/Comments';



describe('<Comments />', ()=> {
   

    test('Comments: Must change state when getting data by inputs: email/ comment.', () => {
        const wrapper = mount(<Comments/>);
       
        let email = wrapper.find('#email');
        let comment = wrapper.find('#comment');
           
        email.simulate('change', {
            target: {
                value: 'pepe@gmail.com'
            }
        });
        comment.simulate('change', {
        target: {
            value: 'Hello Pepe'
            }
        });
      
         
        email = wrapper.find('#email');
        expect(email.prop('value')).toEqual('pepe@gmail.com');
        comment = wrapper.find('#comment');
        expect(comment.prop('value')).toEqual('Hello Pepe');
       
    });

    test('Comments: Must send data by Button onClick event.', () => {
        const wrapper = mount(<Comments />);
        // console.log(wrapper.debug())
        expect(wrapper.find('onClick')).toEqual({});
    });

})