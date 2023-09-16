//const { CosmosClient } = require("@azure/cosmos");
import { CosmosClient, PartitionKeyDefinitionVersion, PartitionKeyKind} from "@azure/cosmos";
//https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/cosmosdb/cosmos/README.md

const endpoint = "https://your-account.documents.azure.com";
const key = "<database account masterkey>";
const client = new CosmosClient({ endpoint, key });

const database = async (dbId: string) =>  client.databases.createIfNotExists({ id: dbId});

const  getContainer = async (containerId: string) => {
    const db = await database("truck-repair");
    const containerDefinition = {
        id: "Test Database",
        partitionKey: {
          paths: ["/name", "/address/zip"],
          version: PartitionKeyDefinitionVersion.V2,
          kind: PartitionKeyKind.MultiHash,
        },
      }
    return  await db.database.containers.createIfNotExists({ id: containerId });
    
    } 

const  getItem = async (key: string) => {

    const  container  = await getContainer("vehicle");
   // container.container.items.query
   /**
    * const { resources } = await container.items
  .query("SELECT * from c WHERE c.active = true", {
          partitionKey: ["foo", 100],
        })
  .fetchAll();
for (const item of resources) {
  console.log(`${item.name}, ${item.address.zip} `);
}
    */

/**
 * const partitionKey = "some-partition-Key-value";
const options = {
  changeFeedStartFrom: ChangeFeedStartFrom.Beginning(partitionKey),
};

const iterator = container.items.getChangeFeedIterator(options);

while (iterator.hasMoreResults) {
  const response = await iterator.readNext();
  // process this response
}
 */
} 

export {getItem}