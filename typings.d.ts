type Customer = {
    email: string;
    name: string; 
}

type CustomerList = {
    name: IDBCursor;
    value: Customer;
}

