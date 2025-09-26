const inputConfigData = [
    {
        type: 'text',
        name: 'first-name',
        placeholder: 'First name',
        attributes: { autocomplete: 'on' },
    },
    {
        type: 'text',
        name: 'last-name',
        placeholder: 'Last name',
    },
    {
        type: 'text',
        name: 'display-name',
        placeholder: 'Display name',
    },
    {
        type: 'email',
        name: 'email',
        placeholder: 'Email address',
        attributes: { autocomplete: 'on' },
    },
    {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
    },
    {
        type: 'password',
        name: 'password-confirmation',
        placeholder: 'Password confirmation',
    },
];

const radioConfigData = [
    {
        id: 'buyer',
        label: 'Join As a Buyer',
        paragraphText:
            'I`m looking for a Name, Logo or Tagline for my business, brand or product',
    },
    {
        id: 'seller',
        label: 'Join As a Creative or Marketplace Seller',
        paragraphText:
            'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace',
    },
];

export { inputConfigData, radioConfigData };
