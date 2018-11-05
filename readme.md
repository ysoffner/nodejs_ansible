#### Instale
sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible

sudo apt-get install python-pip python-dev build-essential
sudo pip install --upgrade pip

mkdir projeto
cd projeto
git clone http://projeto
npm init
npm install express --save
npm install express

```
Módulos do Node instalados com a opção --save são incluídas na lista dependencies no arquivo package.json. Posteriormente, executando npm install no diretório app irá automaticamente instalar os módulos na lista de dependências.
```

docker build -f Dockerfile_alp -t alp_node .
docker run -i -t alp_node

#### Referencias
https://github.com/nodesource/distributions/blob/master/README.md
http://expressjs.com/pt-br/starter/installing.html
https://puppet.com/docs/pipelines-for-apps/free/docker-nodejs.html#before-you-begin