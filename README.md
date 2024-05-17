# Base of a Discord Bot

## TODO After Download

### Install Node Packages

```bash
$ npm install
```

### Set Enviroment Variables

path: root/.env

- BOT_TOKEN : Required for any project that uses a Discord Bot.
- DB_USERNAME : Mongo DB authorized account username, required only while using MongoDB.
- DB_PASSWORD : Mongo DB authorized account password, required only while using MongoDB.
- DB_URL : Mongo DB server URL, required only while using MongoDB.

## Example Files

### Events

````javascript
import { Events } from "discord.js"

export default client => {

    client.on(Events.ClientReady, async (cl) => {

        // Your code here

    })

}
````

### Application Commands

#### Slash Command

````javascript
import { SlashCommandBuilder } from "discord.js";

export default {
    data : new SlashCommandBuilder()
    .setName("name")
    .setDescription("desc"),
    execute : async interaction => {

        // Your code here

    }
}
````

#### Context Menu - User
````javascript
import { ApplicationCommandType, ContextMenuCommandBuilder } from "discord.js";

export default {
    data : new ContextMenuCommandBuilder()
    .setName("name")
    .setType(ApplicationCommandType.User),
    execute : async interaction => {

        // Your code here

    }
}
````

#### Context Menu - Message
````javascript
import { ApplicationCommandType, ContextMenuCommandBuilder } from "discord.js";

export default {
    data : new ContextMenuCommandBuilder()
    .setName("name")
    .setType(ApplicationCommandType.Message),
    execute : async interaction => {

        // Your code here

    }
}
````

### Message Components

````javascript
export default {
    customId : "customId",
    execute : async interaction => {

        // Your code here

    }
}
````

### Modal Submits

````javascript
export default {
    customId : "customId",
    execute : async interaction => {

        // Your code here

    }
}
````
