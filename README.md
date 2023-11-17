# User Study Tool for Talking Video Rate

This user study tool is used to rate the generated talking video of score 1-5.

## Requirements:

- Python 3.x
- Node.js

## Preview

![preview](./images/preview.png)


## Where to Put Videos:

- The folder `ALL` should contain all the generated videos.
- The server IP/address should be written in `url` of `function.js`.


## What to Compare:

- Visual Quality
- Lip-Sync Accuracy
- Fluency

You can also edit `index.html` or `index_en.html` to customize the compared items.


## Usage:

- Server: Run `node app.js` to listen the port 9000 about the data of user study results. The results are saved in the file `results.txt`.
- Client: Run `index.html` (Chines) or `index_en.html` (English) to conduct the user study.