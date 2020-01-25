# Streamer Business Card

A super simple site for Twitch Streamers

## Motivation

I believe an owned web presence is important. But for many live streamers their focus tends to be towards rented presence. So more complicated features, like blogging, are fairly surplus. This means a suitable website has to have a concentrated focus directing visitors to the important places, instead of being a place to visit.

## Features

* Display picture
* List of links
* Stream embed only when live

## Requirements

* [Node JS](https://nodejs.org/en/download/package-manager/)
* [Git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)

## Installation

1. Clone `git clone git@github.com:OiYouYeahYou/Streamer-Business-Card.git`
1. Change Directory `cd Streamer-Business-Card`
1. Install dependencies `npm install`

## Usage

1. Create `config.yaml`
   ```yaml
   # This is the twitch account that will used display player when live
   user: <Twitch user to watch for>
   # The page masthead
   title: <Site Title>
   # API key for talking to twitch
   key: <Twitch API Key>
   # The cache limit 
   limit: 500
   # List of links to link to
   links:
       - platform: <platform name>
         href: <link to site>
       - platform: <platform name>
         href: <link to site>
       - platform: <platform name>
         href: <link to site>
   # URL to site logo
   logo: <Display Picture>
   ```
1. Run application: `npm run start`

## Contributing

Before contributing please open an issue first

## Scripts

* `npm run start` - Start the application 
* `npm run dev` - Run application and automatically reload on file changes
