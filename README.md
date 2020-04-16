## This repository has been archived!

*This IPFS-related repository has been archived, and all issues are therefore frozen*. If you want to ask a question or open/continue a discussion related to this repo, please visit the [official IPFS forums](https://discuss.ipfs.io).

We archive repos for one or more of the following reasons:

- Code or content is unmaintained, and therefore might be broken
- Content is outdated, and therefore may mislead readers
- Code or content evolved into something else and/or has lived on in a different place
- The repository or project is not active in general

Please note that in order to keep the primary IPFS GitHub org tidy, most archived repos are moved into the [ipfs-inactive](https://github.com/ipfs-inactive) org.

If you feel this repo should **not** be archived (or portions of it should be moved to a non-archived repo), please [reach out](https://ipfs.io/help) and let us know. Archiving can always be reversed if needed.

---
   
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