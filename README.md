# <img align="left" width="100" height="100" alt="Pink Crystal Icon" src="https://s3.us-west-2.amazonaws.com/yonatanlaurence.com/crystal-logo-raspberry-cream-2022_07_20.png"> Yonatan Laurence
Website App at www.yonatanlaurence.com

I went from $12/mo to $7/mo and managing almost no infrastructure when moving from AWS EC2 to Heroku. The custom domain required moving from Free to Hobby (hence the $7).

I'm using [Preact](https://github.com/developit/preact-cli), which is a fun lightweight version of react that's almost identical in DSL.

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```


## Deploy to Heroku
Heroku automatically builds master b/c it's connected to Github directly.

```bash
git push origin master
```
