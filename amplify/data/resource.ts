import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

// Go to https://docs.amplify.aws/gen2/build-a-backend/data/customize-authz/ and customize the auth

const schema = a.schema({
    User: a.model({
        userID: a.id().required(),
        email: a.string(),
        name: a.string(),
        passwordHash: a.string(),
        createdAt: a.datetime(),
        transactions: a.hasMany('Transaction', 'userID')
    }).identifier(['userID'])
        .authorization(allow => [allow.publicApiKey()]),

    Transaction: a.model({
        userID: a.id().required(), // This is the foreign key to User
        transactionID: a.id().required(),
        user: a.belongsTo('User',  'userID'),
        type: a.string(),
        amount: a.float(),
        category: a.string(),
        description: a.string(),
        transactionDate: a.datetime(),
        receiptURL: a.string()
    }).identifier(['userID', 'transactionID'])
        .secondaryIndexes((index) => [
            index('category')
            .sortKeys(["transactionID"])
            .name("CategoryIndex")
        ])
        .authorization(allow => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'apiKey',
        apiKeyAuthorizationMode: { expiresInDays: 30 }
    }
});