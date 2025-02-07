const orderSchema = {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        { name: "firstName", title: "First Name", type: "string" }, 
        { name: "lastName", title: "Last Name", type: "string" }, 
        { name: "address", title: "Address", type: "string" }, 
        { name: "zipCode", title: "Zip Code", type: "string" }, 
        { name: "phoneNumber", title: "Phone Number", type: "string" }, 
        { name: "emailAddress", title: "Email Address", type: "string" }, 
        {
            name: "cars",
            title: "Cars to Rent",
            type: "array",
            of: [{ type: "reference", to: { type: "car" } }],
        },
        { name: "total", title: "Total", type: "number" },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options: { // ✅ Fix: `Option` should be `options`
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Success", value: "success" }, // ✅ Fix: Spelling mistake in "Success"
                    { title: "Dispatch", value: "dispatch" },
                ],
                layout: "radio",
            },
            initialValue: "pending",
        },
    ],
};

export default orderSchema; // ✅ Fix: Named export
