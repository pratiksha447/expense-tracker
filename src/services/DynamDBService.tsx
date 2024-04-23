import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource.ts";

export default function DynamDBService() {
    const client = generateClient<Schema>({
        authMode: 'apiKey',
    })

    const createUser = async () => {
        await client.models.User.create({
            userID: "hanmantID",
            email: "hanmant@gmail.com",
            name: "hanmantName",
            passwordHash: "password#",
            createdAt: "2024-01-01T01:01:01.111Z"
        })
    };

    const createTransaction = async () => {
        await client.models.Transaction.create({
            userID: "hanmantID",
            transactionID: "transactionID_1",
            type: "type",
            amount: 1222,
            category: "FOOD",
            description: "Sushi",
            transactionDate: "2024-01-01T01:01:01.111Z",
            receiptURL: "receiptURL",
        });

        await client.models.Transaction.create({
            userID: "hanmantID",
            transactionID: "transactionID_2",
            type: "type",
            amount: 1222,
            category: "FOOD",
            description: "Sushi",
            transactionDate: "2024-02-01T01:01:01.111Z",
            receiptURL: "receiptURL",
        })

        await client.models.Transaction.create({
            userID: "hanmantID",
            transactionID: "transactionID_3",
            type: "type",
            amount: 1222,
            category: "DANGER",
            description: "Sushi",
            transactionDate: "2024-02-01T01:01:01.111Z",
            receiptURL: "receiptURL",
        })
    };

    const getTransactionByCategory = async () => {
        await client.models.Transaction.listByCategoryAndTransactionID({
            category: "DANGER",
            transactionID: {
                beginsWith: "transactionID"
            }
        })
    }

    return <div>
        <button onClick={createTransaction}>Add transaction</button>
        <button onClick={createUser}>Add User</button>
        <button onClick={getTransactionByCategory}>List by Category</button>
    </div>
}
