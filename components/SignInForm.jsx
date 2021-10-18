import {Button, DatePicker, Form, Input, Space} from 'antd';

export const SignInForm = () => {
    const onFinish = values => {
        
        console.log('Received values of form: ', values);
        console.log('Date', values.birthdate);
        fetch("backedn url", {
            headers:{
                authorization: "Beare asddhadnaks nakjsndkjasn dans jkdans kj"
            },
            method: "POST",
            body: {
                name: values.username,
                password: values.password,
                email: values.email,
                birthdate: new Date(values.birthdate).getTime()
            }
        }).then(res=>{
            if(res.ok){
            }
        })
    };
    
    return (
        <Form name="complex-form" onFinish={onFinish} labelCol={{span: 8}} wrapperCol={{span: 16}}>
            <Form.Item label="Username">
                <Space>
                    <Form.Item
                        name="username"
                        noStyle
                        rules={[{required: true, message: 'Username is required'}]}
                    >
                        <Input style={{width: 160}} placeholder="Please type username"/>
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="Password">
                <Space>
                    <Form.Item
                        name="password"
                        noStyle
                        /*
                        Strong password policy:
                            Must be at least 8 characters long
                            Must contain at least one digit
                            Must contain at least one uppercase letter and one lowercase letter
                            Must not contain a whitespace
                        */
                        rules={[{
                            max: 50,
                            min: 8,
                            pattern: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$)",
                            required: true,
                            message: 'Password is required',
            
                        }]}
                    >
                        <Input style={{width: 160}} placeholder="Please type password" type="password"/>
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label = "Email">
                <Space>
                    <Form.Item
                        name = "email"
                        noStyle
                        rules = {[{
                            required: true, 
                            type: 'email', 
                            message: 'Email is required'
                        }]}
                    >
                        <Input style={{width: 160}} placeholder="Please type email"/>
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="DatePicker" 
            name="birthdate"
            rules = {[{
                required: true, 
                type: 'birthdate'
            }]}
            >
                <DatePicker/>
            </Form.Item>
            <Form.Item label=" " colon={false}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
