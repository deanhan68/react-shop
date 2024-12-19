export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validatorEmail = () => {
    return [
        {required: true, message: 'E-mail is required!'},
        {
            validator: (rule: any, value: string | undefined) => {
                if(!value || emailRegex.test(value)){
                    return Promise.resolve()
                } else {
                    return Promise.reject(new Error('Enter correct email, please!'))
                }
            }
        }
    ]
}