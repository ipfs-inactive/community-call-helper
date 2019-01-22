# Community Call Helper 🤖 📅 ⚡️

### Purpose:

Organizing community syncs can be tedious! The Community Sprint Helper is a collection of tools that makes it easier to schedule community syncs and to manage community sync notes. 

## Current Feature

* Schedule a Community Sync Up via Github Issues

#### Schedule Community Sync Up Installation

1. `git clone` https://github.com/ipfs/community-call-helper
2. `cd app`
3. `npm install`
4. Go to [Developer Settings](https://github.com/settings/developers) and get your _Personal Access tokens_.
5. Put your token in `config.json`

```
    {
        "token": ""
    }
```
6. Go back to the command line and enter `npm run serve`
7. Access the site via localhost:8080

## Future Features

* Announcement bar on IPFS website _coming soon_

* Make the markdown customizable

* Format notes

* Compatibility with [Peer Pad](https://github.com/ipfs-shipyard/peer-pad)

* Create PR for Community Sync Nots