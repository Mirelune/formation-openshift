# Source du TP 4

Publier ce dossier dans un dépôt Git accessible par le cluster. Exemple de création d'application (si un builder `nodejs:20` est disponible) :

```bash
oc new-app nodejs:20~https://github.com/<organisation>/<depot>.git --name=application-node
oc get buildconfig
oc start-build application-node --follow
```

Le hook post-commit est configuré dans le corrigé formateur. Le dépôt doit contenir `package.json` et `server.js` à sa racine.
