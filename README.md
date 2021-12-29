# ms-ui-template
Micro Server UI Template


# Lancement de l'api mock

```bash
cd api
npm install
npm run dev
...
Server listening on the port::3080
```

# Lancement template

```bash
cd src
npm install
npm run serve
```

# Liste des routes exposés par le mock

## Information concernant l'application

```javascript
app.get('/api/v1/info', (req, res) => {
    const infos = { 
        application : {
            name: "my-application-exemple",
            description: "Application à titre d'exemple pour la mise en place d'une UI standard.",
            version: "0.1.0",
            profile: "dev"
        }
    };
    res.json(infos);
});
```

## Sonde de santé

```javascript
app.get('/api/v1/health', (req, res) => {
    res.json({ status: "UP" });
});
```

## Récupération du menu 

```javascript
app.get('/api/v1/menu', (req, res) => {
    var menu = {}
    fs.readFile('menu.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        res.json(JSON.parse(data));
      })
});
```


# Configuration du proxy Vuejs

vue.config.js :

```javascript
module.exports = {
    devServer: {
      proxy: {
        '/api/v1': {
          target: 'http://localhost:3080/'
        },
        "/actuator": {
          target: 'http://localhost:3080/',
          pathRewrite: {'^/actuator' : '/api/v1'}
        }
      }
    }
  }
```

# Todos

* [] Dynamiser le menu, en utilisant la route **/api/v1/menu**