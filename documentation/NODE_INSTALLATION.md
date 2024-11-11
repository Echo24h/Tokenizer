## Installation de Node.js avec NVM

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# download and install Node.js (you may need to restart the terminal)
nvm install 22
# verifies the right Node.js version is in the environment
node -v # should print `v22.11.0`
# verifies the right npm version is in the environment
npm -v # should print `10.9.0`
```

Si node et npm ne sont pas dans le bonne version, mettez les a jour :

```shell
nvm install --lts
```

Si NVM ne s'export pas automatiquement, exécutez ceci :

```shell
export NVM_DIR="$HOME/.nvm"                                                    
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

Ajouter ces lignes à votre fichier de configuration de terminal (comme `.bashrc` ou `.zshrc`) chargera automatiquement NVM à chaque session.