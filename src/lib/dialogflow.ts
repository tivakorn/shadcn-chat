// import dialogflow from '@google-cloud/dialogflow'
// import uuid from 'uuid'

// /**
//  * Send a query to the dialogflow agent, and return the query result.
//  * @param {string} projectId The project to be used
//  */
// export const detectTextIntent = async (projectId = 'tokiomarine-i9vi') => {

//     // A unique identifier for the given session
//     const sessionId = uuid.v4();

//     // Create a new session
//     const sessionClient = new dialogflow.SessionsClient();

//     const sessionPath = sessionClient.projectAgentSessionPath(
//         projectId,
//         sessionId
//     );

//     // The text query request.
//     const request = {
//         session: sessionPath,
//         queryInput: {
//             text: {
//                 // The query to send to the dialogflow agent
//                 text: 'hello',
//                 // The language used by the client (en-US)
//                 languageCode: 'en-US',
//             },
//         },
//     };

//     // Send request and log result
//     const responses = await sessionClient.detectIntent(request) as any

//     console.log('Detected intent')
//     const result = responses[0].queryResult
//     console.log(`  Query: ${result.queryText}`)
//     console.log(`  Response: ${result.fulfillmentText}`)

//     if (result.intent) {
//         console.log(`  Intent: ${result.intent.displayName}`)
//     } else {
//         console.log('  No intent matched.');
//     }
// } 

import { SessionsClient } from '@google-cloud/dialogflow';

const env_google = {
    type: "service_account",
    project_id: "tokiomarine-i9vi",
    private_key_id: "824010898dd62562ad120a6e7403a4815b22b3e9",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0WLI+snZaw0f2\n5ofd82OglY7CSuKjUlk6UCIiuiCbAyhHvRD3P1gTN0vPc9/c3AWQt+YvWK/98HbW\nF1AVvLhoIeIBHt027+NJYDoDeX0uZr6jMergv5rLzTMFqy8PzHgt1LNDd2+aiwHu\nCsbESiSrcrhK416HGEWkgDhyL+q0rupgcCF0GJ5PgENsgStgYv7aPKmJmpEWbOWd\n7sqSeEVrdfKWEx3pDq4YSVZ1XMQ8AbJkFUQKViC9/NHohqpif8CSGUQFHiEAuxwT\n44usYbEsSS2F7LrSpP/OABCOiWsyFcKy7raqKK2JPIHk4Gz17kbIH5JSO4d6G7qy\nz1u9lcWxAgMBAAECggEABGjSQ9zsbqPtbaSdkBBQQGgDt22qDKz55EZ7DS8QlsWt\nHZLqeCce9cpRctMuFyn0g2ExsjjohayUVT/46+0jM52Xd2hMJ5iWLbA5/uWAqWqm\n8NnKuL/Kjr7Xx2TT996LljBICUdhbc2GCK5QBZLcAmqhxaf5QtOVuVPOvYD9K7l8\nDIGkvphBP7maCqbxrJSZ/yqH1n5pBlSZUP/UnPCwsNFcrzmnngVHjw5pMUyNP1e9\n+rmwKP6a+iaYLF8gN7OhRVjuWQq1zgwBXbrktkRmq6kWXUm+PncEvm8oJyQhJk+J\nGXY57hkonXSMpR5moUsO7N5PHrtjmkMLEiycJs0luQKBgQDv+ShDndwuIhkseYjt\nfeS45qPV5oDCCPlODF04Gc3vpt4L3rC1C/C8Ibvl9D7C43KA1QWSMMYk0kwfkrHK\nuwd4vACQAPIox2Bpz2EeMgE2aF45h4xKczXycBiLscgqoYmERfDvSad7f4pn9QXV\nEKOErTjbobHtv82J+0DM90tMaQKBgQDAZBg8sqtCOpEqHrofKpojuDNliWEZmnZi\naWy6lqb/wRwvPBfYczXv1SCAWOXXWFx/TwJz5IDzbqoTGNqruAeXnxsWol4epVgn\nb5+7wZK3BqhO29SuaExzPj9Ldbj/eIip3d8kP0egdKuswIlp/iUef+nuQrL3L1QR\nfRMg+MSmCQKBgQDjnm7NrCeT7q34HJN/yUExDTvsAUayRbbLjDjDpN5MafgGREVS\nhS/kEw9aMBFz5C/Q+b3eC7t2Y67m58sSY9LTd2gFL5CCk5Lk6lrRPFcgF2EAqoys\ndZl/C0qM/qXBohWBTKIbJr7hCnnq32OX1L91cqUS1s2hmKPKNHMjt5FJuQKBgQC1\n/jm7OVyuAs8NZBG2p8s13Oqps0IqQSaZw5a6DwccymVJ/XOlKp8sJ5VeNDn/8rNV\nLr1oOhENtnKmLA23ARgVgsnSKHgWT1zLuVkF+IA8KM0QA/31me4v2gNv84W0DSZi\nYeLS3BV6oMNBYMTcgjBE4MW+wFOhZqEFBicROqJzWQKBgDUS3t408FMJt8kYSsKY\nveRJIoMzf5d5QOCA6P+JDevYoFdtbxuu/6bWONXsgE0DJLj/KEkqJk7WOqwt8w2U\n56+rXG9945YF9E0Db3ppmDQ+l3+Dm58JLX1NmCHitt0KLAgFxQrPKU0GFv/j7Erc\n77GiM9m2x+ZzeAyE2liZHxgo\n-----END PRIVATE KEY-----\n",
    client_email: "tokiomarine-i9vi@appspot.gserviceaccount.com",
    client_id: "103737796822161807337",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/tokiomarine-i9vi%40appspot.gserviceaccount.com",
    universe_domain: "googleapis.com",
}

export async function detectTextIntent(text: string, sec = 'tivakorn17033') {
    const sessionClient = new SessionsClient({
        credentials: {
            private_key: env_google.private_key,
            client_email: env_google.client_email
        }
    });

    const sessionPath = sessionClient.projectAgentSessionPath(
        'tokiomarine-i9vi',
        sec
    );

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: text,
                languageCode: 'th-TH',
            },
        },
    };

    const responses = await sessionClient.detectIntent(request)
    const result = responses[0].queryResult?.fulfillmentText as string

    return result || 'กรุณาลองใหม่อีกครั้ง'
}

// detectIntent().catch(console.error);