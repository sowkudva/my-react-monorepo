export const data = {
  formTitle: 'User Registration',
  fields: [
    {
      label: 'Full Name',
      name: 'fullName',
      type: 'text',
      placeholder: 'Enter your full name',
      validation: {
        required: true,
        minLength: 3,
        maxLength: 50,
      },
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      validation: {
        required: true,
        pattern: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$',
      },
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Enter a secure password',
      validation: {
        required: true,
        minLength: 8,
      },
    },
    {
      label: 'Gender',
      name: 'gender',
      type: 'radio',
      options: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
      validation: {
        required: true,
      },
    },
    {
      label: 'Country',
      name: 'country',
      type: 'select',
      options: [
        {
          label: 'United States',
          value: 'us',
        },
        {
          label: 'Canada',
          value: 'ca',
        },
        {
          label: 'United Kingdom',
          value: 'uk',
        },
      ],
      validation: {
        required: true,
      },
    },
    {
      label: 'Subscribe to newsletter',
      name: 'newsletter',
      type: 'checkbox',
      validation: {
        required: false,
      },
    },
    {
      label: 'Comments',
      name: 'comments',
      type: 'textarea',
      placeholder: 'Any additional information',
      validation: {
        required: false,
      },
    },
  ],
  submitLabel: 'Register',
}
