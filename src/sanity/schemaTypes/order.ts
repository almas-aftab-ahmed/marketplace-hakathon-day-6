


export default {
    name : 'order',
    type: 'document',
    title: 'order',
    fields : [
        {
            name: 'first name',
            title : 'First Name',
            type: 'string',
        },

        {
            name: 'last name',
            title : 'Last Name',
            type: 'string',
        },

        {
            name: 'adress',
            title : 'Adress',
            type: 'string',
        },

        {
            name: 'zip code',
            title : 'Zip Code',
            type: 'string',
        },

        {
            name: 'phone number ',
            title : 'Phone Number',
            type: 'string',
        },

        {
            name: ' email adress',
            title : 'Email Adress',
            type: 'string',
        },

        {
            name: ' cars',
            title : 'Cars to Rent',
            type: 'Array',
            of: [{ type : 'reference',  to : {type : 'car'} }]
        },
        {
            name: ' total',
            title : 'Total',
            type: 'number',
        },

        {
            name: ' status',
            title : 'Order Status',
            type: 'string',
            Option : {
                list: [
                    {title : 'Pending ', value : 'pending'},
                    {title : 'Sucess ', value : 'sucess'},
                    {title : 'Dispatch ', value : 'dispatch'},

                ],
                layout : 'radio'
            },
            initialValue : 'pending'
        },




    ]
}